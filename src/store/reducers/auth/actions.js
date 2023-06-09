import axios from 'axios';
import types from './types';

const fetchUser = () => {
    return function(dispatch) {
        axios.get('/api/user')
            .then( res => dispatch({
                type: types.CHECK_USER,
                payload: res.data
            }))
    }
    

}

const actions = {
    fetchUser
};

export default actions;