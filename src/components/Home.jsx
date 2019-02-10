import React, {Component} from 'react';
import Slide from './Slide';


class Home extends Component{
    state = {
        place: 'Home'
    }
    render(){
        return (
            <div>
                <Slide />
            </div>
        );
    }
}

export default Home;