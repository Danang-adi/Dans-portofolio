import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">Dans</a>
                    <div className={`w-7 h-5 bg-black relative cursor-pointer z-40 md:hidden ${menuOpen ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"}`} onClick={() => setMenuOpen((prev) => !prev)}>
                         &#9776; {/* kode untuk hamburger menu icon / Navbar icon mobile device */}
                    </div>
                    <div className="hidden md:flex items-center space-x-8 ">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#overview" className="text-gray-300 hover:text-white transition-colors">Overview</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}