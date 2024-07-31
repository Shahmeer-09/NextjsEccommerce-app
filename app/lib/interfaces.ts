export interface Cart {
  userid: string;
  items: Array<{
    id: string;
    name: string;
    images: string;
    price: number;
    quantity: number;
  }>;
}
