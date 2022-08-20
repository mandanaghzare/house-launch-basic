import React, { useState } from 'react'
import Menu from '../../generally/menu/js/Menu';
import { AiOutlineSearch } from 'react-icons/ai'
import AdvItem from '../../generally/advItem/js/AdvItem';
import InputRange from 'react-input-range';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DragMove from "./DragMove";
import 'react-tabs/style/react-tabs.css';
import '../css/style.css';
import Footer from '../../generally/footer/js/Footer';

function AdList() {
    const [priceVal, setPriceVal] = React.useState({ min: 1, max: 100 });
    const [footageVal, setFootageVal] = React.useState({ min: 30, max: 100 });
    const [ageVal, setAgeVal] = React.useState({ min: 0, max: 100 });
    const [roomVal, setRoomVal] = React.useState({ min: 0, max: 1 });
    const [translate, setTranslate] = useState({
        y: 0
    });
    
    const handleDragMove = (e) => {
        translate.y >= -1 ? 
        setTranslate({
            y: -450 
        })
        : setTranslate({
            y: 0 
        }) 
        console.log(translate.y)
        translate.y == -600 ? 
        document.body.style.overflow = "visible" :
        document.body.style.overflow = "hidden"
    };

    return (
        <div>
            <Menu />
            <div className="adList">
                <div className="row">
                    <div className="col-lg-9">
                        <div id="_search">
                            <input type="text" placeholder="جستوجوی موقعیت مکانی" />
                            <button><AiOutlineSearch /></button>
                        </div>
                        <div id="_list">
                            <AdvItem />
                            <AdvItem />
                            <AdvItem />
                            <AdvItem />
                        </div>
                    </div>
                    {window.innerWidth < 991 ?
                    <DragMove onDragMove={handleDragMove} className="col-lg-3" style={{transform: `translateY(${translate.y}px)`}}>
                            <div className="filters">
                                <h6>فیلتر ها</h6>
                                <Tabs>
                                    <TabList>
                                        <Tab>خرید</Tab>
                                        <Tab>اجاره</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="renge_filter">
                                            <p>محدوده قیمتی (میلیارد تومان)</p>
                                            <InputRange
                                                step={1}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={100}
                                                minValue={1}
                                                value={priceVal}
                                                onChange={setPriceVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${priceVal.min}`}</div>
                                                <div>{`${priceVal.max}`}</div>
                                            </div>
                                        </div>
                                        <div className="renge_filter">
                                            <p>متراژ (متر مربع)</p>
                                            <InputRange
                                                step={5}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={100}
                                                minValue={30}
                                                value={footageVal}
                                                onChange={setFootageVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${footageVal.min}`}</div>
                                                <div>{`${footageVal.max}`}</div>
                                            </div>
                                        </div>
                                        <div className="renge_filter">
                                            <p>سن بنا</p>
                                            <InputRange
                                                step={1}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={100}
                                                minValue={0}
                                                value={ageVal}
                                                onChange={setAgeVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${ageVal.min}`}</div>
                                                <div>{`${ageVal.max}`}</div>
                                            </div>
                                        </div>
                                        <div className="renge_filter">
                                            <p>تعداد خواب</p>
                                            <InputRange
                                                step={1}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={10}
                                                minValue={0}
                                                value={roomVal}
                                                onChange={setRoomVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${roomVal.min}`}</div>
                                                <div>{`${roomVal.max}`}</div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="renge_filter">
                                            <p>محدوده قیمتی (میلیارد تومان)</p>
                                            <InputRange
                                                step={1}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={100}
                                                minValue={1}
                                                value={priceVal}
                                                onChange={setPriceVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${priceVal.min==1 ? 'کمتر از دو میلیارد' : priceVal.min}`}</div>
                                                <div>{`${priceVal.max == 100 ? 'بیشتر از صد میلیارد' : priceVal.max}`}</div>
                                            </div>
                                        </div>
                                        <div className="renge_filter">
                                            <p>متراژ (متر مربع)</p>
                                            <InputRange
                                                step={5}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={100}
                                                minValue={30}
                                                value={footageVal}
                                                onChange={setFootageVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${footageVal.min}`}</div>
                                                <div>{`${footageVal.max}`}</div>
                                            </div>
                                        </div>
                                        <div className="renge_filter">
                                            <p>سن بنا</p>
                                            <InputRange
                                                step={1}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={100}
                                                minValue={0}
                                                value={ageVal}
                                                onChange={setAgeVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${ageVal.min}`}</div>
                                                <div>{`${ageVal.max}`}</div>
                                            </div>
                                        </div>
                                        <div className="renge_filter">
                                            <p>تعداد خواب</p>
                                            <InputRange
                                                step={1}
                                                formatLabel={value => null}
                                                draggableTrack={false}
                                                allowSameValues={false}
                                                maxValue={10}
                                                minValue={0}
                                                value={roomVal}
                                                onChange={setRoomVal}
                                                onChangeComplete={args => console.log(args)}
                                            />
                                            <div className="renge_result">
                                                <div>{`${roomVal.min}`}</div>
                                                <div>{`${roomVal.max}`}</div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                    </DragMove>
                    :
                    <div className="col-lg-3">
                        <div className="filters">
                            <h6>فیلتر ها</h6>
                            <Tabs>
                                <TabList>
                                    <Tab>خرید</Tab>
                                    <Tab>اجاره</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="renge_filter">
                                        <p>محدوده قیمتی (میلیارد تومان)</p>
                                        <InputRange
                                            step={1}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={100}
                                            minValue={1}
                                            value={priceVal}
                                            onChange={setPriceVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${priceVal.min}`}</div>
                                            <div>{`${priceVal.max}`}</div>
                                        </div>
                                    </div>
                                    <div className="renge_filter">
                                        <p>متراژ (متر مربع)</p>
                                        <InputRange
                                            step={5}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={100}
                                            minValue={30}
                                            value={footageVal}
                                            onChange={setFootageVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${footageVal.min}`}</div>
                                            <div>{`${footageVal.max}`}</div>
                                        </div>
                                    </div>
                                    <div className="renge_filter">
                                        <p>سن بنا</p>
                                        <InputRange
                                            step={1}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={100}
                                            minValue={0}
                                            value={ageVal}
                                            onChange={setAgeVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${ageVal.min}`}</div>
                                            <div>{`${ageVal.max}`}</div>
                                        </div>
                                    </div>
                                    <div className="renge_filter">
                                        <p>تعداد خواب</p>
                                        <InputRange
                                            step={1}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={10}
                                            minValue={0}
                                            value={roomVal}
                                            onChange={setRoomVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${roomVal.min}`}</div>
                                            <div>{`${roomVal.max}`}</div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="renge_filter">
                                        <p>محدوده قیمتی (میلیارد تومان)</p>
                                        <InputRange
                                            step={1}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={100}
                                            minValue={1}
                                            value={priceVal}
                                            onChange={setPriceVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${priceVal.min==1 ? 'کمتر از دو میلیارد' : priceVal.min}`}</div>
                                            <div>{`${priceVal.max == 100 ? 'بیشتر از صد میلیارد' : priceVal.max}`}</div>
                                        </div>
                                    </div>
                                    <div className="renge_filter">
                                        <p>متراژ (متر مربع)</p>
                                        <InputRange
                                            step={5}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={100}
                                            minValue={30}
                                            value={footageVal}
                                            onChange={setFootageVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${footageVal.min}`}</div>
                                            <div>{`${footageVal.max}`}</div>
                                        </div>
                                    </div>
                                    <div className="renge_filter">
                                        <p>سن بنا</p>
                                        <InputRange
                                            step={1}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={100}
                                            minValue={0}
                                            value={ageVal}
                                            onChange={setAgeVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${ageVal.min}`}</div>
                                            <div>{`${ageVal.max}`}</div>
                                        </div>
                                    </div>
                                    <div className="renge_filter">
                                        <p>تعداد خواب</p>
                                        <InputRange
                                            step={1}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={10}
                                            minValue={0}
                                            value={roomVal}
                                            onChange={setRoomVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div className="renge_result">
                                            <div>{`${roomVal.min}`}</div>
                                            <div>{`${roomVal.max}`}</div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdList