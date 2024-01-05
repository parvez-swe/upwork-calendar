import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import DataTable from "../../components/DataTable";
import CalenderComponent from "../../components/CalenderComponent";

const Calender = () => {
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [tripStatus, setTripStatus] = useState(true);
  const [complete, setComplete] = useState(true);
  const [upcoming, setUpcoming] = useState(true);
  const [inProgress, setInProgress] = useState(true);
  const [canceled, setCanceled] = useState(true);
  const [accounts, setAccounts] = useState(false);

  const driverOptions = ["Driver 1", "Driver 2", "Driver 3"];
  const clientOptions = ["Client A", "Client B", "Client C"];
  const accountOptions = ["Account 1", "Account 2", "Account 3"];

  return (
    <div className="flex flex-row h-[92vh]  overflow-hidden">
      {/* Side bar */}
      <div className="flex  flex-col items-center w-[17vw] h-full border-r px-4 ">
        <>
          <CalenderComponent />
        </>
        <div className="flex items-center mt-5 ">
          <button className=" -mr-6 z-20">
            <img className="" src="/icon/Magnifer.png" alt="" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className=" z-10 w-48  border border-gray-300 pl-7 pr-1 py-1 rounded focus:outline-none "
          />
        </div>

        <button
          onClick={() => setTripStatus(!tripStatus)}
          className=" flex flex-row justify-between w-full my-3 font-semibold"
        >
          <span>Trip Status</span>
          <span>
            <img
              className={`${!tripStatus ? " rotate-180" : ""}`}
              src="/icon/ArrowUp.png"
              alt="arrow up"
            />
          </span>
        </button>

        {tripStatus && (
          <div className="flex flex-col justify-start  [&>*]:my-1">
            <div className="flex items-center space-x-4 w-48">
              <input
                type="checkbox"
                id="complete"
                checked={complete}
                onChange={() => setComplete(!complete)}
                className="form-checkbox h-5 w-5 text-green-500"
              />
              <label
                className="bg-[#A6D092] text-[#547544] px-2 border border-gray-300 rounded flex items-center "
                htmlFor="complete"
              >
                <span>
                  <GoDotFill className=" inline-block pr-2 text-xl" />
                </span>
                Complete
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="upcoming"
                checked={upcoming}
                onChange={() => setUpcoming(!upcoming)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label
                htmlFor="upcoming"
                className="bg-[#FFFACC] text-[#726D41] px-2 border border-gray-300 rounded  flex items-center "
              >
                <span>
                  <GoDotFill className=" inline-block pr-2 text-xl" />
                </span>
                Upcoming
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="inProgress"
                checked={inProgress}
                onChange={() => setInProgress(!inProgress)}
                className="form-checkbox h-5 w-5 text-yellow-500"
              />
              <label
                htmlFor="inProgress"
                className="bg-[#FFE6C8] text-[#825D30] px-2 border border-gray-300 rounded  flex items-center "
              >
                <span>
                  <GoDotFill className=" inline-block pr-2 text-xl" />
                </span>
                In Progress
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="canceled"
                checked={canceled}
                onChange={() => setCanceled(!canceled)}
                className="form-checkbox h-5 w-5 text-red-500"
              />
              <label
                htmlFor="canceled"
                className="bg-[#FFDADA] text-[#843838] px-2 border border-gray-300 rounded  flex items-center "
              >
                <span>
                  <GoDotFill className=" inline-block pr-2 text-xl" />
                </span>
                Canceled
              </label>
            </div>
          </div>
        )}

        <button
          onClick={() => setAccounts(!accounts)}
          className=" flex flex-row justify-between w-full my-3 font-semibold"
        >
          <span>Accounts</span>
          <span>
            <img
              className={`${!accounts ? " rotate-180" : ""}`}
              src="/icon/ArrowUp.png"
              alt="arrow up"
            />
          </span>
        </button>
      </div>
      {/* main */}
      <div className=" w-[78vw] flex-1 p-[0.5vw] ">
        {/* header */}
        <div className=" flex flex-row justify-between items-center my-2 ">
          {/* back */}
          <div className=" flex flex-row items-center text-xl font-bold">
            <button className=" border rounded h-8 px-1 mr-2 ">
              <img src="/icon/ArrowRight.png" alt="" />
            </button>
            <div className=" flex flex-row items-center ">
              <span className=" ">Trips:</span>
              <span className=" text-gray1">16 Oct, 2023</span>
            </div>
          </div>

          {/* selector */}
          <div className="flex flex-row  items-center [&>*]:ml-5">
            {/* Driver Selector */}
            <div className="flex flex-row items-center">
              <img className="-mr-7 z-20" src="/icon/UserId.png" alt="icon" />
              <select
                id="driverDropdown"
                className="z-10 pl-8 outline-none border rounded h-8 "
                value={selectedDriver}
                onChange={(e) => setSelectedDriver(e.target.value)}
              >
                <option className=" font-semibold" value="">
                  Driver
                </option>
                {driverOptions.map((driver, index) => (
                  <option key={index} value={driver}>
                    {driver}
                  </option>
                ))}
              </select>
            </div>

            {/* Client Selector */}
            <div className="flex flex-row items-center">
              <img
                className="-mr-8 z-20"
                src="/icon/UserRounded.png"
                alt="icon"
              />
              <select
                id="clientDropdown"
                className="z-10 pl-8 outline-none border rounded h-8 "
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
              >
                <option className=" font-semibold" value="">
                  Client
                </option>
                {clientOptions.map((client, index) => (
                  <option key={index} value={client}>
                    {client}
                  </option>
                ))}
              </select>
            </div>

            {/* Account Selector */}
            <div className="flex flex-row items-center">
              <img
                className="-mr-7 z-20"
                src="/icon/UserCircle.png"
                alt="icon"
              />
              <select
                id="accountDropdown"
                className="z-10 pl-8 outline-none border rounded h-8 "
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
              >
                <option className=" font-semibold" value="">
                  Account
                </option>
                {accountOptions.map((account, index) => (
                  <option key={index} value={account}>
                    {account}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Table */}

        <DataTable />
      </div>
    </div>
  );
};

export default Calender;
