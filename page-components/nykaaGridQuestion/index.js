import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'

function NykaaGridQuestion() {
	const [boxNumber, setBoxNummber] = useState([]);

	const handleClick = (index) => {
		if (boxNumber?.includes(index)) return;

		setBoxNummber(
			[...boxNumber, index]
		)
	}

	useEffect(() => {

		if(boxNumber.length === 9) {

			for(let i=0; i<boxNumber.length; i++){
				let newBox = [...boxNumber];
			
				setInterval(() => {
					newBox.pop();
					setBoxNummber(newBox);
				}, 1000);
			}

		}

	}, [boxNumber]);


  return (
	<div style={{background: '#fff', height: '80vh'}} className={styles.grid}>
		{Array.from({length: 9}).map((_,index) => <div className={`${styles.box} ${boxNumber?.includes(index) ? styles.red : ''}`} onClick={() => handleClick(index)}/>)}
	</div>
  )
}

export default NykaaGridQuestion;