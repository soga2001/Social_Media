from logging import NullHandler
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from dataclasses import dataclass, field, asdict
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_praetorian import Praetorian, auth_required, current_user

#create the app
app = Flask(__name__)
bcrypt = Bcrypt(app)
guard = Praetorian()
CORS(app)

app.config["SECRET_KEY"] = "supo5458"
app.config["JWT_ACCESS_LIFESPAN"] = {"hours": 4}
app.config["JWT_REFRESH_LIFESPAN"] = {"days": 30}

app.config["MONGO_URI"] = "mongodb://localhost:27017/test_database"
# using local reference
mongo = PyMongo(app)
app.debug = True

############################


@dataclass
class User:
    _id: str = field(default_factory=str)
    email: str = field(default_factory=str)
    username: str = field(default_factory=str)
    password: str = field(default_factory=str)
    rolenames: list = field(default_factory=lambda: [])

    @property
    def identity(self):
        return self._id

    

    @classmethod
    def lookup(cls, username):
        user = mongo.db.users.find_one({"username": username})
        return User.deserialize(user)

    @classmethod
    def identify(cls, _id):
        # print("identify", id)
        # return cls.query.get(id)
        return mongo.db.users.find_one({"_id": _id})

    @classmethod
    def deserialize(cls, user):
        return User(_id=str(user["_id"]),
                    username=user["username"],
                    password=user["hashed_password"])

    def to_dict(self):
        user = asdict(self)
        del user["password"]
        return user



##############################

guard.init_app(app, User)

# connecting to mongo running on the computer


@app.route("/")
def home():
    return "Hello this is a home page"


@app.route("/users", methods=['GET'])
def get_users():
    return jsonify(
        [User.deserialize(x).to_dict() for x in mongo.db.users.find()])


#email, username, password
# @app.route("/users", methods=['POST'])
def post_user(email, username, password):
    email = request.json["email"]
    username = request.json["username"]
    password = request.json["password"]
    
    hashed_password = guard.hash_password(password)

    
    # phone = request.json["phone"]
    mongo.db.users.insert_one({
        "email": email,
        "username": username,
        "hashed_password": hashed_password
    })
    
    new_user = User.deserialize(mongo.db.users.find_one({"email": email}))
    
    return jsonify(new_user.to_dict())


@app.route("/users/<user_id>", methods=['GET'])
def get_user_by_id(user_id):
    user = User.deserialize(mongo.db.users.find_one({"_id":
                                                     ObjectId(user_id)}))
    return jsonify(user.to_dict())


@app.route("/users/<user_id>", methods=['DELETE'])
def remove_user_by_id(user_id):
    remove_user = User.deserialize(
        mongo.db.users.find_one_and_delete({"_id": ObjectId(user_id)}))
    return jsonify(remove_user.to_dict())

@app.route("/users/<user_id>", methods=['PUT'])
def update_user_by_id(user_id):
    data = request.json
    user = User.deserialize(data)
    update_user = User.deserialize(
        mongo.db.users.find_one_and_update({"_id": ObjectId(user_id)},
                                           {"$set": user}))
    return jsonify(update_user.to_dict())


@app.route("/login", methods=['POST'])
def login():
    req = request.get_json(force=True)
    username = req.get("username", None)
    password = req.get("password", None)
    user = guard.authenticate(username, password)
    token = guard.encode_jwt_token(user)
    return jsonify({"access_token": token})


@app.route("/register", methods=['POST'])
def register():
    try:
        email = request.json["email"]
        username = request.json["username"]
        password = request.json["password"]
        if(email and username and password):
            post_user(email, username, password)
            return jsonify({"success": True})
    except:
        return jsonify("Please don't leave anything empty")
    


#Run the example
if __name__ == "__main__":
    app.run(debug=True)