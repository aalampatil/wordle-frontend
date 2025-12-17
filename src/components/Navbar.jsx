import { GiHamburgerMenu } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import ToggleThemeBtn from "./ToggleThemeBtn/ToggleThemeBtn";
import { useEffect, useState } from "react";

function Navbar() {
  const [showSideNav, setShowSideNav] = useState(false);
  useEffect(() => {
    console.log(showSideNav);
  }, [showSideNav]);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full h-14 px-4 border-b border-neutral-600 text-white bg-black">
      <button
        onClick={() => setShowSideNav((prev) => !prev)}
        className="flex items-center text-xl relative"
      >
        {showSideNav ? <IoClose /> : <GiHamburgerMenu />}
        {showSideNav && (
          <div className="absolute top-5 left-0 h-fit w-[250px] bg-white text-black border-2 flex flex-col dark:bg-black dark:text-white z-[9999] rounded-md">
            <p className="w-full justify-start text-start p-2">Account</p>
            <p className="w-full justify-start text-start p-2">Friends</p>
            <p className="w-full justify-start text-start p-2">Play with friends</p>
            <p className="w-full justify-start text-start p-2">Modes</p>
            <p className="w-full justify-start text-start p-2">How to Play</p>
            <p className="w-full justify-start text-start p-2">More</p>
          </div>
        )}
      </button>

      <div className="flex items-center gap-6">
        <ToggleThemeBtn />
        <p className="text-2xl">
          <FaLightbulb />
        </p>
        <p className="text-2xl">
          <MdLeaderboard />
        </p>
        <p className="text-2xl">
          <FaGear />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
