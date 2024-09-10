import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className="py-3 px-6 flex justify-between mb-12 sticky">
      <div className="font-cal text-2xl">DailyNest</div>
      <div>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default NavBar;
