"use client"

import { useState } from "react"

export default function Page() {
  const [requestType, setRequestType] = useState<string>("general")

  return (
    <div className="grid md:grid-cols-[1fr_auto] max-h-full overflow-auto px-12 py-6">
      <div className="grid content-start gap-5">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <form className="grid gap-2">
          <label htmlFor="request-type" className="block mb-2 text-sm font-medium">
            Request Type
            <select
              id="request-type"
              className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none  block w-full p-2.5"
              onChange={(event) => setRequestType(event.target.value)}
            >
              <option value="general">General Question</option>
              <option value="new">New Mic Submission</option>
              <option value="edit">Edit Mic Details</option>
              <option value="suggest">Suggestions for Mic Drop</option>
            </select>
          </label>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
            />
          </label>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
            <input
              type="text"
              placeholder="yourname@email.com"
              id="email"
              className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
            />
          </label>
          <label htmlFor="request" className="block mb-2 text-sm font-medium">
            Request
            <textarea
              id="request"
              rows={5}
              placeholder="Your information here"
              className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5 resize-y"
            />
          </label>
          <div className="grid grid-flow-col justify-start items-center gap-6">
            <button
              type="submit"
              className="rounded-lg bg-orange px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:bg-orange/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
            >
              Submit
            </button>
            <a
              href="/"
              className="text-sm font-semibold hover:underline rounded-lg focus-visible:outline focus-visible:outline-2 px-3.5 py-2.5 focus-visible:outline-offset-2 focus-visible:outline-red"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
      <img className="aspect-auto w-3/4 place-self-center md:block hidden" src="./mic-pic.png" alt="" />
    </div>
  )
}
