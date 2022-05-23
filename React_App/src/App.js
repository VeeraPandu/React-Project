/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import HRLogo from './HRCPLogo.png'
import Products from './ABCProducts.png'
import InvoiceManagement from './HighRadius/UI';
import {makeStyles} from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link';
const useStyle=makeStyles({
  field:{
    marginTop:15,
    marginLeft:460
  },
  field1:{
    marginTop:15,
    marginLeft:20
  },
  field2:{
    fontSize:25,
    marginTop:15,
    marginLeft:-1500,
  }
})
function App() {
  const classes=useStyle()
  return (
    
      <div className="App">
            
        <div style={{display:'flex'}}>

          <img src={Products} height="50" width="auto" className={classes.field1}/>
          <img src={HRLogo} height="50" width="230" className={classes.field}/>
        
        </div>

        <Typography className={classes.field2}>Invoice List</Typography>

        <div style={{background:'#1f2c35',borderBottom:'1px solid black'}}>
            
            <InvoiceManagement />
        
        </div>

        <div style={{display:'flex',marginLeft:630,marginTop:20}}>

          <Link href='' target='_blank'><Typography  style={{color:'#7f7ded'}}>Privacy Policy </Typography></Link>
          <Typography style={{marginLeft:5}}>| &copy; 2022 HighRadius Corporation.All rights reserved.</Typography>

        </div>

      </div>
      
  );

}

export default App;




