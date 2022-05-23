import React from 'react'
import {makeStyles} from '@material-ui/core'
import Modal from 'react-modal';
import Button from '@material-ui/core/Button'
import {useState} from 'react'
const useStyle=makeStyles({
    field:{
       marginTop:20,
      marginBottom:20,
      width:320,
      padding:'5px',
      margin:'5px',
      '&:hover':{
        color:'white'
      }
    },
    Mp_Butn:{
      width:220,
      height:40,
      marginTop:50,
      marginBottom:50,
      padding:'5px',
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      color:'white',
      background:'rgb(35, 187, 247)',
      border:'1px solid skyblue',
      '&:hover':{
        border:'1px solid black',
    }
    }
})
function Predict() {

  const classes=useStyle()
  const [modalIsOpen, setModalIsOpen]=useState(false)

  return (

    <div>
      <Button onClick={()=>setModalIsOpen(true)} className={classes.Mp_Butn}>PREDICT</Button>
      
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}
        style={{overlay:{backgroundColor:'#14AFF'},content:{color:'lightgreen',width:700,height:130,marginTop:200,marginLeft:450,borderRadius:15}}}>
      
      </Modal>
    
    </div>

  )

}

export default Predict
