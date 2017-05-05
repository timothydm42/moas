import React, {Component} from 'react';
import axios from 'axios';

export default class RemoveProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      product:"",
      currentProdcutsArray:props.products
    }
    this.updateProduct = this.updateProduct.bind(this);
  }

  deleteProduct(productName){
    if(!this.state.currentProdcutsArray.find(product=>product.trim() === productName.trim()) || !productName) return
    console.log(productName + "in delete function")
    axios.put('http://localhost:3002/removeProduct',{
      productname:productName
    }).then(res=>console.log(res))
  }

  updateProduct(evt) {
    this.setState({
      product: evt.target.value
    });
  }

  render(){
    return(
      <div>
        <input value={this.state.product} onChange={this.updateProduct} placeholder="product name" />

        <button onClick={()=>(this.deleteProduct(this.state.product))} >Remove Product</button>
        {console.log(JSON.stringify(this.state.product, null,2) + "  in remove")}
      </div>
    )
  }
}
