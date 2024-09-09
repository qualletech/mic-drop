import Heading1 from "@/components/StylingComponents/Heading1"
import Heading2 from "@/components/StylingComponents/Heading2"

export default function Page() {
  return (
    <div className="grid gap-3 max-h-full overflow-auto px-6 py-3 md:px-12 md:py-6">
      <Heading1 text="Roadmap" />
      <p className="italic text-sm">Status 9/9/2024</p>
      <Heading2 text="What's to come" />
      <p>
        Mic Drop is currently in its early stages, but we have a lot of things planned. You can look forward to the
        following:
      </p>
      <ul>
        <li className="list-disc ml-4">User Profiles</li>
        <li className="list-disc ml-4">Claiming and Updating Mics</li>
        <li className="list-disc ml-4">Bookmarks</li>
        <li className="list-disc ml-4">Calendar & Map View</li>
        <li className="list-disc ml-4">Goal Tracking</li>
      </ul>
      <p>
        We’re very excited to deliver these features, unfortunately we can't give you exact timelines, but check back
        regularly.
      </p>
      <p>
        If you have additional suggestions or questions,{" "}
        <a href="/contact" className="hover:underline text-red font-bold">
          please drop us a note{" "}
        </a>
      </p>
    </div>
  )
}
