import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'; 
import axios from "axios"
export default (req) => {
    const axiosInstance = axios.create({
        baseURL: "http://react-ssr-api.herokuapp.com",
        headers: {
            cookie: req.get('cookie') || ''
        }
    });
    //since its the first request and its from server the cookie need to be extracted and sent along
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));



    return store;
}