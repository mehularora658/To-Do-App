import React from 'react'

import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <>
            <div className={`${styles.navBar}`} style={{ boxShadow: '0 2px 2px -2px rgba(0,0,0,.2)' }}>
                <div className='logo'>
                    <h1>
                        Task<span className={`${styles.todo}`}>Swift</span>
                    </h1>
                </div>
                <div className={`${styles.gitHubBtn}`}>
                    <a href='https://github.com/mehularora658' target='_blank'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVR4nO2Vz0tqQRTHrwkpCS4SoqwkMreuTRFFwZ2iYq7dtNBSF3fryv+iwlJ0JQiKRC6E/gI3rWyVC3eC4lXLn53HuVB0uzNXr73HW7x34KDOzPl+nDNz5jAMw8BfcuY/GEhZMBgMEI/HoVarQbPZhOFwyDt+x7HLy0s4PDz8fane39+Hq6srmM/nsMwWiwUUi0U4Ojr6Gdjv98NgMAC5xnEc+Hy+9cDJZJLfwbqGsYlEQh7Y7/f/CPoVLrFzRjBwcHAgSq/FYgGz2QyZTEYShPO4zmq1CtKu1+uXg0niKpVKkA2HwwE7OzugVCr5T6fTyY9/rFGr1YL4m5sbaTCWDOn2npycyHpkTCaTIB41MZNUMNYpyWw2myyw3W4XaVxcXNDBDw8PooBSqbTWk1qpVAQ69/f3dPDz87MIfHp6uhb4+66bzSYdjDdQ6mLJcY1GI9DhOI4Oxrf3u2m12rXAOp1OoDMajejgl5cXEdjr9a4FDgaDAp1Wq0UH4wX4bo1Gg69LOdCtrS14enoS6FSrVTqYZVkgWb1ep70+Isd6fXx8FGmwLEsHYz+dTqdE+OvrK9ze3sLZ2RkcHx8LRPB3OByGbDYLb29voljU3Nvbo4PR8/n8Z0AkEoFyuSz6Ax6PRxDjcrlgPB4DzXK5HCk74sbf7Xb5gE6nA9vb21AoFHjhXq8HqVSKmOJ0Ok2E9vt90m6B2BZDodBnWzw/P1/pbI1GowiKGoFAgBbDECdisRi8v79Du90Gt9u99GZvbGyIoNFoVCqGoU5iE8f0fjWp9R+GRyWxU1gKRscyur6+htlsthQ8mUzg7u4Odnd3VzkeZqUzRDFsm5ubm8R5hUKxcq0zcsB/wJl/C/wLF41zxmZbg/4AAAAASUVORK5CYII=" />
                        mehularora658
                    </a>
                </div>


            </div >
        </>
    )
}

export default NavBar