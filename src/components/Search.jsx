import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
        movieDate: '',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type, this.state.movieDate);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type, this.state.movieDate);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <>
                        <input
                            className='validate'
                            placeholder='Поиск'
                            type='search'
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <input
                            type="text"
                            className="movieDate"
                            placeholder='Год фильма'
                            onChange={(e) =>
                                this.setState({ movieDate: e.target.value })
                            }
                        />
                    </>
                    <button
                        className='btn search-btn'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type,
                                this.state.movieDate
                            )
                        }
                    >
                        Поиск
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>Все</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Фильмы</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Сериалы</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
