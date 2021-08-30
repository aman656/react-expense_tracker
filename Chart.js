import React from 'react';
import './Chart.css'
import Chartbar from './bar'


const Chart = (props)=>{
    const totalpoints = props.barvalue.map(barvalues  => barvalues.value)
    const maxpoint = Math.max(...totalpoints)
    
    return <div className='chart'>
            {props.barvalue.map((barvalues)=>(
                <Chartbar 
                key = {barvalues.label}
                value = {barvalues.value}
                maxVal = {maxpoint}
                label = {barvalues.label}
                />

            ))}

        </div>
    
}

export default Chart;