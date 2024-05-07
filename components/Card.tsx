/* eslint-disable max-len */

import moment from "moment"

export default function Card({ mic }) {
  function customSort(a, b) {
    const order = ["first", "second", "third", "fourth", "weekly"]
    return order.indexOf(a.frequency) - order.indexOf(b.frequency)
  }

  return (
    <div className="max-w-sm p-6 bg-white/70 border border-red rounded-lg shadow grid gap-2 grid-rows-[auto_1fr_auto] justify-between">
      <a
        href={`${mic.id}`}
        className="inline-flex items-center rounded-lg focus:ring-2 focus: ring-red focus:outline-none focus:ring-offset-2 text-2xl font-bold text-red hover:text-red/80"
      >
        <h5>{mic.name}</h5>
      </a>
      <div>
        {mic.mic_times
          ?.sort(customSort)
          .map((time) => (
            <p>
              {`${time.frequency === "weekly" ? "Every" : `Every ${time.frequency}`} ${time.weekday.slice(0, 1).toUpperCase()}${time.weekday.slice(1)}, ${moment(time.time, "HH:mm:ss").format("h:mma")}`}
            </p>
          ))}
        <p className="mb-3">{`${mic.venue.borough.slice(0, 1).toUpperCase()}${mic.venue.borough.slice(1)}`}</p>
      </div>

      <a
        href={`${mic.id}`}
        className="grid grid-flow-col justify-start items-center place-self-start px-3 py-2 text-sm font-medium text-center text-light bg-red rounded-lg hover:bg-red/80 focus:ring-2 focus:ring-orange focus:outline-none max-h-content"
      >
        <p className="flex-shrink-0">
          Learn more <span className="hidden"> about {mic.name}</span>
        </p>
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  )
}
