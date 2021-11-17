//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/Modonshogol1.png";
import media11 from "@/public/Modonshogol2.png";
import media2 from "@/public/esgiishogol1.png";
import media21 from "@/public/esgiishogol2.png";
import media3 from "@/public/tugalinarisanbarintag1.png";
import media31 from "@/public/tugalinarisanbarintag2.png";
import media4 from "@/public/unsensambarhulsanuzeg1.png";
import media41 from "@/public/unsensambarhulsanuzeg2.png";
import media5 from "@/public/Olsonboolt1.png";
import media51 from "@/public/Olsonboolt2.png";
import media6 from "@/public/Sudrinhavtas(burhantai)1.png";
import media61 from "@/public/Sudrinhavtas(burhantai)2.png";
import media7 from "@/public/Hulszegsenhavtas1.png";
import media71 from "@/public/Hulszegsenhavtas2.png";
import media8 from "@/public/zuuoroosonsudriinhavtas1.png";
import media81 from "@/public/zuuoroosonsudriinhavtas2.png";
import media9 from "@/public/Bogdinorgomjlol1.png";
import media91 from "@/public/Bogdinorgomjlol2.png";


import script1 from "@/public/ModonShogol.png"
import script2 from "@/public/EsgiiShogol.png"
import script3 from "@/public/TugaliinArisanBarintag.png"
import script4 from "@/public/UnsenSambarHulsanUzeg.png"
import script5 from "@/public/OlsonBoolt.png"
import script6 from "@/public/SudriinKhavtas(burhantai).png"
import script7 from "@/public/HulsZegsenHavtas.png"
import script8 from "@/public/SudriinKhavtas(ZuuOroojOyoson).png"
import script9 from "@/public/SudriinKhavtas(Oyomol).png"

import { indexOf } from "lodash";


const image1 = {
    image: ["/Modonshogol1.png", "/Modonshogol2.png"],
    photoCount:2,
    script: "/ModonShogol.png",
    title: "МОДОН ШОГОЛ",
    text: "Монголчууд судар хийх модон хайрцгийг шогол хэмээн нэрлэдэг. Судрын хуудсыг нугаларч үрчийхгүй, гадны гэмтлээс хамгаалахын тулд тухайн судрын хэмжээнд таарсан шогол хийдэг. Шоголыг хус, зандан зэрэг сайн чанарын модоор хийдэг бөгөөд голдуу хүрэн буюу улаан өнгөөр будаж, гадна талыг сийлбэр, зүмбэрээр чимэглэн, төрөл бүрийн хээ угалзаар гоёдог байжээ. Мөн маанийн 6 үсгийг төвд, ланз, соёмбо үсгээр бичин, алтан өнгөөр будаж чимэглэсэн ч бий."
}
const image2 = {
    image: ["/esgiishogol1.png", "/esgiishogol2.png"],
    photoCount:2,
    script: "/EsgiiShogol.png",
    title: "ЭСГИЙ ШОГОЛ",
    text: "Хэмжээ: 56.3х13 см Монголчууд шоголыг модоор хийхийн зэрэгцээ эсгий ширж шогол хийдэг. Энэхүү шоголыг эсгийг ширэн, даавуугаар бүрж, гадна талд хээ угалзаар чимэглэжээ. Ийм эсгий буюу арьс ширээр хийсэн шоголын ирмэгт сур буюу бөсөөр уяа хийж шоголоо бэхэлж уядаг."
}
const image3 = {
    image: ["/tugalinarisanbarintag1.png", "/tugalinarisanbarintag2.png"],
    photoCount:2,
    script: "/TugaliinArisanBarintag.png",
    title: "ТУГАЛЫН АРЬСАН БАРИНТАГ",
    text: "Тугалын арьсаар хийсэн 3 баринтаг хадгалагдаж байна. Хурга, тугалын арьсаар хийсэн баринтаг нь ном судрыг ус чийг авхуулахгүй, хугарч нугарахгүй тэнэгэрээр нь хадгалдаг онцлогтой."
}
const image4 = {
    image: ["/unsensambarhulsanuzeg1.png", "/unsensambarhulsanuzeg2.png"],
    photoCount:2,
    script: "/UnsenSambarHulsanUzeg.png",
    title: "ҮНСЭН САМБАР, ХУЛСАН ҮЗЭГ",
    text: "Монголчуудын дунд өргөн хэрэглэгдэж байсан бичгийн хэрэглэгдэхүүн бол үнсэн самбар, хулсан үзэг юм. Үнсэн самбарыг тэгш харуулдан зассан модоор хийж, гадаргууг тослон аргал болон ясны үнсээр өнгөлж, бичиг бичихэд бэлэн болгоно. Энэ самбарт үзүүрлэсэн зуруул, хулсан үзгээр бичдэг байна. Энэхүү өв нь ар шилийг арьсаар нааж тогтоосон 10 үнсэн самбарыг давхарлаж хийсэн бөгөөд самбар бүрийн дээд хэсэгт төвөд хэлний түгээмэл хэрэглэгддэг үгсийг цаасан дээр 2 мөрөөр бичиж наажээ."
}
const image5 = {
    image: ["/Olsonboolt1.png", "/Olsonboolt2.png"],
    photoCount:2,
    script: "/OlsonBoolt.png",
    title: "ОЛСОН БООЛТ",
    text: "Ганжуур, Данжуур зэрэг том хэмжээтэй хөлгөн судруудыг баринтаглаж хавтаслан, гадуур нь татмал сур, сайн чанарын олсоор ороож бэхэлдэг. Олсон боолтны хэмжээ нь алд илүү урттай байх нь бий. Олсон боолтны нэг үзүүрт боолтыг султгахгүй, чанга байлгах зориулалттай гуулин арал байдаг. Монголчууд судрын боолтны арал дээр нар, сар, чандмань эрдэнэ, очир, зээбадыг дүрсэлсэн байдаг."
}
const image6 = {
    image: ["/Sudrinhavtas(burhantai)1.png", "/Sudrinhavtas(burhantai)2.png"],
    photoCount:2,
    script: "/SudriinKhavtas(burhantai).png",
    title: "СУДРЫН ХАВТАС /бурхантай/",
    text: "Энэхүү судрын хавтасны дээд талд маанийн 6 үсгийг ланз үсгээр бичиж, судрын богино хэсэгт зээбадыг хээ угалзаар чимэглэн гоёжээ. Судрын модон хавтсыг ухаж, 3 цагийн бурхан хийгээд голд байх бурханы хоёр талд хоёр шавийг нь гоёмсгоор дүрсэлсэн байна. Нөгөө хавтсан дээр цэрэг эрдмийн тэнгэр, хөгжим найрын тэнгэр, эд баялгийн тэнгэр, эрдэм ухааны тэнгэрийг өнгө ялган дүрсэлжээ. Судрын хүрээ хэсэгт нацагдорж болон найман тахилыг хээ угалзаар чимэглэсэн байдаг."
}
const image7 = {
    image: ["/Hulszegsenhavtas1.png", "/Hulszegsenhavtas2.png"],
    photoCount:2,
    script: "/HulsZegsenHavtas.png",
    title: "ХУЛС, ЗЭГСЭН ХАВТАС",
    text: "Хэмжээ: 58.4х11.7 см Нарийн савхан хулс буюу зэгсийг хэд хэдээр судрын өргөнд тааруулан эгнүүлээд нимгэн модоор хүрээлэн жаазалж, гадна талд гурав дөрвөн хатуу хамар нааж, сарьсаар бөхлөөд дотор талд нь бөс даавуу нааж хийдэг."
}
const image8 = {
    image: ["/zuuoroosonsudriinhavtas1.png", "/zuuoroosonsudriinhavtas2.png"],
    photoCount:2,
    script: "/SudriinKhavtas(ZuuOroojOyoson).png",
    title: "СУДРЫН ХАВТАС /зүү ороож оёсон/",
    text: "Хэмжээ: 21.2х5.1 см, жин 25 гр, 1 ширхэг Бор шар торгон дээр очир болон хээ угалзыг зүү ороон оёж, шар торгоор эмжсэн, цэнхэр торгон дотортой бүтээл юм."
}
export const media = [image1, image2, image3, image4, image5, image6, image7, image8 ];
export const mediablabla = [image1.photoCount, image2.photoCount, 
    image3.photoCount, image4.photoCount, image5.photoCount, 
    image6.photoCount, image7.photoCount, image8.photoCount];



export const mediaByIndex = index => media[index % media.length];
export const mediaPhotoCount = index => media[index % media.length].photoCount;
export const length = media.length;
export const photoLength = [image1.photoCount]
export const currentSlide = indexOf(media)
export const photoByCount = (count, index) => media[count].image[index % 10]