import {
  Earth,
  LayoutDashboard,
  Map,
  Cpu,
  Sprout,
  Droplets,
  Bell,
  BarChart3,
  HardDrive,
  CloudSun,
  Users,
  Settings,
  Wifi,
  BellRing,
  FileText,
  Clock,
  Toolbox,
  Globe,
  Zap,
  Database,
  Archive,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/dashboard",
    },
    {
      title: "Fields",
      icon: <Map />,
      path: "/fields",
    },
    {
      title: "Sensors",
      icon: <Cpu />,
      path: "/sensors",
    },
    {
      title: "Crops",
      icon: <Sprout />,
      path: "/crops",
    },
    {
      title: "Irrigation System",
      icon: <Droplets />,
      path: "/irrigation",
    },
    {
      title: "Alerts & Notifications",
      icon: <Bell />,
      path: "/alerts",
    },
    {
      title: "Analytics & Reports",
      icon: <BarChart3 />,
      path: "/analytics",
    },
    {
      title: "Devices Management",
      icon: <HardDrive />,
      path: "/devices",
    },
    {
      title: "Weather Integration",
      icon: <CloudSun />,
      path: "/weather",
    },
    {
      title: "Users & Roles",
      icon: <Users />,
      path: "/users",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/settings",
    },
    {
    title: "Farm History",
    icon: <Archive/>,
    path: "/farm-history",
  },
  {
    title: "Data Logs",
    icon: <Database/>,
    path: "/data-logs",
  },
  {
    title: "Device Status",
    icon: <Cpu/>,
    path: "/device-status",
  },
  {
    title: "Automation Rules",
    icon: <Zap/>,
    path: "/automation",
  },
  {
    title: "Global Farms",
    icon: <Globe/>,
    path: "/global-farms",
  },
  {
    title: "Tools & Equipment",
    icon: <Toolbox/>,
    path: "/tools",
  },
  {
    title: "Schedules",
    icon: <Clock/>,
    path: "/schedules",
  },
  {
    title: "Reports & Files",
    icon: <FileText/>,
    path: "/reports-files",
  },
  {
    title: "Critical Alerts",
    icon: <BellRing/>,
    path: "/critical-alerts",
  },
  {
    title: "Network & Connectivity",
    icon: <Wifi/>,
    path: "/network",
  },
  ];

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex items-center gap-2 justify-center text-xl font-semibold bg-gray-900  py-4">
        <Earth className="text-green-500" />
        <h1>
          Green <span className="text-green-500">Monitoring</span>
        </h1>
      </div>

      <div className="px-6 py-4">
        {sidebarItems.map((item, index) => (
          <div className="py-2 font-semibold" key={index}>
            <div className={`hover:bg-gray-800 hover:text-green-500 transition duration-300 px-4 py-2 rounded-md`}>
              <Link to={item.path} className="flex items-center gap-3">
                {item.icon}
                {item.title}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pb-4 text-xs">
        <p>
          Created by: <span className="font-medium">Izzatbek Abdusharipov</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
