//Next, React (core node_modules) imports must be placed here
import Link from 'next/link'

import styled from "styled-components";

import { FacebookSquare, Instagram, Twitter } from "@styled-icons/boxicons-logos";

import Logo from '@/components/Logo'
//Styles must be imported here
import styles from "./Footer.module.scss";

const StyledFacebook = styled(FacebookSquare)`
  width: 24px;
  color: #efefef;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
  }
`;
const StyledInstagram = styled(Instagram)`
  width: 24px;
  color: #efefef;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
    color: #222831;
  }
`;
const StyledTwitter = styled(Twitter)`
  width: 24px;
  color: #efefef;
  margin-right: 2rem;
  cursor: pointer;
  &:hover{
    background-color: #919498;
    color: #222831;
  }
`;
const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <div className={styles.contentLeft}>
			  <Logo/>
			  <p><span>Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо,</span><span>Чингисийн өргөн чөлөө-4 <br/>(+976) 7011 2396
</span></p>
            <div className={styles.socialContainer}>
              <Link href="https://www.facebook.com/SolidFrameworksLLC">
                <StyledFacebook />
              </Link>
              <Link href="https://www.instagram.com/solidframeworks/">
                <StyledInstagram />
              </Link>
              <Link href="https://www.youtube.com/channel/UC3M2XBEJv5UfRHDRzjWAsTQ">
                <StyledTwitter />
              </Link>
            </div>
          </div>
        <div className={styles.contentRight}>
          <h1>Үйлчилгээ</h1>
          <div className={styles.webDesign}>
            <div className={styles.design}>
			<h2>Биднийг дэмжих</h2>
              <p>Танхимууд</p>
              <p>Номын сангийн давуу талууд</p>
              <p>Үйлчилгээнүүд</p>
			  <p>Байршил</p>
			  <p>Хандив</p>
			  <p>Ном</p>
            </div>
            <div className={styles.web}>
			<h2>Мэдээлэл</h2>
			  <p>Уншигчын санал</p>
			  <p>Номын санал</p>
			  <p>Статик мэдээлэл</p>
			  <p>Виртуал лавлагааны алба</p>
			  <p>Номын сан</p>
			  <p>Мэргэжилтнүүдэд</p>
			  <p>Хууль эрх зүй</p>
			  <p>Төсөл, Хөтөлбөр</p>
			  <p>Монгол бахархал</p>
            </div>
          </div>
            <div className={styles.strategy}>
			<h2>Номын санд</h2>
              <p>Хүртээмжтэй байдал</p>
              <p>Хөгжлийн бэрхшээлтэй иргэдэд<br/>зориулсан үйлчилгээ</p>
            </div>
        </div>
      </div>
      <hr></hr>
        <div className={styles.contentBottom}>
          <div className={styles.legal}>
            <div className={styles.legalLeft}>
              <p>МУҮНС ©  All rights reserved.</p>
            </div>
            <div className={styles.legalRight}>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;