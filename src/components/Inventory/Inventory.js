import React, {Component} from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import AuthService from '../../utils/AuthService';
import {Link} from 'react-router-dom';

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
          dbRows: [],
          prodArray: [],
          searchTerm: "",
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this)
    };

    updateSearchTerm(evt) {
      this.setState({
        searchTerm: evt.target.value
      });
    }

    componentDidMount() {
        axios.get('http://138.68.11.174:3002/inventoryDB').then((res) => {



            this.database = res.data.sort((a,b)=>a.productname > b.productname).map(row => (
                <ItemCtrl key={row.productid} id={row.productid} pName={row.productname} qAmt={row.quantity}/>
            ));

            let socket = io(document.location.protocol + '//138.68.11.174:3003');

            socket.on('connected', (data) => {
                socket.emit('ready for data', {});
            });

            this.setState({
              dbRows: res.data,
              prodArray: res.data.map(row=>row.productname),
            });

            socket.on('update', (data) => {

              axios.get('http://138.68.11.174:3002/inventoryDB').then((res) => {

                this.setState({
                  dbRows: res.data,
                  prodArray: res.data.map(row=>row.productname),
                });

              });
          });
        });
    }

    render() {
        const styles = this.getStyles();

        const dbRowsDisplay = this.state.searchTerm ? this.state.dbRows
        .filter(e=>e.productname.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
        .map(row => (
            <ItemCtrl key={row.productid} id={row.productid} pName={row.productname} qAmt={row.quantity}/>
        )) : this.state.dbRows
        .map(row => (
            <ItemCtrl key={row.productid} id={row.productid} pName={row.productname} qAmt={row.quantity}/>
        ))

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
                  {dbRowsDisplay}
                </div>
                {/* End div for dynamically updated inventory. */}
              </div>

               {/* BEGIN AddProduct Component */}
               <div style={styles.prodAdd}>
                 <AddProduct products={this.state.prodArray} />
               </div>

               {/* BEGIN RemoveProduct Component */}
               <div style={styles.prodRem}>
                 <RemoveProduct products={this.state.prodArray} />
               </div>

               {/* BEGIN search bar  */}
               <div style={styles.search}>
                 <p style={styles.searchTitle}>Search</p>
                 <input value={this.state.searchTerm} onChange={this.updateSearchTerm} placeholder="Product Name" style={styles.searchInput} />
               </div>

               <Link to="/" style={styles.navButtonText}><button style={styles.logoutButton} onClick={AuthService.logout}>Logout</button></Link>

            </div>
        )
    }

    getStyles() {
      return {
        inventoryPage: {
          height: "100vh",
          padding: "11px",
          backgroundColor: "#E9E9E9"
        },
        inventory: {
          width: "55%",
          margin: "0 auto",
          boxShadow: "7px 7px 7px rgb(175, 175, 175)"
        },
        inventoryHeader: {
          display: "flex",
          textAlign: "center"
        },
        headerPro: {
          borderBottom: "4px solid white",
          borderRight: "2px solid white",
          borderRadius: "5px 0px 0px 0px",
          backgroundColor: "#88BBD6",
          padding: "0px",
          marginTop: 0,
          flex: 1
        },
        headerQua: {
          borderBottom: "4px solid white",
          borderRadius: "0px 5px 0px 0px",
          backgroundColor: "#88BBD6",
          padding: "0px",
          marginTop: 0,
          flex: 2
        },
        prodAdd: {
          position: "fixed",
          top: "65px",
          left: "10px",
          width: "20%",
          border: "1px solid white",
          borderRadius: "5px",
          boxShadow: "3px 3px 5px rgb(175, 175, 175)"
        },
        prodRem: {
          position: "fixed",
          bottom: "20px",
          left: "10px",
          width: "20%",
          border: "1px solid white",
          borderRadius: "5px",
          boxShadow: "3px 3px 5px rgb(175, 175, 175)"
        },
        pro: { // These next two classes bother me too.
          padding: "5px",
          margin: "5px",
          color: "white"
        },
        qua: {
          padding: "5px",
          margin: "5px",
          color: "white"
        },
        search: {
          width: "20%",
          position: "fixed",
          top: "65px",
          right: "15px",
          backgroundColor: "#CDCDCD",
          padding: "5px",
          border: "1px solid white",
          borderRadius: "5px",
          textAlign: "right",
          boxShadow: "3px 3px 5px rgb(175, 175, 175)"
        },
        searchTitle: {
          color: "white",
          margin: 0,
          padding: "3px",
          fontSize: "120%"
        },
        searchInput: {
          width: "90%",
          fontSize: "80%",
          marginTop: "5px"
        },
        logoutButton: {
          backgroundColor: "#88BBD6",
          position: "fixed",
          bottom: "20px",
          right: "15px",
          color: "white",
          fontSize: "150%",
          padding: "5px",
          margin: "0 auto",
          border: "1px solid white",
          borderRadius: "5px",
          boxShadow: "2px 2px 2px rgb(175, 175, 175)"
        }
      }
    }
}
