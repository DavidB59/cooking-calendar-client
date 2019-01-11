import request from 'superagent'
import {baseUrl} from '../constant'

const recipeCreated = (recipe) => ({
    type: 'NEW_RECIPE',
    payload: recipe
})

export const createRecipe = (data) => (dispatch) => {

    request
        .post(`${baseUrl}/recipes`)
        .send(data)
        .then(response => {
         dispatch(recipeCreated(response.body))
            console.log(response)
        })
        .catch(console.error)
}


export const changeRecipe = (recipeId, dayId ,jwt ) => (getState) => {
  
    jwt=jwt.jwt
    request
        .patch(`${baseUrl}/days/${dayId}/recipes/${recipeId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .catch(console.error)
}


export const addIngredient = (data) => (dispatch) => {

    request
        .post(`${baseUrl}/ingredients`)
        .send(data)
        .then(response => {
         dispatch(recipeCreated(response.body))
            console.log(response)
        })
        .catch(console.error)
}

export const addUnit = (data) => (dispatch) => {

    request
        .post(`${baseUrl}/units`)
        .send(data)
        .then(response => {
         dispatch(recipeCreated(response.body))
            console.log(response)
        })
        .catch(console.error)
}
