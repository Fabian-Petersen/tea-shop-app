import Icons from "./assets/images/icons";
import images from "./assets/images/images";

const { faHome, faMugHot, faMortarPestle } = Icons;
const { Image1, Image2, Image3 } = images;

const services = [
  {
    id: 1,
    service: "Custom Recipes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, aut! Unde dignissimos architecto, sunt velit cupiditate iure quaerat quisquam quam.",
    image: Image1,
    icon: faMortarPestle,
  },
  {
    id: 2,
    service: "Home Deliveries",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur esse aspernatur debitis ullam, eius et.",
    image: Image2,
    icon: faHome,
  },
  {
    id: 3,
    service: "Tea Aging",
    description:
      "Quia, aut! Unde dignissimos architecto, sunt velit cupiditate iure quaerat quisquam quam.",
    image: Image3,
    icon: faMugHot,
  },
];

export default services;
