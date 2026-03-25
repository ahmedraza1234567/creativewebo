import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const nav = useNavigate()
  
  // NAYA LOGIC YAHAN SE SHURU HAI
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check local storage so theme persists after refresh
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    }
  }
  // NAYA LOGIC YAHAN KHATAM HAI

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg px-4 sm:px-8 py-4 flex justify-between items-center transition-all duration-300">

      {/* CLICKABLE LOGO */}
      <h1 
        onClick={() => nav("/")}
        className="cursor-pointer text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400 drop-shadow-sm hover:scale-105 transition-transform duration-300"
      >
        creativewebo
      </h1>

      {/* RIGHT SIDE ACTIONS */}
      <div className="flex items-center gap-3 sm:gap-5">

        {/* ADD USER BUTTON */}
        <button
          onClick={() => nav("/add")}
          className="flex items-center gap-2 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          <span className="text-lg leading-none">+</span>
          <span className="hidden sm:inline">Add User</span>
        </button>

      </div>

    </nav>
  )
}

export default Navbar