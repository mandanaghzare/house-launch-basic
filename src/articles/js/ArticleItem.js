import React from 'react';
import '../css/style.scss'

function ArticleItem() {
  return (
    <div className="article_item">
        <div id="_image">
            <img src={require('../../Img/Real-Estate-Career.png')} alt="" />
        </div>
        <div id="__title">چرا بانک‌ها از پرداخت تسهیلات سرپیچی می‌کنند؟</div>
        <div id="__context">عبدالجلال ایری در خصوص پنج ‌فصل مصوب قانون جهش تولید مسکن از فراهم‌سازی منابع مالی و اعتباری برای احداث مسکن، زمین، مصالح ساخ</div>
        <button>ادامه مطلب</button>
    </div>
  )
}

export default ArticleItem