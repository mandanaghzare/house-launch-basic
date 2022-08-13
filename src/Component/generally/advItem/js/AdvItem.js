import React from 'react';
import '../css/style.css';
import { GrGallery } from 'react-icons/gr';
import { GiClick } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function AdvItem() {
  return (
    <Link to="/Advertising" className="advItem">
        <div id="_image">
            <img src={require('../../../../Img/Interior-Designers.jpg')} alt="" />
            <div id="_gallery"><GrGallery /></div>
        </div>
        <div id="_details">
            <ul id="__main_details" className="list-unstyled">
                <li>
                    <p>فروش</p>
                </li>
                <li>
                    <p className="text-left">دو روز قبل</p>
                </li>
                <li>
                    <p className="address">البرز- کرج- گوهردشت- خیابان چهاردهم- ساختمان</p>
                </li>
                <li>
                    <p className="text-left">200،000،000 تومان</p>
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
    </Link>
  )
}

export default AdvItem