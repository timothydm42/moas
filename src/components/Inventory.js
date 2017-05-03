import React, {Component} from 'react';
import axios from 'axios';

export default class Inventory extends Component {
constructor(props) {
  super(props);
  this.state = {inventory: []};
};

componentDidMount() {
 axios.get('http://localhost:3001/inventory').then((res)=> {
   console.log(res);
   const database = res.data.map( (row) => (
     <div>
       {row.productname}, {row.quantity}
     </div>
   ) );
   this.setState({inventory: database});
 });
}

  render() {
    return (
      <div>
        {this.state.inventory}
      </div>
    )
  }
}
