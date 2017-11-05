import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
import Loading from './loading';
import Search from './search';
import ListItems from './list'
import Api from '../utils/api';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            datas: null,
        }

    }

    componentDidMount() {
        Api.getAll()
        .then(res => {
            this.setState({datas: res.data, err: false})
        })
        .catch(err => {
            const c = JSON.stringify(err)
            const d = JSON.parse(c);
            this.setState({err: d.response.data})
        })
    }

    handleSearch = (datas) => {
        this.setState({datas: null, err: false})
        Api.getByDate(datas.start, datas.end)
        .then(res => {
            this.setState({datas: res.data, err: false})
        })
        .catch(err => {
            const c = JSON.stringify(err)
            const d = JSON.parse(c);
            this.setState({err: d.response.data.error})
        })
    }


    render() {
        return(
            <div>
                <Search handleSearch={this.handleSearch}/>
                {this.state.datas && !this.state.err ? <ListItems data={this.state.datas} /> : null}
                {!this.state.datas && !this.state.err ? <Loading speed={300} /> : null}
                {this.state.err ? <h1>{this.state.err}</h1> : null}
            </div>
        )
    }
}

export default Home;