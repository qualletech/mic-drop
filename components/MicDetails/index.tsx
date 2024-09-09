import { MicType } from "../Dashboard/types"
import MicTimeRows from "../MicTimeRows"
import Heading1 from "../StylingComponents/Heading1"
import BackButton from "./BackButton"
import DetailLabel from "./DetailLabel"
import GoogleMapsEmbed from "./GoogleMapsEmbed"
import InstagramIcon from "./InstagramIcon"
import MicVenue from "./MicVenue"
import WebsiteIcon from "./WebsiteIcon"

export default function MicDetails({ mic }: { mic: MicType }) {
  return (
    <main className="grid gap-3 lg:gap-10 max-h-full overflow-auto px-6 py-3 md:px-12 md:py-6">
      <BackButton />
      <div className="grid lg:grid-cols-2 gap-2 lg:px-8">
        <div className="grid gap-3 content-start">
          <Heading1 text={mic.name} />
          <MicVenue micVenue={mic.venue} />
          <MicTimeRows micTimes={mic.mic_times} />
          {mic.sign_up && <DetailLabel label="Sign-Up" info={mic.sign_up} />}
          {mic.set_time && <DetailLabel label="Set Time" info={` ${mic.set_time}`} />}
          {mic.payment && <DetailLabel label="Price" info={mic.payment} />}
          <div className="grid grid-flow-col justify-start items-center gap-4">
            {mic?.website && <WebsiteIcon link={mic.website} />}
            {mic?.instagram && <InstagramIcon instagramLink={mic.instagram} />}
          </div>
          <p className="text-red font-semibold italic">Check the mic's instagram or website for changes or updates!</p>
        </div>
        <GoogleMapsEmbed address={`${mic.venue.name} ${mic.venue.zip_code}`} />
      </div>
    </main>
  )
}
