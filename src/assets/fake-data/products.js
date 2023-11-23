// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import años_15_01 from "..//images/años_15_01.jpg";
import años_15_02 from "..//images/años_15_02.jpg";
import años_15_03 from "..//images/años_15_03.jpg";

import Bodas_1 from "..//images/Bodas_1.jpg";
import Bodas_2 from "..//images/Bodas_2.jpg";
import Bodas_3 from "..//images/Bodas_3.jpg";

import Cumpleaños_1 from "..//images/Cumpleaños_1.jpg";
import Cumpleaños_2 from "..//images/Cumpleaños_2.jpg";
import Cumpleaños_3 from "..//images/Cumpleaños_3.jpg";


import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Mansion Bonnet",
    price: 240.0,
    image01: Bodas_1,
    image02: Bodas_2,
    image03: Bodas_3,
    category: "Bodas",

    desc: "Haremos que el principio de su para siempre sea inolvidable, nuestro salón incluye servicio de coctelería, mesas y sillas. ",
  },

  {
    id: "02",
    title: "Valle del pacifico",
    price: 115.0,
    image01: años_15_01,
    image02: años_15_02,
    image03: años_15_03,
    category: "15 años",

    desc: "Nuestro espacio y servicios de comida y coctelería harán de esta algo inolvidable, porque sabemos que es algo que se celebra una vez en la vida.",
  },

  {
    id: "03",
    title: "My first time",
    price: 110.0,
    image01: años_15_02,
    image02: años_15_01,
    image03: años_15_03,
    category: "15 años",

    desc: "Esta nueva etapa de su vida estará colmada de bendiciones, celébrala con nosotros, te ofrecemos servicio de meseros y coctelería.",
  },

  {
    id: "04",
    title: "Salon primavera",
    price: 110.0,
    image01: años_15_03,
    image02: años_15_02,
    image03: años_15_01,
    category: "15 años",

    desc: "Algo que pasa solo una vez en la vida merece ser perfecto, nuestro salón esta equipado con mesas y sillas, servicio de coctelería y comida.",
  },

  {
    id: "05",
    title: "Primavera",
    price: 560.0,
    image01: Bodas_2,
    image02: Bodas_3,
    image03: Bodas_1,
    category: "Bodas",

    desc: "La celebración de su unión en un espacio agradable, versatil y memorable.",
  },
  {
    id: "06",
    title: "Hasta la muerte",
    price: 7000.0,
    image01: Bodas_2,
    image02: Bodas_3,
    image03: Bodas_1,
    category: "Bodas",

    desc: "Algo memorable e inolvidable es lo que merece esta nueva etapa en sus vidas, contamos con servicio de comida y camareros.",
  },

  {
    id: "07",
    title: "Titanum",
    price: 115.0,
    image01: años_15_02,
    image02: años_15_03,
    image03: años_15_01,
    category: "15 años",

    desc: "Es una alegría para toda la familia, dejamos hacer de esta ocasión algo más que especial, te ofrecemos el alquiler de mesas y sillas.",
  },

  {
    id: "08",
    title: "Champagne",
    price: 110.0,
    image01: años_15_01,
    image02: años_15_03,
    image03: años_15_02,
    category: "15 años",

    desc: "Nuestro salón esta disponible para magno eventos, permítenos ser parte de esta celebración única con nuestro servicio incluido de meseria.",
  },

  {
    id: "09",
    title: "Cacao Con",
    price: 110.0,
    image01: años_15_03,
    image02: años_15_02,
    image03: años_15_01,
    category: "15 años",

    desc: "Tu princesa merece lo mejor para celebrar esta nueva etapa de su vida, nuestro espacio y equipo hará de este día algo inolvidable.",
  },

  {
    id: "10",
    title: "Para siempre",
    price: 24.0,
    image01: Bodas_1,
    image02: Bodas_2,
    image03: Bodas_3,
    category: "Bodas",

    desc: "Celebra tu día especial con nosotros, contamos con mesas y sillas, camareros y servicios de coctelería.",
  },

  {
    id: "11",
    title: "Carnaval",
    price: 35.0,
    image01: Cumpleaños_1,
    image02: Cumpleaños_2,
    image03: Cumpleaños_3,
    category: "Bread",

    desc: "Para tus amigos y familia tenemos el espacio perfecto, porque sabemos que es la excusa perfecta para estar juntos.",
  },

  {
    id: "12",
    title: "Rincon de la fiesta",
    price: 35.0,
    image01: Cumpleaños_3,
    image02: Cumpleaños_2,
    image03: Cumpleaños_1,
    category: "Bread",

    desc: "Disfruta de un espacio cálido y acogedor para tu celebración, para toda la familia.",
  },

  {
    id: "13",
    title: "Alegria y velitas",
    price: 35.0,
    image01: Cumpleaños_2,
    image02: Cumpleaños_1,
    image03: Cumpleaños_3,
    category: "Bread",

    desc: "Celebremos la vida juntos en nuestro espacio adaptativo, incluimos mesas y sillas.",
  },
];

export default products;
