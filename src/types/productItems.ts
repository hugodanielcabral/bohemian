export interface ProductItemsProps {
    id: number;
    category: string;
    productName: string;
    title: string;
    description: string;
    screenshots: {
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
    price: number;
    info: {
      weight: {
        value: number;
        unit: string;
      };
      ingredients: string[];
    }
  }

