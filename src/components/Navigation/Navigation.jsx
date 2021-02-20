import React from 'react';
import { ReactComponent as IconHome } from '../../img/SVG/home.svg';
import { ReactComponent as Aircraft } from '../../img/SVG/aircraft-take-off.svg';
import { ReactComponent as CarRental } from '../../img/SVG/key.svg';
import { ReactComponent as Tours } from '../../img/SVG/map.svg';

//style
import './Navigation.scss';

const Navigation = () => {
	return (
		<div className="side-container">
			<ul className="side-nav">
				<li className="side-nav__item side-nav__item--active">
					<a href="#" className="side-nav__link">
						<IconHome className="side-nav__icon" alt="icon home" />
						<span>Hotel</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<Aircraft className="side-nav__icon" alt="icon flight" />
						<span>Flight</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<CarRental className="side-nav__icon" alt="icon car rental" />
						<span>Car Rental</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<Tours className="side-nav__icon" alt="icon tours" />
						<span>Tours</span>
					</a>
				</li>
			</ul>

			<div className="legal">&copy; 2020 by trillo. All rights reserved.</div>
		</div>
	);
};

export default Navigation;
