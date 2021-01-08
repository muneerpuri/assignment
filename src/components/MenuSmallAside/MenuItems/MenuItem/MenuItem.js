import React from 'react'
import classes from './MenuItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class menuItem extends React.Component{
    render(){
        return(
            <div className={classes.menuItem}>
<FontAwesomeIcon icon={this.props.icon} /> {this.props.name}
            </div>
        )
    }
}

export default menuItem