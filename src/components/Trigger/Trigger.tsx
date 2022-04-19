import styles from "./Trigger.module.css";
import PlayPause from "../../icons/playpause.svg";

export function Trigger() {
    return (
        <button className={styles.button}>
            <img className={styles.img} src={PlayPause}/>
        </button>
    )
}