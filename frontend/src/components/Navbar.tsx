import { Bell, CheckCheck, Menu, Search, UserCircle } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 bg-gray-950 p-3">
      <div className="">
        <Menu/>
      </div>
      <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 p-2 w-full 
      max-w-2xl rounded-full">
        <Search/>
        <input type="text" name="search" id="search" placeholder="Search" className="outline-none w-full bg-transparent" />
      </div>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <button>🇺🇿</button>
        <CheckCheck/>
        <Bell/>
        <UserCircle  />
      </div>
    </div>
  )
}

export default Navbar