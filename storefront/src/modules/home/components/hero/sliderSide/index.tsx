import Link from "next/link"
import { ReactNode, CSSProperties } from "react"

type ButtonProps = {
  children: ReactNode
  handler?: () => void
  to?: string
  type?: string
  extraClasses?: string
  style?: CSSProperties
  buttonType?: "button" | "submit" | "reset"
}

type SliderSideComponentDesktopProps = {
  heading: string
  children: ReactNode
  type: "red" | "blue"
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
    slider: "text-white border-b border-white w-fit font-semibold text-[17px]",
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

export default function SliderSideComponentsDesktop() {
  return (
    <div className="hidden md:flex flex-col min-w-full h-[99%]">
      <SliderSideComponentDesktop type="red" heading="Light Highlights August">
        Discover our lighting highlights of the month!
      </SliderSideComponentDesktop>
      <SliderSideComponentDesktop type="blue" heading="Light Highlights August">
        Test the tool management system sonepar toolSET for 30 days free of
        charge and see for yourself!
      </SliderSideComponentDesktop>
    </div>
  )
}

const SliderSideComponentDesktop = ({
  heading,
  children,
  type,
}: SliderSideComponentDesktopProps) => {
  const styleType: Record<string, string> = {
    blue: "bg-[#27348B]",
    red: "bg-[#B31319]",
  }

  return (
    <div
      className={`h-full flex flex-col justify-center gap-2 px-4 ${styleType[type]}`}
    >
      <h3 className="text-white font-semibold text-2xl">{heading}</h3>
      <p className="text-white text-[15px] first-letter:capitalize">
        {children}
      </p>
      <Button type="slider">Learn More</Button>
    </div>
  )
}
