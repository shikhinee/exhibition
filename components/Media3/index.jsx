//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'


import media1 from "@/public/Soyombousgiintsagaantolgoi1.png";
import media11 from "@/public/Soyombousgiintsagaantolgoi2.png";
import media2 from "@/public/SuutBogdChingisHaanituujorshvoi(todusgeer)1.png";
import media21 from "@/public/SuutBogdChingisHaanituujorshvoi(todusgeer)2.png";
import media3 from "@/public/Buyantkhan1.png";
import media31 from "@/public/Buyantkhan2.png";
import media4 from "@/public/Hevteedurvuljinbichig1.png";
import media41 from "@/public/Hevteedurvuljinbichig2.png";
import media5 from "@/public/Galigusegorshvoi21.png";
import media51 from "@/public/Galigusegorshvoi3.png";
import media6 from "@/public/Dorvoljinusgiindursgal1.png";
import media61 from "@/public/Dorvoljinusgiindursgal2.png";


import script1 from "@/public/SoyomboUsgiinTsagaanTolgoi.png"
import script2 from "@/public/SuutBogdChinggisKhaaniiTuujHemeehOrshvoi.png"
import script3 from "@/public/BuyantKhanHuvguuniiNamtar.png"
import script4 from "@/public/HevteeDurvuljinUseg.png"
import script5 from "@/public/GaligUsegOrshvoi.png"
import script6 from "@/public/DurvuljinUsgiinDursgal.png"

import { indexOf } from "lodash";


const image1 = {
    image: ["/Soyombousgiintsagaantolgoi1.png", "/Soyombousgiintsagaantolgoi2.png"],
    photoCount:2,
    script: "/SoyomboUsgiinTsagaanTolgoi.png",
    title: "СОЁМБО ҮСГИЙН ЦАГААН ТОЛГОЙ",
    text: "Өндөр гэгээн Занабазарын зохиосон соёмбо үсгээр бичсэн энэхүү цагаан толгойг орос цаасан дээр улаан шунх, хар бэхээр бичжээ."
}
const image2 = {
    image: ["/SuutBogdChingisHaanituujorshvoi(todusgeer)1.png", "/SuutBogdChingisHaanituujorshvoi(todusgeer)2.png"],
    photoCount:2,
    script: "/SuutBogdChinggisKhaaniiTuujHemeehOrshvoi.png",
    title: "СУУТ БОГД ЧИНГИС ХААНЫ ТУУЖ ХЭМЭЭХ ОРШВОЙ /Тод үсгээр/",
    text: "Зая бандида Намхайжамцын зохиосон тод үсгээр “Өнчин хөвгүүний сэцэлсэн шастир”-ыг муутуу цаасан дээр хар бэх, улаан шунхаар 30 мөрөөр бичсэн гар бичмэл эх юм."
}
const image3 = {
    image: ["/Buyantkhan1.png", "/Buyantkhan2.png"],
    photoCount:2,
    script: "/BuyantKhanHuvguuniiNamtar.png",
    title: "БУЯНТ ХАН ХӨВГҮҮНИЙ НАМТАР /Вагиндра үсгээр/",
    text: "Бурхан багшийн хураангуй намтрыг орос цаасан дээр хар бэхээр хорголжин бараар вагиндра үсгээр барлажээ. XX зууны эхээр буюу 1905 онд буриад лам, соён гэгээрүүлэгч Агваандорж (Агваан Доржиев) монгол, тод бичгүүдэд тулгуурлан зохиосон шинэ үсэг билээ."
}
const image4 = {
    image: ["/Hevteedurvuljinbichig1.png", "/Hevteedurvuljinbichig2.png"],
    photoCount:2,
    script: "/HevteeDurvuljinUseg.png",
    title: "ХЭВТЭЭ ДӨРВӨЛЖИН ҮСЭГ",
    text: "Материал: Хятад цаас Хэмжээ:50.5х9 см, бичвэрийн хэмжээ 46х7 см, 1 хуудас Хэвтээ дөрвөлжин үсгийг Өндөр гэгээн Занабазар 1686 онд дөрвөлжин бичигт тулгуурлан зохиожээ. Энэхүү нэг хуудас барын судар нь хэвтээ дөрвөлжин үсгийн цагаан толгой болно."
}
const image5 = {
    image: ["/Galigusegorshvoi21.png", "/Galigusegorshvoi3.png"],
    photoCount:2,
    script: "/GaligUsegOrshvoi.png",
    title: "ГАЛИГ ҮСЭГ ОРШВОЙ /Али гали үсгээр/",
    text: "Хэмжээ:32х8 см Али Гали галиг үсгийг энэтхэг, санскрит нэр томьёог галиглахын тулд Харчины Аюуш гүүш 1587 онд зохиожээ. Энэхүү цагаан толгойн гар бичмэл нь санскрит, төвөд үсгийг хэрхэн галиглахыг журамласан бөгөөд 1800-аад оны эхэн үед бичигдсэн байна."
}
const image6 = {
    image: ["/Dorvoljinusgiindursgal1.png", "/Dorvoljinusgiindursgal2.png"],
    photoCount:2,
    script: "/DurvuljinUsgiinDursgal.png",
    title: "ДӨРВӨЛЖИН ҮСГИЙН ДУРСГАЛ",
    text: "Хэмжээ:79х109 см Уг дурсгалыг дөрвөлжин үсгээр орос хатуу цаасан дээр төмөр үзгээр 'Монголын шинжлэх ухаан хөгжин бадрах болтугай' хэмээн бичсэн байдаг."
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