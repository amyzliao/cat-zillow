import React from "react";
import '../Styling/home.css';

const Home = () => {
    return (
        <div className="home">
            <button className = 'profile'>
                <a className='wtf' href="/profile">
                    <div id="submit-text">Profile</div>
                </a>    
            </button>
            <div className="adopt-btn">
                <a className="btn1" href="/adoptcat">
                    <div id="submit-text">Adopt a Cat</div>              
                </a>
            </div>
            <div className="add-btn">
                <a className='btn2' href="/addcat">
                    <div id="submit-text">Add a Cat</div>
                </a>
            </div>   
        </div>
    )
}

export default Home; 