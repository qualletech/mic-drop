export default function DetailLabel({ label, info }: { label: string; info: string }) {
  return (
    <p>
      <span className="font-bold">{label}:</span>
      {` ${info}`}
    </p>
  )
}
