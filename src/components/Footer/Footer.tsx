import { IconedButton } from "../IconedButton/IconedButton";
import styles from "./Footer.module.css";
import {PlayerControl} from './PlayerControl';

interface IFooterProps {
    onToggle:() => void;
    onPlayPause:() => void;
    isPlaying: boolean;
    color: string;
}

export function Footer({onToggle, onPlayPause, isPlaying, color}:IFooterProps) {
    return (
        <div>
            <IconedButton className={styles.toggleBtn} name="scale" onClick={onToggle}/>
            <PlayerControl onClick={onPlayPause} isPlaying={isPlaying} color={color}/>
        </div>
    )
}