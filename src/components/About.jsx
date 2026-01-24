import stardeck3 from '../assets/star-deck3.png';
import myself from '../assets/self.png';
import meplaying from '../assets/playing.png';
import gym from '../assets/gym.png';
import Polariod from './Polaroid.jsx';
function About() {
    return (
        <section id='about' className='min-h-screen bg-black'>
            <div className="pt-8 flex justify-center px-8">
               <h1 className='text-4xl md:text-6xl font-bold text-amber-400 font-["StardosStencil"] tracking-wider'>About me</h1> 
            </div>
            <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                <div className="md:col-span-2 relative h-[600px] bg-black rounded-2xl bg-cover
                                ring-4 ring-amber-500/30 ring-offset-4 ring-offset-black/50
                                shadow-2xl shadow-amber-500/20 rounded-2xl overflow-hidden"

                    style={{ backgroundImage: `url(${stardeck3})` }}>
                    <Polariod 
                        imageSrc={myself} 
                        altText="TOO SERIOUS" 
                        caption="TOO SERIOUS, CHILL OUT LIL BRO..."
                        className="bottom-[14%] left-[22%] -rotate-12" 
                    />
                    <Polariod 
                        imageSrc={meplaying} 
                        altText="BALLIN..." 
                        caption="BALLIN..."
                        className="bottom-[20%] left-[45%] -rotate-2" 
                    />
                    <Polariod 
                        imageSrc={gym} 
                        altText="GETTING SWOLE" 
                        caption="GETTING SWOLE"
                        className="bottom-[14%] left-[68%] -rotate-2" 
                    />
                        
                </div>
                <div className="md:col-span-1 bg-blue-200">
                </div>
            </div>
        </section>
    ) 
}

export default About;