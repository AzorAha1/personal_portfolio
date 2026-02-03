import PropTypes from 'prop-types';

function Polariod({ imageSrc, altText, caption, className = '' }) {
    return (
        <div className={`absolute z-20 group ${className}`}style={{perspective: '1200px', transformStyle: 'preserve-3d' }}>

            {/* The Card: Smaller border, bigger image area */}
            <div className="bg-[#d0d9d5] p-1 pb-4 rounded-sm shadow-md
                            transition-all duration-500 ease-out
                            [transform:rotateX(25deg)_rotateZ(var(--tw-rotate))]
                            group-hover:[transform:rotateX(0deg)_scale(2.8)]
                            group-hover:-translate-y-24 group-hover:rotate-0
                            w-16 md:w-20 h-auto cursor-pointer ring-1 ring-black/5">

                {/* IMAGE CONTAINER: We use aspect-square but keep padding minimal to let the image breathe */}
                <div className='w-full aspect-square bg-gray-100 overflow-hidden shadow-inner border-[1px] border-black/5'>
                    <img 
                        src={imageSrc} 
                        alt={altText} 
                        className={`w-full h-full object-cover block grayscale-[20%] group-hover:grayscale-0 transition-all duration-300 select-none [image-rendering:optimizeQuality]`}
                        style={{
                            imageRendering: '-webkit-optimize-contrast',
                            WebkitTransform: 'translateZ(0)',
                            transform: 'translateZ(0)'
                        }}
                    />
                </div>

                {/* CAPTION: Kept very subtle at the bottom */}
                {caption && (
                    <p className="text-[3px] md:text-[4px] text-center text-black font-['PermanentMarker'] mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {caption}
                    </p>
                )}
            </div>
            
        </div>
    );
}

Polariod.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    caption: PropTypes.string,
    className: PropTypes.string
};

export default Polariod;