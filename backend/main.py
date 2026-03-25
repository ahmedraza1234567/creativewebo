from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from database import collection
import shutil
import os
import base64
import uuid # Unique ID generate karne ke liye
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId
from bson.errors import InvalidId

app = FastAPI()

# 1. Ensure 'uploads' directory exists before mounting
os.makedirs("uploads", exist_ok=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://creativewebo-sigma.vercel.app",
        "https://creativewebo-sigma.vercel.app/",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")


@app.post("/add")
async def add_user(
    name: str = Form(...),
    phone: str = Form(...),
    email: str = Form(...),
    image: UploadFile = File(...)
):
    # Image ko read karke Base64 text me convert karna
    contents = await image.read()
    encoded_image = base64.b64encode(contents).decode("utf-8")
    
    # Image format ke sath Data URL banana (taaki frontend direct dikha sake)
    image_data_url = f"data:{image.content_type};base64,{encoded_image}"

    data = {
        "name": name,
        "phone": phone,
        "email": email,
        "image": image_data_url  # Ab database me path nahi, puri image ka text save hoga
    }

    collection.insert_one(data)
    return {"msg": "User Added with Image in DB"}


@app.get("/users")
def get_users():
    users = []
    for u in collection.find():
        u["_id"] = str(u["_id"])
        users.append(u)
    return users


@app.delete("/delete/{id}")
def delete_user(id: str):
    try:
        user_id = ObjectId(id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid User ID")

    # 3. Pehle user dhundo taaki uski image disk se delete kar sakein
    user = collection.find_one({"_id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # File delete karo agar exist karti hai
    if "image" in user and os.path.exists(user["image"]):
        os.remove(user["image"])

    collection.delete_one({"_id": user_id})
    return {"msg": "Deleted successfully"}


@app.put("/update/{id}")
async def update_user(
    id: str,
    name: str = Form(...),
    phone: str = Form(...),  # Fix: Changed to str to match /add
    email: str = Form(...),
    image: UploadFile = File(None)
):
    
    print("Received update request for ID:", id)
    print("Name:", name)
    print("Phone:", phone)
    print("Email:", email)
    print("Image filename:", image.filename if image else "No image uploaded")
    try:
        user_id = ObjectId(id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid User ID")

    existing_user = collection.find_one({"_id": user_id})
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")

    update_data = {
        "name": name,
        "phone": phone,
        "email": email,
    }

    # Only process uploaded image when provided
    if image is not None:
        contents = await image.read()
        encoded_image = base64.b64encode(contents).decode("utf-8")
        image_data_url = f"data:{image.content_type};base64,{encoded_image}"
        update_data["image"] = image_data_url

    # Agar new image aayi hai to save karo aur purani delete karo
    # if image and image.filename:
    #     # Puraani image delete karo
    #     if "image" in existing_user and os.path.exists(existing_user["image"]):
    #         os.remove(existing_user["image"])
            
    #     # Nayi image unique naam se save karo
    #     ext = image.filename.split(".")[-1]
    #     unique_filename = f"{uuid.uuid4().hex}.{ext}"
    #     file_path = f"uploads/{unique_filename}"
        
    #     with open(file_path, "wb") as buffer:
    #         shutil.copyfileobj(image.file, buffer)
            
    #     update_data["image"] = file_path

    collection.update_one(
        {"_id": user_id},
        {"$set": update_data}
    )

    return {"msg": "User Updated"}

    
@app.get("/user/{id}")
def get_single_user(id: str):
    try:
        user_id = ObjectId(id)
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid User ID")

    user = collection.find_one({"_id": user_id})
    
    # 4. Handle agar user na mile
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
        
    user["_id"] = str(user["_id"])
    user["image"] = user.get("image", "")  # Ensure image key exists

    return user
