import {
  Sheet,

  SheetContent,
  SheetDescription,

  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./button"
import { Menu } from "lucide-react"

export const MobileNav = () => {
    return (
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu size={16} absoluteStrokeWidth /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-left">
          <SheetTitle>Rodwell Leo</SheetTitle>
          <SheetDescription>
            Crafting Exceptional Digital Experiences
          </SheetDescription>
        </SheetHeader>
        <nav className="grid gap-4 py-4">
          <ul className="space-y-5">
            <li><a href="/#work-experience">Experience</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/#contact-me">Contact Me</a></li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
    )
  }