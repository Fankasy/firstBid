import Image from 'next/image';

import NearLogo from '/public/near.svg';
import NextLogo from '/public/next.svg';
import styles from '@/styles/app.module.css';
import { Cards } from '@/components/cards';
import Table from '@/components/Table';
import { TableHelper } from '@/components/TableHelper';
import { fakeData } from '@/utils/fakeData';
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
  useEffect(() => {
    const tmp = fakeD.map((f) => {
      return TableHelper(f)
    })
    setDataSet(tmp)
  }, [])

  return (
    <div className={`${styles.main}`}>
      <Table dataSet={dataSet} headInfo={header} />
    </div>
  );
}