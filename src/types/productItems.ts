export interface ProductItemsProps {
    productName: string;
    title: string;
    description: string;
    screenshots: {
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
    info: {
      title: string;
      description: string;
    }[];
  }

