import { useState, useCallback } from 'react';
import { Trigger } from '../../components/Trigger/Trigger';
import { Modal } from 'antd';
import ReactPlayer from 'react-player'
import styles from './Page.module.css';
import { useMachine } from '@xstate/react';
import { Footer } from '../Footer/Footer';
import { PlayerState } from './interfaces';
import { getPlayerMachine } from './getPlayerMachine';

const videoUrl = "https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8";

export function Page() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPlaying, setPlaying] = useState(false);

    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, []);

    const hideModal = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    const playVideo = useCallback(() => {
        setPlaying(true);
    }, []);

    const pauseVideo = useCallback(() => {
        setPlaying(true);
    }, []);
    const [state, send] = useMachine(getPlayerMachine({playVideo, pauseVideo}));
    
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
                    className={state.value === PlayerState.FULL ? styles.full : styles.mini}
                    onCancel={hideModal}
                    footer={<Footer onToggle={() => send('toggle')} onPlayPause={() => setPlaying(!isPlaying)}/>}
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