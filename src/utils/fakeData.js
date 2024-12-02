const fakeNames = [
	"Near Tinker Union",
	"Npunks",
	"DeltaDisk",
	"Good Fortune Felines (NEKO)",
	"Antisocial Ape Club",
	"SILVERPUNKS",
	"APe Near Club",
	"nearvidia.sharddog.near",
	"Mutants",
	"Little Dream"
]
export const fakeData = () => {
	const res = []
	for (let i = 0; i < 10; i++) {
		res.push([
			{
				img: `/images/avatar_${i + 1}.png`,
				name: fakeNames[i]
			},
			{
				value: Math.floor(Math.random() * 100),
			},
			{
				value: Math.floor(Math.random() * 100),
			},
			{
				value: -100 + 200 * Math.random(),
			},
			{
				project: Math.floor(Math.random() * 100),
			},
			{
				owner: Math.floor(Math.random() * 100),
			}
		])
	}
	return res
}
export const fakeCards = () => {
	return [
		{
			img: "/images/img_1.png",
			name: "Rogues Genesis",
			owner: "ogues-genesis.nfts.fewandfar.near",
			floor: 4,
			total: 207.7,
			items: 1109,
			owners: 232,
		},
		{
			img: "/images/img_2.png",
			name: "The Racoonados",
			owner: "connoisseur_dane.near",
			floor: 0.05,
			total: 24.4,
			items: 123,
			owners: 77,
		}, {
			img: "/images/img_3.png",
			name: "Tiny Cube Gang",
			owner: "goner.near",
			floor: 0.5,
			total: 386.29,
			items: 242,
			owners: 99,
		}, {
			img: "/images/img_4.png",
			name: "Koby the Martian Cat Club",
			owner: "ninelives.near",
			floor: 0.6,
			total: 548.83,
			items: 330,
			owners: 19,
		}, {
			img: "/images/img_5.png",
			name: "LionCat",
			owner: "pixxypic.near",
			floor: 0.25,
			total: 49.08,
			items: 562,
			owners: 224,
		},
		{
			img: "/images/img_6.png",
			name: "nft.pumpopoly.near",
			owner: "nft.pumpopoly.near",
			floor: 4,
			total: 189,
			items: 319,
			owners: 51,
		},
	]
}