import React, { useEffect, useState } from 'react'

import styles from './Tasks.module.css'
import Modal from '../Modal/Modal';

const Tasks = ({ tasks, CheckboxHandle, setForcetorerender, Forcetorerender, deleteTask }) => {

    const [taskmodal, setaskmodal] = useState(false)


    const [modalData, setmodalData] = useState()


    return (
        <div>
            {
                tasks.length === 0 ?
                    <h1>Add some Tasks</h1> :
                    tasks.map((item, index) => (
                        <div className='task_wrapper'>
                            <div class={`${styles.task}`}>
                                <div>
                                    <input
                                        className="CheckBox"
                                        key={index}
                                        type="checkbox"
                                        onChange={(e) => {
                                            CheckboxHandle(e);
                                            tasks[index].isChecked = !tasks[index].isChecked;
                                            setForcetorerender(!Forcetorerender);
                                        }}
                                    />

                                    <span>
                                        {tasks[index].isChecked == false ? (
                                            item.value
                                        ) : tasks[index].isChecked == true ? (
                                            <del>{item.value}</del>
                                        ) : null}
                                    </span>
                                </div>
                                <span
                                    className={`${styles.seemorebtn}`}
                                    onClick={() => {
                                        setaskmodal(true)
                                        console.log(item)
                                        setmodalData(item)
                                    }}
                                >
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nGNgGAWjYBQMT+DNwMDwhIGB4TEDA4MnBeI4AUjhfyh+RIH4wFngCdUEUuxBgfgoGAWjYNgAAIMDJKaeed9aAAAAAElFTkSuQmCC"></img>
                                </span>
                            </div>
                        </div>
                    ))}



            <Modal
                show={taskmodal}
                title={`Task: ${modalData?.value}`}
                onClose={() => setaskmodal(false)}
            >

                <p>
                    Description: {modalData?.task_descripition}<br />
                </p>

            </Modal>

        </div>
    )
}

export default Tasks