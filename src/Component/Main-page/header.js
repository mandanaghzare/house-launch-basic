import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import NeshanMap from './NeshanMap';
import NavigateButton from './navigateButton';
import { FcAdvertising } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { active, deActive } from '../../redux/activateSlice';


const Header = (props) => {
    const state = useSelector((state) => state.activate.value)
    const dispatch = useDispatch()

    const goBot = () => {
        if(state == true){
            dispatch(deActive())
        }else{
            dispatch(active())
        }
    }
    
    return (
        <header className={!state ? "goBot" : null}>
            <NeshanMap/>
            <div className="backCover"></div>
            <div className="headerContent">
                <div className="logo">
                    <img src={require('../../Img/logo.png')} alt="logo" />
                </div>
                <div className="headerItems">
                    <Link exact="true" to='/Profile'>
                        <p>پنل مدیریت</p>
                        <span><MdAdminPanelSettings /></span>
                    </Link>
                    <Link to='/AdInsert'>
                        <p>درج آگهی</p>
                        <span id="_header_items_adv"><FcAdvertising /></span>
                    </Link>
                    <Link to='/AdList'>
                        <p>خرید رهن اجاره</p>
                        <span id="_header_items_adv"><BiBuildingHouse /></span>
                    </Link>
                </div>
            </div>
            <NavigateButton onClick={goBot} />
        </header>
     );
}
 
export default Header;