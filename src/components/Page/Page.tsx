import { useState, useCallback } from 'react';
import { Trigger } from '../../components/Trigger/Trigger';
import { Modal } from 'antd';
import { Icon } from '../../components/Icon/Icon';
import ReactPlayer from 'react-player'
import styles from './Page.module.css';

const videoUrl = "https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8";

export function Page() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, [])
    
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
                >
                    <ReactPlayer url={videoUrl} />
                </Modal>
            }
        </div>
    );
}