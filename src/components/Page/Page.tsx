import { useState, useCallback } from 'react';
import { Trigger } from '../../components/Trigger/Trigger';
import { Modal } from 'antd';
import { Icon } from '../../components/Icon/Icon';
import styles from './Page.module.css';

export function Page() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, [])
    
    return (
        <div className="app">
            <Trigger onClick={showModal}/>
            <Modal
                visible={isModalVisible}
                okText={<Icon className={styles.img} name="playpause"/>}
                cancelText={<Icon className={styles.img} name="playpause"/>}
            />
        </div>
    );
}