import styles from "@/styles/table.module.css"
import Image from "next/image"

export const TableHelper = (row) => {
	const res = []
	const firstColumn = (
		<div className={`${styles.tdDiv}`}>
			<div className={`${styles.avatar}`}>
				<Image src={row[0].img} alt="#" className={`${styles.img}`} width={20} height={20}/>
			</div>
			{row[0].name}
		</div>
	)
	const secondColumn = (
		<div className={`${styles.tdDiv} ${styles.centerH}`}>
			{row[1].value} <span><Image src="/near-white.svg" className={`${styles.nearCoin}`} width={12} height={12} alt="#"/></span>
		</div>
	)
	const thirdColumn = (
		<div className={`${styles.tdDiv} ${styles.centerH}`}>
			{row[2].value} <span><Image src="/near-white.svg" className={`${styles.nearCoin}`} width={12} height={12} alt="#"/></span>
		</div>
	)
	const fourthColumn = (
		<div className={`${styles.tdDiv} ${row[3].value > 0 ? styles.green : styles.red}  ${styles.centerH}`}>
			{row[3].value.toFixed(1)} %
		</div>
	)
	const fifthColumn = (
		<div className={`${styles.tdDiv}  ${styles.centerH}`}>
			{row[4].project}
		</div>
	)
	const sixthColumn = (
		<div className={`${styles.tdDiv}  ${styles.centerH}`}>
			{row[5].owner}
		</div>
	)
	return [
		firstColumn,
		secondColumn,
		thirdColumn,
		fourthColumn,
		fifthColumn,
		sixthColumn
	]
}   
