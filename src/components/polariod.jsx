import PropTypes from 'prop-types';

function Polariod({ imageSrc, altText, caption }) {
    return (
        <div className={`absolute z-20 ${className}`}>
            
            
        </div>
    );
}

Polariod.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    caption: PropTypes.string
};

export default Polariod;