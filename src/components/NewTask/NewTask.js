import React, { useState } from 'react'

import Modal from '../Modal/Modal'
import styles from './NewTask.module.css'

const NewTask = ({ formhandle, handleInputChange, despHandle }) => {

    const [show, setshow] = useState(false)

    return (
        <div className={`${styles.newTask}`}>
            <button className={`${styles.newTaskbtn}`} onClick={() => setshow(true)}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR4nO2ZzU4UQRDHOyAePPoxXQurD+Bdgg+y0eidVxDXUHUD70LA+AhGPShefAqNPoDIScAAVbPZ9dKmFs0SwcxH9870xPknnWwyu9n/b7qmuqrGmFatWvmr52aT1cHdhKRvUV5ZlC+W5AcQ/9R1+lk+6zX9TkLpkiE3Y+rW/JPBTSB+aon3gMQVWRb5GyCvL1Dardw4PD65YZGfW+RRUeMXgIws8laHTq5XYj4hfmBRDn2NnwMhObDE96fnfNnNAfKL0MbhHAhv638F9d4hd8USv5+2eZiE1Y7+Zxj3y26uSvPwZ6F8uE3usrf/KsIG/r0TW17mO8gP6zIPE4h7pczPrxxfsyj79QPIYakUq3m+bvMwgdgsZF5PR99D6m95htGoQ4NbuQG0PPC9ayEBQBfyej735GbGdUpkAJZ4T4vGTP9aVYaI2+A7QAqRLmYDkPTjBZCVTABL/DpaAJSXmQDaeMQKACSfsnegQKkcSpB/B/ZzAOTP/5UDEA//BwBpdghB4x9iangaTWI+yFAe5QBIl2IFgNX0Tr5ijng3NgCL/DX3NE9L19gAgHjNNLahIR52++mCKSKdCASJ2xAL5Zkpqi4dXY2iqSc5KD031Vll3QCA3Ctl/gzEdo0AG8ZbPTdrkd9Ub57fGXKXwg13kXcqDJu34Ya7Z4e81WSmjWB3/iLprHIa2cmSfPd+YAvOTTf1gPE3zkPN85q2TdXS01HLjjK10+lveK3wCTsVjQvAdFHnNlqza+Ohnd3vF3ijcZeH8lGvaUk8ripjeM3aqpVpvn4BgLeUnnbLE1QAAAAASUVORK5CYII="></img>
            </button>

            <Modal onClose={() => setshow(false)} title={'New Task'} show={show} >
                <div>
                    <form className={`${styles.add_item_form}`} onSubmit={formhandle}>


                        <input
                            className={`${styles.taskFeild} ${styles.form_item} `}
                            type="text"
                            placeholder="Enter task"
                            onChange={handleInputChange}
                        />


                        <input
                            className={`${styles.description_box} ${styles.form_item}`}
                            type='text'
                            placeholder='Enter task description'
                            onChange={despHandle}
                        />
                        <div className={`${styles.addTaskBtnWrapper}`}>
                            <button className={`${styles.addTaskBtn} ${styles.form_item}`} type="submit">
                                Add task
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default NewTask