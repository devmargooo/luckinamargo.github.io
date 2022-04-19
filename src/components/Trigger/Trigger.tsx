import styles from "./Trigger.module.css";
import PlayPause from "../../icons/playpause.svg";

export function Trigger({onClick}:{onClick: () => void}) {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            <img className={styles.img} src={PlayPause}/>
        </button>
    )
}