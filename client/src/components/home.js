import React, { Component } from 'react';
import Loading from './loading'

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            datas: null,
        }

    }

    componentDidMount() {
        fetch('http://localhost:1339')
            .then(res => {
                return res.json()
            })
            .then(datas => {
                console.log(datas)
                this.setState({datas})
            })
    }

    followLink(url) {
        window.location.href = url;
    }


    render() {
        if(this.state.datas){
            return (
                <div className="App" style={{marginTop: "10px"}}>
                    {this.state.datas ? this.state.datas.map((elem, i) => {
                        return (
                            <div style={{padding: "20px"}} className="data-fetched" key={i}> 
                                <span><strong>Date : {elem.date}</strong></span>
                                <div>
                                    <span>Horaire de debut : <strong>{elem.start}</strong></span> / 
                                    <span> Horaire de fin : <strong>{elem.end}</strong></span>
                                </div>
                                <div>
                                    <strong>Raison : {elem.reason}</strong>
                                </div>
                                <button style={{marginTop: '20px'}} onClick={this.followLink.bind(null, elem.link)}>Plus ...</button>
                            </div>
                        )
                    }): null}
                </div>
            );
        } else {
            return(
                <Loading speed={300} />
            )
        }
    }
}

export default Home;