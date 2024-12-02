import React from 'react'
import styles from '@/styles/collection.module.css'
import Image from 'next/image'

const CollectionCard = ({card}) => {
	return (
		<div className={`${styles.collectionCard}`}>
			<div className={`${styles.upperPart}`}>
				<Image 
					src={card.img}
					width={208}
					height={192}
					className={`${styles.img}`}
				/>
				<div className={`${styles.cover}`}></div>
				<div className={`${styles.namePart}`}>
					<div className={`${styles.namePartFirst}`}>{card.name}</div>
					<div className={`${styles.namePartSecond}`}>{card.owner}</div>
				</div>
			</div>
			<div className={`${styles.bottomPart}`}>
				<div></div>
			</div>
		</div>
	)
}
export default CollectionCard
