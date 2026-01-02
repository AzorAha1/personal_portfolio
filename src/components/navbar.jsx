function Navbar() {
    return (
        <nav className='fixed left-0 top-0 bg-black/80 h-screen flex'>
            <ul className='flex flex-col gap-2 w-full'>
                <li><a href="#home" className='text-amber-300 hover:text-white'>Home</a></li>
                <li><a href="#about" className='text-amber-300 hover:text-white'>About</a></li>
                <li><a href="#projects" className='text-amber-300 hover:text-white'>Projects</a></li>
                <li><a href="#contact" className='text-amber-300 hover:text-white'>Contact</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;