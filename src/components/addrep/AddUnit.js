import React from 'react'
import '../signup/SignupForm.css'

export const AddUnit = (props) => {
    const { onSubmit, onChange, values } = props

    return (
        <div>
            <h1>Add Unit</h1>
            <form onSubmit={onSubmit}>
                <input type="box" placeholder="name" name='name' onChange={onChange} value={values.name} />
    

                <button type='submit'>SUBMIT</button>

            </form>
        </div>
    )
}

