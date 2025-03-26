"use client"

import { useEffect, useState } from "react"
import { listCollections } from "@lib/data/collections"
import Link from "next/link"

const DesktopLinks = () => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const fetchCollections = async () => {
      const { collections } = await listCollections({
        limit: "13",
        // fields: "*products",
      })
      setCollections(collections || [])
    }

    fetchCollections()
  }, [])

  console.log(collections)
  return (
    <div className="min-w-[350px] bg-white hidden md:block">
      {collections.map((link) => (
        <>
          <Link
            key={link?.title}
            href={`/collections/${link?.handle}`}
            className="flex items-center gap-2 capitalize p-3 pl-5 transition-all hover:bg-[#99D913] hover:text-white "
          >
            {link?.title}
          </Link>
        </>
      ))}
    </div>
  )
}

export default DesktopLinks
