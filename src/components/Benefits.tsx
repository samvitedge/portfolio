import Image from "next/image"
import React from "react"
import { Container } from "./Container"

interface BenefitsProps {
  imgPos?: "left" | "right"
  data: {
    imgPos?: "left" | "right"
    title: string
    desc: string
    image: any
    bullets: {
      title: string
      desc: string
      icon: React.ReactNode
    }[]
  }
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props

  return (
    <Container className="py-16">
      <div className="flex flex-wrap items-center lg:gap-16 lg:flex-nowrap">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""}`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur-3xl opacity-10"></div>
            <Image
              src={data.image || "/placeholder.svg"}
              width={521}
              height={521}
              alt="Benefits"
              className="object-cover rounded-2xl relative z-10"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 mt-8 lg:mt-0 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full">
              <div className="inline-block mb-4 px-3 py-1 bg-primary-50 dark:bg-primary-900/30 rounded-full w-fit">
                <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Why Choose Us</span>
              </div>

              <h3 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl dark:text-white mb-4">
                {data.title}
              </h3>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">{data.desc}</p>
            </div>

            <div className="w-full space-y-6">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function Benefit(props: any) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="flex items-center justify-center flex-shrink-0 mt-1  rounded-lg w-12 h-12 transition-colors duration-200">
        {React.cloneElement(props.icon, {
          className: "w-6 h-6 text-primary-600 dark:text-primary-400",
        })}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{props.title}</h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{props.children}</p>
      </div>
    </div>
  )
}
