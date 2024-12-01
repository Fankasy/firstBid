import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';

import { NearContext } from '@/wallets/near';
import NearLogo from '/public/near-logo.svg';

import styles from '@/styles/nav.module.css'

export const Navigation = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel('Login');
    }
  }, [signedAccountId, wallet]);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navBlack}`}>
      <div className="container-fluid">
        <div className={`${styles.left}`}>
          <Link href="/" passHref legacyBehavior>
              <div className={styles.navText}>FUU Land</div>
          </Link>
          <div>
            <input type="text" className={`${styles.navInput}`}/>
          </div>
        </div>
        <div className="navbar-nav pt-1">
          <button className={`${styles.navBtn}`} onClick={action} > {label} </button>
        </div>
      </div>
    </nav>
  );
};