import React from "react"
import styles from '@/styles/collection.module.css'
import CollectionCard from "./CollectionCard"

const Collection = ({
	cards,
	title,
	more,
}) => {
	return (
		<div className={`${styles.collection}`}>
			<div className={`${styles.title}`}>More Feature Collections</div>
			<div className={`${styles.more}`}>{`More >`}</div>
			<div className={`${styles.panel}`}>
				{cards && cards.map((card, key) => {
					return (
						<CollectionCard card={card}/>
					)
				})}
			</div>
		</div>
	)
}
export default Collection