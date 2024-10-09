const productItems = [
  {
    id: 1,
    category: "panes",
    productName: "pan de campo",
    title: "Pan de Campo",
    hero: "/img/pan-hero.webp",
    thumbnail: "/img/pan-de-campo-thumbnail.webp",
    screenshots: [
      {
        src: "/img/pan-de-campo-screenshot-1.webp",
        width: 1920,
        height: 1080,
        alt: "Pan de campo 1",
      },
     
    ],
    description:
      "Un pan rico y sabroso, con una miga suave y una corteza crujiente. Es un pan ideal para acompañar tus comidas o para disfrutar con un buen mate.",
    price: 3500,
    info: {
      weight: { value: 1, unit: "kg" },
      ingredients: ["harina de trigo", "agua", "sal", "levadura"],
    },
  },
  {
    id: 2,
    category: "panes",
    productName: "pan de semillas",
    title: "Pan de Semillas",
    thumbnail: "/img/pan-de-semillas-thumbnail.webp",
    hero: "/img/pan-hero.webp",
    screenshots: [
      {
        src: "/img/pan-de-semillas-screenshot-1.webp",
        width: 1280,
        height: 1280,
        alt: "Pan de semillas 1",
      },
      {
        src: "/img/pan-de-semillas-screenshot-2.webp",
        width: 1280,
        height: 1280,
        alt: "Pan de semillas 2",
      },
    ],
    description:
      "El pan de semillas no solamente es rico, pero también es muy saludable. Recomendamos este pan para acompañar tus comidas o para disfrutar con un buen mate.",
    price: 3500,
    info: {
      weight: { value: 1, unit: "kg" },
      ingredients: ["harina de trigo", "azúcar", "zanahorias", "aceite", "huevos"],
    },
  },
  {
    id: 3,
    category: "yogures",
    productName: "yogurt griego",
    title: "Yogurt Griego",
    hero: "/img/yogurt-hero.png",
    thumbnail: "/img/yogurt-griego-thumbnail.webp",
    screenshots: [
      {
        src: "/img/yogurt-griego-screenshot-1.jpeg",
        width: 1280,
        height: 1280,
        alt: "Yogurt griego 1",
      },
      {
        src: "/img/yogurt-griego-screenshot-2.jpeg",
        width: 1280,
        height: 1280,
        alt: "Yogurt griego 2",
      },
    ],
    description:
      "Nuestro yogurt griego es elaborado con leche fresca de vaca y fermentos lácticos naturales. Es un producto 100% natural, sin conservantes ni aditivos. Es cremoso y suave, con un sabor delicado y ligeramente ácido.",
    price: 4500,
    info: {
      weight: { value: 1, unit: "kg" },
      ingredients: [],
    },
  },
  {
    id: 4,
    category: "budines",
    productName: "budin de limon",
    title: "Budín de Limón",
    hero: "/img/budin-hero.webp",
    thumbnail: "/img/budin-de-limon-thumbnail.webp",
    screenshots: [
      {
        src: "/img/budin-de-limon-screenshot-1.webp",
        width: 2190,
        height: 1461,
        alt: "Budín de limón",
      },
    ],
    description:
      "Nuestro budín de limón es elaborado con ingredientes frescos y naturales. Es un producto 100% artesanal, sin conservantes ni aditivos. Es suave y esponjoso, con un sabor delicado y ligeramente ácido.",
    price: 3500,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "azúcar", "limón", "aceite", "huevos"],
    },
  },
  {
    id: 5,
    category: "budines",
    productName: "budin de zanahoria",
    title: "Budín de Zanahoria",
    hero: "/img/budin-hero.webp",
    thumbnail: "/img/budin-de-zanahoria-thumbnail.webp",
    screenshots: [
      {
        src: "/img/budin-de-zanahoria-screenshot-1.webp",
        width: 1600,
        height: 1200,
        alt: "Budín de zanahoria 1",
      },
    ],
    description:
      "Un budín de zanahoria es un postre delicioso y clásico. Es un bizcocho húmedo y esponjoso, con un sabor delicado y ligeramente dulce. Es perfecto para acompañar un café o un té, o para disfrutar como postre.",
    price: 3500,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "azúcar", "zanahorias", "aceite", "huevos"],
    },
  },
  {
    id: 6,
    category: "budines",
    productName: "budin de naranja",
    title: "Budín de Naranja",
    hero: "/img/budin-hero.webp",
    thumbnail: "/img/budin-de-naranja-thumbnail.webp",
    screenshots: [
      {
        src: "/img/budin-de-naranja-screenshot-1.webp",
        width: 1600,
        height: 1200,
        alt: "Budín de naranja 1",
      },
      {
        src: "/img/budin-de-naranja-screenshot-2.webp",
        width: 1600,
        height: 1200,
        alt: "Budín de naranja 2",
      },
      
    ],
    description:
      "¿Quién puede resistirse a un budín de naranja? Es un postre clásico y delicioso, con un sabor cítrico y refrescante.",
    price: 3500,
    info: {
      weight: { value: 500, unit: "g" },
      ingredients: ["harina de trigo", "azúcar", "naranjas", "aceite", "huevos"],
    },
  },
];

export default productItems;
