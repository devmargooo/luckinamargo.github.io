import { IconedButton } from "../IconedButton/IconedButton";
import styles from "./Footer.module.css";

interface IFooterProps {
    onToggle:() => void;
    onPlayPause:() => void;
    videoState?: 'play' | 'pause';
}

export function Footer({onToggle, onPlayPause}:IFooterProps) {
    return (
        <div>
            <IconedButton className={styles.toggleBtn} name="playpause" onClick={onToggle}/>
            <IconedButton className={styles.playPauseBtn} name="playpause" onClick={onPlayPause}/>
        </div>
    )
}