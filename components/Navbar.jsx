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
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#E4E5E9] bg-gradient-to-r from-[#CBD0DA] via-[#E4E5E9] to-[#E4E5E9]">
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <span className="text-2xl font-bold tracking-[0.2em] text-black">Arzaq.</span>
        <ul className="ml-auto flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <li key={item.target}>
              <Link
                to={item.target}
                smooth
                duration={500}
                offset={-76}
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-black transition-all duration-150 hover:bg-[#C9CAD0] hover:text-black hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
