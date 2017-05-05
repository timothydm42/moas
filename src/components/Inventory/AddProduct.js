
import React, {Component} from 'react';
import axios from 'axios';

export default class AddProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      amt:"",
      product:"",
      currentProdcutsArray:props.products,
      prop:""
    }
    this.updateAmt = this.updateAmt.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  insertProduct(productName,quantity){
    if(this.state.currentProdcutsArray.find(product=>product.trim() === productName.trim()) || !productName) return
    const dbQantity = Number(quantity)
    axios.post('http://localhost:3002/addProduct',{
      productname:productName,
      quantity:dbQantity
    }).then(res=>console.log(res))
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
    return(
      <div>
        {console.log(this.state.currentProdcutsArray + "  in add")}
        <input value={this.state.product} onChange={this.updateProduct} placeholder="product name" />

        <input value={this.state.amt} onChange={this.updateAmt} placeholder="quantity" />

        <button onClick={()=>(this.insertProduct(this.state.product,this.state.amt))} >Add Product</button>
      </div>
    )
  }
}
