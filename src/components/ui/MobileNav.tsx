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
import { useNavigate } from "react-router-dom";

export const MobileNav = () => {
  const navigate = useNavigate()
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
        <nav className="mt-5 space-y-5">
          <ul className="space-y-5">
            <li>
              <SheetClose asChild>
                <a href="/">Home</a>
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
          </ul>
          <ul className="space-y-2.5">
            <li>
              <SheetClose asChild>
                <Button variant="outline" className="w-full" onClick={() => navigate("contact-me")}>Contact Me</Button>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Button className="w-full" onClick={() => navigate("request-a-quote")}>Request a Quote</Button>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
