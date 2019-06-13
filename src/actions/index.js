import axios from 'axios'

export const SHOW_BANNERS = 'SHOW_BANNERS'



export function showBanners() {
    
    return (dispatch, getState) => {
        axios.get('http://api.uniq.edu.pe/public/api/banners')
            .then((response) => {
                dispatch( { type: SHOW_BANNERS, payload: response.data.data } ) 
            }) 
    }

} 
