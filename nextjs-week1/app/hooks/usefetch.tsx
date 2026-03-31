"use client"

import { useEffect, useState } from "react"
const cache = new Map<string, Promise<any>>()
export default function usefetch<T>(url: string) {
    const [data, setData] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!url) return

        const controller = new AbortController()
        let promise = cache.get(url)
        if (!promise) {
            promise = fetch(url).then(res => {
                if (!res.ok) throw new Error("Failed to fetch")
                return res.json()
            })

            cache.set(url, promise)
        }

        promise
            .then((result) => setData(result))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false))
        return () => controller.abort()
    }, [url])

    return { data, isLoading, error }
}