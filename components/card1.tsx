import Image from "next/image";
import styles from "./card1.module.css";
const Card1 = () => {
  return (
    <div className={styles.item}>
      <Image 
        className={styles.icons} 
        width={24} 
        height={24} 
        alt="Icon" 
        src="/Icons.svg"
      />
      <Image 
        className={styles.imageIcon} 
        width={67} 
        height={67} 
        alt="Image" 
        src="/image.png" 
      />
      <div className={styles.info}>
        <b className={styles.title}>Puxada frontal</b>
        <div className={styles.detail}>
          <div className={styles.title}>3 séries x 12 repetições</div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
