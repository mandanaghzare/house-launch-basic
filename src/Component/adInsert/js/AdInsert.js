import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Menu from '../../generally/menu/js/Menu';
import '../css/style.css';
import StatesIran from '../../../data/states.json';
import CitiesIran from '../../../data/cities.json';

function AdInsert() {
    const [stateVal,setStateVal]=useState('');
    const stateSelect=(e)=>{
        setStateVal(e.target.innerText);
        console.log(e.target.value)
    }
    
    const [cityVal,setCityVal]=useState('');
    const citySelect=(e)=>{
        setCityVal(e.target.innerText);
    }

    const [stateId, setStateId] = useState('');
    const handleState = (event) => {
        const getStateId = event.target.value;
        setStateId(getStateId);
        console.log(event.target.value)
    }

    return (
        <div className="adInsert">
            <Menu />
            <div id="_adInsert_content">
                <div id="_top_info">
                    <select>
                        <option hidden>--استان--</option>
                        {StatesIran.map((state, index) => (
                            <option onClick={stateSelect} value={state.id} key={index} href="#/action-1">{state.name}</option>
                        ))}
                    </select>
                    <select>
                        <option hidden>--شهر--</option>
                        {StatesIran && CitiesIran.map((city, index) => (
                            <option value={city.id} key={index} href="#/action-1">{city.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AdInsert