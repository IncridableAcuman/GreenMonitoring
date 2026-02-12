import { Earth } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      
      <div className="flex items-center gap-2 justify-center text-xl font-semibold bg-gray-900 py-4">
        <Earth />
        <h1>Green Monitoring</h1>
      </div>

      <div className="text-center pb-4 text-xs">
        <p>
          Created by: <span className="font-medium">Izzatbek Abdusharipov</span>
        </p>
      </div>

    </div>
  )
}

export default Sidebar
