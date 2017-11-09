import React, { Component } from 'react';
import ListItems from './list';
import axios from 'axios';
import Loading from './loading';
import NotFound from './notfound';
import Api from '../utils/api';

const Element = ({ elem }) => {
    return (
        <div style={{padding: "20px"}} className="data-fetched"> 
            <span><strong>Date : {elem.date}</strong></span>
            <div>
                <span>Horaire de debut : <strong>{elem.start}</strong></span> / 
                <span> Horaire de fin : <strong>{elem.end}</strong></span>
            </div>
            <div>
                <strong>Raison : {elem.reason}</strong>
            </div>
            <button onClick={() => window.location.href = '/'}>Go Back</button>
        </div>
    )
}

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
        .then(res => this.setState({datas: res.data, err: false}))
        .catch(err => {
            const c = JSON.stringify(err)
            const d = JSON.parse(c);
            this.setState({err: true})
        })
    }

    render(){
        return(
            <div>
                {this.state.datas && !this.state.err ? <Element elem={this.state.datas} /> : null}
                {!this.state.datas && !this.state.err ? <Loading /> : null}
                {this.state.err && <NotFound text='No item for this parameter'/>}
            </div>
        )
    }
}

export default Single;
