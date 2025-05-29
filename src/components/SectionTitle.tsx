"use client"

import type React from "react"

interface SectionTitleProps {
  preTitle?: string
  title?: string
  align?: "left" | "center"
  children?: React.ReactNode
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <div
      className={`flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-center justify-center text-center"} mb-14`}
    >
      {props.preTitle && (
        <div className="inline-block mb-4 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 rounded-full w-fit">
          <span className="text-sm font-medium tracking-wider text-primary-600 dark:text-primary-400 uppercase">
            {props.preTitle}
          </span>
        </div>
      )}

      {props.title && (
        <h2 className="max-w-4xl mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl xl:text-5xl dark:text-white mb-4">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-3xl text-lg leading-relaxed text-gray-600 lg:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </div>
  )
}
