export default interface product {
  product_id?: number;
  product_name: string;
  product_price: number;
  product_offer: number;
  product_description: string;
  createdAt: Date;
  updatedAt: Date;
  category_id: number;
  brand_id: number;
}
