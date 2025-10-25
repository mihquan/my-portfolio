function Footer() {
    return (
        <footer className="bg-primary">
            <nav class="flex justify-center item-center py-4 px-8">
                <div class="">
                    <hr className="text-white"></hr>
                    <ul className="flex justify-between gap-6 items-center py-4 mx-4">
                        <li><a href="#" className="text-white hover:text-gray-700 transition">Blog</a></li>
                        <li><a href="#" className="text-white hover:text-gray-700 transition">Projects</a></li>
                        <li><a href="#" className="text-white hover:text-gray-700 transition">Contact</a></li>
                    </ul>
                    <ul className="flex justify-between items-center py-4 mx-4">
                        <li>
                            <a href="#" className="text-black hover:text-gray-700 transition">
                                <img 
                                    className="w-8 rounded-xl" 
                                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                                    alt="github link"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-black hover:text-gray-700 transition">
                                <img 
                                    className="w-8 rounded-xl" 
                                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                                    alt="github link"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-black hover:text-gray-700 transition">
                                <img 
                                    className="w-8 rounded-xl" 
                                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                                    alt="github link"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;