//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/Sahiusandaraeh1.png";
import media11 from "@/public/Sahiusandaraeh2.png";
import media2 from "@/public/Tsogtnuutshuraanguinundes1.png";
import media21 from "@/public/Tsogtnuutshuraanguinundes2.png";
import media3 from "@/public/10burhnitangarag1.png";
import media31 from "@/public/10burhnitangarag2.png";
import media4 from "@/public/Enhamgalangiinjadamba1.png";
import media41 from "@/public/Enhamgalangiinjadamba2.png";
import media5 from "@/public/huilmalerdeniintovch1.png";
import media51 from "@/public/erdeniintovch2.jpeg";
import media6 from "@/public/ulgeriindalaitomorhavtastai1.png";
import media61 from "@/public/ulgeriindalaitomorhavtastai2.png";
import media7 from "@/public/Shagjiindotzam1.png";
import media71 from "@/public/Shagjiindotzam2.png";
import media8 from "@/public/Mongolinnuutstovchooanhnihevlel1.png";
import media81 from "@/public/Mongolinnuutstovchooanhnihevlel2.png";
import media9 from "@/public/Itgel(zuuoroojoyson)1.png";
import media91 from "@/public/Itgel(zuuoroojoyson)2.png";

import script1 from "@/public/SahiusanDaraEh.png"
import script2 from "@/public/TsogtNuutsiinHuraanguinUndes.png"
import script3 from "@/public/ArvanBurhaniiTangarag.png"
import script4 from "@/public/EnhAmgalangiinJadamba.png"
import script5 from "@/public/ErdeniinTovch(Huilmal).png"
import script6 from "@/public/UlgeriinDalai(TumurHavtastai).png"
import script7 from "@/public/S.ShagjDutZam.png"
import script8 from "@/public/MongoliinNuutsTovchoo(HamgiinAnhniiHevlel).png"
import script9 from "@/public/Itgel(ZuuOroojOyoson).png"

import { indexOf } from "lodash";


const image1 = {
    image: ["/Sahiusandaraeh1.png", "/Sahiusandaraeh2.png"],
    photoCount:2,
    script: "/SahiusanDaraEh.png",
    title: "САХИУСАН ДАРА ЭХ ",
    text: "XX зууны эхэн үед Монгол Улсын Судар бичгийн хүрээлэнгийн жинхэнэ гишүүн, эрдэмтэн С. Шагж (1886-1938)-ийн бүтээсэн Ногоон, Цагаан Дара эхийн төвөд бичмэл судар юм. Нийтдээ 62 бадаг, 250 мөр, 5718 үсгийн тэмдэгт, 2510 цэг шад, бүхэлдээ 8228 тэмдэгтийг багтаажээ. Төвөд сав үсгээр 79 мөрөөр улаан хар бэхийг алаглуулан бичсэн, хамгийн жижиг бүтээл юм. Монгол Улсын Засгийн Газрын түүх соёлын ХОСГҮЙ ҮНЭТ өвд 2002 онд ЮНЕСКО-ийн “Дэлхийн дурсамж” хөтөлбөрийн Ази-Номхон далайн бүс нутгийн өвд 2014 онд бүртгэгджээ.",
    text1:"Бүтээгч: С. Шагж Материал: Орос цаас, хар бэх, улаан шунх",
    text2:"Хэмжээ: 4.9x5.4 см",
    text3:"Бичвэрийн хэмжээ 4.5x5 см",
    text4:"Зузаан 0.08 мм, жин 0.2 гр",
}
const image2 = {
    image: ["/Tsogtnuutshuraanguinundes1.png", "/Tsogtnuutshuraanguinundes2.png"],
    photoCount:2,
    script: "/TsogtNuutsiinHuraanguinUndes.png",
    title: "ЦОГТ НУУЦЫН ХУРААНГУЙН ҮНДЭС /Сандуйн жүд/",
    text: "'Нууц хураангуйн үндэс' бол бурханы шашны номуудаас хамгийн эрхэмд тоодогдох дээд тарнийн ёсны судар юм. Энэхүү дурсгал нь алтан үсгээр бичсэн хамгийн жижиг гар бичмэл болно.",
    text1:"Материал: Болгомол хар цаас, алт",
    text2:"Хэмжээ: 5.3х2.2 см",
    text3:"Бичвэрийн хэмжээ 4.5х1.5 см",
    text4:"Зузаан 0.9 см, жин 10гр, 10 хуудас Мөрийн тоо: 2",
}
const image3 = {
    image: ["/10burhnitangarag1.png", "/10burhnitangarag2.png"],
    photoCount:2,
    script: "/ArvanBurhaniiTangarag.png",
    title: "АРВАН БУРХАНЫ ТАНГАРАГ",
    text: "Тус бүтээл нь хамгийн жижиг модон барын хэвлэл бөгөөд муутуу цаасан дээр хар бэхээр 4 мөрөөр барласан 14 хуудас бүхий судар юм. Уг номыг академич, төрийн 3 удаагийн шагналт, зохиолч Ц. Дамдинсүрэн 1980 оны 10 дугаар сарын 24-ний өдөр Улсын номын санд бэлэглэжээ.",
    text1:"",
    text2:"",
    text3:"",
    text4:"",
}
const image4 = {
    image: ["/Enhamgalangiinjadamba1.png", "/Enhamgalangiinjadamba2.png"],
    photoCount:2,
    script: "/EnhAmgalangiinJadamba.png",
    title: "ЭНХ-АМГАЛАНГИЙН ЖАДАМБА",
    text: "Манж Чин улсын Энх-Амгалан хааны үед (1662-1722) бүтээгдсэн энэ судар нь МУҮНС-д хадгалагдаж буй модон бараар барласан хамгийн том судар юм. Хятад муутуу цаасан дээр төвөд үсгээр 8 мөрөөр хар бэхээр сийлж барлажээ. Судрын хүрээ чимэглэлийг хуудас нэг бүрчлэн улаан шунхан дардсаар дарж хүрээ үүсгэсэн байдаг.",
    text1:"Хэмжээ: 82х32 см",
    text2:"601 хуудас",
    text3:"",
    text4:"",
}
const image5 = {
    image: ["/huilmalerdeniintovch1.png", "/erdeniintovch2.jpeg"],
    photoCount:2,
    script: "/ErdeniinTovch(Huilmal).png",
    title: "ЭРДЭНИЙН ТОВЧ /хуйлмал/",
    text: "1662 онд Ордосын түүхч Саган сэцэний туурвисан 'Хаадын Үндэсний Эрдэнийн товч' нэрт түүхэн сурвалжийн хуйлмал гар бичмэл нь Монголчуудын ном соёлын түүхэн дэх хамгийн урт ном юм. Энэхүү хуйлмал эхийг хэдэн онд хэн бичсэн нь тодорхойгүй боловч бичгийн тиг хэлбэрээс үзвэл XIX зууны сүүл, XX зууны эхэн үеийнх байх магадлалтай хэмээн эрдэмтэд үздэг. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ.",
    text1:"",
    text2:"",
    text3:"",
    text4:"",
}
const image6 = {
    image: ["/ulgeriindalaitomorhavtastai1.png", "/ulgeriindalaitomorhavtastai2.png"],
    photoCount:2,
    script: "/UlgeriinDalai(TumurHavtastai).png",
    title: "ҮЛГЭРИЙН ДАЛАЙ /төмөр хавтастай/",
    text: "Энэхүү гар бичмэл эх нь хоёр талдаа төмрөөр хавтаслаж, үдэж, нугасалсан хоёр талд нь гарчиг бичих хэв цохьсон гэдгээрээ онцлогтой хадгалалт хамгаалалтын өвөрмөц дурсгал юм.",
    text1:"",
    text2:"",
    text3:"",
    text4:"",
}
const image7 = {
    image: ["/Shagjiindotzam1.png", "/Shagjiindotzam2.png"],
    photoCount:2,
    script: "/S.ShagjDutZam.png",
    title: "С. ШАГЖ 'ДӨТ ЗАМ'",
    text: "Шагж гуайн гар бичмэл нь манайд хадгалагдаж буй хамгийн жижиг монгол бичгээр бичсэн бүтээл юм. Энэхүү сурах бичигт монгол бичгийн цагаан толгой болон хэл зүйн зарим дүрмийг багтаасан байдаг.",
    text1:"",
    text2:"",
    text3:"",
    text4:"",
}
const image8 = {
    image: ["/Mongolinnuutstovchooanhnihevlel1.png", "/Mongolinnuutstovchooanhnihevlel2.png"],
    photoCount:2,
    script: "/MongoliinNuutsTovchoo(HamgiinAnhniiHevlel).png",
    title: "МОНГОЛЫН НУУЦ ТОВЧОО /хамгийн анхны хэвлэл/",
    text: "'Монголын нууц товчоо'-г анх Оросын эрдэмтэн П. И. Кафаров 1866 онд 'Чингис хааны тухай эртний монгол түүх' хэмээх нэрээр орос хэлээр орчуулан хэвлүүлжээ.",
    text1:"",
    text2:"",
    text3:"",
    text4:"",
}
const image9 = {
    image: ["/Itgel(zuuoroojoyson)1.png", "/Itgel(zuuoroojoyson)2.png"],
    photoCount:2,
    script: "/Itgel(ZuuOroojOyoson).png",
    title: "ИТГЭЛ /зүү ороож оёсон/",
    text: "XIX зууны сүүлчээр Түшээт хан аймгийн Ар долоон гөрөөчин овгийн уран хатгамалч Должин гэгч эмэгтэйн зүү ороож урласан Итгэл хэмээх судар юм. Энэхүү номын үсгийг алтан саат утсаар нэг ч зангилаа гаргалгүйгээр хар даавуун дээр зүү ороож, маш гоёмсгоор урласан байх ба судрын нэг нүүрийг даавууныхаа нэг талд хатгасан бөгөөд ийм хоёр нүүрийг ар талаар нь судрын нэгэн хуудас болгон нийлүүлж ирмэгийг улаан торгон утсаар хөвөрджээ.",
    text1:"Хэмжээ: 20.5х8.5 см",
    text2:"Бичвэрийн хэмжээ 16.2х5.8 см",
    text3:"8 хуудас",
    text4:"",
}

export const media = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
export const mediablabla = [image1.photoCount, image2.photoCount, 
    image3.photoCount, image4.photoCount, image5.photoCount, 
    image6.photoCount, image7.photoCount, image8.photoCount, image9.photoCount];



export const mediaByIndex = index => media[index % media.length];
export const mediaPhotoCount = index => media[index % media.length].photoCount;
export const length = media.length;
export const photoLength = [image1.photoCount]
export const currentSlide = indexOf(media)
export const photoByCount = (count, index) => media[count].image[index % 10]