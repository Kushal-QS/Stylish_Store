interface Product {
    category: string,
    description: string,
    id: string,
    image: string,
    price: string,
    rating: RatingProp
    title: string,
}

interface RatingProp {
    count: string,
    rate: string,
}

export type HomeStackParamList = {
    Home: undefined;
    ProductDetails: {product: Product};
}