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
    if(!this.props.products.find(product=>product.toLowerCase().trim() === productName.toLowerCase().trim()) || !productName) return

    axios.put('http://138.68.11.174:3002/removeProduct',{
      productname:productName.toLowerCase()
    }).then(res=>{
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
        <p style={styles.title}>Remove Product</p>
        <input value={this.state.product} onChange={this.updateProduct} placeholder="Product Name" style={styles.product} />

        <button onClick={()=>(this.deleteProduct(this.state.product))} style={styles.button} >Remove Product</button>
      </div>
    )
  }

  getStyles() {
    return {
      rem: {
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
        width: "90%",
        fontSize: "80%"
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
