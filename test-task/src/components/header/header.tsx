import {useStore} from "../../store/store.tsx";
import "../../styles/header.scss";
import logo from "../../assets/logo.svg";
import leftChevron from "../../assets/left-chevron.svg";
import rightChevron from "../../assets/right-chevron.svg";
import notificationImg from "../../assets/notification.svg";
import userLogo from "../../assets/user-logo.png";
import hideNav from "../../assets/hide-nav.svg";
import openNav from "../../assets/open-nav.svg";
import closeNav from "../../assets/close-nav.svg";

export const Header = () => {
    const {userData} = useStore();


    return (
        <header className="header f-row-nowrap">
            <div className="f-row-nowrap nav-container">
                <img src={logo} alt="logo" className="logo"/>
                <nav>
                    <a href="#">Play</a>
                    <a href="#">Market</a>
                    <a href="#">Community</a>
                    <a href="#">Blog</a>
                </nav>
            </div>
            <div>
                <div className="search-container f-row-nowrap align-center">
                    <div className="btn-container f-row-nowrap">
                        <button><img src={leftChevron} alt="left nav arrow"/></button>
                        <button><img src={rightChevron} alt="right nav arrow"/></button>
                    </div>
                    <input className="searchInput" placeholder="Search"/>
                </div>
            </div>
            <div className="user-container f-row-nowrap align-center">
                <button className="notification-btn"><img src={notificationImg} alt="notification icon"/></button>
                <div className="f-row-nowrap profile">
                    <div className="profile-img">
                        <img src={userLogo} alt="user logo"/>
                        <div className={`user-status ${userData?.isOnline ? "green" : "red"}`}></div>
                    </div>
                    <div className="profile-info">
                        <p className="username">{userData?.username}</p>
                        <p className="wallet">{userData?.walletBalance}</p>
                    </div>
                </div>
                <div className="window-btns">
                    <button><img src={hideNav} alt="hide window"/></button>
                    <button><img src={openNav} alt="open window"/></button>
                    <button><img src={closeNav} alt="close window"/></button>
                </div>
            </div>
        </header>
    )
}
