export default function Card({ mic }) {
  return (
    <div className="p-8">
      <p>{mic.name}</p>
      {mic.mic_times?.map((time) => (
        <>
          <p>{time.weekday}</p>
          <p>{time.time}</p>
        </>
      ))}
      <p>{mic.venue.borough}</p>
    </div>
  )
}
