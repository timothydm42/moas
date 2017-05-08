import React, {Component} from 'react';
import axios from 'axios';

export default class RemoveProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      product:"",
    }
    this.updateProduct = this.updateProduct.bind(this);
  }

  deleteProduct(productName){
    if(!this.props.products.find(product=>product.trim() === productName.trim()) || !productName) return

    console.log(this.props.products + "  in delete function")
    axios.put('http://localhost:3002/removeProduct',{
      productname:productName
    }).then(res=>{
      console.log(res)
      this.setState({
        product:""
      })
    })
  }

  updateProduct(evt) {
    this.setState({
      product: evt.target.value
    });
  }

  render(){
    const styles = this.getStyles();
    return(
      <div style={styles.rem}>
        <input value={this.state.product} onChange={this.updateProduct} placeholder="Product Name" style={styles.product} />

        <button onClick={()=>(this.deleteProduct(this.state.product))} style={styles.button} >Remove Product</button>
        {console.log(JSON.stringify(this.props.products, null,2) + "  in remove")}
      </div>
    )
  }

  getStyles() {
    return {
      rem: {
        backgroundColor: "rgb(123, 54, 255)",
        padding: "5px"
      },
      product: {
        backgroundColor: "rgb(51, 37, 232)",
        width: "90%",
        fontSize: "80%"
      },
      button: {
        fontSize: "70%",
        padding: "5px",
        marginTop: "5px"
      }
    }
  }
}
