import wingx from '../assets/wingx.png';

function Home() {
    return (
        <section id='home' className='min-h-screen overflow-hidden bg-gradient-to-r from-black via-slate-950 relative flex items-center justify-center px-8 pt-20'>
            <div className='w-72 h-72 absolute bottom-20 right-40 group hover:opacity-50 transition-all duration-1000 hover:rotate-5 hover:scale-150'>
                <img 
                    src={wingx} 
                    alt="X-Wing"
                    className='w-full h-full group-hover:opacity-100' 
                />
            </div>
            

            <div className='space-y-8 text-center'>  {/* Increased spacing */}
                <h1 className='text-4xl md:text-6xl font-bold text-amber-400 font-["StardosStencil"] tracking-wider'>
                    Mohammed Faisal Adamu
                </h1>
                
                <p className='text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-["StardosStencil"]'>
                    Software Engineer
                    <br />
                    <span className='text-amber-300'>Lagos</span> • APIs that power the galaxy
                </p>
            </div>
        </section>
    )
}

{/* <div className='w-72 h-72 absolute bottom-20 right-40 opacity-20 group hover:opacity-50 
               transition-all duration-700 
               hover:scale-110 hover:rotate-2'> */}

export default Home;
