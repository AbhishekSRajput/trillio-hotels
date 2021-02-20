import React from 'react';
import logo from '../../img/logo.png';
import { ReactComponent as SearchIcon } from '../../img/SVG/magnifying-glass.svg';
import iconBookmark from '../../img/SVG/bookmark.svg';
import chatIcon from '../../img/SVG/chat.svg';
import userProfile from '../../img/user.jpg';

//style
import './Header.scss';

const Header = () => {
	return (
		<div className="header-container">
			<img src={logo} alt="trillo logo" className="logo" />
			<form action="#" className="search">
				<input
					type="text"
					className="search__input"
					placeholder="search hotels"
				/>
				<button className="search__button">
					<SearchIcon className="search__icon" alt="search icon" />
				</button>
			</form>

			<nav className="user-nav">
				<div className="user-nav__nav-box">
					<img
						src={iconBookmark}
						alt="icon bookmark"
						className="user-nav__icon"
					/>
					<span className="user-nav__notification">14</span>
				</div>
				<div className="user-nav__nav-box">
					<img src={chatIcon} alt="chat icon" className="user-nav__icon" />
					<span className="user-nav__notification">7</span>
				</div>

				<div className="user-nav__user">
					<img
						src={userProfile}
						alt="user img"
						className="user-nav__user-img"
					/>
					<span className="user-nav__user-name">Abhishek Singh</span>
				</div>
			</nav>
		</div>
	);
};

export default Header;
