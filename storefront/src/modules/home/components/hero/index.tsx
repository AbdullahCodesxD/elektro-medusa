"use client"
import DesktopLinks from "./desktopLinks"
import HomePageSlider from "./slider"
import SliderCategoriesComponent from "./sliderCategoriesComponent"
import SliderSideComponentsDesktop from "./sliderSide"

const Hero = () => {
  const collections = [
    {
      slug: "featured",
      title: "Featured",
    },
    {
      slug: "siemens",
      title: "Siemens",
    },
    {
      slug: "allen-bradley",
      title: "Allen Bradley",
    },
    {
      slug: "jung",
      title: "Jung",
    },
  ]
  return (
    <div>
      <div className="flex md:pb-5">
        <DesktopLinks />
        <div className="w-full custom ">
          <div
            className="md:grid w-full custom-for-slider "
            style={{
              gridTemplateColumns: "1fr 400px",
            }}
          >
            <HomePageSlider />
            <SliderSideComponentsDesktop />
          </div>
          <SliderCategoriesComponent categories={collections} />
        </div>
      </div>
    </div>
  )
}

export default Hero
