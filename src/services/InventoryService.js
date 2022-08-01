//import axios from 'axios';
import products from '../products.json';
import inventory from '../inventory.json';

class InventoryService {

    getProducts(){
        products['products'].map(x=>{
            let p= inventory['inventory'].filter(y=> x['contain_articles'].some(z=>z.art_id === y.art_id)).map(m=>parseInt(m.stock));
            x.quantity = Math.min(...p);
        });
        return products['products'];
    }

    getInventories(){
        return inventory['inventory'];
    }

    deleteProducts(id) {
        products['products'].map(x=>{
            if(id === x.id) {
                x.quantity = parseInt(x.quantity) > 0 ? parseInt(x.quantity)-1: 0;
            }
        });
        return products['products'];
    }
    deleteInventory(prod) {
        inventory['inventory'].map(inv=> {
            prod['contain_articles'].forEach(prod => {
                if(prod.art_id === inv.art_id) {
                    inv.stock = parseInt(inv.stock) > 0 ? parseInt(inv.stock)-(prod.amount_of): 0;
                }
            });
        });
    }
}

export default new InventoryService()