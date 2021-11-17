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
import media51 from "@/public/huilmalerdeniintovch1.png";
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
    image: [media1, media11],
    photoCount:2,
    script: script1,
    title: "САХИУСАН ДАРА ЭХ ",
    text: "Бүтээгч: С. Шагж Материал: Орос цаас, хар бэх, улаан шунх Хэмжээ: 4.9x5.4 см, бичвэрийн хэмжээ 4.5x5 см, зузаан 0.08 мм, жин 0.2 гр XX зууны эхэн үед Монгол Улсын Судар бичгийн хүрээлэнгийн жинхэнэ гишүүн, эрдэмтэн С. Шагж (1886-1938)-ийн бүтээсэн Ногоон, Цагаан Дара эхийн төвөд бичмэл судар юм. Нийтдээ 62 бадаг, 250 мөр, 5718 үсгийн тэмдэгт, 2510 цэг шад, бүхэлдээ 8228 тэмдэгтийг багтаажээ. Төвөд сав үсгээр 79 мөрөөр улаан хар бэхийг алаглуулан бичсэн, хамгийн жижиг бүтээл юм. Монгол Улсын Засгийн Газрын түүх соёлын 'ХОСГҮЙ ҮНЭТ' өвд 2002 онд ЮНЕСКО-ийн “Дэлхийн дурсамж” хөтөлбөрийн Ази-Номхон далайн бүс нутгийн өвд 2014 онд бүртгэгджээ."
}
const image2 = {
    image: [media2, media21],
    photoCount:2,
    script: script2,
    title: "ЦОГТ НУУЦЫН ХУРААНГУЙН ҮНДЭС /Сандуйн жүд/",
    text: "Материал: Болгомол хар цаас, алт Хэмжээ: 5.3х2.2 см, бичвэрийн хэмжээ 4.5х1.5 см, зузаан 0.9 см, жин 10гр, 10 хуудас Мөрийн тоо: 2 'Нууц хураангуйн үндэс' бол бурханы шашны номуудаас хамгийн эрхэмд тоодогдох дээд тарнийн ёсны судар юм. Энэхүү дурсгал нь алтан үсгээр бичсэн хамгийн жижиг гар бичмэл болно."
}
const image3 = {
    image: [media3, media31],
    photoCount:2,
    script: script3,
    title: "АРВАН БУРХАНЫ ТАНГАРАГ",
    text: "Тус бүтээл нь хамгийн жижиг модон барын хэвлэл бөгөөд муутуу цаасан дээр хар бэхээр 4 мөрөөр барласан 14 хуудас бүхий судар юм. Уг номыг академич, төрийн 3 удаагийн шагналт, зохиолч Ц. Дамдинсүрэн 1980 оны 10 дугаар сарын 24-ний өдөр Улсын номын санд бэлэглэжээ."
}
const image4 = {
    image: [media4, media41],
    photoCount:2,
    script: script4,
    title: "ЭНХ-АМГАЛАНГИЙН ЖАДАМБА",
    text: "Хэмжээ: 82х32 см, 601 хуудас Манж Чин улсын Энх-Амгалан хааны үед (1662-1722) бүтээгдсэн энэ судар нь МУҮНС-д хадгалагдаж буй модон бараар барласан хамгийн том судар юм. Хятад муутуу цаасан дээр төвөд үсгээр 8 мөрөөр хар бэхээр сийлж барлажээ. Судрын хүрээ чимэглэлийг хуудас нэг бүрчлэн улаан шунхан дардсаар дарж хүрээ үүсгэсэн байдаг."
}
const image5 = {
    image: [media5, media51],
    photoCount:2,
    script: script5,
    title: "ЭРДЭНИЙН ТОВЧ /хуйлмал/",
    text: "Энэхүү гар бичмэл эх нь хоёр талдаа төмрөөр хавтаслаж, үдэж, нугасалсан хоёр талд нь гарчиг бичих хэв цохьсон гэдгээрээ онцлогтой хадгалалт хамгаалалтын өвөрмөц дурсгал юм."
}
const image6 = {
    image: [media6, media61],
    photoCount:2,
    script: script6,
    title: "ҮЛГЭРИЙН ДАЛАЙ /төмөр хавтастай/",
    text: "Хэмжээ: 19.2х13.2 см 'Өнчин хөвгүүний сэцэлсэн шаштир' хэмээх бүтээлийг 1925 онд Бээжин дэх Тэмгэтийн байгуулсан монгол бичгийн хороонд 'Чингисийн дурсгалын түүвэр' нэрээр хэвлэжээ."
}
const image7 = {
    image: [media7, media71],
    photoCount:2,
    script: script7,
    title: "С. ШАГЖ 'ДӨТ ЗАМ'",
    text: "Шагж гуайн гар бичмэл нь манайд хадгалагдаж буй хамгийн жижиг монгол бичгээр бичсэн бүтээл юм. Энэхүү сурах бичигт монгол бичгийн цагаан толгой болон хэл зүйн зарим дүрмийг багтаасан байдаг."
}
const image8 = {
    image: [media8, media81],
    photoCount:2,
    script: script8,
    title: "МОНГОЛЫН НУУЦ ТОВЧОО /хамгийн анхны хэвлэл/",
    text: "'Монголын нууц товчоо'-г анх Оросын эрдэмтэн П. И. Кафаров 1866 онд 'Чингис хааны тухай эртний монгол түүх' хэмээх нэрээр орос хэлээр орчуулан хэвлүүлжээ."
}
const image9 = {
    image: [media9, media91],
    photoCount:2,
    script: script9,
    title: "ИТГЭЛ /зүү ороож оёсон/",
    text: "Хэмжээ: 20.5х8.5 см, бичвэрийн хэмжээ 16.2х5.8 см, зузаан, 8 хуудас XIX зууны сүүлчээр Түшээт хан аймгийн Ар долоон гөрөөчин овгийн уран хатгамалч Должин гэгч эмэгтэйн зүү ороож урласан Итгэл хэмээх судар юм. Энэхүү номын үсгийг алтан саат утсаар нэг ч зангилаа гаргалгүйгээр хар даавуун дээр зүү ороож, маш гоёмсгоор урласан байх ба судрын нэг нүүрийг даавууныхаа нэг талд хатгасан бөгөөд ийм хоёр нүүрийг ар талаар нь судрын нэгэн хуудас болгон нийлүүлж ирмэгийг улаан торгон утсаар хөвөрджээ."
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