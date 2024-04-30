export default function Page() {
  return (
    <>
      <h1>Contact Us</h1>
      <form>
        <label>
          Request Type
          <select defaultValue="general">
            <option value="general">General Question</option>
            <option value="new">New Mic Submission</option>
            <option value="edit">Edit Mic Details</option>
            <option value="suggest">Suggestions for Mic Drop</option>
          </select>
        </label>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email <input type="text" />
        </label>
        <label>
          Request
          <textarea />
          {/* add option of if it's an edit mic value specifying mic name (maybe drop down?)
          add option of if new the request becomes notes and we'll have everything combined into one  */}
        </label>
        <button type="submit">Submit</button>
        <p>Cancel</p>
      </form>
    </>
  )
}
