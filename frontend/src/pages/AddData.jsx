import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"

function AddPage() {
  const nav = useNavigate()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    image: null
  })

  const [error, setError] = useState("")
  const [preview, setPreview] = useState(null)

  const handlePhone = (e) => {
    const value = e.target.value
    // allow only digits
    if (/^\d*$/.test(value)) {
      setForm({ ...form, phone: value })
    }
  }

  const handleImage = (e) => {
    const file = e.target.files[0] 

    if (!file) return

    setForm({ ...form, image: file })
    setPreview(URL.createObjectURL(file))
  }

  const validate = () => {
    if (!form.name.trim()) {
      return "Please enter a name"
    }
    if (!form.phone.trim()) {
      return "Please enter a phone number"
    }
    if (form.phone.length < 10) {
      return "Phone number must be 10 digits"
    }
    if (!form.email.trim()) {
      return "Please enter an email"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      return "Invalid email format"
    }
    if (!form.image) {
      return "Please upload an image"
    }
    return null
  }

  
  const submitUser = () => {
    const validationError = validate()

    if (validationError) {
      setError(validationError)
      return
    }

    setError("")

  
    const data = new FormData()
    data.append("name", form.name)
    data.append("phone", form.phone)
    data.append("email", form.email)
    data.append("image", form.image)

    axios.post("http://127.0.0.1:8000/add", data) 
      .then((res) => {
      
        window.alert("User saved successfully! ");
        
      
        nav("/"); 
      })
      .catch((err) => {
        window.alert("Error! User save nahi hua.");
        console.log(err);
      });
  }
 

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden font-sans selection:bg-pink-500 selection:text-white">
      

      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .stagger-1 { animation: slideUp 0.5s ease-out 0.1s forwards; opacity: 0; }
          .stagger-2 { animation: slideUp 0.5s ease-out 0.2s forwards; opacity: 0; }
          .stagger-3 { animation: slideUp 0.5s ease-out 0.3s forwards; opacity: 0; }
          .stagger-4 { animation: slideUp 0.5s ease-out 0.4s forwards; opacity: 0; }
          .stagger-5 { animation: slideUp 0.5s ease-out 0.5s forwards; opacity: 0; }
        `}
      </style>

   
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>


      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-md mx-auto mt-12 mb-10 p-8 rounded-4xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] stagger-1">
        
        <button
          onClick={() => nav("/")}
          className="group mb-6 flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300 inline-block mr-2">
            ←
          </span> 
          Back
        </button>

        <h2 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400 drop-shadow-sm">
          Add New Member
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-xl mb-6 text-sm font-medium flex items-center animate-[pulse_0.3s_ease-in-out] shadow-inner">
            <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            placeholder="Enter Name"
            className="stagger-2 w-full p-4 border border-white/10 rounded-2xl bg-white/5 text-white placeholder-gray-400 focus:bg-white/10 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 outline-none shadow-inner"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Enter Phone"
            value={form.phone}
            className="stagger-3 w-full p-4 border border-white/10 rounded-2xl bg-white/5 text-white placeholder-gray-400 focus:bg-white/10 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none shadow-inner"
            onChange={handlePhone}
          />

          <input
            placeholder="Enter Email"
            className="stagger-4 w-full p-4 border border-white/10 rounded-2xl bg-white/5 text-white placeholder-gray-400 focus:bg-white/10 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 outline-none shadow-inner"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <label className="stagger-5 group block border-2 border-dashed border-white/20 hover:border-pink-400 bg-white/5 hover:bg-white/10 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 mt-2">
            {preview ? (
              <img 
                src={preview} 
                className="w-32 h-32 object-cover mx-auto rounded-xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 border border-white/20"
                alt="Preview"
              />
            ) : (
              <div className="space-y-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-pink-400 transition-colors duration-300 drop-shadow-md" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-gray-300 font-medium group-hover:text-white transition-colors">Click to upload image</p>
                <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            )}
            <input type="file" className="hidden" onChange={handleImage} />
          </label>
        </div>

        <button
          onClick={submitUser}
          className="stagger-5 w-full py-4 mt-8 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-lg rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:-translate-y-1 active:scale-95 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddPage