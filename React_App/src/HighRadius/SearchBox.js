import React from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const useStyle=makeStyles({
    field:{
        marginLeft:10,
        marginTop:42,
        marginBottom:30,
        height:54,
        width:270,
        margin:'8px',
        background:'white',
        borderRadius:10
    }
})
function Search({cust_number, sChangeHandler, SearchlogoHandler}) {
    
    const classes=useStyle();
    
    return (
    
        <TextField onChange={sChangeHandler} name='cust_number' value={cust_number} onKeyDown={SearchlogoHandler} InputProps={{endAdornment: (<InputAdornment position="start"> <SearchIcon style={{cursor:'pointer'}} /></InputAdornment>),}} label="Search Customer Id" className={classes.field}  variant="filled" /> 
    
    )    
}

export default Search;
