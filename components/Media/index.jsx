//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/davinci.jpeg";
import media2 from "@/public/librarycover.jpeg";
import media3 from "@/public/logo.jpeg";
import media4 from "@/public/picasso.jpeg";
import media5 from "@/public/schiele.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
