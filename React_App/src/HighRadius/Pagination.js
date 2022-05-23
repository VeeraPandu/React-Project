import React from 'react'
import TablePagination from '@mui/material/TablePagination';
function Pagination({count, page, rowsPerPage,handleChangePage,handleChangeRowsPerPage}) {
  return (

      <TablePagination 
      rowsPerPageOptions={[5,10,25,50,100]}
      component='div'
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      style={{color:'white', padding:2}}
      />

  )
  
}

export default Pagination

