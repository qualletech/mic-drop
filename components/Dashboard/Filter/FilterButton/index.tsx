import FilterIconEmpty from "./FilterIconEmpty"
import FilterIconSelected from "./FilterIconSelected"

export default function FilterButton({
  handleClick,
  filterSelected,
}: {
  handleClick: () => void
  filterSelected: boolean
}) {
  return (
    <button
      type="button"
      className="grid grid-flow-col rounded-lg border-2 border-red px-2.5 py-2.5 text-md font-bold text-red shadow-sm hover:bg-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
      onClick={() => handleClick()}
    >
      {filterSelected ? <FilterIconSelected /> : <FilterIconEmpty />}
      <span className="hidden">Filter Mics</span>
    </button>
  )
}
