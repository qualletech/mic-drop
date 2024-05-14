import moment from "moment"

export default function MicTimeRows({ micTimes }) {
  function customSort(a, b) {
    const order = ["first", "second", "third", "fourth", "weekly"]

    // Compare frequencies first
    const frequencyComparison = order.indexOf(a.frequency) - order.indexOf(b.frequency)
    if (frequencyComparison !== 0) {
      return frequencyComparison
    }

    // If frequencies are equal, compare times using localeCompare
    return a.time.localeCompare(b.time)
  }

  return micTimes
    ? micTimes
        .sort(customSort)
        .map((time) => (
          <p>
            {`${time.frequency === "weekly" ? "Every" : `Every ${time.frequency}`} ${time.weekday.slice(0, 1).toUpperCase()}${time.weekday.slice(1)}, ${moment(time.time, "HH:mm:ss").format("h:mma")}`}
          </p>
        ))
    : null
}
