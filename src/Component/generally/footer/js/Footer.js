import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import '../css/style.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <Col lg={4}>
          <ul className="list-unstyled footer--menu">
            <li><Link to='/AdList' >خرید</Link></li>
            <li><Link to='/Contact-us' >ارتباط با ما</Link></li>
            <li><Link to='/AdInsert' >ثبت آگهی</Link></li>
            <li><Link to='/Blog' >بلاگ</Link></li>
            <li><Link to='/Profile' >ورود به پنل کاربری</Link></li>
          </ul>
        </Col>
        <Col lg={4} className="footer--trust">
          <img src={require('../../../../Img/enamad.png')} alt="" />
          <img src={require('../../../../Img/نماد-الکترونیکی2.png')} alt="" />
        </Col>
        <Col lg={4}>
          <div className="footer--newsLetter">
            <p>خبر برنامه</p>
            <input type="email" placeholder="آدرس ایمیل خود را وارد کنید" />
          </div>
          <div className="footer--contact_us">
            <p>ارتباط با ما</p>
            <ul className="list-unstyled footer--social_media">
              <li><FiInstagram /></li>
              <li><FiTwitter /></li>
              <li><FiMail /></li>
              <li><TbBrandTelegram /></li>
            </ul>
          </div>
        </Col>
      </div>
    </footer>
  )
}

export default Footer