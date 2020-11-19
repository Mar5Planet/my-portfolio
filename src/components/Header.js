import React, { useState } from 'react'
import logo from '../public/logo.png'

function Header() {
    const [changeGif, setChangeGif] = useState(false)
    return(
        <header className={changeGif? "header gif2" : "header gif1"}>
            <span onClick={() => setChangeGif(!changeGif)}>
                <img className="my-logo" alt="mar-logo" src={logo}/>
            </span>
            <div className="header-info">
                <h1 style={{color: 'white', fontFamily:'Montserrat', fontWeight: '600'}}> Mar Mustafa </h1>
                <h3 style={{color: 'white'}}> Full Stack Engineer </h3>
                <a href="#projects">
                    <button className="btn-arr third">View Projects</button>
                </a>
                {/* <button class="btn third-r">Resume</button> */}
            </div>
        </header>
    )

}

export default Header;