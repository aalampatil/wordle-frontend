import { GiHamburgerMenu } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
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

  const sideNavOptions = [
    "Account",
    "Friends",
    "Play with frineds",
    "Modes",
    "How to Play ?",
    "More",
  ];

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full h-14 px-4 border-neutral-600 text-white bg-black">
      <button
        onClick={() => setShowSideNav(true)}
        className="flex items-center text-xl"
      >
        <GiHamburgerMenu />
      </button>
      {showSideNav && (
        <div
          className={`absolute top-0 left-0 h-fit w-[250px] bg-white text-black flex flex-col dark:bg-black dark:text-white z-[9999]`}
        >
          <div className="flex items-center justify-start m-2 p-2 border w-fit">
            <button onClick={() => setShowSideNav(false)}>
              <IoClose />
            </button>
          </div>
          {sideNavOptions.map((option, i) => (
            <p key={i} className="w-full justify-start text-start p-2 border-b">
              {option}
            </p>
          ))}
        </div>
      )}

      <div className="flex items-center gap-6">
        <ToggleThemeBtn />
        <p className="text-2xl">
          <FaLightbulb color="yellow" />
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
