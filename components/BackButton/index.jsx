//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import Link from "next/link";
//import STORE from '@/store'
import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular";
import Logo from "@/components/Logo";
import styles from './BackButton.module.scss'
const StyledBack = styled(ArrowBack)`
  width: 50px;
  color: #1A75BB;
  padding: 1rem;
  cursor: pointer;
  &:hover{
    color: #1bcacd;
  }
`;
const BackButton = (props) => {
	const router = useRouter();
	 return (
		 <>{router.pathname !== "/" ? <Link href="/"><div className={styles.container}>
		 <StyledBack/><span>Буцах</span>
	 </div></Link> : <Logo/> }
		</>
	)
};

export default BackButton;
