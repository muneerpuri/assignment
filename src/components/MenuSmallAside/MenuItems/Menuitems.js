import React from 'react'
import classes from './MenuItems.css'
import MenuItem from './MenuItem/MenuItem'
import { faSearch,faCommentDots,faHome,faCog }  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class menuitema extends React.Component{
    render(){
        let style = {
            color : 'black',
            width: '100%',
            margin: '20px 20px ',
            cursor: 'pointer'
        }
        return(
            <div className={classes.menuItems}>
                <div style={style}>
                <FontAwesomeIcon style={{color:'rgb(229,95,61)'}} icon={faHome} /> Home
                </div>
                <MenuItem name="Discover" icon={faSearch}/>
                <MenuItem name="Messages" icon={faCommentDots}/>
                <MenuItem name="Settings" icon={faCog}/>

            </div>
        )
    }
}

export default menuitema