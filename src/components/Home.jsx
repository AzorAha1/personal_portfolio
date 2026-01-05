import wingx from '../assets/wingx.png';

function Home() {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center px-8 pt-20'>
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



export default Home;
