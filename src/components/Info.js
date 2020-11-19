import React, { useState } from 'react';
import { Drawer} from 'antd';
import { GithubOutlined, FileDoneOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons'
import Top from './Top';
import Logo from '../public/logo.png'
import resume from '../public/marresume.pdf'
const Info = () => {
    
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
        <div className="pop-up-right arrow-container" onClick={showDrawer}>
        <div className="arrow-content">
    <svg id="more-arrows">
      <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
      <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
      <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
    </svg>
  </div>
        </div>
          <Drawer
            title=""
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <img src={Logo} alt="logo-img" />
           <Top />
           <div className="info-logos">
             <a style={{color: "inherit"}} href={resume}>
              <FileDoneOutlined style={{fontSize: '2rem', marginRight: '5%'}}/>
             </a>
             <a style={{color: "inherit"}} href="https://github.com/Mar5Planet">
              <GithubOutlined style={{fontSize: '2rem', marginRight: '5%'}}/>
             </a>
             <a style={{color: "inherit"}} href="https://www.linkedin.com/in/mar-mustafa-5b21ab122/">
              <LinkedinOutlined style={{fontSize: '2rem', marginRight: '5%'}}/>
             </a>
             <a style={{color: "inherit"}} href="https://amustaf.medium.com/">
              <MediumOutlined style={{fontSize: '2rem'}}/>
             </a>
           </div>
          </Drawer>
        </>
    );
}   

export default Info;