import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

interface Product {
    productId: string;
    quantity: number;
}

interface ProductDetailed {
    category: string;
    description: string;
    id: string;
    image: string;
    price: string;
    rating: {
      count: string;
      rate: string;
    };
    title: string;
    quantity: number;
}

interface CartState {
    isLoading: boolean;
    products: Product[];
    productsDetailed: ProductDetailed[];
}

const initialState: CartState = {
    isLoading: true,
    products: [],
    productsDetailed: [],
};

export const fetchCartProducts = createAsyncThunk(
    "cart/fetchCartProducts",
    async () => {
        const URL = "https://fakestoreapi.com/carts?userId=1";

        try{
            const response = await fetch(URL);
            const data = await response.json();
            return data[0].products;
        }catch (error) {
            console.error(error);
        }
    }
);

export const fetchProductDetails = createAsyncThunk(
    "cart/fetchProductDetails",
    async (products: Product[]) => {
        const productsWithDetailsArray: ProductDetailed[] = [];
        for(const cartProduct of products){
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${cartProduct.productId}`);
                const productData = await response.json();
                productsWithDetailsArray.push({ ...productData, quantity: cartProduct.quantity });
            }catch(error){
                console.log(error);
            }
        }

        return productsWithDetailsArray;
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        increaseQuantity: (state, action: PayloadAction<string>) => {
            const product = state.productsDetailed.find((p) => p.id === action.payload);

            if(product) {
                product.quantity += 1;
            }
        },

        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const product = state.productsDetailed.find((p) => p.id === action.payload);

            if(product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },

        deleteProduct: (state, action: PayloadAction<string>) => {
            state.productsDetailed = state.productsDetailed.filter((product) => product.id !== action.payload);
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchCartProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchCartProducts.fulfilled, (state, action) => {
            state.products = action.payload;
          })
          .addCase(fetchCartProducts.rejected, (state) => {
            state.isLoading = false;
          })
          .addCase(fetchProductDetails.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.productsDetailed = action.payload;
            state.isLoading = false;
          })
          .addCase(fetchProductDetails.rejected, (state) => {
            state.isLoading = false;
          });
    },
});

export const {  
    increaseQuantity, 
    decreaseQuantity, 
    deleteProduct
} = cartSlice.actions;

export default cartSlice.reducer;