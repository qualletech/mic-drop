export default function GoogleMapsEmbed({ address }: { address: string }) {
  return (
    <iframe
      title="maps"
      src={`https://maps.google.com/maps?q=${address}&output=embed`}
      height="400"
      width="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
    />
  )
}
