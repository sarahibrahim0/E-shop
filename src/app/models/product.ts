

export class Product {
    
    id: string;
    name: string;
    description: string;
    richDescription: string;
    image: string;
    images: {}[];
    brand: string;
    price: number;
    category: string;
    countInStock: number;
    rating: number;
    numReviews: number;
    isFeatured: boolean;




    constructor(id='', name = 'default', description = '', richDescription = '', image = '', images = [{}], brand = '', price = 0, category = '', countInStock = 0, rating = 0, numReviews = 0, isFeatured = false ){
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.richDescription = richDescription;
        this.image = image;
        this.images = images;
        this.brand = brand;
        this.price = price;
        this.category = category;
        this.countInStock = countInStock;
        this.rating = rating;
        this.numReviews = numReviews;
        this.isFeatured = isFeatured;

    }


}

