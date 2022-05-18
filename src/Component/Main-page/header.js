import React, {useState} from 'react';
import './style.css';
import { AiOutlineSearch } from "react-icons/ai";
import SimpleMap from './MapAmlak';
import NavigateButton from './navigateButton';
import { FcAdvertising } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";


const Header = (props) => {
  const [isActive, setActive] = useState('false')
  const goBot = () => {
      setActive(!isActive);
      console.log(isActive)
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
                <NavigateButton data={goBot} />
            </header>
        </div>
     );
}
 
export default Header;