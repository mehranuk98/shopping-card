import {SET_PRODUCTS} from "./actionType"

const products = [
    {
        id : 1,
        name : 'Samsung Galaxy A13' ,
        description :"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.",
        image :"https://dkstatics-public.digikala.com/digikala-products/ee00d8b5e58f3dce5de11b0d25222cd4b06c0fee_1666160824.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price : "4555000",

    },
    {
        id : 2,
        name : 'Galaxy S22 Ultra 5G' ,
        description :"Lorem ipsum, or lipsum as it is used inis dummy text used in sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.",
        image :"https://dkstatics-public.digikala.com/digikala-products/455da9a4101537c98879ee5c290a7c985ca7ab71_1652263696.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price : "43000000",
    },
    {
        id : 3,
        name : 'Shiaomi Redmi Note 11' ,
        description :"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.",
        image :"https://dkstatics-public.digikala.com/digikala-products/385a51a8009c18128a6a99f008cc7a5c43f1a4b1_1655546454.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price : "6200000",
    },
    {
        id : 4,
        name : 'Galaxy A33 5G SM-A336' ,
        description :"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,is dummy text used in graphic or web designs. The passage is attributed.",
        image :"https://dkstatics-public.digikala.com/digikala-products/f4f9025d385899d4d4bd984c1eed252a67b268bc_1654673094.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price : "9100000",
    }
]

export const getProducts = () => {
    return{
        type : SET_PRODUCTS,
        payload : products
    }
}