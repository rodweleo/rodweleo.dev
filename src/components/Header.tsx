import { Link } from "react-router-dom";
import { NavBar } from "./Navigation";
import { useState } from "react";
import { Progress } from "./ui/progress";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { MobileNav } from "./ui/MobileNav";

export default function Header() {
  const [currentPosition, setCurrentPosition] = useState<number>(0)
  const { windowDimensions } = useWindowDimensions()
  document.addEventListener("scroll", () => {
    setCurrentPosition(Math.floor(window.scrollY / (Math.abs(document.body.getBoundingClientRect().height)) * 100))
  })

  return (
      <header className="w-full space-y-2.5 bg-white/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-start gap-40 justify-center w-full p-5 h-20">
          <Link to="/">
            <p className="font-semibold">
              rodwe<span className="text-blue-400">leo</span>
            </p>
          </Link>
          {
            windowDimensions.width < 900 ? <MobileNav/> : <NavBar />
          }
        </div>
        <Progress value={currentPosition} className="h-1"/>
      </header>
  );
}

