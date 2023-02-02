import { useState } from "react";

import { ReactComponent as PrevIcon } from "src/assets/prev.svg";
import { ReactComponent as NextIcon } from "src/assets/next.svg";

import "./index.scss";

export default function Calendar() {
  const dateValue = new Date();

  const [currentMonth, setCurrentMonth] = useState(dateValue.getMonth());

  const startOfTheMonth = new Date(dateValue.getFullYear(), currentMonth, 1);
  const endOfTheMonth = new Date(dateValue.getFullYear(), currentMonth + 1, 0);
  const totalDatesInMonth =
    endOfTheMonth.getDate() - startOfTheMonth.getDate() + 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septembar",
    "October",
    "Novembor",
    "December",
  ];

  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const dates = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  function previousMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  return (
    <div className="calendar-wrapper">
      <div className="calendar-top">
        <div className="current-date">
          {months[currentMonth]} {dateValue.getFullYear()}
        </div>
        <div className="buttons">
          <button className="prev" onClick={previousMonth}>
            <PrevIcon width={20} height={20} />
          </button>
          <button className="next" onClick={nextMonth}>
            <NextIcon width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="calendar">
        <div className="days">
          {days.map((day) => (
            <div key={day} className="day">
              {day}
            </div>
          ))}
        </div>
        <div className="dates">
          {dates(0, startOfTheMonth.getDay() - 2, 1).map((date) => (
            <div key={date}></div>
          ))}
          {dates(1, totalDatesInMonth, 1).map((date) => {
            const today = dateValue.getDate();
            return (
              <div
                key={date}
                className={`date ${
                  today === date && currentMonth === dateValue.getMonth()
                    ? "today"
                    : ""
                }`}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
