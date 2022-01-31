import React from 'react';

const HowItWorks = () => {
	return (
		<section className="how-it-works mb-5 pb-5" id="howitworks">
			<div className="container d-flex">
				<div className="d-flex col-lg-12">
					<p className="col-lg-9">как это работает</p>
					<button className="btn btn-lg btn-primary-outline col-lg-3">Узнать больше</button>
				</div>
			</div>
			<div className="container h-100">
				<div className="row justify-content-center col-lg-12 animated fadeInRight">
					<div className="row justify-content-between align-items-center col-lg-8 mt-4">
						<div>
							<div className="icon1 mt-3"></div>
							<p className="text-center mt-4">Удобный заказ</p>
							<p className="text-center">на сайте</p>
						</div>
						<div>
							<div className="icon2 mt-3"></div>
							<p className="text-center mt-4">Нет необходимости</p>
							<p className="text-center">ехать в офис</p>
						</div>
						<div>
							<div className="icon3 mt-3"></div>
							<p className="text-center mt-4">Огромный выбор</p>
							<p className="text-center">направлений</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;