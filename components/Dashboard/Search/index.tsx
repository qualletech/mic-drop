import SearchButton from "./SearchButton"
import SearchInput from "./SearchInput"
import { useState } from "react"

export default function Search({
  searchValue,
  setSearchValue,
}: {
  searchValue: string
  setSearchValue: (value: string) => void
}) {
  const [isSearchActive, setIsSearchActive] = useState(false)
  return isSearchActive ? (
    <SearchInput inputValue={searchValue} onChange={setSearchValue} onClearClick={() => setIsSearchActive(false)} />
  ) : (
    <SearchButton onClick={() => setIsSearchActive(true)} />
  )
}
