import axios from 'axios'
import { HOST } from '../config/api';
export const SHOW_BANNERS = 'SHOW_BANNERS'

export function showBanners() {
    return (dispatch, getState) => {
        axios.get(`${HOST}/banners`)
            .then((response) => {
                dispatch( { type: SHOW_BANNERS, payload: response.data.data } ) 
            }) 
    }
}