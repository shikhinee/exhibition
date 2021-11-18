//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import { indexOf } from "lodash";


const image1 = {
    image: ["/Soyombousgiintsagaantolgoi1.png", "/Soyombousgiintsagaantolgoi2.png"],
    photoCount:2,
    script: "/SoyomboUsgiinTsagaanTolgoi.png",
    title: "СОЁМБО ҮСГИЙН ЦАГААН ТОЛГОЙ",
    text: "Өндөр гэгээн Занабазарын зохиосон соёмбо үсгээр бичсэн энэхүү цагаан толгойг орос цаасан дээр улаан шунх, хар бэхээр бичжээ.",
    text1: ""
}
const image2 = {
    image: ["/SuutBogdChingisHaanituujorshvoi(todusgeer)1.png", "/SuutBogdChingisHaanituujorshvoi(todusgeer)2.png"],
    photoCount:2,
    script: "/SuutBogdChinggisKhaaniiTuujHemeehOrshvoi.png",
    title: "СУУТ БОГД ЧИНГИС ХААНЫ ТУУЖ ХЭМЭЭХ ОРШВОЙ /Тод үсгээр/",
    text: "Зая бандида Намхайжамцын зохиосон тод үсгээр “Өнчин хөвгүүний сэцэлсэн шастир”-ыг муутуу цаасан дээр хар бэх, улаан шунхаар 30 мөрөөр бичсэн гар бичмэл эх юм.",
    text1: ""
}
const image3 = {
    image: ["/Buyantkhan1.png", "/Buyantkhan2.png"],
    photoCount:2,
    script: "/BuyantKhanHuvguuniiNamtar.png",
    title: "БУЯНТ ХАН ХӨВГҮҮНИЙ НАМТАР /Вагиндра үсгээр/",
    text: "Бурхан багшийн хураангуй намтрыг орос цаасан дээр хар бэхээр хорголжин бараар вагиндра үсгээр барлажээ. XX зууны эхээр буюу 1905 онд буриад лам, соён гэгээрүүлэгч Агваандорж (Агваан Доржиев) монгол, тод бичгүүдэд тулгуурлан зохиосон шинэ үсэг билээ.",
    text1: ""
}
const image4 = {
    image: ["/Hevteedurvuljinbichig1.png", "/Hevteedurvuljinbichig2.png"],
    photoCount:2,
    script: "/HevteeDurvuljinUseg.png",
    title: "ХЭВТЭЭ ДӨРВӨЛЖИН ҮСЭГ",
    text: "Хэвтээ дөрвөлжин үсгийг Өндөр гэгээн Занабазар 1686 онд дөрвөлжин бичигт тулгуурлан зохиожээ. Энэхүү нэг хуудас барын судар нь хэвтээ дөрвөлжин үсгийн цагаан толгой болно.",
    text1: "Материал: Хятад цаас Хэмжээ:50.5х9 см, бичвэрийн хэмжээ 46х7 см, 1 хуудас",
}
const image5 = {
    image: ["/Galigusegorshvoi21.png", "/Galigusegorshvoi3.png"],
    photoCount:2,
    script: "/GaligUsegOrshvoi.png",
    title: "ГАЛИГ ҮСЭГ ОРШВОЙ /Али гали үсгээр/",
    text: "Али Гали галиг үсгийг энэтхэг, санскрит нэр томьёог галиглахын тулд Харчины Аюуш гүүш 1587 онд зохиожээ. Энэхүү цагаан толгойн гар бичмэл нь санскрит, төвөд үсгийг хэрхэн галиглахыг журамласан бөгөөд 1800-аад оны эхэн үед бичигдсэн байна.",
    text1: "Хэмжээ:32х8 см",
}
const image6 = {
    image: ["/Dorvoljinusgiindursgal1.png", "/Dorvoljinusgiindursgal2.png"],
    photoCount:2,
    script: "/DurvuljinUsgiinDursgal.png",
    title: "ДӨРВӨЛЖИН ҮСГИЙН ДУРСГАЛ",
    text: "Уг дурсгалыг дөрвөлжин үсгээр орос хатуу цаасан дээр төмөр үзгээр 'Монголын шинжлэх ухаан хөгжин бадрах болтугай' хэмээн бичсэн байдаг.",
    text1: "Хэмжээ:79х109 см"
}


export const media = [image1, image2, image3, image4, image5, image6];
export const mediablabla = [image1.photoCount, image2.photoCount, 
    image3.photoCount, image4.photoCount, image5.photoCount, 
    image6.photoCount];



export const mediaByIndex = index => media[index % media.length];
export const mediaPhotoCount = index => media[index % media.length].photoCount;
export const length = media.length;
export const photoLength = [image1.photoCount]
export const currentSlide = indexOf(media)
export const photoByCount = (count, index) => media[count].image[index % 10]