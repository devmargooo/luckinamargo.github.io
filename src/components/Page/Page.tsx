import { useState, useCallback } from 'react';
import { Trigger } from '../../components/Trigger/Trigger';
import { Modal } from 'antd';
import { Icon } from '../../components/Icon/Icon';
import ReactPlayer from 'react-player'
import styles from './Page.module.css';
import { createMachine } from "xstate";
import { useMachine } from '@xstate/react';

const videoUrl = "https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8";
enum PlayerState {
    FULL = "FULL",
    MINI = "MINI"
}

export function Page() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPlaying, setPlaying] = useState(false);

    const machine = createMachine(
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
              exit: "pauseVideo",
              meta: {
                description: "The full-screen video"
              },
              on: {
                toggle: PlayerState.MINI,
                "key.escape": PlayerState.MINI,
                "video.ended": PlayerState.MINI
              }
            }
          }
        },
        {
          actions: {
            playVideo: () => {
              setPlaying(true);
            },
            pauseVideo: () => {
                setPlaying(false);
            }
          }
        }
    );

    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, []);
    const [state, send] = useMachine(machine);

    
    return (
        <div className="app">
            <Trigger onClick={showModal}/>
            {
                // @ts-ignore
                // Падает с ошибкой отсутствующей декларации для пропса children
                // Для драггера починили, а для модалки, видимо, нет :( 
                // https://github.com/ant-design/ant-design/issues/18207
                <Modal
                    visible={isModalVisible}
                    okText={<Icon className={styles.img} name="playpause"/>}
                    cancelText={<Icon className={styles.img} name="playpause"/>}
                    className={styles.full}
                >
                    <ReactPlayer
                        url={videoUrl}
                        playing={isPlaying}
                        loop
                    />
                </Modal>
            }
        </div>
    );
}