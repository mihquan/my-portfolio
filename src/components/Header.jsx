import logo from '../assets/logo.webp'

function Header() {
    return(
        <header className="bg-primary">
            <nav className="flex justify-between item-center py-4 px-8">
                <div>
                    <a href="/"><img className="w-12 rounded-full" src={logo} alt="Logo" /></a>
                </div>
                <div className="">
                    <ul className="flex gap-6 items-center">
                        <li><a href="#" className="text-text-primary hover:text-gray-700 transition">Blog</a></li>
                        <li><a href="/projects" className="text-text-primary hover:text-gray-700 transition">Projects</a></li>
                        <li><button className="bg-secondary text-text-secondary px-5 py-2 rounded-xl hover:bg-gray-800 transition" href="/contact">Contact Me</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;