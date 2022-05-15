import React from 'react';
import './style.css';
import { AiOutlineSearch } from "react-icons/ai";


const Header = (props) => {
    return ( 
        <div>
            <header>
                <img src={require('../../Img/GoogleMapTA.jpg')} />
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
            </header>
        </div>
     );
}
 
export default Header;