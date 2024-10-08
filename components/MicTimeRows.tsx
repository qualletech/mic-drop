import moment from "moment"

export default function MicTimeRows({ micTimes }) {
  function customSort(a, b) {
    const order = ["first", "second", "third", "fourth", "weekly"]
    const frequencyComparison = order.indexOf(a.frequency) - order.indexOf(b.frequency)
    if (frequencyComparison !== 0) {
      return frequencyComparison
    }
    return a.time.localeCompare(b.time)
  }

  return micTimes ? (
    <div>
      <p>
        <span className="font-bold">Time{micTimes?.length > 1 ? "s" : ""}:</span>
      </p>
      {micTimes.sort(customSort).map((time) => (
        <p key={time.id}>
          {`${time.frequency !== "weekly" ? `${time.frequency.slice(0, 1).toUpperCase()}${time.frequency.slice(1)}` : ""} ${time.weekday.slice(0, 1).toUpperCase()}${time.weekday.slice(1)}, ${moment(time.time, "HH:mm:ss").format("h:mma")}`}
        </p>
      ))}
    </div>
  ) : null
}
