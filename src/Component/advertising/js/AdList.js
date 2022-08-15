import React from 'react'
import Menu from '../../generally/menu/js/Menu';
import { AiOutlineSearch } from 'react-icons/ai'
import AdvItem from '../../generally/advItem/js/AdvItem';
import InputRange from 'react-input-range';
import 

function AdList() {
    const [val, setVal] = React.useState({ min: 0, max: 100 });
    return (
        <div>
            <Menu />
            <div className="adlist">
                <div className="row">
                    <div className="col-md-9">
                        <div id="_search">
                            <input type="text" />
                            <button><AiOutlineSearch /></button>
                        </div>
                        <div id="_list">
                            <AdvItem />
                        </div>
                    </div>
                    <div className="col-md-3">
                    <InputRange
                        step={5}
                        formatLabel={value => null}
                        draggableTrack={false}
                        allowSameValues={false}
                        maxValue={100}
                        minValue={0}
                        value={val}
                        onChange={setVal}
                        onChangeComplete={args => console.log(args)}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdList