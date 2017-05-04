import React, {Component} from 'react';
import axios from 'axios';

export default class ItemCtrl extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputVal: props.qAmt
    };

    this.setQuantity = this.setQuantity;
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  setQuantity(id,amt){
    console.log(id)
    if(Number(amt) !== 0 && !Number(amt)|| Number(amt) === this.props.qAmt) return
    console.log(amt)
    axios.put('http://localhost:3002/setQuantity',{
      productid:id,
      quantity:amt
    }).then(res=>console.log(res))
  }

  updateInputValue(evt) {
    this.setState({
      inputVal: evt.target.value
    });
    //console.log(this.state.inputVal);
  }

  render(){
    return(
      <div>
        {console.log(this.state.inputVal)}

        {this.props.id}, {this.props.pName}, {this.props.qAmt}

        <input value={this.state.inputVal} onChange={this.updateInputValue} placeholder="enter new total"/>

        <button onClick={()=>(this.setQuantity(this.props.id,this.state.inputVal))}>Set Amount</button>
      </div>
    )
  }
}
