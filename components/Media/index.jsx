//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/Jalzetembanganjuur1.png";
import media11 from "@/public/Jalzetembanganjuur2.png";
import media2 from "@/public/altantovch1.png";
import media21 from "@/public/altantovch2.png";
import media3 from "@/public/Chingiseesehlenhalhiin1.png";
import media31 from "@/public/Chingiseesehlenhalhiin2.png";
import media4 from "@/public/Asragchnertiintuuh1.png";
import media41 from "@/public/Asragchnertiintuuh2.png";
import media5 from "@/public/Erdeniintovch(urguueh)1.jpg";
import media51 from "@/public/Erdeniintovch(urguueh)2.jpg";
import media6 from "@/public/Chingisiindursgalintuuver1.png";
import media61 from "@/public/Chingisiindursgalintuuver2.png";
import media7 from "@/public/TseveeniiMongolinulsintuuh1.png";
import media71 from "@/public/TseveeniiMongolinulsintuuh2.png";
import media8 from "@/public/Mergedgarahinorongarbichmel1.png";
import media81 from "@/public/Mergedgarahinorongarbichmel2.png";
import media9 from "@/public/Bogdinorgomjlol1.png";
import media91 from "@/public/Bogdinorgomjlol2.png";
import media10 from "@/public/Oyuntulhuur1.png";
import media101 from "@/public/Oyuntulhuur2.png";


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
    image: [media1, media11],
    photoCount:2,
    script: script1,
    title: "ЖАЛЗЭ ТЭМБАН ГАНЖУУР",
    text: "Материал: Төвөд цаас хятад бэх Хэмжээ: 70.5х15 см 111 боть Мөрийн тоо: 8 Жалзэ Тэмбан Ганжуурыг тавдугаар Далай лам Лувсанжамц Төвөдөөс Өндөр гэгээн Занабазарт 1671 онд бэлэг болгон өргөж байжээ. Энэхүү гоёмсог гар бичмэл эх нь Монголд төдийгүй дэлхийд хамгийн эртний ховор нандинд тооцогдох их хөлгөн судар юм."
}
const image2 = {
    image: [media2, media21],
    photoCount:2,
    script: script2,
    title: "ЭРТНИЙ ХААДЫН ҮНДЭСЛЭСЭН ТӨР ЁСНЫ ЗОХИОЛЫГ ТОВЧЛОН ХУРААСАН АЛТАН ТОВЧ ХЭМЭЭХ ОРШВОЙ",
    text: "Зохиогч: Лувсанданзан Холбогдох он цаг: 1651 Материал: Болгомол цаас, хар бэх Хэмжээ: 62.8х18.8 см, бичвэрийн хэмжээ 49.2х14.4 см, 178 хуудас Лувсанданзаны 'Алтан товч'-ийн жинхэнэ эх болох хулсан үзгийн бичмэлийг Дорнод аймгийн Баянтүмэн хошууны Еншөөбүү овгийн Дарь тайжид хадгалагдаж байсныг Судар бичгийн хүрээлэнгийн анхны дарга О. Жамьян гуай 1926 онд олж авчирчээ. “Алтан товч” нь “Монголын нууц товчоо”-ны 282 зүйлээс 233 нь бараг тохирч байдаг учраас “Монголын нууц товчоо”-ны монгол бичгээр үлдсэн нэгэн эх гэж үздэг. Монгол Улсын Засгийн Газрын түүх соёлын 'ХОСГҮЙ ҮНЭТ' өвд 1995 онд ЮНЕСКО-ийн “Дэлхийн дурсамж” хөтөлбөрийн Ази-Номхон далайн бүс нутгийн өвд 2010 онд ЮНЕСКО-ийн “Дэлхийн Дурсамж” хөтөлбөрийн олон улсын баримтат өвд 2011 онд бүртгэгдсэн байна."
}
const image3 = {
    image: [media3, media31],
    photoCount:2,
    script: script3,
    title: "ЧИНГИСЭЭС ЭХЛЭН ХАЛХЫН БҮХ ОЛОН НОЁДЫН УГСАА ЗАЛГАМЖИЛСАН ХҮРДЭН ЗУРГИЙН БИЧМЭЛ",
    text: "Холбогдох он цаг: XIX зууны эхэн Материал: Даавуу, хар бэх, улаан шунх  Хэмжээ: 88х90.5 см Энэхүү угийн бичигт Халхын хошуудын засаг ноёдын угсаа гарлыг Чингис хаанаас эх аван хөтөлсөн бөгөөд хэн хэдийд бичсэн нь тодорхойгүй боловч угийн бичигт орсон хүмүүсийн төрсөн он цаг, бичгийн хэвийг харвал 19-р зууны эхний хагаст бичсэн байна хэмээн эрдэмтэд үздэг. МУҮНС-д хоёр хувь хадгалагдаж байгаагийн нэг нь нэлээд гэмтсэн байна."
}
const image4 = {
    image: [media4, media41],
    photoCount:2,
    script: script4,
    title: "АСРАГЧ НЭРТИЙН ТҮҮХ",
    text: "Материал: Болгомол цаас, хар бэх Хэмжээ:28.9х8.9 см Мөрийн тоо: 28 Халхын Сайн ноён ханы дээд өвөг Жамба эрх дайчин 1677 онд туурвисан энэхүү монгол түүхэн сурвалж нь 'Монголын нууц товчоо' тэргүүтнийг шууд ашиглаж бичсэн ганц хувь модон үзгээр бичсэн Монголын түүхийн үнэ цэнтэй бүтээл юм. Ялангуяа 1662 оноос хойших Халх долоон хошуунд болсон 15 жилийн түүхэн үйл явдал, түүхэн зүтгэлтнүүдийн тухай баримт мэдээнүүд багтсан байдаг. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын “ХОСГҮЙ ҮНЭТ” өвд бүртгэжээ."
}
const image5 = {
    image: [media5, media51],
    photoCount:2,
    script: script5,
    title: "ЭРДЭНИЙН ТОВЧ /өргөө эх/",
    text: "Материал: Монгол цаас, хар бэх, улаан шунх Хэмжээ:37х12.8 см, бичвэрийн хэмжээ 29.5х9.5 см, 62 хуудас Энэхүү хулсан үзгийн дармал тигээр бичсэн эх нь 'Эрдэнийн товч' сурвалжийн ховор дурсгалын нэг бөгөөд МУҮНС-д ганц хувь хадгалагдаж буй. Бичгийн хэвийн хувьд бусад эхээс нэлээд эртнийх гэж үздэг."
}
const image6 = {
    image: [media6, media61],
    photoCount:2,
    script: script6,
    title: "ЧИНГИСИЙН ДУРСГАЛЫН ТҮҮВЭР",
    text: "Хэмжээ: 19.2х13.2 см 'Өнчин хөвгүүний сэцэлсэн шаштир' хэмээх бүтээлийг 1925 онд Бээжин дэх Тэмгэтийн байгуулсан монгол бичгийн хороонд 'Чингисийн дурсгалын түүвэр' нэрээр хэвлэжээ."
}
const image7 = {
    image: [media7, media71],
    photoCount:2,
    script: script7,
    title: "Ж. ЦЭВЭЭН 'МОНГОЛ УЛСЫН ТҮҮХ'",
    text: "Хэмжээ: 26х27 см Хүннү гүрнээс эхлээд 1920 он хүртэлх Монгол улсын түүхийг хамарсан гурван бүлэг гар бичмэл бүтээл юм. Энэ нь Цэвээн гуайн 'Оюутны сургууль'-д багшилж байсан үеийн лекц болно. Монголын орчин цагийн түүх бичлэгийн үндсийг тавьсан гэж эрдэмтэд үздэг."
}
const image8 = {
    image: [media8, media81],
    photoCount:2,
    script: script8,
    title: "'МЭРГЭД ГАРАХЫН ОРОН' ТОЛЬ БИЧГИЙН ГАР БИЧМЭЛ",
    text: "Материал: Орос цаас, хар бэх Хэмжээ:34х9.5 см Мөрийн тоо: 2 'Мэргэд гарахын орон' хэмээх толь бичгийг Жанжаа Ролбийдорж тэргүүтэн эрдэмтэд Данжуурыг нэр томьёоны хувьд жигдлэн орчуулахын тулд 1741-1742 онд зохиожээ. Энэхүү толь бичиг дэх тэжээхүй ухаан буюу анагаах ухааны бүлгийг хуулж бичсэн төвөд-монгол хадмал,22 хуудас бүхий буриад гар бичмэл юм."
}
const image9 = {
    image: [media9, media91],
    photoCount:2,
    script: script9,
    title: "БОГДЫН ӨРГӨМЖЛӨЛ",
    text: "Материал: Пүүсүү торго, хар бэх ХХ зууны эхэн үед Манж Чин улсаас туурга тусгаарлаж, Богдыг хаан ширээнд залан, оны цолоо Олноо өргөгдсөн хэмээсэн билээ. Монгол улсдаа хүчин зүтгэсэн ноёд, лам нарт хишиг хүртээж, хэргэм зэрэг олгохыг баталсан өргөмжлөлийг 'Богдын өргөмжлөл' хэмээн нэрлэдэг."
}
const image10 = {
    image: [media10, media101],
    photoCount:2,
    script: script10,
    title: "ОЮУН ТҮЛХҮҮР",
    text: "Хэмжээ: 12.5x18.2 см Монгол Улсын XVIII он буюу 1928 онд Ардыг гэгээрүүлэх яамнаас Улаанбаатар хот дахь монгол үсгийн хэвлэлийн хороонд хэвлэсэн хорголжин барын анхны хэвлэл гэдгээрээ онцлог."
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