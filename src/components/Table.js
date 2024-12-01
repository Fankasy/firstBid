import React from 'react'
import styles from '@/styles/table.module.css'
const Table = ({ dataSet, headInfo }) => {
	const buildTable = () => {
		if (!dataSet || dataSet.length === 0) {
			return
		}
		let row = dataSet.length
		let column = dataSet[0].length
		return (
			<table className={`${styles.autoTable}`}>
				<thead>
					<tr>
						{headInfo.map((hi, key) => {
							return (
								<th key={key}><div className={`${key != 0 ?styles.thC: ""}`}>{hi}</div></th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{dataSet.map((data, key) => {
						return (
							<tr key={key}>
								{data.map((d, index) => {
									return <td key={index} className={`${styles[`tdBy${index + 1}`]}`}>{d}</td>
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		)

	}
	return (
		<div style={{width: '100%'}}>{buildTable()}</div>
	)
}
export default Table