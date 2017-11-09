import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/datepicker.min.css';

export default class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            startDate: moment(),
            endDate: moment().add(1, 'day')
        }
    }

    handleChangeStart = (date) => {
        this.setState({ startDate: date })
    }

    handleChangeEnd = (date) => {
        this.setState({ endDate: date })
    }

    handleClick = () => {
        const start = moment(this.state.startDate).format('DD-MM-YYYY');
        const end = moment(this.state.endDate).format('DD-MM-YYYY');
        this.props.handleSearch({start, end})
    }

    render(){
        return(
            <div style={{display: 'inline-flex', marginBottom: '10px', marginTop:'10px'}}>
                <span style={{marginRight: '5px'}}>Debut : </span>
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                />
                <span style={{marginRight: '5px', marginLeft: '5px'}}>Fin : </span>
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
                <button id='search-button' onClick={this.handleClick}>Chercher</button>
            </div>
        )   
    }
}