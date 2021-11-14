//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/davinci.jpeg";
import media2 from "@/public/librarycover.jpeg";
import media3 from "@/public/logo.jpeg";
import media4 from "@/public/picasso.jpeg";
import media5 from "@/public/schiele.jpeg";

import script1 from "@/public/JalzeTembanGanjuur.png"
import script2 from "@/public/script.png"
import script3 from "@/public/script.png"
import script4 from "@/public/script.png"
import script5 from "@/public/script.png"
import script6 from "@/public/script.png"
import script7 from "@/public/script.png"
import script8 from "@/public/script.png"
import script9 from "@/public/script.png"


const image1 = {
    image: media1,
    script: script1,
    title: "ЖАЛЗЭ ТЭМБАН ГАНЖУУР",
    text: "Материал: Төвөд цаас хятад бэх Хэмжээ: 70.5х15 см 111 боть Мөрийн тоо: 8 Жалзэ Тэмбан Ганжуурыг тавдугаар Далай лам Лувсанжамц Төвөдөөс Өндөр гэгээн Занабазарт 1671 онд бэлэг болгон өргөж байжээ. Энэхүү гоёмсог гар бичмэл эх нь Монголд төдийгүй дэлхийд хамгийн эртний ховор нандинд тооцогдох их хөлгөн судар юм."
}
const image2 = {
    image: media2,
    script: script2,
    text: "Description 2"
}
const image3 = {
    image: media3,
    script: script3,
    text: "Description 3"
}
const image4 = {
    image: media4,
    script: script4,
    text: "Description 4"
}
const image5 = {
    image: media5,
    script: script5,
    text: "Description 5"
}
const image6 = {
    image: media5,
    script: script6,
    text: "Description 5"
}
const image7 = {
    image: media5,
    script: script7,
    text: "Description 5"
}
const image8 = {
    image: media5,
    script: script8,
    text: "Description 5"
}
const image9 = {
    image: media5,
    script: script9,
    text: "Description 5"
}

export const media = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
export const mediaByIndex = index => media[index % media.length];
export const length = media.length