import SearchClearButton from "../SearchClearButton"

export default function SearchInput({
  inputValue,
  onChange,
  onClearClick,
}: {
  inputValue: string
  onChange: (input: string) => void
  onClearClick: () => void
}) {
  const handleClear = () => {
    onChange("")
    onClearClick()
  }
  return (
    <div className="grid grid-flow-col items-center border-b border-black/30 text-sm focus:ring-2 focus:  ring-orange focus:outline-none block w-full px-2 py-1">
      <input
        placeholder="Mic Name"
        id="mic-name"
        className="text-md bg-light focus:outline-none"
        type="text"
        value={inputValue || ""}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchClearButton onClick={handleClear} />
    </div>
  )
}
