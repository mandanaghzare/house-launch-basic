import React from 'react'
import { Link } from 'react-router-dom';
import Menu from '../../Component/generally/menu/js/Menu'

function ArticlePage() {
  return (
    <div>
        <Menu />
        <div className="articlePage">
            <div id="_image">
                <img src={require('../../Img/Real-Estate-Career.png')} alt="" />
            </div>
            <div id="_title">
                <p>چرا بانک‌ها از پرداخت تسهیلات سرپیچی می‌کنند؟</p>
                <div id="__date">1401/02/13</div>
            </div>
            <div id="_content">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <div id="_image">
                    <img src={require('../../Img/Real-Estate-Career.png')} alt="" />
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنو دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می هل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه وشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
        </div>
        <div className="related_article">
            <p>مطالب مرتبط</p>
            <div id="_list">
                <Link to="/ArticlePage" id="__item">
                    <div id="___image">
                        <img src={require('../../Img/Real-Estate-Career.png')} alt="" />                    
                    </div>
                    <div id="___title"><span>چرا بانک‌ها از پرداخت تسهیلات سرپیچی می‌کنند؟</span></div>
                </Link>
                <Link to="/ArticlePage" id="__item">
                    <div id="___image">
                        <img src={require('../../Img/Real-Estate-Career.png')} alt="" />                    
                    </div>
                    <div id="___title"><span>چرا بانک‌ها از پرداخت تسهیلات سرپیچی می‌کنند؟</span></div>
                </Link>
                <Link to="/ArticlePage" id="__item">
                    <div id="___image">
                        <img src={require('../../Img/Real-Estate-Career.png')} alt="" />                    
                    </div>
                    <div id="___title"><span>چرا بانک‌ها از پرداخت تسهیلات سرپیچی می‌کنند؟</span></div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ArticlePage;