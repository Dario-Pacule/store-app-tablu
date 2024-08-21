import { Product } from "@/types/product";
import { categorys } from "./categorys";

export const products: Product[] = [
  {
    _id: "prod1",
    name: "Nike Air Max",
    price: 120.99,
    images: [
      {
        _id: "img1",
        name: "Nike Air Max Front",
        url: "/img/temp/nike_1/image-1.png",
        size: 120,
        description: "Vista frontal",
      },
      {
        _id: "img2",
        name: "Nike Air Max Side",
        url: "/img/temp/nike_1/image-2.png",
        size: 150,
        description: "Vista lateral",
      },
    ],
    sizes: [
      { _id: "size1", name: "UK 7" },
      { _id: "size2", name: "UK 8" },
    ],
    description: "Sapato esportivo com amortecimento confortável.",
    category: categorys[0],
  },
  {
    _id: "prod2",
    name: "Adidas Ultraboost",
    price: 139.99,
    images: [
      {
        _id: "img3",
        name: "Adidas Ultraboost Front",
        url: "/img/temp/nike_2/image.png",
        size: 140,
        description: "Vista frontal",
      },
    ],
    sizes: [
      { _id: "size3", name: "UK 7" },
      { _id: "size4", name: "UK 9" },
    ],
    description: "Tênis de corrida com excelente suporte e amortecimento.",
    category: categorys[0],
  },
  {
    _id: "prod3",
    name: "Puma RS-X",
    price: 110.0,
    images: [
      {
        _id: "img5",
        name: "Puma RS-X Side",
        url: "/img/temp/nike_3/image-1.png",
        size: 130,
        description: "Vista lateral",
      },
      {
        _id: "img6",
        name: "Puma RS-X Top",
        url: "/img/temp/nike_3/image-2.png",
        size: 135,
        description: "Vista superior",
      },
    ],
    sizes: [
      { _id: "size5", name: "UK 6" },
      { _id: "size6", name: "UK 8" },
    ],
    description: "Modelo casual com design retrô.",
    category: categorys[0],
  },
  {
    _id: "prod4",
    name: "Vans Old Skool",
    price: 79.99,
    images: [
      {
        _id: "img8",
        name: "Vans Old Skool Side",
        url: "/img/temp/nike_4/image.png",
        size: 125,
        description: "Vista lateral",
      },
    ],
    sizes: [
      { _id: "size7", name: "UK 8" },
      { _id: "size8", name: "UK 9" },
    ],
    description: "Clássico calçado skate com design icônico.",
    category: categorys[0],
  },
  {
    _id: "prod5",
    name: "Reebok Classic",
    price: 89.5,
    images: [
      {
        _id: "img9",
        name: "Reebok Classic Front",
        url: "/img/temp/nike_3/image-1.png",
        size: 115,
        description: "Vista frontal",
      },
      {
        _id: "img10",
        name: "Reebok Classic Side",
        url: "/img/temp/nike_3/image-2.png",
        size: 125,
        description: "Vista lateral",
      },
    ],
    sizes: [
      { _id: "size9", name: "UK 7" },
      { _id: "size10", name: "UK 10" },
    ],
    description: "Modelo casual clássico com estilo retrô.",
    category: categorys[0],
  },

  // Produtos da categoria "camisetas"
  {
    _id: "prod6",
    name: "Camiseta Nike Dry-Fit",
    price: 29.99,
    images: [
      {
        _id: "img11",
        name: "Camiseta Nike Dry-Fit Front",
        url: "/img/temp/t-shirt_1/image-1.png",
        size: 140,
        description: "Vista frontal",
      },
      {
        _id: "img12",
        name: "Camiseta Nike Dry-Fit Back",
        url: "/img/temp/t-shirt_1/image-2.png",
        size: 145,
        description: "Vista traseira",
      },
    ],
    sizes: [
      { _id: "size11", name: "P" },
      { _id: "size12", name: "M" },
    ],
    description: "Camiseta leve e respirável para esportes.",
    category: categorys[1],
  },
  {
    _id: "prod7",
    name: "Camiseta Adidas Essentials",
    price: 24.99,
    images: [
      {
        _id: "img13",
        name: "Camiseta Adidas Essentials Front",
        url: "/img/temp/t-shirt_2/image.png",
        size: 135,
        description: "Vista frontal",
      },
    ],
    sizes: [
      { _id: "size13", name: "M" },
      { _id: "size14", name: "G" },
    ],
    description: "Camiseta básica com o logo Adidas.",
    category: categorys[1],
  },
  {
    _id: "prod8",
    name: "Camiseta Puma Active",
    price: 27.5,
    images: [
      {
        _id: "img15",
        name: "Camiseta Puma Active Front",
        url: "/img/temp/t-shirt_3/image-1.png",
        size: 130,
        description: "Vista frontal",
      },
      {
        _id: "img16",
        name: "Camiseta Puma Active Back",
        url: "/img/temp/t-shirt_3/image-2.png",
        size: 135,
        description: "Vista traseira",
      },
    ],
    sizes: [
      { _id: "size15", name: "P" },
      { _id: "size16", name: "M" },
    ],
    description: "Camiseta com tecido que absorve o suor.",
    category: categorys[1],
  },
  {
    _id: "prod9",
    name: "Camiseta Under Armour Tech",
    price: 32.0,
    images: [
      {
        _id: "img17",
        name: "Camiseta Under Armour Tech Front",
        url: "/img/temp/t-shirt_4/image.png",
        size: 140,
        description: "Vista frontal",
      },
    ],
    sizes: [
      { _id: "size17", name: "M" },
      { _id: "size18", name: "G" },
    ],
    description: "Camiseta com tecnologia anti-odor.",
    category: categorys[1],
  },
  {
    _id: "prod10",
    name: "Camiseta Asics Graphic",
    price: 26.99,
    images: [
      {
        _id: "img19",
        name: "Camiseta Asics Graphic Front",
        url: "/img/temp/t-shirt_5/image.png",
        size: 140,
        description: "Vista frontal",
      },
      {
        _id: "img20",
        name: "Camiseta Asics Graphic Back",
        url: "/img/temp/t-shirt_5/image-2.png",
        size: 145,
        description: "Vista traseira",
      },
    ],
    sizes: [
      { _id: "size19", name: "P" },
      { _id: "size20", name: "G" },
    ],
    description: "Camiseta com estampa gráfica moderna.",
    category: categorys[1],
  },
];
