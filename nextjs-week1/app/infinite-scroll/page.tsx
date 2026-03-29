"use client"

import { useEffect, useState } from "react"

type Image = {
    id: string
    download_url: string
    author: string
}

export default function InfiniteScrollPage() {
    const [images, setImages] = useState<Image[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const fetchImages = async () => {
        setLoading(true)

        const res = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=10`
        )

        const data = await res.json()

        setImages((prev) => [...prev, ...data]) // 👈 append
        setLoading(false)
    }
    useEffect(() => {
        fetchImages()
    }, [page])
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 100 >=
                document.documentElement.scrollHeight
            ) {
                setPage((prev) => prev + 1)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Infinite Scroll</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img) => (
                    <div key={img.id}>
                        <img
                            src={img.download_url}
                            alt={img.author}
                            className="w-full h-40 object-cover"
                        />
                        <p className="text-sm">{img.author}</p>
                    </div>
                ))}
            </div>

            {loading && <p className="text-center mt-4">Loading...</p>}
        </div>
    )
}