import { IconedButton } from "../IconedButton/IconedButton";
import { VideoState } from "../Page/interfaces";
import styles from "./Footer.module.css";

interface IFooterProps {
    onToggle:() => void;
    onPlayPause:() => void;
    isPlaying: boolean;
}

export function Footer({onToggle, onPlayPause, isPlaying}:IFooterProps) {
    return (
        <div>
            <IconedButton className={styles.toggleBtn} name="scale" onClick={onToggle}/>
            <IconedButton className={styles.playPauseBtn} name={isPlaying ? 'pause': 'play'} onClick={onPlayPause}/>
        </div>
    )
}