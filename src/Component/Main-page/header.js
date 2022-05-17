import React, {useState} from 'react';
import './style.css';
import { AiOutlineSearch } from "react-icons/ai";
import SimpleMap from './MapAmlak';
import NavigateButton from './navigateButton';
import { BsFillArrowUpCircleFill } from "react-icons/bs";


const Header = (props) => {
    const [isActive, setActive] = useState('false')
    const goBot = () => {
        setActive(!isActive);
    }
    return ( 
        <div>
            <header className={!isActive ? "goBot" : null}>
                <SimpleMap />
                <div className="backCover"></div>
                <div className="headerContent">
                    <div className="logo">
                        <img src={require('../../Img/logo.png')} alt="logo" />
                    </div>
                    <div className="search">
                        <input type="search" placeholder='جستجوی موقعیت مکانی' />
                        <button><AiOutlineSearch /></button>
                    </div>
                    <div className="headerItems">
                        <a href="">پنل مدیریت</a>
                        <a href="">درج آگهی</a>
                        <a href="">خرید رهن اجاره</a>
                    </div>
                </div>                
                <div className="navigateButton" onClick={goBot}>
                    <BsFillArrowUpCircleFill />
                </div>
            </header>
        </div>
     );
}
 
export default Header;