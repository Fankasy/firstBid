import Image from 'next/image';

import NearLogo from '/public/near.svg';
import NextLogo from '/public/next.svg';
import styles from '@/styles/app.module.css';
import { Cards } from '@/components/cards';
import Table from '@/components/Table';
import Collection from '@/components/Collection';
import { TableHelper } from '@/components/TableHelper';
import { fakeData, fakeCards } from '@/utils/fakeData';
import { useEffect, useState } from 'react';

export default function Home() {
  const header = [
    "#收藏",
    "底价",
    "体积",
    "音量变化",
    "项目",
    "业主",
  ]
  const fakeD = fakeData()
  const [dataSet, setDataSet] = useState([])
  const [collection, setCollection] = useState({})
  useEffect(() => {
    const tmp = fakeD.map((f) => {
      return TableHelper(f)
    })
    const tmpC = {
      cards: fakeCards(),
      title: "More Feature Collections",
      more: "/"
    }
    setDataSet(tmp)
    setCollection(tmpC)
  }, [])

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.hotTrend}`}>热门收藏</div>
      <Table dataSet={dataSet} headInfo={header} />
      <Collection cards={collection.cards} title={collection.title}/>
    </div>
  );
}