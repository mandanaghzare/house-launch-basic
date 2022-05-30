import React, {useState,useEffect} from 'react';
import './style.css';
import NeshanMap from './NeshanMap';
import NavigateButton from './navigateButton';
import { FcAdvertising } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";


const Header = (props) => {
    const [isActive, setActive] = useState('false')
    const goBot = () => {
        setActive(!isActive);
    }
    
    return (
        <header className={!isActive ? "goBot" : null}>
            <NeshanMap activate={isActive} setActivate={setActive} resultClick={goBot}/>
            <div className="backCover"></div>
            <div className="headerContent">
                <div className="logo">
                    <img src={require('../../Img/logo.png')} alt="logo" />
                </div>
                <div className="headerItems">
                    <a href="">
                        <p>پنل مدیریت</p>
                        <span><MdAdminPanelSettings /></span>
                    </a>
                    <a href="">
                        <p>درج آگهی</p>
                        <span id="_header_items_adv"><FcAdvertising /></span>
                    </a>
                    <a href="">
                        <p>خرید رهن اجاره</p>
                        <span id="_header_items_adv"><BiBuildingHouse /></span>
                    </a>
                </div>
            </div>
            <NavigateButton onClick={goBot} />
        </header>
     );
}
 
export default Header;