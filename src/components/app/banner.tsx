"use client"

import React, { useEffect, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Banner() {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("closed-banner")
    if (isBannerClosed) {
      setIsActive(false)
    }
  }, [])

  useEffect(() => {
    const navbar = document.querySelector("nav")
    if (navbar) {
      navbar.style.top = isActive ? "35px" : "0"
    }
  }, [isActive])

  const handleClose = (open: boolean) => {
    if (!open) {
      localStorage.setItem("closed-banner", "true")
      setIsActive(false)
    }
  }

  if (!isActive) return null

  return (
    <div className="fixed top-0 left-0 right-0 w-full border-b-2 border-b-white dark:border-b-black border-dashed h-[35px] bg-black dark:bg-white z-20">
      <div className="px-4 h-full text-white dark:text-black max-w-max mx-auto flex items-center gap-4 max-[350px]:gap-2 justify-between">
        <p className="text-sm max-[400px]:text-[11px]">
          I&apos;m looking for a job! Click{" "}
          <Dialog onOpenChange={handleClose}>
            <DialogTrigger className="underline cursor-pointer">
              here
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  I&apos;m looking for a job!
                </DialogTitle>
                <DialogDescription className="text-base">
                  Hi, my name is Samuel. I am a creator of this project.
                  <br />
                  <br />
                  I&apos;m looking for any kind of job at the moment. You can
                  see the rest of my work here:{" "}
                  <a
                    className="underline"
                    href="https://samke.me"
                    target="_blank"
                  >
                    samke.me
                  </a>
                  <br />
                  <br />
                  Contact:{" "}
                  <a
                    className="underline"
                    href="mailto:samuelbreznjak35@gmail.com"
                  >
                    Email
                  </a>
                  ,{" "}
                  <a
                    className="underline"
                    href="https://x.com/samuelbreznjak"
                    target="_blank"
                  >
                    X
                  </a>
                  ,{" "}
                  <a
                    className="underline"
                    href="https://linkedin.com/in/samuel-breznjak"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>{" "}
          for more info.
        </p>

        <button
          className="max-[400px]:text-[13px]"
          onClick={() => handleClose(false)}
        >
          ✕
        </button>
      </div>
    </div>
  )
}
