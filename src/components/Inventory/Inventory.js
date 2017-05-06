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
              <div style={styles.inventoryHeader}>
                <div style={styles.headerPro}>
                  <h3>Product</h3>
                </div>
                <div style={styles.headerQua}>
                  <h3>Quantity</h3>
                </div>
              </div>
              {/* End div for inventory header. */}

              <div>
                {this.database}
              </div>
              {/* End div for dynamically updated inventory. */}

             {/* BEGIN AddProduct Component */}
             <AddProduct products={this.state.prodArray} />
             {/* END AddProduct Component */}

             {/* BEGIN RemoveProduct Component */}
             <RemoveProduct products={this.state.prodArray} />
             {/* END RemoveProduct Component */}

            </div>
        )
    }

    getStyles() {
      return {
        inventoryPage: {
          height: "100vh",
          backgroundColor: "rgb(250, 250, 250)"
        },
        inventoryHeader: {
          display: "flex",
          width: "55%",
          margin: "0 auto",
          textAlign: "center",
          backgroundColor: "rgb(112, 120, 178)"
        },
        headerPro: {
          borderBottom: "4px solid black",
          borderRight: "2px solid black",
          paddingBottom: "0px",
          marginTop: "20px",
          flex: 1,
        },
        headerQua: {
          borderBottom: "4px solid black",
          paddingBottom: "0px",
          marginTop: "20px",
          flex: 2,
        }
      }
    }
}
