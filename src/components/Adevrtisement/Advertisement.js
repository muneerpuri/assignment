import React from 'react'
import classes from './Advertisement.css'

class advertisement extends React.Component{
    render(){
        return(
            <div className={classes.advertisement}>
            <div style={{marginBottom: '10px'}} className={classes.upperAd}>
                <p style={{color:'rgb(241,149,93)',fontSize:'15px'}} >{this.props.title}</p>
                <p style={{color:'rgb(104,166,145)',fontSize:'10px'}}>{this.props.subtitle}</p>
            </div>
            <div className={classes.lowerAd}>
                <button>{this.props.buttonText}</button>
            </div>
        </div>
        )
    }
}

export default advertisement