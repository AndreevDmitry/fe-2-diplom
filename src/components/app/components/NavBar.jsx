import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
	
	return (
		<header>
			<div className="header-logo pt-2 w-100">
				<div className="container">
					<NavLink className="logo__text font-weight-bold" to="/" id="header_logo">Лого</NavLink>
				</div>
			</div>
			<div className="nav-bar bg-dark w-100">
				<div className="container">
					<nav className="nav pt-3 pb-3 d-flex flex-wrap justify-content-start animated fadeInRight">
						<NavLink className="nav__item mr-4" to="/" onClick={() => window.scroll(0, 800)}>О нас</NavLink>
						<NavLink className="nav__item mr-4" to="/" onClick={() => window.scroll(0, 1400)}>Как это работает</NavLink>
						<NavLink className="nav__item mr-4" to="/" onClick={() => window.scroll(0, 2000)}>Отзывы</NavLink>
						<div className="nav__item" onClick={() => window.scroll(0, 2500)}>Контакты</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default NavBar;