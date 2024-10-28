import SearchIcon from "./SearchIcon"

export default function SearchButton() {
  return (
    <button
      type="button"
      className="grid grid-flow-col rounded-lg border-2 border-red px-2.5 py-2.5 text-md font-bold text-red shadow-sm hover:bg-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
      onClick={() => console.log("click")}
    >
      <SearchIcon />
      <span className="hidden">Search by Mic Name</span>
    </button>
  )
}
