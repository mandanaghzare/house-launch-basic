import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

function Menu() {
  return (
    <div className="header">
      <div className="menu">
          <Link to='/'>نقشه</Link>
          <Link to='/AdList'>{window.innerWidth < 576 ? 'ملک' : 'خرید رهن اجاره'}</Link>
          <Link to='/AdInsert'>{window.innerWidth < 576 ? 'آگهی' : 'درج آگهی'}</Link>
          <Link to='/Profile'>{window.innerWidth < 576 ? 'پنل' : 'پنل مدیریت'}</Link>
          <Link to='/Blog'>بلاگ</Link>
          <Link to='/Contact-us'>{window.innerWidth < 576 ? 'تماس' : 'ارتباط با ما'}</Link>
      </div>
      <Link to='/' className="logo d-none d-sm-block">
          <img src={require("../../../../Img/logo.png")} alt="" />
      </Link>
    </div>
  )
}

export default Menu