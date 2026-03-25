from pydantic import BaseModel

class User(BaseModel):
    name: str
    phone: int
    email: str
    image: str