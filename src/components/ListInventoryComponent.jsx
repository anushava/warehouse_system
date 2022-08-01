import React, { Component } from 'react'
import InventoryService from '../services/InventoryService'
import { Pie } from 'react-chartjs-2';

class ListInventoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                inventories: [],
                data:{
                    labels: InventoryService.getInventories().map(x=>x.name),
                    datasets: [
                      {
                        data: InventoryService.getInventories().map(x=>x.stock),
                        backgroundColor: [
                            'red',    
                            'blue',  
                            'green',
                            'yellow'
                        ],
                        borderColor: [
                            'red',    
                            'blue',  
                            'green',
                            'yellow'
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }
        }
        this.loadProducts = this.loadProducts.bind(this);
    }


    loadProducts(){
        this.props.history.push('/products');
    }

    componentDidMount(){
        this.setState({inventories: InventoryService.getInventories()});
        //console.log(this.state);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Inventory List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.loadProducts}> Go to Products</button>
                 </div>
                 <br></br>
                 <div className = "row">
                 <div className = "col-md-4"> 
                 <Pie data={this.state.data} />
                 </div>
                 <div className = "col-md-8"> 
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ID</th>
                                    <th> Name</th>
                                    <th> Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.inventories?.map(
                                        inventory => 
                                        <tr key = {inventory.art_id}>
                                             <td> {inventory.art_id}</td>
                                             <td> {inventory.name.charAt(0).toUpperCase()+
                                                   inventory.name.slice(1)} </td>   
                                             <td> {inventory.stock}</td>
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

export default ListInventoryComponent
