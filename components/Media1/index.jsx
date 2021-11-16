//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/Jalzetembanganjuur1.png";
import media2 from "@/public/altantovch.png";
import media3 from "@/public/hurdenzurgiinbichmel.png";
import media4 from "@/public/Asragchnertiintuuh1.png";
import media5 from "@/public/Erdeniintovch(urguueh)1.jpg";
import media6 from "@/public/Chingisiindursgalintuuver1.png";
import media7 from "@/public/TseveeniiMongolinulsintuuh1.png";
import media8 from "@/public/Mergedgarahinorongarbichmel1.png";
import media9 from "@/public/Bogdinorgomjlol1.png";
import media10 from "@/public/Oyuntulhuur1.png";


import picture1 from "@/public/Jalzetembanganjuur1.png"
import picture2 from "@/public/Jalzetembanganjuur2.png"
import picture3 from "@/public/Jalzetembanganjuur3.png"

import script1 from "@/public/JalzeTembanGanjuur.png"
import script2 from "@/public/ErtniiHaadiinUndeslesenTurYosniiZohioliigTovchlonHuraasanAltanTovchHemeehOrshvoi.png"
import script3 from "@/public/ChinggeseesEhlenHalhiinBuhNoyodiinUgsaaZalgamjilsanHurdenZurgiinBichmel.png"
import script4 from "@/public/AsragchNertiinTuuh.png"
import script5 from "@/public/ErdeniinTovch(UrguuEh).png"
import script6 from "@/public/Survaljbichgiindeejis.png"
import script7 from "@/public/ChinggisiinDursgaliinTuuver.png"
import script8 from "@/public/J.TseveenMongolUlsiinTuuh.png"
import script9 from "@/public/BogdiinUrgumjlul.png"
import script10 from "@/public/OyunTulhuur.png"

import { indexOf } from "lodash";


const image1 = {
    image: [media1, media2 , media3, media4],
    photoCount: 4,
    script: script1,
    title: "ЕСӨН ЭРДЭНИЙН ГАНЖУУР",
    text: "Холбогдох он цаг: 1819 Материал: Болгомол цаас, торго, даавуу, будаг, сарьс, гууль, есөн эрдэнэ Хэмжээ: 70.5х16.5 см, бичвэрийн хэмжээ 50х12 см, 110 боть Есөн Эрдэнийн Ганжуурыг бичгийн мэргэд тусгайлан боловсруулсан хар цаасан дээр алт, мөнгө, шүр, сувд, номин, оюу, зэс, ган, таныг нарийн жороор бэх болгон бэлдэж, мөрийг эгнүүлэн бичсэн бөгөөд монгол зургийн аргаар бурхан шүтээн, тахилын зураг, монгол хээ угалз сэлтийг уран сайхнаар дүрсэлсэн байдаг. 2002 онд Монгол Улсын Засгийн Газрын түүх соёлын “ХОСГҮЙ ҮНЭТ” өвд ЮНЕСКО-ийн “Дэлхийн Дурсамж” хөтөлбөрийн Олон улсын баримтат өвд 2013 онд бүртгэгджээ."
}
const image2 = {
    image: [media2, media2 , media3],
    photoCount: 3,
    script: script2,
    title: "ЕСӨН ЭРДЭНИЙН ЖАДАМБА",
    text: "Хэмжээ: 90.5x33.4 см Есөн эрдэнээр бүтээсэн Жадамба нь МУҮНС-д хадгалагдаж буй эрдэнийн зүйлээр бичсэн хамгийн том хөлгөн судар юм. Судрын эхний болон сүүлчийн хуудсыг модоор хүрээлж торгоор бүрсэн ба хуудас бүрийг хоргой торгоор эмжиж хүрээлсэн байдаг. Xуудасны төв хэсэгт дугуй болон дөрвөлжин хүрээнд бурхадын  хөргийг зурж,  эхний хуудасны бичвэрийг зүмбэрээр товойлгож алтаджээ."
}
const image3 = {
    image: [media3, media2 , media3],
    photoCount: 3,
    script: script3,
    title:"АЛТАН ЖАДАМБА",
    text: "Алтан Жадамбын бичвэрийн хэсгийг хар өнгөөр, гадна талын хүрээг нил ягаан өнгөөр будаж алтаар найман мөр бичжээ. Эхний хуудсанд найман тахил, тахилын эд зүйлийг зурж, цэнхэр өнгийн хүрээтэй шар торгоор бүрж, модон хавтсанд суулгасан байна. Бичвэрийн хоёр талд луу ороосон хос багана бүхий сүмийн дотор арслан сэнтийд заларч буй Бурхан багш, Майдар бурханыг алтаар товойлгон урлаж, эрдэнийн чулуу, шүр, сувд, оюу тэргүүтнээр чимэглэжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image4 = {
    image: [media4, media2 , media3],
    photoCount: 3,
    script: script4,
    title: "АЛТАН ЖАДАМБА /зүмбэртэй/",
    text: "Энэхүү Жадамба нь эхний хуудасны цаасыг давхарлаж, шар өнгийн сарьсаар чимэглэн нааж бөхөлсөн, луу хээ угалз бүхий дотортой таван давхар торгон хөшигтэй, бичвэрийг зүмбэрлэн алтадсан, хас хээ бүхий цэнхэр цаасан хүрээтэй. Болгомол хар цаасан дээр алтаар найман мөр бичжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image5 = {
    image: [media5, media2 , media3],
    photoCount: 3,
    script: script5,
    title: "МӨНГӨН САНДУЙН ЖҮД",
    text: "Хэмжээ: 59х15 см XIX зууны сүүлээр Манзуширын хийдэд Дагва тэргүүтэн дархчууд сүсэгтэн олны хандиваар цалин цагаан мөнгөн хуудсан дээр монгол дархны хөөмлийн аргаар өөрөөс нь үсэг товойлгон цохиж гаргаад алтдаж, бурхан бодисадын 50 хөргийг нарийн дүрслэн бүтээсэн судар юм. Нийт 1460 лан буюу 52 кг 560 гр алт, мөнгө орсон хэмээдэг. Монгол Улсын Засгийн Газрын 1995 оны 241-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image6 = {
    image: [media6, media2 , media3],
    photoCount: 3,
    script: script6,
    title: "ЖАДАМБА /найман тахилтай/",
    text: "Материал: Болгомол хар цаас, алт, мод Хэмжээ: 62.2х17.8 см, 369 хуудас Уг судрыг гавж Самдан тэргүүтэн урчууд 1783 онд болгомол хар хөх цаасан дээр алтан үсгээр төвөдөөр бичиж, хоёр талын зандан модон хавтсыг ухаж сийлэн, хээ угалз, цэцэг навчийг зуран, маанийн зургаан үсгийг ланз үсгээр бичиж чимэглэн бүтээжээ. Судрын эргэн тойронд найман тахил, чандмань эрдэнэ, намжвандан зэргийг бадам цэцгийн сууринд өнгө ялган хээ угалзаар чимэглэн дүрсэлжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image7 = {
    image: [media7, media2 , media3],
    photoCount: 3,
    script: script7,
    title: "ХУТАГТ БИЛГИЙН ЧАНАД ХЯЗГААРАА (ХЯЗГААРТ) ХҮРСЭН НАЙМАН МЯНГАТ ОРШВОЙ /ЖАДАМБА/",
    text: "Материал: Болгомол хар цаас, алт Хэмжээ: 53.6х17.3 см, 356 хуудас Мөрийн тоо: 30 МУҮНС-д хадгалагдаж буй алтаар монгол бичгээр бичсэн хамгийн том дурсгал юм. Тус бүтээлийг 1894 он буюу Бадаргуулт төрийн 20-p он хөх морин жилийн намрын дунд сарын сайн өдөр бичиж төгсгөжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image8 = {
    image: [media8, media2 , media3],
    photoCount: 3,
    script: script8,
    title: "Ц. БАВУУДОРЖ 'МОНГОЛЫН ИХ АМАР АМГАЛАН'",
    text: "Хэмжээ: 40.2х11.4 см, бичвэрийн хэмжээ 36.3х7.5 см,  6 хуудас Яруу найрагч Цогдоржийн Бавуудорж 2005 оны 11-р сард дүү Ц. Рэнцэнбавуу, Ц. Рэнцэнноров нарын хамт “Монголын их амар амгалан” шүлгээ зэс хуудсан дээр мөнгөн утсаар бичиж, хуудас бүрийн эхэнд мөнгөн бурханыг суулган эрдэнийн чулуугаар чимэглэжээ."
}
const image9 = {
    image: [media9, media2 , media3],
    photoCount: 3,
    script: script9,
    title: "ХУТАГТ ОЧИРООР ОГТЛОГЧ БИЛГИЙН ЧАНАД ХЯЗГААРАА (ХЯЗГААРТ) ХҮРСЭН ИХ ХӨЛГӨН СУДАР ОРШВОЙ",
    text: "Материал: Болгомол хар цаас, алт, мод, торго Хэмжээ: 24.5х9.8 см, бичвэрийн хэмжээ 17.8х6.6 см, 81 хуудас Доржжодба буюу монголчилбол “Очироор огтлогч” хэмээн нэрлэдэг. Алтан үсгээр монгол бичгээр бичсэн ховор дурсгалуудын нэг юм."
}

export const media = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
export const mediaByIndex = index => media[index % media.length];
export const mediaPhotoCount = index => media[index % media.length].photoCount;
export const length = media.length;
export const photoLength = [image1.photoCount]
export const currentSlide = indexOf(media)
export const photoByCount = (count , index) => media[count].image[index % 10]