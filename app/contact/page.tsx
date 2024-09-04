"use client"

import NewMicForm from "@/components/NewMicForm"
import { useState } from "react"

export default function Page() {
  const [requestType, setRequestType] = useState<string>("general")
  const [requestDetails, setRequestDetails] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFormUpdate = (key, value) => {
    setRequestDetails((prevDetails) => ({ ...prevDetails, [key]: value }))
  }

  const generalAndEditValidation = requestDetails?.message

  const newMicValidation = requestDetails?.micName && requestDetails?.venue && requestDetails?.micTime

  const buttonDisabled = requestType === "new_submission" ? !newMicValidation : !generalAndEditValidation

  const onFormSubmit = async (event) => {
    if (buttonDisabled) return
    event.preventDefault()
    setLoading(true)
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        type: requestType,
        name: requestDetails?.name || undefined,
        email_address: requestDetails?.email || undefined,
        message_body:
          requestType === "new_submission"
            ? `mic_name: ${requestDetails?.micName}, venue: ${requestDetails?.venue}, mic_times: ${requestDetails?.micTime}, sign_up: ${requestDetails?.signUp || undefined}, set_time: ${requestDetails?.setTime || undefined}, payment: ${requestDetails?.payment || undefined}, instagram: ${requestDetails?.instagram || undefined}, website: ${requestDetails?.website || undefined},`
            : requestDetails?.message,
      }),
    })
    if (!response.ok) {
      throw new Error("Failed to send message")
    }
    setLoading(false)
    setRequestDetails(null)
  }

  return (
    <div className="grid md:grid-cols-[1fr_auto] max-h-full overflow-auto px-6 py-3 md:px-12 md:py-6">
      <div className="grid content-start gap-5">
        <h1 className="text-2xl md:text-4xl font-extrabold">Suggestion Box</h1>
        <form className="grid gap-2">
          <label htmlFor="request-type" className="block mb-2 text-sm font-medium">
            Request Type
            <select
              id="request-type"
              className="border border-black/30 rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
              onChange={(event) => setRequestType(event.target.value)}
            >
              <option value="general">General Question & Suggestions</option>
              <option value="new_submission">Submit a new Mic</option>
              <option value="change_request">Submit an edit for an existing Mic</option>
            </select>
          </label>
          <div className="grid md:grid-cols-2 md:gap-8">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
              <input
                placeholder="Your Name"
                type="text"
                id="name"
                value={requestDetails?.name || ""}
                onChange={(e) => handleFormUpdate("name", e.target.value)}
                className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
              />
            </label>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
              <input
                type="text"
                placeholder="yourname@email.com"
                id="email"
                value={requestDetails?.email || ""}
                onChange={(e) => handleFormUpdate("email", e.target.value)}
                className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
              />
            </label>
          </div>
          {requestType === "new_submission" ? (
            <NewMicForm handleFormUpdate={handleFormUpdate} requestDetails={requestDetails} />
          ) : (
            <label htmlFor="request" className="block mb-2 text-sm font-medium">
              Request <span className="text-red font-bold">*</span>
              {requestType === "change_request" && (
                <span className="block text-xs italic">
                  Please specify the name of the mic that needs edits and what needs to be changed
                </span>
              )}
              <textarea
                required
                id="request"
                rows={5}
                placeholder="Your information here"
                value={requestDetails?.message || ""}
                onChange={(e) => handleFormUpdate("message", e.target.value)}
                className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5 resize-y"
              />
            </label>
          )}
          <div className="grid grid-flow-col justify-start items-center gap-6">
            <button
              onClick={onFormSubmit}
              type="submit"
              className={`rounded-lg bg-orange px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:bg-orange/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red ${buttonDisabled || loading ? `opacity-50 cursor-not-allowed` : ""}`}
            >
              {loading ? "Sending" : "Submit"}
            </button>
            <a
              href="/"
              className="text-sm font-semibold hover:underline rounded-lg focus-visible:outline focus-visible:outline-2 px-3.5 py-2.5 focus-visible:outline-offset-2 focus-visible:outline-red"
              onClick={() => setRequestDetails(null)}
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
