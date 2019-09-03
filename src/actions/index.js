import axios from 'axios'
import { HOST } from '../config/api';
export const SHOW_BANNERS = 'SHOW_BANNERS'
export const SHOW_STORIES = 'SHOW_STORIES'
export const VIEW_STORIE = 'VIEW_STORIE'
export const SHOW_ALLIANCES = 'SHOW_ALLIANCES'
export const SHOW_TEACHERS = 'SHOW_TEACHERS'
export const SHOW_RESOLUTIONS = 'SHOW_RESOLUTIONS'

export function showBanners() {
    return (dispatch, getState) => {
        axios.get(`${HOST}/banners`)
            .then((response) => {
                dispatch( { type: SHOW_BANNERS, payload: response.data.data } ) 
            }) 
    }
}
export function showStories() {
    return (dispatch, getState) => {
        axios.get(`${HOST}/stories`)
            .then((response) => {
                dispatch( { type: SHOW_STORIES, payload: response.data.data } ) 
            })
    }
}
export function viewStorie(Id) {
    return (dispatch, getState) => {
        axios.get(`${HOST}/stories/${Id}`)
            .then((response) => {
                dispatch( { type: VIEW_STORIE, payload: response.data.data } ) 
            })
    }
}

export function showAlliances() {
    return (dispatch, getState) => {
        axios.get(`${HOST}/alliances`)
            .then((response) => {
                dispatch( { type: SHOW_ALLIANCES, payload: response.data.data } ) 
            }) 
    }
}

export function showTeachers() {
    return (dispatch, getState) => {
        axios.get(`${HOST}/teachers`)
            .then((response) => {
                dispatch( { type: SHOW_TEACHERS, payload: response.data.data } ) 
            }) 
    }
}

export function showResolutions() {
    return (dispatch, getState) => {
        axios.get(`${HOST}/resolutions`)
        .then((response) => {
            dispatch( { type: SHOW_RESOLUTIONS, payload: response.data.data } ) 
        }) 
    }
}