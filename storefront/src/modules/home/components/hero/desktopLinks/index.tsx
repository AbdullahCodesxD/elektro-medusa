"use client"

import { useEffect, useState } from "react"
import { listCollections } from "@lib/data/collections"
import Link from "next/link"
import Image from "next/image"

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
        <Link
          key={link?.title}
          href={`/collections/${link?.handle}`}
          className="flex items-center relative gap-2 capitalize p-3 pl-5 transition-all hover:bg-[#99D913] hover:text-white "
        >
          <Image src="/elektro.png" alt="logo" height={20} width={20} />
          {link?.title}
        </Link>
      ))}
    </div>
  )
}

export default DesktopLinks
