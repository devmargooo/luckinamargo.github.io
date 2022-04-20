import styles from "./Footer.module.css";
import { colorPause,colorPLay } from '../Page/consts'

interface IPlayPause {
    color: string;
    onClick(): void;
    isPlaying: boolean;
}

const pausePath = <path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"></path>;
const playPath = <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>;

export function PlayerControl({color,onClick ,isPlaying}:IPlayPause) {
    return(
        <button type="button" onClick={onClick} className={styles.playPauseBtn} style={{borderColor: isPlaying? colorPLay: colorPause}}>
           <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="64 64 896 896"  fill="currentColor" color={color}>
                {isPlaying? pausePath : playPath}
            </svg>
        </button>
       
    )
}