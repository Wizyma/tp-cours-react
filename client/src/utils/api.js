import axios from 'axios';
import moment from 'moment';

class ChabanApi {
    getAll(){
        return axios.get('http://localhost:1339')
    }

    getByDate(start, end){
        return axios.get('http://localhost:1339', {
            params: {
               from: moment(start).toDate(),
               to: moment(end).toDate() 
            }
        })
    }

    getById(id){
        return axios.get(`http://localhost:1339/${id}`)
    }
}

const Api = new ChabanApi();

export default Api;
