import React from 'react'
import classes from './imageBox.css'

class imageBox extends React.Component{
    render(){
        return(
            <div  className={classes.photoFrame}>
                <div style={{backgroundColor:this.props.color}} className={classes.photoFrameMid}>
                <img  className={classes.img} src={this.props.imgsrc} alt="img"/>
                </div>
            </div>
        )
    }
}
export default imageBox