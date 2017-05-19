
import React, {Component} from 'react';
import axios from 'axios';

export default class AddProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      amt:"",
      product:"",
    }
    this.updateAmt = this.updateAmt.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  insertProduct(productName,quantity){

    if(this.props.products.find(product=>product.toLowerCase().trim() === productName.toLowerCase().trim()) || !productName) return

    axios.post('http://localhost:3002/addProduct',{
      productname:productName.toLowerCase().trim(),
      quantity
    }).then(res=>{
      this.setState({
        amt:"",
        product:""
      })
    })
  }

  updateAmt(evt) {
    this.setState({
      amt: evt.target.value
    });
  }

  updateProduct(evt) {
    this.setState({
      product: evt.target.value
    });
  }

  render(){
    const styles = this.getStyles();
    return(
      <div style={styles.add}>
        <p style={styles.title}>New Product</p>
        <input value={this.state.product} onChange={this.updateProduct} placeholder="Product Name" style={styles.product} />

        <input value={this.state.amt} onChange={this.updateAmt} placeholder="Quantity" style={styles.quantity} />
        <br />

        <button onClick={()=>(this.insertProduct(this.state.product,this.state.amt))} style={styles.button} >Add Product</button>
      </div>
    )
  }

  getStyles() {
    return {
      add: {
        backgroundColor: "#CDCDCD",
        padding: "5px"
      },
      title: {
        color: "white",
        margin: 0,
        padding: "3px",
        fontSize: "120%"
      },
      product: {
        width: "60%",
        fontSize: "80%",
        marginTop: "5px"
      },
      quantity: {
        width: "30%",
        fontSize: "80%",
        marginLeft: "10px"
      },
      button: {
        backgroundColor: "#88BBD6",
        color: "white",
        fontSize: "70%",
        padding: "5px",
        marginTop: "5px",
        border: "1px solid white",
        boxShadow: "2px 2px 2px rgb(175, 175, 175)"
      }
    }
  }
}
