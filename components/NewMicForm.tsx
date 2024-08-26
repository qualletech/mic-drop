export default function NewMicForm(requestDetails, handleFormUpdate) {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-8">
        <label htmlFor="mic-name" className="block mb-2 text-sm font-medium">
          Mic Name <span className="text-red font-bold">*</span>
          <input
            required
            type="text"
            placeholder="Funny Mic 123"
            id="mic-name"
            value={requestDetails?.micName || ""}
            onChange={(e) => handleFormUpdate("micName", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
        <label htmlFor="venue" className="block mb-2 text-sm font-medium">
          Venue Name & Borough <span className="text-red font-bold">*</span>
          <input
            required
            type="text"
            placeholder="Dixon Place, Manhattan"
            id="venue"
            value={requestDetails?.venue || ""}
            onChange={(e) => handleFormUpdate("venue", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8">
        <label htmlFor="mic-time" className="block mb-2 text-sm font-medium">
          Mic Times: Weekday, Time and Reccurence <span className="text-red font-bold">*</span>
          <input
            required
            type="text"
            placeholder="Every Wednesday 8pm"
            id="mic-time"
            value={requestDetails?.micTime || ""}
            onChange={(e) => handleFormUpdate("micTime", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
        <label htmlFor="sign-up" className="block mb-2 text-sm font-medium">
          Sign Up Process
          <input
            type="text"
            placeholder="Bucket"
            id="sign-up"
            value={requestDetails?.signUp || ""}
            onChange={(e) => handleFormUpdate("signUp", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8">
        <label htmlFor="set-time" className="block mb-2 text-sm font-medium">
          Set Time
          <input
            type="number"
            placeholder="3"
            id="set-time"
            value={requestDetails?.setTime || undefined}
            onChange={(e) => handleFormUpdate("setTime", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
        <label htmlFor="payment" className="block mb-2 text-sm font-medium">
          Payment/Drink Minimum etc
          <input
            type="text"
            placeholder="1 Item Purchase"
            id="payment"
            value={requestDetails?.payment || ""}
            onChange={(e) => handleFormUpdate("payment", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8">
        <label htmlFor="ig-handle" className="block mb-2 text-sm font-medium">
          Instagram Handle
          <input
            type="text"
            placeholder="@glorywholecomedy"
            id="ig-handle"
            value={requestDetails?.instagram || ""}
            onChange={(e) => handleFormUpdate("instagram", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
        <label htmlFor="website" className="block mb-2 text-sm font-medium">
          Website
          <input
            type="text"
            placeholder="https://dixonplace.org/"
            id="website"
            value={requestDetails?.website || ""}
            onChange={(e) => handleFormUpdate("website", e.target.value)}
            className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
          />
        </label>
      </div>
    </>
  )
}
