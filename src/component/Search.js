import React from 'react';
import '../Search.css';
import axios from 'axios';
import Loader from '../loader.gif';

class Search extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
		};

		this.cancel = '';
	}





	fetchSearchResults = ( query) => {
		
		const searchUrl = `https://pixabay.com/api/?key=PASTE_YOUR_API_KEY_HERE&q=${query}`;

		if (this.cancel) {
			this.cancel.cancel();
		}

		this.cancel = axios.CancelToken.source();

		axios.get(searchUrl, {
			cancelToken: this.cancel.token
		})
			.then(res => {
				
				
				const resultNotFoundMsg = !res.data.hits.length
					? 'There are no more search results. Please try a new search'
					: '';
				this.setState({
					results: res.data.hits,
					message: resultNotFoundMsg,
					loading: false
				})
			})
			.catch(error => {
				if (axios.isCancel(error) || error) {
					this.setState({
						loading: false,
						message: 'Failed to fetch the data. Please check network'
					})
				}
			})
	};

	handleOnInputChange = (event) => {
		const query = event.target.value;
		if (!query) {
			this.setState({ query, results: {}, message: '', totalPages: 0, totalResults: 0 });
		} else {
			this.setState({ query, loading: true, message: '' }, () => {
				this.fetchSearchResults(1, query);
			});
		}
	};

	
	renderSearchResults = () => {
		const { results } = this.state;

		if (Object.keys(results).length && results.length) {
			return (
				<div className="results-container">
					{results.map(result => {
						return (
							<a key={result.id} href={result.previewURL} className="result-item">
								<h6 className="image-username">{result.user}</h6>
								<div className="image-wrapper">
									
								</div>
							</a>
						)
					})}

				</div>
			)
		}
	};

	render() {
		const { query, loading, message} = this.state;

		return (
			<div className="container">
				{/*	Heading*/}
				<h2 className="heading">Live Search: React Application</h2>
				{/* Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						name="query"
						value={query}
						id="search-input"
						placeholder="Search..."
						onChange={this.handleOnInputChange}
					/>
					<i className="fa fa-search search-icon" aria-hidden="true" />
				</label>

				{/*	Error Message*/}
				{message && <p className="message">{message}</p>}

				{/*	Loader*/}
				<img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" />

				{/*	Result*/}
				{this.renderSearchResults()}



			</div>
		)
	}
}

export default Search;
