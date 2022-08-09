import React from 'react'
import Menu from '../../generally/menu/js/Menu';
import { MdOutlineAdminPanelSettings, MdOutlineExitToApp } from 'react-icons/md';
import { SiHomeadvisor } from 'react-icons/si';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs'
import '../css/style.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Panel from './Panel';
import AdvItem from '../../generally/advItem/js/AdvItem';

function Profile() {
  return (
    <>
        <Menu />
        <Tabs className="profile">
            <div className="tablist">
                <div className="name">
                    <p>ماندانا زارع</p>
                </div>
                <TabList>
                    <Tab><MdOutlineAdminPanelSettings /> <span>پنل مدیریت</span><BsArrowLeft className="leftArrow" /></Tab>
                    <Tab><SiHomeadvisor /> <span>اگهی ها</span><BsArrowLeft className="leftArrow" /></Tab>
                    <Tab><AiOutlineHeart /> <span>علاقمندی ها</span><BsArrowLeft className="leftArrow" /></Tab>
                    {/* <li><MdOutlineExitToApp /> <span>خروج</span><BsArrowLeft className="leftArrow" /></li> */}
                </TabList>
            </div>
            <div className="tabContent">
            <TabPanel className="panel">
                <Panel />
            </TabPanel>
            <TabPanel className="advertising">
                <AdvItem />
                <AdvItem />
                <AdvItem />
                <AdvItem />
            </TabPanel>
            <TabPanel className="favorite">
                <AdvItem />
                <AdvItem />
                <AdvItem />
                <AdvItem />
            </TabPanel>
            </div>
        </Tabs>
    </>
  )
}

export default Profile