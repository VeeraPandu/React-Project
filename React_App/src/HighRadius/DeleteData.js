import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import Modal from 'react-modal';
import {useState} from 'react'

const useStyle=makeStyles({
  field:{
    marginTop:20,
    marginBottom:20,
    width:320,
    margin:'10px',
    '&:hover':{
        color:'white'
    }
  },
  field_btn:{
    marginTop:20,
    width:345,
    height:40,
    padding:'5px',
    margin:'5px',
    color:'white',
    background:'#283a46',
    border:'1px solid white',
    '&:hover':{
      background:'white',
      color:'black'
    }
  },
  Mp_Butn:{
    width:220,
    height:40,
    marginTop:50,
    marginBottom:50,
    padding:'5px',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    color:'white',
    background:'none',
    border:'1px solid skyblue',
    '&:hover':{
      border:'1px solid black',
    }
  }
})

function DeleteData({deleteHandler,del}) {

  const classes=useStyle()
  const [modalIsOpen, setModalIsOpen]=useState(false)

  return (

    <div>

        <Button onClick={()=>setModalIsOpen(true)} className={classes.Mp_Butn} disabled={del}>DELETE</Button>
        
        <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)} ariaHideApp={false}
        style={{overlay:{backgroundColor:'#14AFF'},content:{backgroundColor:'#283a46',width:720,height:140,marginTop:230,marginLeft:450,borderRadius:15}}}>
          
          <Typography className='heading' style={{color:"white",marginBottom:10}}>Delete Records?</Typography>
          <Typography className='heading' style={{color:"white",marginBottom:10}}>Are you sure you want to delete these record[s]?</Typography>
          <Button onClick={()=>setModalIsOpen(false)} variant="contained" startIcon={<HighlightOffIcon />}  className={classes.field_btn}>Cancel</Button>
          <Button variant="contained" className={classes.field_btn} startIcon={<DeleteForeverIcon />} onClick={()=>deleteHandler(true)}>Delete</Button>
      
        </Modal>
      
    </div>

  )
  
}

export default DeleteData
