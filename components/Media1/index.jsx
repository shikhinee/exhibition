//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/9nerdeniinganjuur1.png";
import media11 from "@/public/9nerdeniinganjuur2.png";
import media2 from "@/public/9nerdeniinjadamba1.png";
import media21 from "@/public/9nerdeniinjadamba2.png";
import media3 from "@/public/AltanJadamba1.png";
import media31 from "@/public/AltanJadamba2.png";
import media4 from "@/public/AltanJadamba(Zumbertei1)1.png";
import media41 from "@/public/AltanJadamba(Zumbertei1)2.png";
import media5 from "@/public/Mungunsanduinjud1.png";
import media51 from "@/public/Mungunsanduinjud2.png";
import media6 from "@/public/Jadamba8tahiltai1.png";
import media61 from "@/public/Jadamba8tahiltai2.png";
import media7 from "@/public/Hutagtbilgiinchanad1.png";
import media71 from "@/public/Hutagtbilgiinchanad2.png";
import media8 from "@/public/Mongolinihamaramagalan1.png";
import media81 from "@/public/Mongolinihamaramagalan2.png";
import media9 from "@/public/Ochiroorogtlogch1.png";
import media91 from "@/public/Ochiroorogtlogch2.png";


import script1 from "@/public/YosonErdeniinGanjuur.png"
import script2 from "@/public/YosonErdeniinJadamba.png"
import script3 from "@/public/AltanJadamba.png"
import script4 from "@/public/AltanJadamba(Zumbertei).png"
import script5 from "@/public/MungunSanduinJud.png"
import script6 from "@/public/Jadamba(NaimanTahiltai).png"
import script7 from "@/public/HutagtBilgiinChanadHyzgaaraaHursenNaimanMyngarOrshvoi.png"
import script8 from "@/public/Ts.BavuudorjMongoliinIhAmarAmgalan.png"
import script9 from "@/public/HutagtOchiroorOgtlogchBilgiinChanadHyzgaaraaHursenIhHulgunSudarOrshvoi.png"

import { indexOf } from "lodash";


const image1 = {
    image: ["/9nerdeniinganjuur1.png", "/9nerdeniinganjuur2.png"],
    photoCount: 2,
    script: "/YosonErdeniinGanjuur.png",
    title: "ЕСӨН ЭРДЭНИЙН ГАНЖУУР",
    text: "Холбогдох он цаг: 1819 Материал: Болгомол цаас, торго, даавуу, будаг, сарьс, гууль, есөн эрдэнэ Хэмжээ: 70.5х16.5 см, бичвэрийн хэмжээ 50х12 см, 110 боть Есөн Эрдэнийн Ганжуурыг бичгийн мэргэд тусгайлан боловсруулсан хар цаасан дээр алт, мөнгө, шүр, сувд, номин, оюу, зэс, ган, таныг нарийн жороор бэх болгон бэлдэж, мөрийг эгнүүлэн бичсэн бөгөөд монгол зургийн аргаар бурхан шүтээн, тахилын зураг, монгол хээ угалз сэлтийг уран сайхнаар дүрсэлсэн байдаг. 2002 онд Монгол Улсын Засгийн Газрын түүх соёлын “ХОСГҮЙ ҮНЭТ” өвд ЮНЕСКО-ийн “Дэлхийн Дурсамж” хөтөлбөрийн Олон улсын баримтат өвд 2013 онд бүртгэгджээ."
}
const image2 = {
    image: ["/9nerdeniinjadamba1.png", "/9nerdeniinjadamba2.png"],
    photoCount:2,
    script: "/YosonErdeniinJadamba.png",
    title: "ЕСӨН ЭРДЭНИЙН ЖАДАМБА",
    text: "Хэмжээ: 90.5x33.4 см Есөн эрдэнээр бүтээсэн Жадамба нь МУҮНС-д хадгалагдаж буй эрдэнийн зүйлээр бичсэн хамгийн том хөлгөн судар юм. Судрын эхний болон сүүлчийн хуудсыг модоор хүрээлж торгоор бүрсэн ба хуудас бүрийг хоргой торгоор эмжиж хүрээлсэн байдаг. Xуудасны төв хэсэгт дугуй болон дөрвөлжин хүрээнд бурхадын  хөргийг зурж,  эхний хуудасны бичвэрийг зүмбэрээр товойлгож алтаджээ."
}
const image3 = {
    image: ["/AltanJadamba1.png", "/AltanJadamba2.png"],
    photoCount:2,
    script: "/AltanJadamba.png",
    title:"АЛТАН ЖАДАМБА",
    text: "Алтан Жадамбын бичвэрийн хэсгийг хар өнгөөр, гадна талын хүрээг нил ягаан өнгөөр будаж алтаар найман мөр бичжээ. Эхний хуудсанд найман тахил, тахилын эд зүйлийг зурж, цэнхэр өнгийн хүрээтэй шар торгоор бүрж, модон хавтсанд суулгасан байна. Бичвэрийн хоёр талд луу ороосон хос багана бүхий сүмийн дотор арслан сэнтийд заларч буй Бурхан багш, Майдар бурханыг алтаар товойлгон урлаж, эрдэнийн чулуу, шүр, сувд, оюу тэргүүтнээр чимэглэжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image4 = {
    image: ["/AltanJadamba(Zumbertei1)1.png", "/AltanJadamba(Zumbertei1)2.png"],
    photoCount:2,
    script: "/AltanJadamba(Zumbertei).png",
    title: "АЛТАН ЖАДАМБА /зүмбэртэй/",
    text: "Энэхүү Жадамба нь эхний хуудасны цаасыг давхарлаж, шар өнгийн сарьсаар чимэглэн нааж бөхөлсөн, луу хээ угалз бүхий дотортой таван давхар торгон хөшигтэй, бичвэрийг зүмбэрлэн алтадсан, хас хээ бүхий цэнхэр цаасан хүрээтэй. Болгомол хар цаасан дээр алтаар найман мөр бичжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image5 = {
    image: ["/Mungunsanduinjud1.png", "/Mungunsanduinjud2.png"],
    photoCount:2,
    script: "/MungunSanduinJud.png",
    title: "МӨНГӨН САНДУЙН ЖҮД",
    text: "Хэмжээ: 59х15 см XIX зууны сүүлээр Манзуширын хийдэд Дагва тэргүүтэн дархчууд сүсэгтэн олны хандиваар цалин цагаан мөнгөн хуудсан дээр монгол дархны хөөмлийн аргаар өөрөөс нь үсэг товойлгон цохиж гаргаад алтдаж, бурхан бодисадын 50 хөргийг нарийн дүрслэн бүтээсэн судар юм. Нийт 1460 лан буюу 52 кг 560 гр алт, мөнгө орсон хэмээдэг. Монгол Улсын Засгийн Газрын 1995 оны 241-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image6 = {
    image: ["/Jadamba8tahiltai1.png", "/Jadamba8tahiltai2.png"],
    photoCount:2,
    script: "/Jadamba(NaimanTahiltai).png",
    title: "ЖАДАМБА /найман тахилтай/",
    text: "Материал: Болгомол хар цаас, алт, мод Хэмжээ: 62.2х17.8 см,269 хуудас Уг судрыг гавж Самдан тэргүүтэн урчууд 1783 онд болгомол хар хөх цаасан дээр алтан үсгээр төвөдөөр бичиж, хоёр талын зандан модон хавтсыг ухаж сийлэн, хээ угалз, цэцэг навчийг зуран, маанийн зургаан үсгийг ланз үсгээр бичиж чимэглэн бүтээжээ. Судрын эргэн тойронд найман тахил, чандмань эрдэнэ, намжвандан зэргийг бадам цэцгийн сууринд өнгө ялган хээ угалзаар чимэглэн дүрсэлжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image7 = {
    image: ["/Hutagtbilgiinchanad1.png", "/Hutagtbilgiinchanad2.png"],
    photoCount:2,
    script: "/HutagtBilgiinChanadHyzgaaraaHursenNaimanMyngarOrshvoi.png",
    title: "ХУТАГТ БИЛГИЙН ЧАНАД ХЯЗГААРАА (ХЯЗГААРТ) ХҮРСЭН НАЙМАН МЯНГАТ ОРШВОЙ /ЖАДАМБА/",
    text: "Материал: Болгомол хар цаас, алт             Хэмжээ: 53.6х17.3 см,256 хуудас Мөрийн тоо:20 МУҮНС-д хадгалагдаж буй алтаар монгол бичгээр бичсэн хамгийн том дурсгал юм. Тус бүтээлийг 1894 он буюу Бадаргуулт төрийн 20-p он хөх морин жилийн намрын дунд сарын сайн өдөр бичиж төгсгөжээ. Монгол Улсын Засгийн Газрын 2012 оны 105-р тогтоолоор түүх соёлын ХОСГҮЙ ҮНЭТ өвд бүртгэжээ."
}
const image8 = {
    image: ["/Mongolinihamaramagalan1.png", "/Mongolinihamaramagalan2.png"],
    photoCount:2,
    script: "/Ts.BavuudorjMongoliinIhAmarAmgalan.png",
    title: "Ц. БАВУУДОРЖ 'МОНГОЛЫН ИХ АМАР АМГАЛАН'",
    text: "Хэмжээ: 40.2х11.4 см, бичвэрийн хэмжээ26.3х7.5 см,  6 хуудас Яруу найрагч Цогдоржийн Бавуудорж 2005 оны 11-р сард дүү Ц. Рэнцэнбавуу, Ц. Рэнцэнноров нарын хамт “Монголын их амар амгалан” шүлгээ зэс хуудсан дээр мөнгөн утсаар бичиж, хуудас бүрийн эхэнд мөнгөн бурханыг суулган эрдэнийн чулуугаар чимэглэжээ."
}
const image9 = {
    image: ["/Ochiroorogtlogch1.png", "/Ochiroorogtlogch2.png"],
    photoCount:2,
    script: "/HutagtOchiroorOgtlogchBilgiinChanadHyzgaaraaHursenIhHulgunSudarOrshvoi.png",
    title: "ХУТАГТ ОЧИРООР ОГТЛОГЧ БИЛГИЙН ЧАНАД ХЯЗГААРАА (ХЯЗГААРТ) ХҮРСЭН ИХ ХӨЛГӨН СУДАР ОРШВОЙ",
    text: "Материал: Болгомол хар цаас, алт, мод, торго Хэмжээ: 24.5х9.8 см, бичвэрийн хэмжээ 17.8х6.6 см, 81 хуудас Доржжодба буюу монголчилбол “Очироор огтлогч” хэмээн нэрлэдэг. Алтан үсгээр монгол бичгээр бичсэн ховор дурсгалуудын нэг юм."
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