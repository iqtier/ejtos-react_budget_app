

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChange = (e) => {

        let budget = e.target.value
        if (budget>20001){
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
        <div className='alert alert-secondary'>
            <input
                required='required'
                type='number'
                id='cost'
                value={budget}
                style={{ marginLeft: '2rem', size: 10 }}
                onChange={handleChange}
                step="10"

            />
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;
