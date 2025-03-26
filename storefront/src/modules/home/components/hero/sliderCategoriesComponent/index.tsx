import { ReactNode, CSSProperties } from "react"
import Link from "next/link"
import { ArrowSvg, ComboSvg, ConfiguratorSvg, HelpSvg, LampSvg } from "../svgs"

type ButtonProps = {
  children: ReactNode
  handler?: () => void
  to?: string
  type?: "primary" | "secondary" | "slider" | string
  extraClasses?: string
  style?: CSSProperties
  buttonType?: "button" | "submit" | "reset"
}

const Button = ({
  children,
  handler = () => {},
  to,
  type = "",
  extraClasses = "",
  style = {},
  buttonType = "button",
}: ButtonProps) => {
  const btnTypes: Record<string, string> = {
    primary:
      "bg-main block text-center p-3 rounded-md w-full font-semibold cursor-pointer",
    secondary: "bg-white text-main border border-main",
    slider:
      "bg-[#99D913] text-black flex items-center justify-between w-full p-3 text-[24px] text-[#222] font-semibold md:min-w-full",
  }

  if (to) {
    return (
      <Link
        className={`${btnTypes[type] || ""} ${extraClasses}`}
        style={style}
        href={to}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={buttonType}
      className={`${btnTypes[type] || ""} ${extraClasses}`}
      onClick={handler}
      style={style}
    >
      {children}
    </button>
  )
}

type Category = {
  _id: string
  slug: string
  title?: string
}

type SliderCategoriesProps = {
  categories?: Category[]
}

export default function SliderCategoriesComponent({
  categories = [],
}: SliderCategoriesProps) {
  const Svgs = [
    <ComboSvg color="#222" key="1" height={30} width={30} />,
    <ConfiguratorSvg color="#222" key="2" height={30} width={30} />,
    <HelpSvg color="#222" key="3" height={30} width={30} />,
    <LampSvg color="#222" key="4" height={30} width={30} />,
  ]

  return (
    <div className="flex flex-col gap-1.5 md:grid md:grid-cols-2 md:gap-1">
      {categories.map((category, i) => (
        <Button
          key={category.slug}
          to={`collections/${category.slug.toLowerCase()}`}
          type="slider"
        >
          <span className="flex gap-2 items-center capitalize">
            {Svgs[i % Svgs.length]}
            {category.title?.toLowerCase()}
          </span>
          <ArrowSvg color="#222" height={25} width={25} />
        </Button>
      ))}
    </div>
  )
}
