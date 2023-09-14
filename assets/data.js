const productsData = [
  {
    id: 1,
    name: "Radiologia",
    bid: 6,
    category: "Diagnóstico por imágenes",
    cardImg: "./assets/img/products/radiologia.svg",
  },
  {
    id: 2,
    name: "Kinesiologia",
    bid: 5,
    category: "Visita especialidad",
    cardImg: "./assets/img/products/kinesiologia.svg",
  },
  {
    id: 3,
    name: "Laboratorio",
    bid: 8,
    category: "Análisis clínicos" ,
    cardImg: "./assets/img/products/laboratorio.svg",
  },
  {
    id: 4,
    name: "Medicación",
    bid: 4,
    category: "Servicios farmacéuticos",
    cardImg: "./assets/img/products/inyectable.svg",
  },
 
  {
    id: 5,
    name: "Electrocardiograma",
    bid: 7,
    category: "Pruebas cardiológicas",
    cardImg: "./assets/img/products/ecg.svg",
  },
  {
    id: 6,
    name: "Visita médica",
    bid: 2,
    category: "Visita especialidad",
    cardImg: "./assets/img/products/visita-medica.svg",
  },

];

const divideProductsInParts = (size) => {
  let productsList = []
  for (let i = 0; i < productsData.length; i+= size) {
    productsList.push(productsData.slice(i,i + size))

  }
  return productsList;
}

const appState = {                            
  products: divideProductsInParts(3), 
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(3).length, 
  activeFilter: null
}
