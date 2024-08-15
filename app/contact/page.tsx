"use client"

import NewMicForm from "@/components/NewMicForm"
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
              <option value="general">General Question & Suggestions</option>
              <option value="new">Submit a new Mic</option>
              <option value="edit">Submit an edit for an existing Mic</option>
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
          {requestType === "new" ? (
            <NewMicForm />
          ) : (
            <label htmlFor="request" className="block mb-2 text-sm font-medium">
              Request <span className="text-red font-bold">*</span>
              {requestType === "edit" && (
                <span className="block text-xs italic">
                  Please specify the name of the mic that needs edits and what needs to be changed
                </span>
              )}
              <textarea
                required
                id="request"
                rows={5}
                placeholder="Your information here"
                className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5 resize-y"
              />
            </label>
          )}
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
      <img className="aspect-auto w-3/4 py-16 justify-self-center md:block hidden" src="./mic-pic.png" alt="" />
    </div>
  )
}
