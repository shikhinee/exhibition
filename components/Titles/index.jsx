//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import title1 from "@/public/davinci.jpeg";
import title2 from "@/public/librarycover.jpeg";
import title3 from "@/public/logo.jpeg";
import title4 from "@/public/picasso.jpeg";
import title5 from "@/public/schiele.jpeg";

const image1 = {
    image: title1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit temporibus sed beatae fuga maxime eaque unde exercitationem vitae, aliquam tenetur sunt harum, natus rerum ea mollitia aliquid nobis doloremque"
}
const image2 = {
    image: title2,
    text: "Description 2"
}
const image3 = {
    image: title3,
    text: "Description 3"
}
const image4 = {
    image: title4,
    text: "Description 4"
}
const image5 = {
    image: title5,
    text: "Description 5"
}

export const title = [image1, image2, image3, image4, image5];
export const titleByIndex = index => title[index % title.length];
export const length = title.length