import prismaClient from "@/prisma/prismaClient"

export default async function Page({ params }: { params: { mic_id: string } }) {
  const mic = await prismaClient.mic.findUnique({
    where: { id: params.mic_id },
    include: { mic_times: true, venue: true },
  })
  return (
    <main className="grid grid-rows-[auto_1fr] h-100">
      <h1 className="text-4xl font-extrabold">{mic.name}</h1>
      <p>
        <span className="font-bold">{mic.venue.name},</span>{" "}
        {`${mic.venue.street_address}, ${mic.venue.city}, ${mic.venue.state}
        ${mic.venue.zip_code}`}
      </p>
      {mic.mic_times?.map((time) => (
        <div>
          <p>
            {time.weekday}, {time.time}
          </p>
        </div>
      ))}
      <p>Sign-Up: {mic.sign_up}</p>
      <p>Set Time: {mic.set_time}</p>
      <p>Price: {mic.payment}</p>
    </main>
  )
}
