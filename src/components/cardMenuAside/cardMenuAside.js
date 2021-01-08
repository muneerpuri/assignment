import React from 'react'
import classes from './cardMenuAside.css'
import { faLightbulb }  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class cardMenuAside extends React.Component{
    render(){
        return(
            <div className={classes.mainFrame}>
                <div className={classes.boxIcon}><FontAwesomeIcon style={{color:'white'}} icon={faLightbulb} /></div>
                <div className={classes.textBox}>
                    <p style={{fontWeight:'bold', fontSize: '12px'}}> Updated Course</p>
                    <p style={{ fontSize: '11px',color:'rgb(184, 184, 184)'}}> by @karl</p>
                </div>
  
            </div>
        )
    }
}

export default cardMenuAside