import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/movieList";
import MovieApi from "../../common/apis/movieApi";
import {ApiKey} from "../../common/apis/movieApiKey";

const Home = () => {
	const movieText = "Harry";

	useEffect(() => {
		const getMovies = async () => {
			const response = await MovieApi.get(`?apikey=${ApiKey}&s={movieText}&type=movie`)
			.catch((err) => {
				console.log('error', err);
			});
			console.log("the response", response)
		};
		getMovies();
	}, [])

	
	return (
		<>
			<div className="home-banner"></div>
			<MovieListing />
		</>
	)
}

export default Home;