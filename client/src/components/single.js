import React, { Component } from 'react';
import ListItems from './list';
import axios from 'axios';
import Loading from './loading';
import NotFound from './notfound';
import Api from '../utils/api';

class Single extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            id: props.match.params.id,
            datas: null,
            err: false
        }
    }

    componentDidMount(){
        Api.getById(this.state.id)
        .then(res => {
            console.log(res)
            this.setState({datas: res.data, err: false})
        })
        .catch(err => {
            const c = JSON.stringify(err)
            const d = JSON.parse(c);
            console.log(d)
            this.setState({err: true})
        })
    }

    render(){
        return(
            <div>
                {this.state.datas && !this.state.err ? <ListItems data={this.state.datas}/> : null}
                {!this.state.datas && !this.state.err ? <Loading /> : null}
                {this.state.err && <NotFound text='No item for this parameter'/>}
            </div>
        )
    }
}

export default Single;
