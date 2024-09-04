"use client"

import Error from "../error"
import Loading from "../loading"
import GoogleMapsEmbed from "@/components/GoogleMapsEmbed"
import MicTimeRows from "@/components/MicTimeRows"
import { useRouter } from "next/navigation"
import { useQuery } from "react-query"

const fetchMicData = async (micId: string) => {
  const response = await fetch(`/api/mics/${micId}`)
  return response.json()
}

export default function Page({ params }: { params: { mic_id: string } }) {
  const router = useRouter()
  const { data: mic, isLoading, isError } = useQuery(["mic", params.mic_id], () => fetchMicData(params.mic_id))

  if (isLoading) return <Loading />
  if (isError) return <Error />
  return (
    <main className="grid gap-3 lg:gap-10 max-h-full overflow-auto px-6 py-3 md:px-12 md:py-6">
      <button
        type="button"
        onClick={() => router.back()}
        className="grid grid-flow-col gap-2 justify-start items-center place-self-start pr-3 py-2 text-sm font-medium text-center hover:text-red/90 rounded-lg focus:ring-2 focus:ring-orange focus:outline-none max-h-content"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </button>

      <div className="grid lg:grid-cols-2 gap-2 lg:px-8">
        <div className="grid gap-3 content-start">
          <h1 className="text-2xl md:text-4xl font-extrabold">{mic.name}</h1>
          <div>
            <p className="font-bold">{mic.venue.name}</p>
            <p>{mic.venue.street_address}</p>
            {mic.venue.street_address_additional && <p>{mic.venue.street_address_additional}</p>}
            <p>{`${mic.venue.city}, ${mic.venue.state} ${mic.venue.zip_code}`}</p>
          </div>

          <MicTimeRows micTimes={mic.mic_times} />
          {mic.sign_up && (
            <p>
              <span className="font-bold">Sign-Up:</span>
              {` ${mic.sign_up}`}
            </p>
          )}
          {mic.set_time && (
            <p>
              <span className="font-bold">Set Time:</span> {` ${mic.set_time}`}
            </p>
          )}
          {mic.payment && (
            <p>
              <span className="font-bold">Price:</span> {mic.payment}
            </p>
          )}
          <div className="grid grid-flow-col justify-start items-center gap-4">
            {mic.website && (
              <a
                href={mic.website}
                rel="nofollow noreferrer"
                target="_blank"
                className="hover:stroke-red/80 rounded-lg focus:ring-2 focus: ring-offset-2 focus:  ring-orange focus:outline-none"
                aria-label="Website"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-9 stroke-red fill-none stroke-[1.8]"
                >
                  <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </a>
            )}

            {mic.instagram && (
              <a
                href={mic.instagram}
                rel="nofollow noreferrer"
                target="_blank"
                className="hover:stroke-red/80 rounded-lg focus:ring-2 focus: ring-offset-2 focus:  ring-orange focus:outline-none"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-red w-8" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <GoogleMapsEmbed address={`${mic.venue.name} ${mic.venue.zip_code}`} />
      </div>
    </main>
  )
}
