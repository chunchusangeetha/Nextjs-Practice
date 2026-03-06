"use client"

import useThrottle from "../hooks/useThrottle"

export default function Throttle(){
    
  const handleChange = (value: string) => {
    console.log("Throttle:", value)
  }

  const throttledFn = useThrottle(handleChange, 1000)

  return (
    <main className="p-5">
      <h1 className="text-xl font-bold">Throttle Example</h1>

      <input
        type="text"
        placeholder="Type fast..."
        className="border p-2 mt-4"
        onChange={(e) => throttledFn(e.target.value)}
      />
    </main>
  )
}