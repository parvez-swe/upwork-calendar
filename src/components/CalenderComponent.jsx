import {
  eachDayOfInterval,
  endOfMonth,
  format,
  // getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const meetings = [
  // Meetings data here...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CalenderComponent() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let previousMonthDate = new Date(firstDayCurrentMonth);
    previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
    setCurrentMonth(format(previousMonthDate, "MMM-yyyy"));
  }

  function nextMonth() {
    let nextMonthDate = new Date(firstDayCurrentMonth);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setCurrentMonth(format(nextMonthDate, "MMM-yyyy"));
  }

  // function previousMonth() {
  //   let firstDayNextMonth = parse(currentMonth, "MMM-yyyy", new Date());
  //   setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  // }

  // function nextMonth() {
  //   let firstDayNextMonth = parse(currentMonth, "MMM-yyyy", new Date());
  //   setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  // }

  return (
    <div className="">
      <div className="">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="">
            <div className="flex flex-row w-[14.5vw] my-2 justify-between items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <div className=" flex flex-row  items-center ">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-0.5 text-gray-400 hover:text-gray-500 border  rounded"
                >
                  <span className="sr-only">Previous month</span>
                  <BiChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-0.5 text-gray-400 hover:text-gray-500 border rounded"
                >
                  <span className="sr-only">Next month</span>
                  <BiChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7  text-xs leading-2 text-center text-gray-500 w-[14.5vw]">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm w-[14.5vw]">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(dayIdx === 0 && "col-start-1", "")}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "border broder-[#0062FF]",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-[#0062FF]",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-[#0062FF]",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-6 w-6 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
