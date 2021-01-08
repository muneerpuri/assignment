import React from 'react'
import classes from './MainBottomCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus }  from '@fortawesome/free-solid-svg-icons'
class mainBottomCard extends React.Component{
    render(){
        return(
            <div className={classes.mainFrame}>
               <div className={classes.letsFlex}> 
                   <div style={{backgroundColor:this.props.imgbgcolor}} className={classes.boxIcon}><img className={classes.img} src={this.props.img} alt="user"/></div>
                   <div className={classes.textBox}>
                      <p style={{fontWeight:'bold', fontSize: '12px'}}> {this.props.title}</p>
                      <p style={{ fontSize: '11px',color:'rgb(184, 184, 184)'}}> {this.props.subtitle}</p>
                </div>
                </div>
                <div className={classes.displayColumn}>
               <div className={classes.WhiteBox}> <FontAwesomeIcon style={{ fontSize: '13px',fontWeight:'bold',color:'black'}} icon={faPlus} /></div>
                </div>
  
            </div>
        )
    }
}

export default mainBottomCard