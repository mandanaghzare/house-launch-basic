import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

function Menu() {
  return (
    <div className="header">
      <div className="menu">
          <Link to='/'>نقشه</Link>
          <Link to='/Profile'>پنل مدیریت</Link>
          <Link to='/AdInsert'>درج آگهی</Link>
          <Link to='/Advertising'>خرید رهن اجاره</Link>
      </div>
      <Link to='/' className="logo d-none d-sm-block">
          <img src={require("../../../../Img/logo.png")} alt="" />
      </Link>
    </div>
  )
}

export default Menu