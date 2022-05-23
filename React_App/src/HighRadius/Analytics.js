import React from 'react'
import {Button, makeStyles, TextField} from '@material-ui/core'
import Modal from 'react-modal';
import {useState} from 'react'
import { Typography } from '@material-ui/core'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
const useStyle=makeStyles({
    field:{
      width:320,
      margin:'5px',
      background:'white',
      borderRadius:10,
      '&:hover':{
        color:'white'
      }
    },
    butn:{
      width:320,
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
      borderRadius:0,
      color:'white',
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      borderTopLeftRadius:0,
      borderBottomLeftRadius:0,
      background:'none',
      border:'1px solid skyblue',
      '&:hover':{
        border:'1px solid black',
      }
    }
})
function Analytics() {

  const classes=useStyle()
  const [modalIsOpen, setModalIsOpen]=useState(false)

  return (

    <div>

     <Button onClick={()=>setModalIsOpen(true)} className={classes.Mp_Butn}>ANALYTICS VIEW</Button>

    <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)} ariaHideApp={false}
    style={{overlay:{backgroundColor:'#14AFF'},content:{backgroundColor:'#283a46',width:660,height:450,marginTop:180,marginLeft:450,borderRadius:15}}}>
      
      <Typography  style={{color:"white",marginLeft:10,marginBottom:15}}>Analytics View</Typography>

      <div style={{display:'flex'}}>

        <Typography style={{color:"white",marginLeft:10,display:'flex'}}>Clear Date</Typography>
        <Typography style={{color:"white",marginLeft:253,display:'flex'}}>Due Date</Typography>
      
      </div>

      <TextField type="date" color="textSecondary" variant="filled" required className={classes.field}/>
      <TextField type="date" color="textSecondary" variant="filled" required className={classes.field}/>
      <TextField type="date" color="textSecondary" variant="filled" required className={classes.field}/>
      <TextField type="date" color="textSecondary" variant="filled" required className={classes.field}/>
      
      <div style={{display:'flex', marginTop:20}}>

        <Typography style={{color:"white",marginLeft:10,display:'flex'}}>Baseline Create Date</Typography>
        <Typography style={{color:"white",marginLeft:180,display:'flex'}}>Invoice Currency</Typography>
      
      </div>

      <TextField type="date" color="textSecondary" variant="filled" required className={classes.field}/>
      <TextField label="Invoice Currency" color="textSecondary" variant="filled" required className={classes.field}/>
      <TextField type="date" color="textSecondary" variant="filled" required className={classes.field}/>
      
      <div style={{display:'flex', marginTop:20}}>

        <Button type="submit" variant="contained" startIcon={<PublishOutlinedIcon />}className={classes.butn}>Submit</Button>
        <Button type="submit" variant="contained" startIcon={<HighlightOffIcon />} onClick={()=>setModalIsOpen(false)} className={classes.butn}>Cancel</Button>
      
      </div>
    
    </Modal>

    </div>
  )
}

export default Analytics
