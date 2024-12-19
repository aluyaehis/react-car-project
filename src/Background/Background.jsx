import PropTypes from 'prop-types';
import './Background.css';
import carVideo from '../assets/carVideo.mp4';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg'



const Background = ({playStatus, heroCount}) => {
    
    if(playStatus){
        return(
            <video className='background' autoPlay loop muted>
                <source src= {carVideo} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount===0){
        return <img src={car1} className="background  fade-in" alt="" />;
    }
    else if(heroCount===1){
        return <img src={car2} className="background  fade-in" alt="" />;
    }
    else if(heroCount===2){
        return <img src={car3} className="background  fade-in" alt="" />;
    }
}

Background.propTypes = {
    playStatus: PropTypes.bool.isRequired, 
  heroCount: PropTypes.number.isRequired,
};

Background.defaultProps = {
    playStatus: false,
    heroCount: 0,
};

export default Background