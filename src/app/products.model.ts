import { IProduct } from './product';

export class ProductModel implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public imageUrl: string,
    public category: string,
    public stockQuantity: number,
  ) {}
}
