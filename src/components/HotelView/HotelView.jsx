import React from 'react';
//svg
import { ReactComponent as ReviewStars } from '../../img/SVG/star.svg';
import { ReactComponent as LocationPin } from '../../img/SVG/location-pin.svg';
//images
import hotelOne from '../../img/hotel-1.jpg';
import hotelTwo from '../../img/hotel-2.jpg';
import hotelThree from '../../img/hotel-3.jpg';

//style
import './HotelView.scss';
const HotelView = () => {
	return (
		<div className="hotel-view-container">
			<div className="gallery">
				<figure className="gallery__item">
					<img src={hotelOne} alt="hotel gallery " className="gallery__img" />
				</figure>
				<figure className="gallery__item">
					<img src={hotelTwo} alt="hotel gallery " className="gallery__img" />
				</figure>
				<figure className="gallery__item">
					<img src={hotelThree} alt="hotel gallery " className="gallery__img" />
				</figure>
			</div>
			<div className="overview">
				<h1 className="overview__heading">Hotel Las Palmas</h1>
				<div className="overview__stars">
					<ReviewStars className="overview__icon-star" alt="review star icon" />
					<ReviewStars className="overview__icon-star" alt="review star icon" />
					<ReviewStars className="overview__icon-star" alt="review star icon" />
					<ReviewStars className="overview__icon-star" alt="review star icon" />
					<ReviewStars className="overview__icon-star" alt="review star icon" />
				</div>
				<div className="overview__location">
					<LocationPin
						className="overview__icon-location"
						alt="location pin icon"
					/>
					<button className="btn-inline">Albufeira, portugal</button>
				</div>
				<div className="overview__rating">
					<div className="overview__rating-average">8.6</div>
					<div className="overview__rating-count">433 votes</div>
				</div>
			</div>
		</div>
	);
};

export default HotelView;
