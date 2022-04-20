import { IconedButton } from "../IconedButton/IconedButton";
import { VideoState } from "../Page/interfaces";
import styles from "./Footer.module.css";

interface IFooterProps {
    onToggle:() => void;
    onPlayPause:() => void;
    videoState?: VideoState;
}

export function Footer({onToggle, onPlayPause}:IFooterProps) {
    return (
        <div>
            <IconedButton className={styles.toggleBtn} name="scale" onClick={onToggle}/>
            <IconedButton className={styles.playPauseBtn} name="playpause" onClick={onPlayPause}/>
        </div>
    )
}