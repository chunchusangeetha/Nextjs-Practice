"use client"

import useDebounce from "../hooks/useDebounce"


export default function Debounce() {

  const handleSearch = (value: string) => {
    console.log("Searching:", value)
  }

  const debouncedSearch = useDebounce(handleSearch, 500)

  return (
    <main className="p-5">
      <h1 className="text-xl font-bold">Debounce Example</h1>

      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mt-4"
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </main>
  )
}