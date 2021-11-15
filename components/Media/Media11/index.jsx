import picture1 from "@/public/Jalzetembanganjuur1.png"
import picture2 from "@/public/Jalzetembanganjuur2.png"
import picture3 from "@/public/Jalzetembanganjuur3.png"
export const picture = [picture1, picture2, picture3];
export const pictureByIndex = index => picture[index % picture.length];