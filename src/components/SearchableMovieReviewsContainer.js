import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [], 
        searchTerm: ""
    }

    fetchReviews = () => {
        fetch(URL)
        .then(r=>r.json())
        .then(data=> this.setState({reviews: data.results}))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.fetchReviews}>
                    <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer