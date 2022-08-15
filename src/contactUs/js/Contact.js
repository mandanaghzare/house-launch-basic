import React from 'react'
import Menu from '../../Component/generally/menu/js/Menu';
import '../css/style.css';

function Contact() {
  return (
    <div>
      <Menu />
      <div className="contact_us">
        <div id="_share_opinion">
          <p>نظر خود را با ما به اشتراک بگذارید</p>
          <div className="d-flex flex-column">
            <label className="mb-2">آدرس ایمیل</label>
            <input type="text" />
          </div>
          <div className="d-flex flex-column">
            <label className="mb-2">توضیحات</label>
            <textarea rows="7"></textarea>
          </div>
        </div>
        <div id="_social_media">
          <div id="__item">
            <div id="___image"><img src={require('../../Img/icons/Insta Icon.png')} alt="" /></div>
            <span>Amlak_Amlak</span>
          </div>
          <div id="__item">
            <div id="___image"><img src={require('../../Img/icons/mail.png')} alt="" /></div>
            <span>Amlak_Amlak</span>
          </div>
          <div id="__item">
            <div id="___image"><img src={require('../../Img/icons/Twitter Icon.png')} alt="" /></div>
            <span>Amlak_Amlak</span>
          </div>
          <div id="__item">
            <div id="___image"><img src={require('../../Img/icons/Telegram Icon.png')} alt="" /></div>
            <span>Amlak_Amlak</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact