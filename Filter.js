import React from 'react'
import './Filter.css'


function Filter(props){
    const filterHandler = (event)=>{
        console.log(event.target.value)
        props.onYearChange(event.target.value)

    }
    return <div className="expense-filter">
        <div className="expense-filter_control">
            <label>Select a Year</label>
            <select value = {props.settingdefaultYear} onChange={filterHandler}>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>

        </div>

    </div>
}
export default Filter