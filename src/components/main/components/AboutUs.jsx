import React from 'react';

const AboutUs = () => {
	return (
		<section className="container about-us mb-5 pb-5" id="about">
			<div className="row">
				<p className="col-lg-2">о нас</p>
				<div className="container d-flex pt-4">
					<div className="about-us-vertical-line"></div>
					<div className="col-lg-10">
						<p className="pl-4">Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
						<p className="p-4">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
						<p className="pl-4 font-weight-bold">Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;