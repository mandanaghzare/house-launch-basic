import React, { useState, useEffect } from 'react';
import Menu from '../../generally/menu/js/Menu';
import '../css/style.css';
import StatesIran from '../../../data/states.json';
import CitiesIran from '../../../data/cities.json';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Checkbox from './CheckBox';

function AdInsert() {
    const [stateVal,setStateVal]=useState('');
    const stateSelect=(e)=>{
        setStateVal(e.target.innerText);
        console.log(e.target.value)
    }
    
    const [cityVal,setCityVal]=useState('');
    const citySelect=(e)=>{
        setCityVal(e.target.value);
    }

    const [stateId, setStateId] = useState('');
    const handleState = (event) => {
        const getStateId = event.target.value;
        setStateId(getStateId);
    }

    const [selectImages, setSelectImages] = useState([])
    const imageHandleChange = (e) => {
        if(e.target.files){
            console.log(e.target.files)
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectImages((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
        }
    }
    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <div className="items" key={photo}><img src={photo} /></div>
        })
    }

    const [checked, setChecked] = React.useState(false);
    const handleChange = (e) => {
        setChecked(!checked);
    };

    return (
        <div className="adInsert">
            <Menu />
            <form id="_adInsert_content">
                <div id="_top_info">
                    <select onChange={citySelect}>
                        <option hidden>--استان--</option>
                        {StatesIran.map((state, index) => (
                            <option onClick={stateSelect} value={state.id} key={index} href="#/action-1">{state.name}</option>
                        ))}
                    </select>
                    <select onChange={handleState}>
                        <option hidden>--شهر--</option>
                        {StatesIran && CitiesIran.map((city, index) => (
                            city.province_id == cityVal ?
                            <option value={city.id} key={index}>{city.name}</option>
                            :
                            ''
                        ))}
                    </select>
                    <input type="text" className="w-100" placeholder="عنوان آگهی" />
                    <div id="_img_upload">
                        <p>بارگذاری عکس</p>
                        <div id="_img_list">
                            <input type="file" multiple onChange={imageHandleChange} id="_upload" />
                            <label htmlFor="_upload">
                                <p>بارگذاری عکس</p>
                                <AiOutlinePlusCircle />
                            </label>
                            {renderPhotos(selectImages)}
                        </div>
                    </div>
                    <input type="text" placeholder="متراژ" />
                    <input type="text" placeholder="سال ساخت" />
                    <input type="text" placeholder="قیمت کل" />
                    <input type="text" placeholder="قیمت هر متر" />
                    <input type="text" className="w-100" placeholder="آدرس" />
                </div>
                <div id="_location">
                    <p>آدرس خود را روی نقشه مشخص کنید</p>
                    <div id="_map">
                        <img src={require('../../../Img/Scroll Group 1.png')} alt="" />
                    </div>
                </div>
                <div id="_bot_info">
                    <p>امکانات</p>
                    <select id="">
                        <option value="">طبقه 4</option>
                    </select>
                    <select id="">
                        <option value="">تعداد اتاق 2</option>
                    </select>
                    <select id="">
                        <option value="">کف سرامیک</option>
                    </select>
                    <div className="options">
                        <Checkbox value={'انباری'} />
                        <Checkbox value={'آسانسور'} />
                        <Checkbox value={'پارگینگ'} />
                        <Checkbox value={'سند'} />
                        <Checkbox value={'گاز رومیزی'} />
                        <Checkbox value={'پکیج'} />
                    </div>
                    <div className="description">
                        <p>توضیحات</p>
                        <textarea placeholder="توضیحات را بنویسد"></textarea>
                    </div>
                </div>
                <button className="submit" type="submit">ثبت آگهی</button>
            </form>
        </div>
    )
}

export default AdInsert