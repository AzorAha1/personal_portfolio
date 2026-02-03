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
            <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 px-6">
                <div className="relative h-[600px] bg-black rounded-2xl bg-cover
                                ring-4 ring-amber-500/30 ring-offset-4 ring-offset-black/50
                                shadow-2xl shadow-amber-500/20 rounded-2xl overflow-hidden"

                    style={{ backgroundImage: `url(${stardeck3})` }}>
                    <Polariod 
                        imageSrc={myself} 
                        altText="TOO SERIOUS" 
                        caption="TOO SERIOUS, CHILL OUT LIL BRO..."
                        className="bottom-[25%] left-[22%] -rotate-36" 
                    />
                    <Polariod 
                        imageSrc={meplaying} 
                        altText="BALLIN..." 
                        caption="BALLIN..."
                        className="bottom-[25%] left-[45%] -rotate-2" 
                    />
                    <Polariod 
                        imageSrc={gym} 
                        altText="GETTING SWOLE" 
                        caption="GETTING SWOLE"
                        className="bottom-[25%] left-[68%] -rotate-2" 
                    />
                        
                </div>
                <div>
                    <div className="inline-flex items-baseline gap-1">
                        <span className="font-bold text-white font-['StardosStencil']">
                        My name is Faisal Adamu
                        </span>
                        <span className="text-[10px] font-normal italic opacity-60">
                        (pronounced /fai-sahl ah-dah-moo/)
                        </span>
                    </div>
                    <br />
                    <br />
                    <p className="font-['StardosStencil'] text-white text-justify leading-relaxed text-[20px]">
                        <span>I'm a 25-year-old backend engineer based in Lagos. I studied Computer Science and went through the intense 12-month ALX Africa program where I really sharpened my backend skills.</span><br /><br />
                        <span>I build APIs and databases that actually scale—Python/Flask and Java/Spring Boot are my main tools, with MySQL and MongoDB for data. I work with Redis for caching and performance optimization.</span><br /><br />
                        When projects need it, I jump into fullstack work with React and the usual frontend stuff.
                        If you need someone who writes clean, reliable code and can handle both backend architecture and fullstack work, let's talk.
                    </p>
                </div>
            </div>
        </section>
    ) 
}

export default About;