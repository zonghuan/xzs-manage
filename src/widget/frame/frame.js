import React from 'react'
import styles from './frame.less'

export default React.createClass({
  render(){
    return (
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div></div>
        </div>
        <div className={styles.left}></div>
        <div className={styles.right}>
          
        </div>
      </div>
    )
  }
})
