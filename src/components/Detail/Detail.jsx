import React from 'react';

//images
import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';
import user3 from '../../img/user-3.jpg';
import user4 from '../../img/user-4.jpg';
import user5 from '../../img/user-5.jpg';
import user6 from '../../img/user-6.jpg';
//style
import './Detail.scss';

const Detail = () => {
	return (
		<>
			{' '}
			<div className="detail">
				<div className="description">
					<p className="paragraph">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
						dignissimos debitis ratione sapiente saepe. Accusantium cumque,
						quas, ut corporis incidunt deserunt quae architecto voluptate.
					</p>
					<p className="paragraph">
						Accusantium cumque, quas, ut corporis incidunt deserunt quae
						architecto voluptate delectus, inventore iure aliquid aliquam.
					</p>
					<ul className="list">
						<li className="list__item">Close to the Beach</li>
						<li className="list__item">Breakfast included</li>
						<li className="list__item">Free Airport Shuttle</li>
						<li className="list__item">Free WiFi in All Rooms</li>
						<li className="list__item">Air Conditioning And Heating</li>
						<li className="list__item">Pets Allowed</li>
						<li className="list__item">We Speak All Languages</li>
						<li className="list__item">Perfect For Families</li>
					</ul>
					<div className="recommend">
						<p className="recommend__count">
							Lucy and 3 other friends recommend this Hotel
						</p>
						<div className="recommended__friends">
							<img src={user3} alt="user three" className="recommend__img" />
							<img src={user4} alt="user four" className="recommend__img" />
							<img src={user5} alt="user five" className="recommend__img" />
							<img src={user6} alt="user six" className="recommend__img" />
						</div>
					</div>
				</div>
				<div className="user-reviews">
					<figure className="review">
						<blockquote className="review__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
							doloremque architecto dicta animi, totam, itaque officia ex.
						</blockquote>
						<figcaption className="review__user">
							<img src={user1} alt="user review" className="review__img" />
							<div className="review__user-box">
								<p className="review__user-name">Jack Pack</p>
								<p className="review__user-date">feb 23rd,2017</p>
							</div>
							<div className="review__rating">7.8</div>
						</figcaption>
					</figure>
					<figure className="review">
						<blockquote className="review__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
							doloremque architecto dicta animi.
						</blockquote>
						<figcaption className="review__user">
							<img src={user2} alt="user review" className="review__img" />
							<div className="review__user-box">
								<p className="review__user-name">Alexandra D'addrio</p>
								<p className="review__user-date">june 19th,2021</p>
							</div>
							<div className="review__rating">9.8</div>
						</figcaption>
					</figure>

					<button className="btn-inline">
						Show All<span>&rarr;</span>
					</button>
				</div>
			</div>
			<div className="cta">
				<h2 className="cta__book-now">
					Good news! we have 4 rooms available for your selected dates!
				</h2>
				<button className="btn">
					<span className="btn__visible">Book Now</span>
					<span className="btn__invisible">Only 4 Rooms left!</span>
				</button>
			</div>
		</>
	);
};

export default Detail;
