import React from 'react'
import classes from './VerticalAsideCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class verticalAsideCards extends React.Component{
    render(){
        return(
            <div className={classes.mainCardFrame}>
                       <div className={classes.logoItem}> <FontAwesomeIcon icon={this.props.icon} style={{color:this.props.color,fontSize:'25px',position:'relative',right:'20px'}}/></div>
                       <div>
                           <p style={{fontWeight:'bold', fontSize: '12px'}}>
                              { this.props.text1}

                           </p>
                           <p style={{ fontSize: '11px',color:'rgb(184, 184, 184)'}}>
                           { this.props.text2}

                           </p>

                       </div>
            </div>
        )
    }
}
export default verticalAsideCards