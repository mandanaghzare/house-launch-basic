import React from 'react';
import { useState } from 'react';
import Footer from '../../generally/footer/js/Footer';
import Menu from '../../generally/menu/js/Menu';
import '../css/style.css'

function SignIn() {
  return (    
    <>
        <Menu />
        <div className="signIn">
                <form action="">
                    <div className="_field">
                        <input type="text" id="name" placeholder='placeholder' />
                        <label htmlFor="name">نام کاربری</label>
                    </div>
                    <div className="_field">
                        <input type="password" id="pass" placeholder='placeholder' />
                        <label htmlFor="pass">پسورد</label>
                    </div>
                <div className="submit">
                    <button>ورود</button>
                    <button>ثبت نام</button>
                </div>
                </form>
        </div>
    </>
  )
}

export default SignIn