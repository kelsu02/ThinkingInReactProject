class FilterableTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products = {this.props.products} />
            </div>
        );
    }
}


class SearchBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search ..." />
                <p>
                    <input type="checkbox" />{' Only show products in stock'}
                </p>
            </form>
        );
    }
}



class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <div className="column is-4">nameHeader = {props.nameHeader}</div> 
                <div className="column is-4">priceHeader = {props.priceHeader}</div>
            </div>
            <ProductCategory /> 
            </React.Fragment>
        );
    }
}
//foreach loop to create product category and row until they run out



class ProductCategory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

        );
    }
}

class ProductRow extends React.Componenet {
    constructor(props) {
        super(props);
    }

    render() {
        return (

        );
    }
}

function 

class Product {
    constructor(category, price, stocked, name) {
        this.category = category;
        this.price = price;
        this.stocked = stocked;
        this.name = name;
    }
}

let Database = {
    products: [],

    addNewProduct: function(product) {
        this.products.push(product);
        this.categorySorted();
    },

    categorySorted: function() {
        this.products.sort(function(a, b) {
            var x = a.category.toLowerCase();
            var y = b.category.toLowerCase();
            if (x < y) {
                return 1;
            }
            if (x > y) {
                return -1;
            }
            return 0;
        });
    }
}


let football = new Product ("Sporting Goods", "$49.99", true, "Football");
let baseball = new Product ("Sporting Goods", "$9.99", true, "Baseball");
let basketball = new Product ("Sporting Goods", "$29.99", false, "Basketball");
let ipodTouch = new Product ("Electronics", "$99.99", true, "iPod Touch");
let iphone5 = new Product ("Electronics", "$399.99", false, "iPhone 5");
let nexus7 = new Product ("Electronics", "$199.99", true, "Nexus 7");
 

Database.addNewProduct(football);
Database.addNewProduct(iphone5);
Database.addNewProduct(baseball);
Database.addNewProduct(ipodTouch);
Database.addNewProduct(basketball);
Database.addNewProduct(nexus7);
