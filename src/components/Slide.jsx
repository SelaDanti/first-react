import React from 'react';
import LadyInYoga from '../images/LadyInYoga.jpg';

const Slide = () => {
    return (
        <div id="body">
            <div id="tagline">
                <h1>Yoga</h1>
                <p>
                    For Better Health &amp; Flexibility
                </p>
            </div>
            <img src={LadyInYoga} alt="lady doing yoga" className="figure"/>
    	</div>
    );
}

export default Slide;