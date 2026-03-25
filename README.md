# 🚀 User Management System (Full-Stack)

A modern, fast, and fully responsive User Management System built with **React (Vite)**, **FastAPI**, and **MongoDB**. It allows users to Add, View, Update, and Delete user records along with profile images (stored natively in Base64 format).

---

## ⚙️ Local Setup Instructions

Follow these easy steps to get the project up and running on your local machine.

### Prerequisites
Make sure you have the following installed on your system:
* [Node.js](https://nodejs.org/) (for frontend)
* [Python 3.8+](https://www.python.org/) (for backend)
* MongoDB (Local installation or a MongoDB Atlas URI)

### 1️⃣ Backend Setup (FastAPI)
Open your terminal and navigate to the backend folder:
```bash
cd backend
```
Create a virtual environment (recommended to keep things clean):

```Bash
# For Windows
python -m venv venv
venv\Scripts\activate
```
```Bash
# For Mac/Linux
python3 -m venv venv
source venv/bin/activate
Install the required Python dependencies:
```
```Bash
pip install -r requirements.txt
Run the FastAPI development server:
```
```Bash
uvicorn main:app --reload
The backend server will now run at: http://127.0.0.1:8000
```
2️⃣ Frontend Setup (React/Vite)
Open a new terminal window and navigate to the frontend folder:

```Bash
cd frontend
Install Node modules/dependencies:
```
```Bash
npm install
Start the Vite development server:
```
```Bash
npm run dev
The frontend will now run at: http://localhost:5173
```
📂 Folder Structure
Here is how the project is organized:

```Plaintext
📦 User-Manager-Pro
 ┣ 📂 backend
 ┃ ┣ 📜 main.py          # FastAPI application & endpoints
 ┃ ┣ 📜 database.py      # MongoDB connection configuration
 ┃ ┣ 📜 models.py        # Database schemas and models
 ┃ ┗ 📜 requirements.txt # Python dependencies
 ┣ 📂 frontend
 ┃ ┣ 📂 public           # Static assets
 ┃ ┣ 📂 src              
 ┃ ┃ ┣ 📂 components     # Reusable React components (Navbar, etc.)
 ┃ ┃ ┣ 📂 pages          # Main views (AddData, ShowData, EditData)
 ┃ ┃ ┣ 📜 App.jsx        # App routing
 ┃ ┃ ┣ 📜 main.jsx       # React entry point
 ┃ ┃ ┗ 📜 index.css      # Tailwind & Custom CSS
 ┃ ┣ 📜 package.json     # Node dependencies and scripts
 ┃ ┗ 📜 vite.config.js   # Vite configuration
 ┣ 📜 .gitignore         # Ignored files for Git (node_modules, __pycache__, etc.)
 ┗ 📜 README.md          # Project documentation
```
✨ Features
Create: Add new users with their details and upload a profile picture.

Read: View all users in a beautifully styled, animated UI.

Update: Edit existing user details easily.

Delete: Remove a user with an interactive confirmation prompt.

Image Handling: Images are converted to Base64 and stored directly in MongoDB (No external file storage needed).

Responsive Design: Fully responsive UI built with Tailwind CSS.

🛠️ Tech Stack
Frontend: React.js (Vite), Tailwind CSS, Axios, React Router DOM

Backend: Python, FastAPI, Uvicorn, Pymongo

Database: MongoDB (Local / Atlas)

🎯 API Endpoints Overview
POST /add - Add a new user with Base64 image

GET /users - Fetch all users

PUT /update/{id} - Update user details

DELETE /delete/{id} - Delete a user


Bas isko chhap do bhai, aapki profile pe ekdum pro level ka lagega! Agar aage deployment (project live karna) sikhna ho toh bata dena.
