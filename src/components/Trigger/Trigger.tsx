import styles from "./Trigger.module.css";
import PlayPause from "../../icons/playpause.svg";
import background from "../../images/background.png";

export function Trigger({onClick}:{onClick: () => void}) {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            <img className={styles.background} src={background}/>
            <img className={styles.img} src={PlayPause}/>
        </button>
    )
}
