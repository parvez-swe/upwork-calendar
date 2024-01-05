import { Link } from "react-router-dom";

export default function Sidebar({ activeNave, setActiveNav }) {
  const sidebarData = [
    {
      title: "",
      href: "/",
      icon: "/icon/Home.png",
    },
    {
      title: "",
      href: "/",
      icon: "/icon/Bus.png",
    },
    {
      title: "",
      href: "/",
      icon: "/icon/MapArrowUp.png",
    },
    {
      title: "",
      href: "/calender",
      icon: "/icon/CalendarSearch.png",
    },
    {
      title: "",
      href: "/",
      icon: "/icon/UserCheckRounded.png",
    },
    {
      title: "",
      href: "/",
      icon: "/icon/Bus.png",
    },
    {
      title: "",
      href: "/",
      icon: "/icon/dollar.png",
    },
    {
      title: "",
      href: "/",
      icon: "/icon/Clipboard.png",
    },
    {
      title: "",
      href: "/",
      icon: "/icon/Settings.png",
    },
  ];

  return (
    <div className="   w-[5vw] h-screen pb-10   overflow-y-autos flex flex-col items-center">
      <img className="px-1" src="/icon/logo.png" alt="logo" />
      <div className="pt-2 flex flex-1 flex-col justify-between">
        <div className="">
          <ul className={`flex flex-col items-center `}>
            {sidebarData.map((data, index) => (
              <li
                className={` p-1 my-1 rounded ${
                  activeNave === data.href && "bg-green-200 "
                } `}
              >
                <Link to={`${data.href}`}>
                  <img className=" " src={`${data.icon}`} alt="nav" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center border-t w-fit ">
            <button
              className={` w-8 h-8  flex items-center justify-center mt-3 my-1 rounded text-white 
        bg-blue-500  
         `}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center flex-col ">
          <button
            className={` p-1 mb-4 flex justify-items-center rounded ${
              activeNave === "/notification" && "bg-green-200 "
            } `}
          >
            <img className=" " src={`/icon/bell.png`} alt="nav" />
          </button>
          <button className=" bg-gray-200 font-bold flex items-center justify-center  w-8 h-8 ">
            AR
          </button>
        </div>
      </div>
    </div>
  );
}
