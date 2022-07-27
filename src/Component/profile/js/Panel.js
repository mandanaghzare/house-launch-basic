import React from 'react';

function Panel() {
  return (    
    <>
        <form action="">
            <div className="_field">
                <input type="text" id="name" placeholder='placeholder' />
                <label htmlFor="name">نام کاربری</label>
            </div>
            <div className="_field">
                <input type="email" id="email" placeholder='placeholder' />
                <label htmlFor="email">ایمیل</label>
            </div>
            <div className="_field">
                <input type="text" id="phone" placeholder='placeholder' />
                <label htmlFor="phone">شماره تماس</label>
            </div>
            <div className="_field">
                <input type="password" id="pass" placeholder='placeholder' />
                <label htmlFor="pass">پسورد</label>
            </div>
            <div className="_field">
                <input type="text" id="code" placeholder='placeholder' />
                <label htmlFor="code">کد اتحادیه</label>
            </div>
        </form>
        <div className="submit">
            <button>ذخیره تغییرات</button>
        </div>
    </>
  )
}

export default Panel