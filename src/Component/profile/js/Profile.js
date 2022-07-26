import React from 'react'
import Menu from '../../generally/menu/js/Menu';
import { MdOutlineAdminPanelSettings, MdOutlineExitToApp } from 'react-icons/md';
import { SiHomeadvisor } from 'react-icons/si';
import { AiOutlineHeart } from 'react-icons/ai';
import '../css/style.css'

function Profile() {
  return (
    <>
        <Menu />
        <div className="profile">
            <div className="tablist">
                <div className="name">
                    <p>ماندانا زارع</p>
                </div>
                <ul className="unstyled-list">
                    <li><MdOutlineAdminPanelSettings /> <span>پنل مدیریت</span></li>
                    <li><SiHomeadvisor /> <span>اگهی ها</span></li>
                    <li><AiOutlineHeart /> <span>علاقمندی های</span></li>
                    <li><MdOutlineExitToApp /> <span>خروج</span></li>
                </ul>
            </div>
            <div className="tabContent">
                <div className="panel">                    
                    <form action="">
                        <div className="_field">
                            <input type="text" id="name" placeholder='placeholder' />
                            <label htmlFor="name">نام کاربری</label>
                        </div>
                        <div className="_field">
                            <input type="email" id="email" placeholder='placeholder' />
                            <label htmlFor="email">ایمیل</label>
                        </div>
                        <div className="_field">
                            <input type="text" id="phone" placeholder='placeholder' />
                            <label htmlFor="phone">شماره تماس</label>
                        </div>
                        <div className="_field">
                            <input type="password" id="pass" placeholder='placeholder' />
                            <label htmlFor="pass">پسورد</label>
                        </div>
                        <div className="_field">
                            <input type="text" id="code" placeholder='placeholder' />
                            <label htmlFor="code">کد اتحادیه</label>
                        </div>
                        <div className="submit">
                            <button>ذخیره تغییرات</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile