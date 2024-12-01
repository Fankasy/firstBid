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
				img: `/images/avatar_${i+1}.png`,
				name: fakeNames[i]
			},
			{
				value: Math.floor(Math.random() * 100),
			},
			{
				value: Math.floor(Math.random() * 100),
			},
			{
				value: -100 +  200 * Math.random(),
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