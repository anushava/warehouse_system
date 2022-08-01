import React, { Component } from 'react'
import InventoryService from '../services/InventoryService'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
class ListProductsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.loadInventory = this.loadInventory.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    deleteProduct(prod,id) {
        if(prod.quantity) {
            this.setState({products:InventoryService.deleteProducts(id)});
            InventoryService.deleteInventory(prod);
        }
    }

    componentDidMount(){
        this.setState({products: InventoryService.getProducts()});
    } 

    loadInventory(){
        this.props.history.push('/inventory');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.loadInventory}> Go to Inventory</button>
                 </div>
                 <div className = "row">
                 <div className = "col-md-8 mt-4 pt-2">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name </th>
                                    <th> Quantity</th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products?.map(
                                        product => 
                                        <tr key = {product.id}>
                                             <td> {product.name} 
                                                {product.contain_articles.map(item => 
                                                    <ul key={item.art_id}>
                                                        {InventoryService.getInventories().filter(x=> 
                                                            x.art_id===item.art_id).map(filterdName =>(
                                                                filterdName.name.charAt(0).toUpperCase()+filterdName.name.slice(1)
                                                        ))}
                                                        :{item.amount_of}</ul>
                                                    )
                                                }
                                             </td>  
                                             
                                             <td> {product.quantity}</td>
                                             <td> {product.price}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product,product.id)} className="btn btn-danger">Sell</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 </div>

            </div>
        )
    }
}

export default ListProductsComponent
