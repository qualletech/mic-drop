import { Venue } from "../Dashboard/types"

export default function MicVenue({ micVenue }: { micVenue: Venue }) {
  return (
    <div>
      <p className="font-bold">{micVenue.name}</p>
      <p>{micVenue.street_address}</p>
      {micVenue.street_address_additional && <p>{micVenue.street_address_additional}</p>}
      <p>{`${micVenue.city}, ${micVenue.state} ${micVenue.zip_code}`}</p>
    </div>
  )
}
