function Navbar() {
    return (
        <nav className='fixed left-20 top-10 bg-black/80 h-screen flex'>
            <ul className='flex flex-col gap-2 w-full'>
                <li><a href="#home" className='text-amber-300 hover:text-white border-r-4 border-transparent hover:border-amber-400'>Home</a></li>
                <li><a href="#about" className='text-amber-300 hover:text-white border-r-4 border-transparent hover:border-amber-400'>About</a></li>
                <li><a href="#projects" className='text-amber-300 hover:text-white border-r-4 border-transparent hover:border-amber-400'>Projects</a></li>
                <li><a href="#contact" className='text-amber-300 hover:text-white border-r-4 border-transparent hover:border-amber-400'>Contact</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;
