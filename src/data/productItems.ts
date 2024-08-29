const productItems = [
  {
    id: 1,
    category: "panes",
    productName: "pan de campo",
    title: "Pan de Campo",
    hero: "/img/pan-hero.webp",
    screenshots: [
      {
        src: "/img/hero-1.webp",
        width: 1600,
        height: 900,
        alt: "Pan de campo",
      },
      {
        src: "/img/hero-2.webp",
        width: 1920,
        height: 1281,
        alt: "Pan de campo",
      },
      {
        src: "/img/hero-1.webp",
        width: 1600,
        height: 900,
        alt: "Pan de campo",
      },
    ],
    description:
      "Nuestro pan de campo es elaborado con ingredientes de primera calidad, siguiendo la receta tradicional de nuestros abuelos. Es un pan de miga suave y corteza crujiente, ideal para acompañar tus comidas o para disfrutar con un buen mate.",
    price: 3000,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "agua", "sal", "levadura", "azúcar"],
    },
  },
  {
    id: 2,
    category: "panes",
    productName: "pan de semillas",
    title: "Pan de Semillas",
    hero: "/img/pan-hero.webp",
    screenshots: [
      {
        src: "/img/hero-1.webp",
        width: 1600,
        height: 900,
        alt: "Pan de campo",
      },
      {
        src: "/img/hero-2.webp",
        width: 1920,
        height: 1281,
        alt: "Pan de campo",
      },
    ],
    description:
      "El pan de semillas es un pan de miga suave y corteza crujiente, ideal para acompañar tus comidas o para disfrutar con un buen mate. Está elaborado con semillas de chía, lino y sésamo, que le aportan un sabor y textura únicos.",
    price: 3000,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "agua", "sal", "levadura", "azúcar"],
    },
  },
  {
    id: 3,
    category: "yogures",
    productName: "yogurt griego",
    title: "Yogurt Griego",
    hero: "/img/yogurt-hero.png",
    screenshots: [
      {
        src: "/img/hero-1.webp",
        width: 1600,
        height: 900,
        alt: "Pan de campo",
      },
      {
        src: "/img/hero-2.webp",
        width: 1920,
        height: 1281,
        alt: "Pan de campo",
      },
    ],
    description:
      "Nuestro yogurt griego es elaborado con leche fresca de vaca y fermentos lácticos naturales. Es un producto 100% natural, sin conservantes ni aditivos. Es cremoso y suave, con un sabor delicado y ligeramente ácido.",
    price: 3000,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "agua", "sal", "levadura", "azúcar"],
    },
  },
  {
    id: 4,
    category: "budines",
    productName: "budin de limon",
    title: "Budín de Limón",
    hero: "/img/budin-hero.webp",
    screenshots: [
      {
        src: "/img/hero-1.webp",
        width: 1600,
        height: 900,
        alt: "Pan de campo",
      },
      {
        src: "/img/hero-2.webp",
        width: 1920,
        height: 1281,
        alt: "Pan de campo",
      },
    ],
    description:
      "Nuestro budín de limón es elaborado con ingredientes frescos y naturales. Es un producto 100% artesanal, sin conservantes ni aditivos. Es suave y esponjoso, con un sabor delicado y ligeramente ácido.",
    price: 4000,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "agua", "sal", "levadura", "azúcar"],
    },
  },
  {
    id: 5,
    category: "budines",
    productName: "budin de zanahoria",
    title: "Budín de Zanahoria",
    hero: "/img/budin-hero.webp",
    screenshots: [
      {
        src: "/img/hero-1.webp",
        width: 1600,
        height: 900,
        alt: "Pan de campo",
      },
      {
        src: "/img/hero-2.webp",
        width: 1920,
        height: 1281,
        alt: "Pan de campo",
      },
    ],
    description:
      "Nuestro budín de zanahoria es elaborado con ingredientes frescos y naturales. Es un producto 100% artesanal, sin conservantes ni aditivos. Es suave y esponjoso, con un sabor delicado y ligeramente dulce.",
    price: 3000,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "agua", "sal", "levadura", "azúcar"],
    },
  },
  {
    id: 6,
    category: "budines",
    productName: "budin de naranja",
    title: "Budín de Naranja",
    hero: "/img/budin-hero.webp",
    screenshots: [
      {
        src: "/img/hero-1.webp",
        width: 1600,
        height: 900,
        alt: "Pan de campo",
      },
      {
        src: "/img/hero-2.webp",
        width: 1920,
        height: 1281,
        alt: "Pan de campo",
      },
    ],
    description:
      "Nuestro budín de naranja es elaborado con ingredientes frescos y naturales. Es un producto 100% artesanal, sin conservantes ni aditivos. Es suave y esponjoso, con un sabor delicado y ligeramente dulce.",
    price: 3000,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "agua", "sal", "levadura", "azúcar"],
    },
  },
];

export default productItems;
