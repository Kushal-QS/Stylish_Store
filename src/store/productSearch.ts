import { action, makeAutoObservable, runInAction } from "mobx";

interface Rating {
    count: string;
    rate: string;
  }
  
  interface Product {
    category: string;
    description: string;
    id: string;
    image: string;
    price: string;
    rating: Rating;
    title: string;
}

class ProductSearchStore {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    searchQuery: string = '';
    isLoading: boolean = true;

    constructor(){
        makeAutoObservable(this, {
            fetchProducts: action,
            setSearchQuery: action,
            filterProducts: action,
            setLoading: action,
        });
    }

    setLoading(loading: boolean) {
        this.isLoading = loading;
    }

    async fetchProducts() {

        this.setLoading(true);

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            runInAction(() => {
                this.products = data;
                this.filteredProducts = data;
            });
        } catch (error) {
            console.error(error);
        } finally {
            this.setLoading(false);
        }
    }

    filterProducts() {
        this.setLoading(true)
        if (this.searchQuery.trim() === '') {
          this.filteredProducts = this.products;
        } else {
          const query = this.searchQuery.trim().toLowerCase();
          this.filteredProducts = this.products.filter(product =>
            product.category.toLowerCase().includes(query)
          );
        }
        this.setLoading(false)
    }

    setSearchQuery(query: string) {
        this.searchQuery = query;
        console.log(this.searchQuery);
        this.filterProducts();
    }
}

const productSearchStore = new ProductSearchStore();
export default productSearchStore;