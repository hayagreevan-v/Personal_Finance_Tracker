import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Title from './Title';
import axios from 'axios';

function createData(_id, description, amount,mode) {
  return { _id, description, amount,mode };
}
// Generate Order Data
var rows=[];

// replace with axios call
await axios.get('http://localhost:2000/transaction/',{withCredentials: true}).then((res)=>{
    for(var transaction of res.data){
      console.log(transaction);
      rows.push(createData(transaction._id,transaction.description,transaction.amount,transaction.mode));
      
    }
  }).catch((err)=>{console.log(err)});
console.log(rows);

function preventDefault(event) {
  event.preventDefault();
  
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Expense</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell >Description</TableCell>
            <TableCell>Credit/debit</TableCell>
            <TableCell align='right'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.mode}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more expense
      </Link>
    </React.Fragment>
  );
}