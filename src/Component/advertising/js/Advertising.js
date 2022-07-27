import React from 'react';
import { BsFillSuitHeartFill, BsImage, BsShareFill } from 'react-icons/bs';
import '../css/style.css'

function Advertising() {
  return (
    <div className="advertising">
        <div id="gallery">
            <div id="_one_big_img">
                <div className="buttons">
                    <button><BsFillSuitHeartFill /></button>
                    <button><BsShareFill /></button>
                </div>
                <img src={require('../../../Img/Interior-Designers-1.jpg')} alt="" />
            </div>
            <div id="_two_small_img">
                <img src={require('../../../Img/download.jpg')} alt="" />
                <img src={require('../../../Img/unit-design.jpg')} alt="" />
                <div className="imgSlide">
                    <BsImage /><span>20</span>
                </div>
            </div>
        </div>
        <div id="_details">
            <ul id="__main_details" className="list-unstyled">
                <li>
                    <p>فروش</p>
                </li>
                <li>
                    <p class="text-left">دو روز قبل</p>
                </li>
                <li>
                    <p class="address">البرز- کرج- گوهردشت- خیابان چهاردهم- ساختمان</p>
                </li>
                <li>
                    <p class="text-left">200،000،000 تومان</p>
                </li>
            </ul>
            <ul id="__sub_details" className="list-unstyled">
                <li>
                    <p>آپارتمان</p>
                </li>
                <li>
                    <p>طبقه دوم</p>
                </li>
                <li>
                    <p>املاک الوان</p>
                </li>
                <li>
                    <p>انباری</p>
                </li>
                <li>
                    <p>آسانسور</p>
                </li>
                <li>
                    <p>گاز رو کابینتی</p>
                </li>
                <li>
                    <p>سنددار</p>
                </li>
                <li>
                    <p>پارکینگ</p>
                </li>
                <li>
                    <p>پارکت</p>
                </li>
                <li>
                    <p>پکیج</p>
                </li>
                <li>
                    <p>تراس</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Advertising;