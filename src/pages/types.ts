export interface ProductsDetails {
  id: number;
  slug?: string;
  imgSrc: string;
  priceRegular: number;
  priceDisCounted?: number;
  title: string;
  description: string;
}
