import request from 'superagent'
import {baseUrl} from '../constant'

export const PLANNER_LOADED = 'PLANNER_LOADED'

const plannerLoaded = (planner) => ({
    type: 'PLANNER_LOADED',
    payload: planner
})

export const loadPlanner = () => (dispatch, getState) => {
    if (getState().planner) return

    const jwt = getState().currentUser.jwt

    request
        .get(`${baseUrl}/myplanner`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
            dispatch(plannerLoaded(response.body))
        })
        .catch(console.error)
}