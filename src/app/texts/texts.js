const title = "Arepas Boyasences";
const email = "GRECIAGUTIERREZ1991@HOTMAIL.COM";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en las deliciosas arepas boyacenses de ${title} y me gustaría recibir más información. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "+573209882629";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Arepas Boyasences, nos dedicamos a la elaboración artesanal de las auténticas arepas boyacenses, una tradición culinaria que trae el sabor de Boyacá a tu mesa. Cada arepa está hecha con ingredientes de alta calidad, manteniendo el sabor original y la frescura que caracteriza a este delicioso manjar.",
        description2: "Nuestro compromiso es brindarte la mejor experiencia gastronómica, con productos frescos y artesanales que te transportan a las montañas de Boyacá en cada bocado. Ya sea para tus reuniones familiares, eventos o simplemente para disfrutar en casa, nuestras arepas boyacenses son la opción perfecta.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Arepas boyacenses auténticas y deliciosas",
            p2: "El sabor de Boyacá en cada bocado",
        },
        address: "",
        instagram: "https://www.instagram.com/",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565749778422&mibextid=ZbWKwL",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};
export default textos;
