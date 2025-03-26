import { listCategories } from "@lib/data/categories"
import MegaMenu from "./mega-menu"
import { listCollections } from "@lib/data/collections"

export async function MegaMenuWrapper() {
  // const categories = await listCategories().catch(() => [])
  const collections = await listCollections().catch(() => [])

  return <MegaMenu categories={collections?.collections || []} />
}

export default MegaMenuWrapper
