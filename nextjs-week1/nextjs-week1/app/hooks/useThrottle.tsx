"use client"

import { useRef } from "react"

export default function useThrottle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  const lastExecuted = useRef<number>(0)

  return (...args: Parameters<T>) => {
    const now = Date.now()

    if (now - lastExecuted.current >= delay) {
      fn(...args)
      lastExecuted.current = now
    }
  }
}