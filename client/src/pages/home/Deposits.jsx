import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}
var bal;
// replace with axios call
await axios.get('http://localhost:2000/user/',{withCredentials: true}).then((res)=>{
    bal = res.data.balance;
      console.log(bal);
      
    }).catch((err)=>{console.log(err)});
export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
        $ {bal}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 24 June, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance history
        </Link>
      </div>
    </React.Fragment>
  );
}