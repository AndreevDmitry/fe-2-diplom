import React from 'react';

const Reviews = () => {
	return (
		<section className="container reviews mb-5 pb-5" id="reviews">
			<div className="review-head ml-5">отзывы</div>
			<div className="carousel slide mb-5" data-ride="carousel" id="carouselExampleIndicators">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="container d-flex flex-wrap col-lg-12 mt-5">
							<div className="container col-lg-6">
								<div className="row">
									<div className="review-icon1"></div>
									<div className="col-lg-7">
										<p className="font-weight-bold">Екатерина Вальнова</p>
										<q className="review-text">Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.</q>
									</div>
								</div>
							</div>
							<div className="container col-lg-6">
								<div className="row">
									<div className="review-icon2"></div>
									<div className="col-lg-7">
										<p className="font-weight-bold">Евгений Стрыкало</p>
										<q className="review-text">СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</q>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="container d-flex col-lg-12 mt-5">
							<div className="container col-lg-6">
								<div className="row">
									<div className="review-icon2"></div>
									<div className="col-lg-7">
										<p className="font-weight-bold">Евгений Стрыкало</p>
										<q className="review-text">СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</q>
									</div>
								</div>
							</div>
							<div className="container col-lg-6">
								<div className="row">
									<div className="review-icon1"></div>
									<div className="col-lg-7">
										<p className="font-weight-bold">Екатерина Вальнова</p>
										<q className="review-text">Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.</q>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;