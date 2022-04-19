import { createMachine } from "xstate";
import { PlayerState } from "./interfaces";

interface IGetPlayerMachine {
    playVideo: () => void;
    pauseVideo: () => void;
}

export function getPlayerMachine({playVideo, pauseVideo}: IGetPlayerMachine) {
    return createMachine(
        {
            id: "player",
            initial: PlayerState.FULL,
            states: {
                [PlayerState.MINI]: {
                    meta: {
                    description: "The mini video"
                    },
                    on: {
                    toggle: PlayerState.FULL
                    }
                },
                [PlayerState.FULL]: {
                    entry: "playVideo",
                    meta: {
                    description: "The full-screen video"
                    },
                    on: {
                    toggle: PlayerState.MINI,
                    }
                }
            }
        },
        {
            actions: {
                playVideo,
                pauseVideo
            }
        }
    );
}