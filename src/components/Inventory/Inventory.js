import React, {Component} from 'react';
import axios from 'axios';
import io from 'socket.io-client';

import ItemCtrl from './ItemCtrl';
import AddProduct from './AddProduct';
import RemoveProduct from './RemoveProduct';

// document.location.host
// we can use this in the io url if we get the project hosted,
//this will automatically find the hosted url and put it in

export default class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            prodArray: [],
        };
        this.database = []
    };

    componentDidMount() {
        axios.get('http://localhost:3002/inventory').then((res) => {
            console.log(res);

            this.database = res.data.sort((a,b)=>a.productname > b.productname).map(row => (
                <ItemCtrl key={row.productid} id={row.productid} pName={row.productname} qAmt={row.quantity}/>
            ));

            let socket = io(document.location.protocol + '//localhost:3003');
            socket.on('connected', (data) => {
                console.log('client connected');
                socket.emit('ready for data', {});
            });

            this.setState({
              prodArray: res.data.map(row=>row.productname)
            });                                    //does socket.on(update) need to be in the then of the
                                                //original db request?
            socket.on('update', (data) => {
              console.log(data)
              axios.get('http://localhost:3002/inventory').then((res) => {
                console.log(res + "    in the update");

                this.database = res.data.sort((a,b)=>a.productname > b.productname).map(row => (
                    <ItemCtrl key={row.productid} id={row.productid} pName={row.productname} qAmt={row.quantity}/>
                ));
                this.setState({prodArray: res.data.map(row=>row.productname)});
              });
          });
        });
    }

    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.inventoryPage}>
              <div style={styles.inventory}>
                <div style={styles.inventoryHeader}>
                  <div style={styles.headerPro}>
                    <h3 style={styles.pro}>Product</h3>
                  </div>
                  <div style={styles.headerQua}>
                    <h3 style={styles.qua}>Quantity</h3>
                  </div>
                </div>
                {/* End div for inventory header. */}

                <div>
                  {this.database}
                </div>
                {/* End div for dynamically updated inventory. */}
              </div>

             {/* BEGIN AddProduct Component */}
             <div style={styles.prodAdd}>
               <AddProduct products={this.state.prodArray} />
             </div>
             {/* END AddProduct Component */}

             {/* BEGIN RemoveProduct Component */}
             <div style={styles.prodRem}>
               <RemoveProduct products={this.state.prodArray} />
             </div>
             {/* END RemoveProduct Component */}

            </div>
        )
    }

    getStyles() {
      return {
        inventoryPage: {
          height: "100vh",
          backgroundColor: "rgb(245, 245, 245)"
        },
        inventory: { // This class bothers me. But it works.
          marginTop: "11px" // Addendum: Still bothers me but it doesn't work. See Navbar.js
        },
        inventoryHeader: {
          display: "flex",
          width: "55%",
          margin: "0 auto",
          textAlign: "center"
        },
        headerPro: {
          borderBottom: "4px solid black",
          borderRight: "2px solid black",
          borderRadius: "5px 0px 0px 0px",
          backgroundColor: "rgb(112, 120, 178)",
          padding: "0px",
          marginTop: 0,
          flex: 1,
        },
        headerQua: {
          borderBottom: "4px solid black",
          borderRadius: "0px 5px 0px 0px",
          backgroundColor: "rgb(112, 120, 178)",
          padding: "0px",
          marginTop: 0,
          flex: 2,
        },
        prodAdd: {
          position: "fixed",
          top: "65px",
          left: "10px",
          width: "20%",
          border: "1px solid black",
          borderRadius: "5px"
        },
        prodRem: {
          position: "fixed",
          bottom: "20px",
          left: "10px",
          width: "20%",
          border: "1px solid black",
          borderRadius: "5px"
        },
        pro: { // These next two classes bother me too.
          padding: "5px",
          margin: "5px"
        },
        qua: {
          padding: "5px",
          margin: "5px"
        }
      }
    }
}
