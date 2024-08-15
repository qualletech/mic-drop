export default function NewMicForm() {
  return (
    <>
      <label htmlFor="mic-name" className="block mb-2 text-sm font-medium">
        Mic Name <span className="text-red font-bold">*</span>
        <input
          required
          type="text"
          placeholder="Funny Mic 123"
          id="mic-name"
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
          className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
        />
      </label>
      <label htmlFor="mic-time" className="block mb-2 text-sm font-medium">
        Mic Times: Weekday, Time and Reccurence <span className="text-red font-bold">*</span>
        <input
          required
          type="text"
          placeholder="Every Wednesday 8pm"
          id="mic-time"
          className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
        />
      </label>
      <label htmlFor="sign-up" className="block mb-2 text-sm font-medium">
        Sign Up Process
        <input
          type="text"
          placeholder="Bucket"
          id="sign-up"
          className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
        />
      </label>
      <label htmlFor="ig-handle" className="block mb-2 text-sm font-medium">
        Instagram Handle
        <input
          type="text"
          placeholder="@glorywholecomedy"
          id="ig-handle"
          className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
        />
      </label>
      <label htmlFor="website" className="block mb-2 text-sm font-medium">
        Website
        <input
          type="text"
          placeholder="https://dixonplace.org/"
          id="website"
          className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
        />
      </label>
      <label htmlFor="set-time" className="block mb-2 text-sm font-medium">
        Set Time
        <input
          type="number"
          placeholder="3"
          id="set-time"
          className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
        />
      </label>
      <label htmlFor="payment" className="block mb-2 text-sm font-medium">
        Payment/Drink Minimum etc
        <input
          type="text"
          placeholder="1 Item Purchase"
          id="payment"
          className="border border-black/30 text-sm rounded-lg focus:ring-2 focus:  ring-orange focus:outline-none block w-full p-2.5"
        />
      </label>
    </>
  )
}
