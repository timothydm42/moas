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
    if(Number(amt) !== 0 && !Number(amt) || Number(amt) === this.props.qAmt) return
    axios.put('http://138.68.229.153:3002/setQuantity',{
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
    const styles = this.getStyles();
    return(
      <div style={styles.inventory}>

        <div style={styles.product}>
          <p>{this.props.pName}</p>
        </div>
        {/* End div for PRODUCT. */}

        <div style={styles.quantity}>
          <p>{this.props.qAmt}</p>
        </div>
        {/* End div for QUANTITY. */}

        <div style={styles.quanEdit}>
          <input value={this.state.inputVal} onChange={this.updateInputValue} placeholder="enter new total" style={styles.quanEditInput}/>

          <button onClick={()=>(this.setQuantity(this.props.id,this.state.inputVal))} style={styles.quanEditButton}>Set #</button>
        </div>
        {/* End div for quantity EDIT. */}
      </div>
    )
  }

  getStyles() {
    return {
      inventory: {
        display: "flex",
        width: "55%",
        margin: "0 auto",
        backgroundColor: "rgb(186, 192, 255)"
      },
      product: {
        borderBottom: "2px solid black",
        borderRight: "2px solid black",
        paddingTop: "6px",
        paddingBottom: "0px",
        left: "10px",
        flex: 1,
        fontSize: "110%",
        display: "flex",
        justifyContent: "center",
        alignItem: "center"
      },
      quantity: {
        borderBottom: "2px solid black",
        paddingTop: "6px",
        paddingBottom: "0px",
        flex: 1,
        textAlign: "center",
        fontSize: "110%",
        display: "flex",
        justifyContent: "center",
        alignItem: "center"
      },
      quanEdit: {
        borderBottom: "2px solid black",
        paddingTop: "6px",
        paddingBottom: "0px",
        flex: 1,
        display: "flex"
      },
      quanEditInput: {
        width: "60px",
        height: "24px"
      },
      quanEditButton: {
        fontSize: "65%",
        width: "38px",
        height: "24px"
      }
    }
  }
}
