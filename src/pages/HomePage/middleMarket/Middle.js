import React from 'react';
import logo from '../../../assets/middle1.png';
import log from '../../../assets/middle2.png';
import "./middle.css";

const Middle = () => {
    return (
        <div className='w-full text-center glide bg-white'>
            <h4 className='d-flex justify-content-center mt-3'>Trusted All Across The Lower Middle Market</h4>
            <div className='train-container'>
                <div className="train">
                    <img src={logo} width="200px" height="200px" alt="Image 1" />
                    <img src={log} width="200px" height="200px" alt="Image 2" />
                    <img src={logo} width="200px" height="200px" alt="Image 3" />
                    <img src={logo} width="200px" height="200px" alt="Image 4" />
                    <img src={log} width="200px" height="200px" alt="Image 5" />
                    <img src={logo} width="200px" height="200px" alt="Image 1" />
                    <img src={logo} width="200px" height="200px" alt="Image 2" />
                    <img src={logo} width="200px" height="200px" alt="Image 3" />
                    <img src={log} width="200px" height="200px" alt="Image 4" />
                    <img src={logo} width="200px" height="200px" alt="Image 5" />
                </div>
            </div>
        </div>
    );
}

export default Middle;
