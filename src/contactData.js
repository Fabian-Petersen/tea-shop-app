import Icons from "./assets/images/icons";

const { faLocationArrow, faEnvelope, faPhone } = Icons;

const contacts = [
  {
    id: 1,
    contact: "Address",
    detail: "Tygervalley, Cape Town, 7530",
    icon: faLocationArrow,
  },
  {
    id: 2,
    contact: "email",
    detail: "john@email.com",
    icon: faEnvelope,
  },
  {
    id: 3,
    contact: "Phone",
    detail: "021 555 7852",
    icon: faPhone,
  },
];

export default contacts;
