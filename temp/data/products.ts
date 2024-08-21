import { Product } from "@/types/product";
import { categorys } from "./categorys";

export const products: Product[] = [
  // Produtos da categoria "sapatilhas"
  {
    _id: "prod1",
    name: "Nike Air Max",
    price: 120.99,
    images: [
      {
        _id: "img1",
        name: "Nike Air Max Front",
        url: "/img/temp/nike_court_model_1/image-1.png",
        size: 120,
        description: "Vista frontal",
      },
      {
        _id: "img2",
        name: "Nike Air Max Side",
        url: "/img/temp/nike_court_model_1/image-2.png",
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
        url: "/img/temp/nike_court_model_2/image.png",
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
        url: "/img/temp/nike_court_model_3/image-1.png",
        size: 130,
        description: "Vista lateral",
      },
      {
        _id: "img6",
        name: "Puma RS-X Top",
        url: "/img/temp/nike_court_model_3/image-2.png",
        size: 135,
        description: "Vista superior",
      },
      {
        _id: "img6",
        name: "Puma RS-X Top",
        url: "/img/temp/nike_court_model_3/image-3.png",
        size: 135,
        description: "Vista superior",
      },
      {
        _id: "img6",
        name: "Puma RS-X Top",
        url: "/img/temp/nike_court_model_3/image-4.png",
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
        url: "/img/temp/nike_court_model_4/image.png",
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
        url: "/img/temp/nike_court_model_4/image.png",
        size: 115,
        description: "Vista frontal",
      },
      {
        _id: "img10",
        name: "Reebok Classic Side",
        url: "/img/temp/nike_court_model_4/image.png",
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
  {
    _id: "prod6",
    name: "New Balance 574",
    price: 105.49,
    images: [
      {
        _id: "img11",
        name: "New Balance 574 Front",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 120,
        description: "Vista frontal",
      },
      {
        _id: "img12",
        name: "New Balance 574 Back",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 130,
        description: "Vista traseira",
      },
    ],
    sizes: [
      { _id: "size11", name: "UK 8" },
      { _id: "size12", name: "UK 9" },
    ],
    description: "Tênis versátil com conforto para uso diário.",
    category: categorys[0],
  },
  {
    _id: "prod7",
    name: "Converse Chuck Taylor",
    price: 69.99,
    images: [
      {
        _id: "img13",
        name: "Converse Chuck Taylor Side",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 115,
        description: "Vista lateral",
      },
      {
        _id: "img14",
        name: "Converse Chuck Taylor Top",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 120,
        description: "Vista superior",
      },
    ],
    sizes: [
      { _id: "size13", name: "UK 6" },
      { _id: "size14", name: "UK 7" },
    ],
    description: "Modelo clássico com design atemporal.",
    category: categorys[0],
  },
  {
    _id: "prod8",
    name: "Asics Gel-Kayano",
    price: 145.99,
    images: [
      {
        _id: "img15",
        name: "Asics Gel-Kayano Front",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 135,
        description: "Vista frontal",
      },
      {
        _id: "img16",
        name: "Asics Gel-Kayano Side",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 140,
        description: "Vista lateral",
      },
    ],
    sizes: [
      { _id: "size15", name: "UK 7" },
      { _id: "size16", name: "UK 8" },
    ],
    description: "Tênis de corrida com suporte avançado.",
    category: categorys[0],
  },
  {
    _id: "prod9",
    name: "Fila Disruptor II",
    price: 95.99,
    images: [
      {
        _id: "img17",
        name: "Fila Disruptor II Side",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 130,
        description: "Vista lateral",
      },
      {
        _id: "img18",
        name: "Fila Disruptor II Top",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 135,
        description: "Vista superior",
      },
    ],
    sizes: [
      { _id: "size17", name: "UK 6" },
      { _id: "size18", name: "UK 9" },
    ],
    description: "Modelo robusto com design moderno.",
    category: categorys[0],
  },
  {
    _id: "prod10",
    name: "Mizuno Wave Rider",
    price: 129.5,
    images: [
      {
        _id: "img19",
        name: "Mizuno Wave Rider Front",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 140,
        description: "Vista frontal",
      },
      {
        _id: "img20",
        name: "Mizuno Wave Rider Back",
        url: "/img/temp/nike_court_model_4/image.png",
        size: 145,
        description: "Vista traseira",
      },
    ],
    sizes: [
      { _id: "size19", name: "UK 7" },
      { _id: "size20", name: "UK 8" },
    ],
    description: "Tênis com tecnologia avançada de amortecimento.",
    category: categorys[0],
  },
];
