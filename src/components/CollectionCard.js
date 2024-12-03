import React from 'react'
import styles from '@/styles/collection.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const CollectionCard = ({card}) => {
	const router = useRouter()
	const handleClick = () => {
		router.push('/info')
	}
	return (
		<div className={`${styles.collectionCard}`} onClick={handleClick}>
			<div className={`${styles.upperPart}`}>
				<Image 
					src={card.img}
					width={208}
					height={192}
					alt="#"
					className={`${styles.img}`}
				/>
				<div className={`${styles.cover}`}></div>
				<div className={`${styles.namePart}`}>
					<div className={`${styles.namePartFirst}`}>{card.name}</div>
					<div className={`${styles.namePartSecond}`}>{card.owner}</div>
				</div>
			</div>
			<div className={`${styles.bottomPart}`}>
				<div className={`${styles.row}`}>
					<div>Floor</div>
					<div className={`${styles.coin}`}>
						<div>{card.floor}</div>
						<span><Image src="/near-theme.svg" width={11} height={11} alt="#"/></span>
					</div>
				</div>
				<div className={`${styles.row} ${styles.location}`}>
					<div>Total Volumn</div>
					<div className={`${styles.coin}`}>
						<div>{card.total}</div>
						<span><Image src="/near-theme.svg" width={11} height={11} alt="#"/></span>
					</div>
				</div>
				<div className={`${styles.row} ${styles.location}`}>
					<div>Vol.Change</div>
					<div>---</div>
				</div>
				<div className={`${styles.bottomFooter}`}>
					<div className={`${styles.leftPart}`}>
						<div>{card.items}</div>
						<div className={`${styles.items}`}>Items</div>
					</div>
					<div className={`${styles.ownerPart}`}>
						<div>{card.owners}</div>
						<div className={`${styles.items}`}>Owner</div>
					</div>
					<div className={`${styles.corner}`}>
						<Image src="/more.svg" width={15} height={15} alt="#"/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CollectionCard
