import React, {useEffect, useState} from 'react';
import ResultSearchTickets from './ResultSearchTickets';
import iconSearchLeft from '../../../images/icon_page_search_left.png';
import iconSearchRight from '../../../images/icon_page_search_right.png';

import { connect } from 'react-redux';
import { filterTicketsAndSeatsReducerTC } from '../../../redux/filterTicketsAndSeats-reducer';
import { withRouter } from 'react-router';


function SearchTicketsJSX(props) {
	const [nextPageDisabled, setNextPageDisabled] = useState(false);
	const [prevPageDisabled, setPrevPageDisabled] = useState(true);

	// componentDidMount() {
	// 	this.props.setSeatsAndTicketsEvent('actualPage', this.props.match.url);
	// };

	useEffect(() => {
		props.setSeatsAndTicketsEvent('actualPage', props.match.url);
	}, []);

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.total_count !== this.props.total_count ||
	// 		prevProps.sort !== this.props.sort ||
	// 		prevProps.limit !== this.props.limit ||
	// 		prevProps.offset !== this.props.offset
	// 	) {
	// 		this.props.setSeatsAndTicketsEvent('actualPage', this.props.match.url);
	// 		if (Math.ceil(Number(this.props.total_count) / Number(this.props.limit)) <= 1) {
	// 			this.setState({ nextPageDisabled: true });
	// 		}
	// 	};
	// };

	useEffect(() => {
		props.setSeatsAndTicketsEvent('actualPage', props.match.url);
		if (Math.ceil(Number(props.total_count) / Number(props.limit)) <= 1) {
			setNextPageDisabled(true);
		}
	}, [props.total_count, props.sort, props.limit, props.offset]);	

	const setTrainId = (trainId) => props.setSeatsAndTicketsEvent('trainId', trainId);

	const sortSearch = (event) => props.setSeatsAndTicketsEvent('sort', event.currentTarget.value);

	const filterChoiceTickets = (event) => {
		props.setSeatsAndTicketsEvent('limit', event.currentTarget.innerHTML);
		props.setSeatsAndTicketsEvent('offset', 0);
		setPrevPageDisabled(false);
	};

	const setPrevPageOffset = () => {
		if (props.offset / Number(props.limit) === 1) {
			setPrevPageDisabled(true);
		}
		props.setSeatsAndTicketsEvent('offset', (props.offset - Number(props.limit)));
		setNextPageDisabled(false);
	};

	const setNextPageOffset = () => {
		let pages = Math.ceil(Number(props.total_count) / Number(props.limit));
		if (pages === (props.offset / Number(props.limit)) + 2) {
			setNextPageDisabled(true);
		}
		if (pages >= (props.offset / Number(props.limit)) - 2) {
			setPrevPageDisabled(false);
		}
		props.setSeatsAndTicketsEvent('offset', (props.offset + Number(props.limit)));
	};

	const setButtonOffset = (event) => {
		props.setSeatsAndTicketsEvent('offset', ((Number(props.limit) * Number(event.currentTarget.innerHTML)) - Number(this.props.limit)));

		let pages = Math.ceil(Number(props.total_count) / Number(props.limit));

		if (pages === Number(event.currentTarget.innerHTML)) {
			setNextPageDisabled(true);
			setPrevPageDisabled(false);		
		} else if (Number(event.currentTarget.innerHTML) === 1) {
			setPrevPageDisabled(true);
			setNextPageDisabled(false);
		} else {
			setNextPageDisabled(false);
			setPrevPageDisabled(false);
		}
	}

	let classFilterChoiceFive = props.limit === "5" ? "filter-choice-tickets-active" : "filter-choice-tickets";
	let classFilterChoiceTen = props.limit === "10" ? "filter-choice-tickets-active" : "filter-choice-tickets";
	let classFilterChoiceTwenty = props.limit === "20" ? "filter-choice-tickets-active" : "filter-choice-tickets";

	let pages = Math.ceil(Number(props.total_count) / Number(props.limit));
	let buttonsPages = [];

	for (let i = 1; i <= pages; i++) {
		const cls = ['page-search-select-number'];
		if ((props.offset / Number(props.limit)) + 1 === i) {
			cls.push('active');
		}
		buttonsPages.push(<button className={cls.join(' ')}
			key={i}
			type="button"
			onClick={setButtonOffset}>{i}</button>);
	}

	return (
		<div className="tickets-search-result col pt-5 pb-5">
			<div className="d-flex flex-wrap">
				<div className="d-flex">найдено {props.total_count}</div>
				<div className="d-flex ml-5 mr-5 pl-5 pr-5"></div>

				<div className="d-flex ml-auto">сортировать по:&nbsp;
					<select className="custom-sort-train"
						name="sortTrain"
						id="sort"
						onChange={sortSearch}
						value={props.sort}>
						<option value="date">времени</option>
						<option value="price">стоимости</option>
						<option value="duration">длительности</option>
					</select>
				</div>
				<div className="d-flex ml-auto">показывать по:&nbsp;
			<button className={classFilterChoiceFive}
						onClick={filterChoiceTickets}>5
			</button>
					<button className={classFilterChoiceTen}
						onClick={filterChoiceTickets}>10
			</button>
					<button className={classFilterChoiceTwenty}
						onClick={filterChoiceTickets}>20
			</button>
				</div>
			</div>

			{props.ticketsArray ? props.ticketsArray.map((el, idx) =>
				<ResultSearchTickets key={idx} state={el} setTrainId={setTrainId} />) : []}

			<div className="d-flex justify-content-end mt-5">
				<button className="page-search-select-number"
					type="button"
					onClick={setPrevPageOffset}
					disabled={prevPageDisabled}>
					<img src={iconSearchLeft} alt="иконка влево" />
				</button>

				{buttonsPages}

				<button className="page-search-select-number"
					type="button"
					onClick={setNextPageOffset}
					disabled={nextPageDisabled}>
					<img src={iconSearchRight} alt="иконка вправо" />
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray,
		total_count: state.filterChoiceTicketsAndSeatsPages.totalCountTickets,
		sort: state.filterChoiceTicketsAndSeatsPages.sort,
		limit: state.filterChoiceTicketsAndSeatsPages.limit,
		offset: state.filterChoiceTicketsAndSeatsPages.offset
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSeatsAndTicketsEvent: (fieldName, fieldValue) => dispatch(filterTicketsAndSeatsReducerTC(fieldName, fieldValue))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchTicketsJSX));