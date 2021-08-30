import './bar.css';
import React from 'react'

const Chartbar = (props)=>{
    let barheight = '0%';
    if(props.maxVal > 0){
        barheight = Math.round((props.value/props.maxVal)*100) + "%"
    }

    return <div className="chart-bar">
        <div className="chart-bar_inner">
            <div className="chart-bar_fill" style={{height:barheight}}></div>
        </div>
        <div className="chart-bar_label">
            {props.label}

        </div>

    </div>
    }
export default Chartbar