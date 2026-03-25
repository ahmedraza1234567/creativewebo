# 🚀 User Management System (Full Stack)

A modern and responsive **User Management System** built using **React (Vite)**, **FastAPI**, and **MongoDB**.
This application allows users to **Create, Read, Update, and Delete (CRUD)** user records along with profile images.

Images are stored directly in the database using **Base64 encoding**, making the project simple to deploy without external storage configuration.

---

## ✨ Features

* ✅ Add new users with profile image
* ✅ View all users in a clean modern UI
* ✅ Update user details and change profile image
* ✅ Delete users with confirmation
* ✅ Field validation (Phone number, Email format, Required inputs)
* ✅ Image preview before upload
* ✅ Responsive UI using Tailwind CSS
* ✅ Full CRUD REST API using FastAPI
* ✅ MongoDB database integration

---

## 🛠️ Tech Stack

**Frontend**

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM

**Backend**

* Python
* FastAPI
* Uvicorn
* PyMongo
* Python-Multipart

**Database**

* MongoDB (Local or Atlas)

---

## 📂 Project Folder Structure

```
User-Management-System
│
├── backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Local Project Setup

### 🔹 Step 1 — Clone Repository

```
git clone https://github.com/ahmedraza1234567/creativewebo.git
cd user-management-system
```

---

## 🧠 Backend Setup (FastAPI)

### 🔹 Step 2 — Navigate to backend

```
cd backend
```

### 🔹 Step 3 — Create Virtual Environment

**Windows**

```
python -m venv venv
venv\Scripts\activate
```

**Mac / Linux**

```
python3 -m venv venv
source venv/bin/activate
```

### 🔹 Step 4 — Install Dependencies

```
pip install -r requirements.txt
```

### 🔹 Step 5 — Start Backend Server

```
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

## 🎨 Frontend Setup (React + Vite)

Open **new terminal**

### 🔹 Step 6 — Navigate to frontend

```
cd frontend
```

### 🔹 Step 7 — Install Node Modules

```
npm install
```

### 🔹 Step 8 — Start Frontend Server

```
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🎯 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| POST   | `/add`         | Add new user    |
| GET    | `/users`       | Get all users   |
| GET    | `/user/{id}`   | Get single user |
| PUT    | `/update/{id}` | Update user     |
| DELETE | `/delete/{id}` | Delete user     |

---

## 🖼️ Image Handling Strategy

* Images are converted into **Base64 strings**
* Stored directly inside MongoDB
* No external file storage required
* Simple deployment architecture

---

## 🚀 Future Improvements

* Authentication (JWT Login System)
* Pagination & Search
* Toast Notifications
* Cloud Image Storage (AWS S3 / Cloudinary)
* Docker Deployment
* Role Based Admin Panel

---

## 👨‍💻 Author

**Ahmed Raza Shaikh**
M.Sc Computer Science Student
Full Stack Developer (React + FastAPI)

---

⭐ If you like this project, give it a **star on GitHub**
