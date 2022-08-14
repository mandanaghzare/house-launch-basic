import React, { useState } from 'react';
import { BsFillSuitHeartFill, BsImage, BsShareFill } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { MdOutline360 } from 'react-icons/md';
import AdvItem from '../../generally/advItem/js/AdvItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import '../css/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { utils } from '@hassanmojab/react-modern-calendar-datepicker';
import TimePicker from 'react-time-picker';
import {
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Menu from '../../generally/menu/js/Menu';
import { Pannellum, PannellumVideo } from "pannellum-react";

function Advertising() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [value, onChange] = useState(new Date());
    
    const [showSm, setShowSm] = useState(false);
    const socialMedia = () => {
      setShowSm(!showSm);
    }

    const [redHeart, setRedHeart] = useState(false);
    const heartIcon = () => {
      setRedHeart(!redHeart);
    }

    const [pano, setPano] = useState(false);
    const makePano = () => {
        setPano(!pano);
    }

    return (
        <>
            <Menu />
            <div className="advertisings">
                <div id="gallery">
                    <div className="buttons">
                        <button type="button" onClick={heartIcon}><BsFillSuitHeartFill className={`${redHeart ? 'red' : '' }`} /></button>
                        <button type="button" onClick={socialMedia}><BsShareFill />
                            <div id="__social_media" className={`${showSm ? 'show' : ''}`}>
                            <TwitterShareButton><AiOutlineLinkedin /></TwitterShareButton>
                            <TelegramShareButton><FiTwitter /></TelegramShareButton>
                            <LinkedinShareButton><AiOutlineInstagram /></LinkedinShareButton>
                            <WhatsappShareButton url={'https://seebmagazine.com/skin-care-for-teens/'}><ImWhatsapp /></WhatsappShareButton>
                            </div>
                        </button>
                    </div>                
                    <div id="_one_big_img">
                        <div className="galleryThumb">
                            <div className="imgSlide">
                                <BsImage /><span>20</span>
                            </div>
                            <div className="thumb">
                                <img src={require('../../../Img/panorama.jpg')} alt="" />
                            </div>
                            <div className="thumb">
                                <img src={require('../../../Img/Interior-Designers-1.jpg')} alt="" />
                            </div>
                            <div className="thumb">
                                <img src={require('../../../Img/Interior-Designers.jpg')} alt="" />
                            </div>
                            <div className="thumb">
                                <img src={require('../../../Img/unit-design.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="panorama" onClick={makePano}>
                            {
                                pano
                                ?
                                <div className="rotatable"><MdOutline360 /><span>360°</span></div>
                                :
                                <BsImage />
                            }
                        </div>
                        {pano ?
                        <img src={require('../../../Img/panorama.jpg')} alt="" />
                        :
                        <Pannellum
                            min-width="100%"
                            min-height="100%"
                            image={require('../../../Img/panorama.jpg')}
                            pitch={0}
                            yaw={10}
                            hfov={150}
                            autoLoad
                            showZoomCtrl={false}
                            onLoad={() => {
                            console.log("panorama loaded");
                            }}>
                            <Pannellum.Hotspot
                                type="custom"
                                pitch={-5}
                                yaw={-5}
                                handleClick={(evt, name) => console.log(name)}
                                name="hs1"
                            />
                            <Pannellum.Hotspot
                                type="custom"
                                pitch={150}
                                yaw={-50}
                                handleClick={(evt, name) => console.log(name)}
                                name="hs1"
                            />
                        </Pannellum>
                        }
                    </div>
                    <div id="_two_small_img">
                        <div id="_smallimg">
                            <img src={require('../../../Img/download.jpg')} alt="" />
                        </div>
                        <div id="_smallimg">
                            <img src={require('../../../Img/unit-design.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div id="_file_content">
                    <div id="_details">
                        <ul id="__main_details" className="list-unstyled">
                            <li>
                                <p className="address">البرز- کرج- گوهردشت- خیابان چهاردهم- ساختمان</p>
                            </li>
                            <li>
                                <p className="text-left">200،000،000 تومان</p>
                            </li>
                            <li>
                                <p className="text-left">دو روز قبل</p>
                            </li>
                            <li>
                                <p>فروش</p>
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
                        <div id="_map_pin">
                            <h6>آدرس روی نقشه</h6>
                            <div id="_img">
                                <img src={require('../../../Img/Image 1.png')} alt="" />
                            </div>
                        </div>
                        <div id="_explain">
                            <h6>توضیحات</h6>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                        <div id="_price_history">
                            <h6>تاریخچه قیمت در منطقه رستاخیز گوهردشت</h6>
                            <div className="price_table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>تاریخ</th>
                                            <th>قیمت (تومان)</th>
                                            <th>منبع</th>
                                            <th>مرحله</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>21/3/1401</td>
                                            <td>1،800،000،000</td>
                                            <td>املاک شید پویان</td>
                                            <td>فروش</td>
                                        </tr>
                                        <tr>
                                            <td>21/3/1401</td>
                                            <td>1،800،000،000</td>
                                            <td>املاک شید پویان</td>
                                            <td>فروش</td>
                                        </tr>
                                        <tr>
                                            <td>21/3/1401</td>
                                            <td>1،800،000،000</td>
                                            <td>املاک شید پویان</td>
                                            <td>فروش</td>
                                        </tr>
                                        <tr>
                                            <td>21/3/1401</td>
                                            <td>1،800،000،000</td>
                                            <td>املاک شید پویان</td>
                                            <td>فروش</td>
                                        </tr>
                                        <tr>
                                            <td>21/3/1401</td>
                                            <td>1،800،000،000</td>
                                            <td>املاک شید پویان</td>
                                            <td>فروش</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Tabs id="_assignation">
                        <div id="_tabs">
                            <TabList>
                                <Tab>تعین وقت بازدید</Tab>
                                <Tab>ثبت درخواست</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="dateInput">
                                    <p>برای تاریخ </p>
                                    <DatePicker
                                        value={selectedDay}
                                        onChange={setSelectedDay}
                                        shouldHighlightWeekends
                                        locale="fa" // add this
                                    />
                                </div>
                                <div className="timeInput">
                                    <p>در ساعت </p>
                                    <TimePicker 
                                    disableClock={false}
                                    openClockOnFocus={false}
                                    onChange={onChange}
                                    value={value} />
                                </div>
                                <div className="phoneNum">
                                    <p>شماره تماس </p>
                                    <input type="phone" placeholder='09123456789' />
                                </div>
                                <button type="button" className="submit">ثبت زمان بازدیدر</button>
                                <p className="description">با فشار دادن دکمه ثبت زمان، موافقت می کنید که نام شرکت و متخصصان املاک و مستغلات ممکن است از طریق تلفن یا پیام در مورد درخواست شما با شما تماس بگیرند، که ممکن است شامل استفاده از وسایل خودکار باشد. شما نیازی به رضایت به عنوان شرط خرید ملک، کالا یا خدمات ندارید. نرخ پیام یا داده ممکن است بر روی قبض شما اعمال شود. شما همچنین با شرایط استفاده ما موافقت می کنید. نام شرکت هیچ متخصص املاک و مستغلات را تأیید نمی کند.</p>
                            </TabPanel>
                            <TabPanel>
                                <form action="">
                                    <input type="phone" placeholder="شماره تماس" />
                                    <input type="email" placeholder="ایمیل" />
                                    <textarea rows="5" placeholder="پیام"></textarea>
                                    <button type="button" className="submit">ارسال</button>
                                </form>
                                <p className="description">با فشار دادن دکمه ثبت زمان، موافقت می کنید که نام شرکت و متخصصان املاک و مستغلات ممکن است از طریق تلفن یا پیام در مورد درخواست شما با شما تماس بگیرند، که ممکن است شامل استفاده از وسایل خودکار باشد. شما نیازی به رضایت به عنوان شرط خرید ملک، کالا یا خدمات ندارید. نرخ پیام یا داده ممکن است بر روی قبض شما اعمال شود. شما همچنین با شرایط استفاده ما موافقت می کنید. نام شرکت هیچ متخصص املاک و مستغلات را تأیید نمی کند.</p>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
                <div id="_similar_files">
                    <h6>خانه های مشابهی که ممکن است دوست داشته باشید</h6>
                    <Swiper
                    slidesPerView={1.2}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AdvItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Advertising;