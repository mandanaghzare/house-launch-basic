import React from 'react';
import '../css/style.css'

function Menu() {
  return (
    <div className="header">
        <div className="menu">
            <a href="">پنل مدیریت</a>
            <a href="">درج آگهی</a>
            <a href="">خرید رهن اجاره</a>
        </div>
        <div className="logo">
            <img src={require("../../../../Img/logo.png")} alt="" />
        </div>
    </div>
  )
}

export default Menu