# from pymongo import MongoClient

# client = MongoClient("mongodb://localhost:27017/")
# db = client["taskdb"]
# collection = db["users"]



from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://raza10541054:Password%40hmed1054@creativewebotest.tjufzxw.mongodb.net/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    db = client["taskdb"]
    collection = db["users"]
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
