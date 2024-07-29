import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./button";
import { Menu } from "lucide-react";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu size={16} absoluteStrokeWidth />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-left">
          <SheetTitle>Rodwell Leo</SheetTitle>
          <SheetDescription>
            Crafting Exceptional Digital Experiences
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-5">
          <ul className="space-y-5">
            <li>
              <SheetClose asChild>
                <a href="/#">Home</a>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <a href="/#technical-skills">Technical Skills</a>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <a href="/#work-experience">Experience</a>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <a href="/#projects">Projects</a>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <a href="/blog">Blog</a>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <a href="/#contact-me">Contact Me</a>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
