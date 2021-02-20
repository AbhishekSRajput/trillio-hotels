import React from 'react';
import Header from './components/Header/Header';
import HotelView from './components/HotelView/HotelView';
import Navigation from './components/Navigation/Navigation';
import Detail from './components/Detail/Detail';

//style
import './App.scss';

function App() {
	return (
		<div className="container">
			<div className="header">
				<Header />
			</div>
			<div className="content">
				<nav className="sidebar">
					<Navigation />
				</nav>
				<main className="hotel-view">
					<HotelView />
					<Detail />
				</main>
			</div>
		</div>
	);
}

export default App;
