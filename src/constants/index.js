import { facebook, instagram, shieldTick, support, truckFast } from "../assets/icons";
import { bigDesktop1, bigPOS, bigPrinter, customer1, customer2, laptop1, laptop2, minipc, scanner, thumbnailDesktop1, thumbnailPos, thumbnailPrinter } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const Products = [
    {
        thumbnail: thumbnailDesktop1,
        bigProduct: bigDesktop1,
        name: "Desktop Bundle",
        description: "High-performance desktop computer for all your computing needs.",
    },
    {
        thumbnail: thumbnailPos,
        bigProduct: bigPOS,
        name: "POS System",
        description: "Efficient POS system to streamline your business operations.",
    },
    {
        thumbnail: thumbnailPrinter,
        bigProduct: bigPrinter,
        name: "Printer",
        description: "Reliable printer for high-quality document printing.",
    },
];

export const statistics = [
    { value: '100+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '1k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: laptop1,
        name: "Lenovo Thinkpad L15",
        price: "$599.99",
    },
    {
        imgURL: laptop2,
        name: "Lenovo K14 Gen 1",
        price: "$749.99",
    },
    {
        imgURL: minipc,
        name: "Mini PC intel i5",
        price: "$299.99",
    },
    {
        imgURL: scanner,
        name: "Sunlux XL-6200 Scanner",
        price: "$44.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service, all over Lebanon."
    },
    {
        imgURL: shieldTick,
        label: "Warranty Guarantee",
        subtext: "Experience worry-free purchasing with our warranty guarantee."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Armando Jarrah',
        rating: 5,
        feedback: "JCS transformed our business operations with their innovative software solutions. Their team is incredibly knowledgeable and responsive, providing tailored solutions that exceeded our expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Jihad Jarrah',
        rating: 4.5,
        feedback: "Working with JCS has been a game-changer for our company. Their expertise in software development is unmatched. They delivered a seamless, high-quality product that has significantly improved our workflow."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Desktops", link: "https://wa.me/c/96176976500" },
            { name: "POS Systems", link: "https://wa.me/c/96176976500" },
            { name: "Laptops", link: "https://wa.me/c/96176976500" },
            { name: "Barcode", link: "https://wa.me/c/96176976500" },
            { name: "Printers", link: "https://wa.me/c/96176976500" },
            { name: "Fingerprint Scanners", link: "https://wa.me/c/96176976500" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Software Development", link: "https://wa.me/9613989214" },
            { name: "IT Consulting", link: "https://wa.me/96176976500" },
            { name: "Hardware Solutions", link: "https://wa.me/96176976500" },
            { name: "Cloud Services", link: "https://wa.me/9613989214" },
            { name: "Cybersecurity", link: "https://wa.me/9613989214" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "+96171767000", link: "tel:+96171767000" },
            { name: "+96176976500", link: "tel:+96176976500" },
            { name: "+9613989214", link: "tel:+9613989214" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/JCSsys/" },
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/jarrah.compu_serve" },
];