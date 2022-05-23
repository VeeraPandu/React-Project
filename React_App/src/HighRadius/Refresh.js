import React from 'react'
import {makeStyles} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRotateRight} from '@fortawesome/free-solid-svg-icons'

const useStyle=makeStyles({
  butn:{
    width:40,
    height:40,
    marginLeft:10,
    marginTop:50,
    marginBottom:50,
    borderRadius:10,
    color:'skyblue',
    background:'none',
    border:'1px solid skyblue',
    '&:hover':{
      border:'1px solid black',
  }
}
})
function Refresh() {

  const classes=useStyle()

  return (

    <div>

      <button onClick={()=>window.location.reload(false)} className={classes.butn}><FontAwesomeIcon icon={faRotateRight} /></button>
    
    </div>

  )
  
}

export default Refresh
