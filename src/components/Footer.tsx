import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 p-5 flex justify-between gap-5 w-full bottom-0">
      <p className="text-slate-600">&copy; {year} Rodwell Leo. All Rights Reserved.</p>
      <ul className="flex items-center gap-5">
        <li><Link to="https://github.com/rodweleo" target="_blank"><Github /></Link></li>
        <li><Link to="https://www.linkedin.com/in/rodweleo/" target="_blank"><Linkedin /></Link></li>
        <li><Link to="mailto:leorodwel86@gmail.com"><Mail /></Link></li>
      </ul>

    </footer>
  );
}
