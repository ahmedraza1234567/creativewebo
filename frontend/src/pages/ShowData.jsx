import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"

function ListPage() {
  const nav = useNavigate()
  const [users, setUsers] = useState([])

  const loadUsers = () => {
    axios.get("https://creativewebo.onrender.com/users")
      .then(res => setUsers(res.data))
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const deleteUser = (id) => {
    axios.delete(`https://creativewebo.onrender.com/delete/${id}`)
      .then(() => loadUsers())
  }

  console.log("Loaded users:", users)
  

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden font-sans selection:bg-pink-500 selection:text-white">
      
      {/* --- CUSTOM ANIMATIONS --- */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
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
        `}
      </style>

      {/* --- ANIMATED BACKGROUND SHAPES --- */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto mt-12 mb-16 px-4 space-y-6">
        
        

        {
          users.map((user, index) => (
            <div 
              key={user._id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col sm:flex-row items-center gap-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(236,72,153,0.2)] animate-[slideUp_0.5s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${0.2 + (index * 0.1)}s` }} // Creates a staggered list reveal effect
            >

              {/* User Image */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <img
                  src={user.image}
                  className="relative w-24 h-24 rounded-2xl object-cover border border-white/20 shadow-inner"
                  alt={user.name}
                />
              </div>

              {/* User Details */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-2xl font-bold text-white tracking-wide">{user.name}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-gray-400 text-sm font-medium flex items-center justify-center sm:justify-start">
                    <span className="mr-2">📞</span> {user.phone}
                  </p>
                  <p className="text-gray-400 text-sm font-medium flex items-center justify-center sm:justify-start">
                    <span className="mr-2">✉️</span> {user.email}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => nav(`/edit/${user._id}`)} 
                  className="flex-1 sm:flex-none bg-linear-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/40 hover:to-cyan-500/40 text-blue-300 border border-blue-500/30 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Edit
                </button>

                <button 
  onClick={() => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (isConfirmed) {
      deleteUser(user._id);
    }
  }}
  className="flex-1 sm:flex-none bg-linear-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/40 hover:to-pink-500/40 text-red-300 border border-red-500/30 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
>
  Delete
</button>
              </div>

            </div>
          ))
        }

        

      </div>

    </div>
  )
}

export default ListPage
