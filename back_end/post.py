from dataclasses import dataclass, field, asdict
from datetime import datetime

############################
#### Post Content Class ####
############################

@dataclass
class Post():
    author: str 
    _id: str = field(default_factory=str)
    title: str = field(default_factory=str)
    content: str = field(default_factory=str)
    date_posted: datetime = field(default_factory=datetime)
    likes: int = field(default_factory=int)

    @classmethod
    def deserialize(cls, post):
        return Post(_id = str(post["_id"]),
                    author=post["author"],
                    title=post["title"],
                    content=post["content"],
                    date_posted=post["date_posted"],
                    likes = post["likes"]) 