import React from 'react'
import Image from 'next/image'
import styles from '@/styles/info.module.css'

const InfoPanel = () => {
	return (
		<div className={`${styles.infoMain}`}>
			<div className={`${styles.infoPanel}`}>
				<div className={`${styles.upperPart}`}>
					<div className={`${styles.imagePart}`}>
						<div className={`${styles.watchPart}`}>
							<div className={`${styles.watch}`}> 84
								<span><Image src="/watch.svg" width={15} height={15} alt="#" /></span>
							</div>
						</div>
						<div className={`${styles.wrapper}`}>
							<img src="/images/info.png" alt="#" className={`${styles.img}`} />
							<div className={`${styles.expandCircle}`}>
								<img src="/expand.svg" />
							</div>
							<div className={`${styles.watch} ${styles.ranking}`}>
								排名 13
							</div>
						</div>
					</div>
					<div className={`${styles.rightPart}`}>
						<div className={`${styles.firstRow}`}>
							<div className={`${styles.watch}`}>
								<Image src="/like.svg" width={15} height={15} />
								<span>1</span>
							</div>
							<div className={`${styles.rowRight}`}>
								<div className={`${styles.watch}`}>
									分享
								</div>
								<div className={`${styles.watch} ${styles.location}`}>
									更多
								</div>
							</div>
						</div>
						<div className={`${styles.name}`}>
							Racoonados #61 #1
						</div>
						<div className={`${styles.smallText}`}>
							Edition #1 | 1 of 1
						</div>

						<div className={`${styles.pricePart}`}>
							<div className={`${styles.firstRow}`}>
								<div className={`${styles.price}`}>
									<div className={`${styles.onSale}`}>
										特价中
									</div>
									<div className={`${styles.firstRow}`}>
										<div className={`${styles.priceStart}`}>
											12 <span><Image src="/near-white.svg" width={14} height={14} /></span>
											<span>~</span>
										</div>
										<div className={`${styles.priceEnd}`}>
											$ 88.44
										</div>
									</div>
								</div>
								<div className={`${styles.cartPart}`}>
									<div className={`${styles.watch} ${styles.cartBtn}`}>
										+ <span><Image src="/cart.svg" width={14} height={14} /></span>
									</div>
									<div className={`${styles.buy} ${styles.watch}`}>
										立即购买
									</div>
								</div>
							</div>
						</div>

						<div className={`${styles.call}`}>
							1 主动报价 <span> {`>`}</span>
						</div>
						<div className={`${styles.creator}`}>
							<div className={`${styles.firstRow} ${styles.dashed}`}>
								<div className={`${styles.avatar}`}>
									<Image src="/images/avatar_3.png" width={50} height={50} />
								</div>
								<div className={`${styles.smallName}`}>
									<div className={`${styles.creatorName}`}>造物主</div>
									<div className={`${styles.nearName}`}>connoisseur_dane.near</div>
									<div className={`${styles.verify}`}>Verified Creator</div>
								</div>
							</div>
							<div className={`${styles.firstRow} ${styles.owner}`}>
								<div className={`${styles.avatar}`}>
									<Image src="/images/avatar_6.png" width={50} height={50} />
								</div>
								<div className={`${styles.smallName} ${styles.vFlex}`}>
									<div className={`${styles.creatorName}`}>收藏</div>
									<div className={`${styles.nearName}`}>The Racoonados</div>
								</div>
							</div>
							<div className={`${styles.myDeal}`}>
								提出自己的报价
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.bottomPart}`}>
					<div className={`${styles.firstRow}`}>
						<div className={`${styles.description}`}>
							<div className={`${styles.tokenInfo}`}>
								令牌信息
							</div>
							<div className={`${styles.box}`}>
								<div className={`${styles.boxRow}`}>
									<div>智能合约</div>
									<div>
										x.paras.near
									</div>
								</div>
								<div className={`${styles.boxRow}`}>
									<div>图片链接</div>
									<div className={`${styles.url}`}>https://ipfs.fleek.co/ipfs/bafybeibuwchnaj4di52ywovzo2ebbqcj55qsneoimh5b3zzm6nw6gfg7wm</div>
								</div>
								<div className={`${styles.boxRow}`}>
									<div>锁定费用</div>
									<div>2%</div>
								</div>
								<div className={`${styles.boxRow}`}>
									<div>代币编号</div>
									<div>497347:1</div>
								</div>
							</div>
						</div>
						<div className={styles.description}>
							<div className={`${styles.tokenInfo}`}>描述</div>
							<div className={`${styles.box} ${styles.desBox}`}>
							Step into the world of "The Racoonados" NFT and embrace their rebellious, united, and creatively limitless legacy. Be part of the raccoon revolution in the digital realm by owning a piece of their captivating artwork.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default InfoPanel
