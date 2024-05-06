/* eslint-disable max-len */

export default function Card({ mic }) {
  return (
    <div className="max-w-sm p-6 bg-white/70 border border-red rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`${mic.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{mic.name}</h5>
      </a>
      {mic.mic_times?.map((time) => (
        <div>
          <p>
            {time.weekday}, {time.time}
          </p>
        </div>
      ))}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{mic.venue.borough}</p>
      <a
        href={`${mic.id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light bg-red rounded-lg hover:bg-red/80 focus:ring-1 focus: ring-orange focus:outline-none"
      >
        Read more
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
