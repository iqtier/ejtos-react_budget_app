

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChange = (e) => {

        let budget = e.target.value
        if (budget>2000){
            alert("The value cannot exceed remaining funds")
        }else if(budget<totalExpenses){
            alert('you cannot reduce the budget lower than the spending')
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: budget,
            });
        };
        }

    return (
        <div className='alert alert-secondary' style = {{display: 'flex', justifyContent: 'left'}}>
            <label htmlFor="cost"  style={{display:'inline-block',  width: 100}}>Budget : {currency}</label>
            <input
                required='required'
                type='number'
                id='cost'
                value={budget}
                style={{ display:'inline-block', marginLeft:-22}}
                onChange={handleChange}
                step="10"

            />
            
        </div>
    );
};
export default Budget;
