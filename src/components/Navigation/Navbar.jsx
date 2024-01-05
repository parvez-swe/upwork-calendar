import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [activeNave, setActiveNav] = useState("/calender");

  return (
    <>
      <nav className="fixed flex flex-row  border-b bg-white left-[5vw] top-0 h-[8vh] right-0  2xl:p-7 z-[200] ">
        {activeNave === "/calender" && (
          <div className=" w-[17vw] border-r mr-4 px-[1vw] flex items-center ">
            <h1 className=" text-xl font-bold">Calendar</h1>
          </div>
        )}
        <div className="px-4  flex-1 flex flow-row justify-between">
          <div className="flex items-center">
            <button className="text-gray-300 -mr-6 z-20">
              <img src="/icon/Magnifer.png" alt="" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className=" z-10 border border-gray-300 pl-7 pr-1 py-1 rounded focus:outline-none "
            />
          </div>

          <div className=" flex flex-row items-center">
            <button className="border h-10 mr-2    px-4 py-2 rounded flex items-center">
              <img className="mr-2" src="/icon/Tuning.png" alt="tunning" />
              Filter
            </button>
            <button className="border h-10 px-4 py-2 rounded flex items-center">
              <img className="mr-2" src="/icon/Maximize.png" alt="tunning" />
            </button>
          </div>
        </div>
      </nav>
      <aside
        className={` fixed left-0 bg-white top-0  w-[5vw]  z-[201] sm:flex flex-col    items-center justify-center py-2 border-r`}
      >
        <Sidebar activeNave={activeNave} setActiveNav={setActiveNav} />
      </aside>
    </>
  );
}
export default Navbar;
