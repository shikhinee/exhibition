//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/davinci.jpeg";
import media2 from "@/public/librarycover.jpeg";
import media3 from "@/public/logo.jpeg";
import media4 from "@/public/picasso.jpeg";
import media5 from "@/public/schiele.jpeg";

const image1 = {
    image: media1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit temporibus sed beatae fuga maxime eaque unde exercitationem vitae, aliquam tenetur sunt harum, natus rerum ea mollitia aliquid nobis doloremque"
}
const image2 = {
    image: media2,
    text: "Description 2"
}
const image3 = {
    image: media3,
    text: "Description 3"
}
const image4 = {
    image: media4,
    text: "Description 4"
}
const image5 = {
    image: media5,
    text: "Description 5"
}

export const media = [image1, image2, image3, image4, image5];
export const mediaByIndex = index => media[index % media.length];
export const length = media.length