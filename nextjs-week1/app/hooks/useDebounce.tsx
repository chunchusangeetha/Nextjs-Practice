"use client"

// export default function useDebounce(fn: (value: string) => void, delay: number) {
//     let timer: NodeJS.Timeout;
//     return (args: string) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn(args)
//         }, delay)
//     }
// }
"use client"

import { useRef, useCallback } from "react"

export default function useDebounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        fn(...args)
      }, delay)
    },
    [fn, delay]
  )

  return debouncedFn
}