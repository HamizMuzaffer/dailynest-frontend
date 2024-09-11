import { Button } from "../ui/button";
import  { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="py-3 px-6 flex justify-between items-center bg-white shadow-md sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src="./dailyNest.png" className="w-12 h-12 object-contain" alt="DailyNest Logo" />
        <span className="font-cal text-2xl text-base">DailyNest</span>
      </div>

      {/* Login Button */}
      <div>
        <Link to="/auth/login">
        <Button className="bg-base px-4 py-2 rounded-md text-white hover:bg-indigo-400">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
