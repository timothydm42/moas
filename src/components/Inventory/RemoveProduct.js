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

    console.log(this.props.products + "  in delete function")
    axios.put('http://138.68.229.153:3002/removeProduct',{
      productname:productName.toLowerCase()
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
        backgroundColor: "rgb(178, 164, 112)",
        padding: "5px"
      },
      product: {
        width: "90%",
        fontSize: "80%"
      },
      button: {
        backgroundColor: "rgb(186, 192, 255)",
        fontSize: "70%",
        padding: "5px",
        marginTop: "5px"
      }
    }
  }
}
