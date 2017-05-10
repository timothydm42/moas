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

    axios.put('http://138.68.229.153:3002/removeProduct',{
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
        <input value={this.state.product} onChange={this.updateProduct} placeholder="Product Name" style={styles.product} />

        <button onClick={()=>(this.deleteProduct(this.state.product))} style={styles.button} >Remove Product</button>
        {console.log(JSON.stringify(this.props.products, null,2) + "  in remove")}
      </div>
    )
  }

  getStyles() {
    return {
      rem: {
        backgroundColor: "#CDCDCD",
        padding: "5px"
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
