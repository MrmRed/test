import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term : '', country : ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputChangeC = this.onInputChangeC.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(e){
        this.setState({term : e.target.value});
    }
    onInputChangeC(e){
        this.setState({country : e.target.value});
    }
    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term, this.state.country);
        this.setState({term: '', country : ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input onChange={this.onInputChange} value={this.state.term} placeholder="Grad" className="form-control" />
                <input onChange={this.onInputChangeC} value={this.state.country} placeholder="Drzava" className="form-control" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit</button>
                </span>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);