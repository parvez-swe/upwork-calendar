import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
const data = [
  {
    accountName: "Parvez Musharaf Healthcare Innovations LLC",
    patientName: { firstName: "Sophia", lastName: "Turner" },
    driver: { firstName: "Ethan", lastName: "Miller" },
    status: "Completed",
    pickAddress: "123 Elm Street",
    dropAddress: "456 Oak Avenue",
    pickupTime: "08:30 AM",
    dropTime: "10:45 AM",
    appointmentTime: "02:00 PM",
    miles: 18,
    vehicleType: "Car",
  },
  {
    accountName: "Wellness Partners Inc.",
    patientName: { firstName: "Liam", lastName: "Baker" },
    driver: { firstName: "Ava", lastName: "Turner" },
    status: "Upcoming",
    pickAddress: "789 Cedar Road",
    dropAddress: "101 Pine Lane, Suite 300",
    pickupTime: "11:00 AM",
    dropTime: "01:30 PM",
    appointmentTime: "04:15 PM",
    miles: 25,
    vehicleType: "Van",
  },
  {
    accountName: "City Health Solutions",
    patientName: { firstName: "Noah", lastName: "Hill" },
    driver: { firstName: "Grace", lastName: "Jackson" },
    status: "In Progress",
    pickAddress: "444 Maple Avenue",
    dropAddress: "555 Pine Lane",
    pickupTime: "09:45 AM",
    dropTime: "12:15 PM",
    appointmentTime: "03:30 PM",
    miles: 22,
    vehicleType: "Car",
  },
  {
    accountName: "ABC Healthcare Services",
    patientName: { firstName: "Olivia", lastName: "Brown" },
    driver: { firstName: "David", lastName: "Smith" },
    status: "Canceled",
    pickAddress: "666 Birch Lane",
    dropAddress: "777 Oak Street",
    pickupTime: "10:30 AM",
    dropTime: "01:00 PM",
    appointmentTime: "04:45 PM",
    miles: 30,
    vehicleType: "Van",
  },
  {
    accountName: "Global Health Solutions",
    patientName: { firstName: "Ava", lastName: "Wilson" },
    driver: { firstName: "Liam", lastName: "Anderson" },
    status: "Completed",
    pickAddress: "888 Elm Road",
    dropAddress: "999 Cedar Street",
    pickupTime: "08:00 AM",
    dropTime: "10:30 AM",
    appointmentTime: "02:15 PM",
    miles: 28,
    vehicleType: "Car",
  },
  {
    accountName: "Farjana Yesmin Medical Center",
    patientName: { firstName: "Michael", lastName: "Jones" },
    driver: { firstName: "Sophie", lastName: "Miller" },
    status: "Upcoming",
    pickAddress: "111 Pine Road",
    dropAddress: "222 Oak Avenue",
    pickupTime: "11:15 AM",
    dropTime: "01:45 PM",
    appointmentTime: "04:30 PM",
    miles: 35,
    vehicleType: "Van",
  },
  {
    accountName: "Metro Health Systems",
    patientName: { firstName: "Isabella", lastName: "Collins" },
    driver: { firstName: "Oliver", lastName: "Smith" },
    status: "In Progress",
    pickAddress: "333 Birch Lane",
    dropAddress: "444 Maple Street",
    pickupTime: "09:30 AM",
    dropTime: "12:00 PM",
    appointmentTime: "03:15 PM",
    miles: 18,
    vehicleType: "Car",
  },
  {
    accountName: "CareFirst Medical Group",
    patientName: { firstName: "Emma", lastName: "Clark" },
    driver: { firstName: "David", lastName: "Smith" },
    status: "Canceled",
    pickAddress: "555 Cedar Road",
    dropAddress: "666 Elm Street",
    pickupTime: "10:45 AM",
    dropTime: "01:15 PM",
    appointmentTime: "04:00 PM",
    miles: 20,
    vehicleType: "Van",
  },
  {
    accountName: "Community Wellness Center",
    patientName: { firstName: "Sophia", lastName: "Moore" },
    driver: { firstName: "Jackson", lastName: "White" },
    status: "Completed",
    pickAddress: "777 Oak Lane",
    dropAddress: "888 Maple Road",
    pickupTime: "08:15 AM",
    dropTime: "10:45 AM",
    appointmentTime: "02:30 PM",
    miles: 25,
    vehicleType: "Car",
  },
  {
    accountName: "Towhidul islam and towfiq Health Systems",
    patientName: { firstName: "Oliver", lastName: "Wright" },
    driver: { firstName: "Madison", lastName: "Adams" },
    status: "Upcoming",
    pickAddress: "999 Pine Lane",
    dropAddress: "111 Elm Avenue",
    pickupTime: "11:30 AM",
    dropTime: "02:00 PM",
    appointmentTime: "04:45 PM",
    miles: 22,
    vehicleType: "Van",
  },
];

const DataTable = () => {
  const [selectedDriver, setSelectedDriver] = useState("");
  const [check, setCheck] = useState(false);
  const [selectPage, setSelectPage] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPageFrom, setCurrentPageFrom] = useState(1);
  const [currentPageTo, setCurrentPageTo] = useState(10);
  const total = 69;
  const pageOption = [10, 20, 30];
  const driverOptions = [];

  const prevHandler = () => {
    if (currentPageFrom > 1) {
      setCurrentPageFrom(currentPageFrom - 10);
      setCurrentPageTo(currentPageTo - 10);
    }
  };
  const nextHandler = () => {
    if (currentPageTo < total) {
      setCurrentPageFrom(currentPageFrom + 10);
      setCurrentPageTo(currentPageTo + 10);
    }
  };

  return (
    <>
      <div className="container pt-3 w-[77vw]   overflow-x-auto  overflow-y-hidden ">
        <table className=" text-sm">
          <thead className="bg-[#F5FFF1]">
            <tr className=" text-gray1  uppercase ">
              <th className="py-1  text-start whitespace-nowrap px-4 border-b">
                <input
                  type="checkbox"
                  id=""
                  checked={check}
                  onChange={() => setCheck(!check)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Account Name
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Patient Name
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Driver
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Status
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Pick Address
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Drop Address
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Pickup Time
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Drop Time
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Appointment Time
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Miles
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                Vehicle Type
              </th>
              <th className="py-1  font-light text-start whitespace-nowrap px-4 border-b">
                <BiDotsVerticalRounded />
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr
                key={index}
                className={`   ${
                  item.status === "Completed" && "bg-[#F5FFF1]"
                } ${item.status === "Upcoming" && "bg-[#FFFEF3]"} ${
                  item.status === "In Progress" && "bg-[#FEF6EC]"
                }  ${item.status === "Canceled" && "bg-[#FFF2F2]"} `}
              >
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  <input
                    type="checkbox"
                    id="upcoming"
                    checked={check}
                    onChange={() => setCheck(!check)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b ">
                  <div className=" w-32   line-clamp-2  whitespace-normal ">
                    {item.accountName}
                  </div>
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  <div className=" flex flex-row  items-center">
                    <div className=" bg-white border flex h-7  w-7  items-center  justify-center text-center rounded font-semibold text-[#7F8596]   mr-2 ">
                      {item.patientName.firstName.charAt(0)}
                      {item.patientName.lastName.charAt(0)}
                    </div>
                    <span>
                      {item.patientName.firstName} {item.patientName.lastName}
                    </span>
                  </div>
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b  ">
                  <div className=" bg-white py-0.5 border rounded px-2 justify-between w-40">
                    <div className=" flex items-center justify-between">
                      <div className=" bg-[#F1FAFD] text-[#4387F7] flex    h-7  w-7  items-center  justify-center text-center rounded font-semibold    mr-2 ">
                        {item.driver.firstName.charAt(0)}
                        {item.driver.lastName.charAt(0)}
                      </div>
                      {/* <span>
                      {item.driver.firstName} {item.driver.lastName}
                    </span> */}
                      <select
                        id="driverDropdown"
                        className="z-10 outline-none  rounded h-7 "
                        value={selectedDriver}
                        onChange={(e) => setSelectedDriver(e.target.value)}
                      >
                        <option className="  font-semibold" value="">
                          {item.driver.firstName} {item.driver.lastName}
                        </option>
                        {driverOptions.map((driver, index) => (
                          <option key={index} value={driver}>
                            {driver}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b  ">
                  <span
                    className={` text-gray-500 border border-gray-300 rounded  flex items-center px-2 ${
                      item.status === "Completed" &&
                      "bg-[#A6D092] text-[#547544]"
                    }  ${
                      item.status === "Upcoming" &&
                      "bg-[#FFFACC] text-[#726D41]"
                    } ${
                      item.status === "In Progress" &&
                      "bg-[#FFE6C8] text-[#825D30]"
                    }  ${
                      item.status === "Canceled" &&
                      "bg-[#FFDADA] text-[#843838]"
                    }`}
                  >
                    <span>
                      <GoDotFill className=" inline-block pr-2 text-xl" />
                    </span>

                    {item.status}
                  </span>
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  {item.pickAddress}
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  {item.dropAddress}
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  {item.pickupTime}
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  {item.dropTime}
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  {item.appointmentTime}
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  {item.miles}
                </td>
                <td className="py-0.5 whitespace-nowrap px-4 border-b">
                  {item.vehicleType}
                </td>
                <td className="py-0.5 whitespace-nowraps px-4 border-b">
                  <BiDotsVerticalRounded />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex flex-row justify-between items-center">
        <div className=" flex flex-row items-center ">
          <div className=" flex flex-row">
            <button onClick={prevHandler} className=" p-1 hover:bg-gray-50">
              <img
                className=" scale-110 -rotate-90"
                src="/icon/ArrowUp.png"
                alt="arrow up"
              />
            </button>
            <button onClick={nextHandler} className=" p-1 hover:bg-gray-50">
              <img
                className="scale-110 rotate-90"
                src="/icon/ArrowUp.png"
                alt="arrow up"
              />
            </button>
          </div>

          <p className=" text-sm text-gray1">
            {currentPageFrom}-{currentPageTo} of {total} results
          </p>
        </div>

        <div className=" flex flex-row items-center">
          <p className=" text-sm text-gray1 mr-2">Rows per page</p>
          <div className=" flex flex-row items-center">
            <span>{dataPerPage}</span>

            <button
              className="relative"
              onClick={() => setSelectPage(!selectPage)}
            >
              {selectPage && (
                <ul className=" absolute bg-white border rounded -mt-20 h-20">
                  {pageOption.map((pageOption) => (
                    <li onClick={() => setDataPerPage(pageOption)}>
                      {pageOption}
                    </li>
                  ))}
                </ul>
              )}
              <img className={``} src="/icon/AltArrowDown.png" alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
