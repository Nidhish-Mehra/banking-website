import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="slider fullscreen">
            <ul className="slides">
                <li>
                    <img src="/image1.jpg"/>
                    <div className="caption left-align">
                        <h5>Welcome to</h5>
                        <h3>GRIP Bank</h3>
                    </div>
                </li>
                <li>
                    <img src="/image2.png"/>
                    <div className="caption center-align">
                        <h5>Hassle Free</h5>
                        <h3>Money Transfer</h3>
                    </div>
                </li>
                <li>
                    <img src="/image3.png"/>
                    <div className="caption right-align">
                        <h5>Precise Record of</h5>
                        <h3>Each Transaction</h3>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Home
