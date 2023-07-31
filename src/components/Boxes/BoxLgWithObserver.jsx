import { Box } from "@mui/material";
import styles from './boxes.module.css';
import imageOne from '../../assets/red.png'
import imageTwo from '../../assets/redblue.png'
import imageThree from '../../assets/redblueyellow.png'

const BoxLgWithObserver = () => {
  return <Box className={`${styles.boxLgWithObserver} ${styles.boxLg}`}>

<div style={{
    position: "sticky",
    top: 0,
    height: "100vh",
    zIndex: 1
    }}>
        <img src={imageOne} alt="Image One" style={{ width: "100%", objectFit: "cover", position: "absolute" }}/>
        <img src={imageTwo} alt="Image Two" style={{ width: "100%", objectFit: "cover", position: "absolute", visibility: "hidden" }}/>
        <img src={imageThree} alt="Image Three" style={{ width: "100%", objectFit: "cover", position: "absolute", visibility: "visible" }}/>

    </div>
<div style={{
    display: "flex",
    flexDirection: "column"
}}
>
    <div className={styles.observerTextPanel}></div>
    <div className={styles.observerTextPanel}></div>
    <div className={styles.observerTextPanel}></div>
    <div className={styles.observerTextPanel}></div>
</div>


  </Box>;
};

export default BoxLgWithObserver;
