import React from 'react'
import classes from './CardMenuAside2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV }  from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/p1.png'
class cardMenuAside2 extends React.Component{
    render(){
        return(
            <div className={classes.mainFrame}>
               <div className={classes.letsFlex}> 
                   <div className={classes.boxIcon}><img className={classes.img} src={img} alt="user"/></div>
                   <div className={classes.textBox}>
                      <p style={{fontWeight:'bold', fontSize: '12px'}}> Alex Dixon</p>
                      <p style={{ fontSize: '11px',color:'rgb(184, 184, 184)'}}> @alexlearns</p>
                </div>
                </div>
                <div className={classes.displayColumn}>
                <FontAwesomeIcon  icon={faEllipsisV} />
                </div>
  
            </div>
        )
    }
}

export default cardMenuAside2