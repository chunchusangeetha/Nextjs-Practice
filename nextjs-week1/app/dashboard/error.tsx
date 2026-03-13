"use client"
export default function Error({
    error,reset
}:{
    error:Error,
    reset:()=>void
}){
    return(
        <div className="p-6">
            <h2 className="text-red-600 text-xl">Something went wrong</h2>
            <button
            className="mt-4 bg-blue-400 text-white px-4 py-2"
            onClick={()=>reset()}>
                try Agian
            </button>
        </div>
    )
}