const productList = () => {
  return [
    {
      id: 1,
      name: "Banana",
      category: "Frutas",
      price: 4.49,
      unit: "kg",
      imgPath: "/images/banana.png",
      badge: "Top",
    },
    {
      id: 2,
      name: "Morango",
      category: "Frutas",
      price: 9.84,
      unit: "kg",
      imgPath: "/images/strawberry.png",
    },
    {
      id: 3,
      name: "Maça",
      category: "Frutas",
      price: 3.84,
      unit: "kg",
      imgPath: "/images/apple.png",
      badge: "Frutas",
    },
    {
      id: 4,
      name: "Laranja",
      category: "Frutas",
      price: 4.84,
      unit: "kg",
      imgPath: "/images/orange.png",
    },
    {
      id: 5,
      name: "Alface",
      category: "Verdura",
      price: 4.84,
      unit: "kg",
      imgPath: "/images/alface.png",
      badge: "Verduras",
    },
    {
      id: 6,
      name: "Pimentão",
      category: "Verdura",
      price: 92.84,
      unit: "kg",
      imgPath: "/images/pepper.png",
      badge: "Verduras",
    },
  ];
};

export { productList };
