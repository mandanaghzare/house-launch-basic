import React from 'react';
import { useState } from 'react';
import Footer from '../../generally/footer/js/Footer';
import Menu from '../../generally/menu/js/Menu';
import '../css/style.css'

function Register() {
    const[moveSpan,setMoveSpan] = useState("-200%");
    const person = () => {
        setMoveSpan('-200%')
    }
    const realState = () => {
        setMoveSpan('-100%')
    }
  return (
    <>
        <Menu />
        <div className="register">
            <div className="tabs">
                <button onClick={person}>شخص</button>
                <button onClick={realState}>املاک</button>
                <span style={{transform: `translateX(${moveSpan})`}}></span>
            </div>
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
                {moveSpan=="-200%" ? '' :
                    <div className="_field">
                        <input type="text" id="code" placeholder='placeholder' />
                        <label htmlFor="code">کد اتحادیه</label>
                    </div>
                }
                <div className="submit">
                    <button>ثبت نام</button>
                    <button>ورود</button>
                </div>
                </form>
        </div>
        <Footer />
    </>
  )
}

export default Register