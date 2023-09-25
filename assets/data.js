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
//////////////////////////////  6
const divideProductsInParts = (size) => {
  // retornar la lista de productos
  let productsList = []
  // 0 - 6 - 12
  for (let i = 0; i < productsData.length; i+= size) {
    // [ [{},{},{},{},{},{}] , [{},{},{},{},{},{}], [{},{},{}]]
    productsList.push(productsData.slice(i,i + size))

  }
  return productsList;
}

// const [products, setState] = useState
// const [currentProductsIndex, setState] = useState
// const [productsLimit, setState] = useState
// const [activeFilter, setState] = useState

const appState = {                             //  0                     1              2
  products: divideProductsInParts(2), // [ [{},{},{},{},{}] , [{},{},{},{},{}], [{},{},{},{},{}]] 3
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(2).length, // 3
  activeFilter: null
}
