
export class Product {

  _id: string;
  name : string;
  price : number;
  quantity : number;
  description : string ;
  pictures : string []


  constructor(id='',namee='', quantity=0,description = '', price= 0, pictures=['/assets/download.png'])
{
this._id  = id;
this.name = namee;
this.description = description;
this.price = price;
this.pictures = pictures;
this.quantity = quantity;
}


}

