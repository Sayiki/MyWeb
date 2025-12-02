import { Link } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { label: "Home", target: "home" },
    { label: "Experience", target: "experience" },
    { label: "Projects", target: "projects" },
    { label: "Certificates", target: "blog" },
    { label: "Contact", target: "contact" }
  ];
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-lg shadow-[0_10px_40px_rgba(15,23,42,0.45)] z-50">
      <ul className="flex justify-center gap-8 px-10 py-5">
        {navItems.map((item) => (
          <li key={item.target}>
            <Link
              to={item.target}
              smooth
              duration={500}
              offset={-68}
              className="cursor-pointer text-lg font-medium text-slate-200 transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:text-cyan-300 focus-visible:text-cyan-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
