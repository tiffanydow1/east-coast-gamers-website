'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import styles from './mobileNavBar.module.css';
import imgSrc from '../../../images/ecg-logo.webp';

interface MenuItem {
  label: string;
  URL: string;
  category: string;
  categories: Array<string>;
  menu?: SecondaryMenuItem[];
}

interface SecondaryMenuItem {
  label: string;
  URL: string;
  category: string;
}

interface MobileNavBarProps {
  active: boolean;
  onLinkClick: (event: React.MouseEvent<any, MouseEvent>) => void;
}

const NAVIGATION: MenuItem[] = [
  {
    label: 'Apparel',
    URL: '/apparel',
    category: 'apparel',
    categories: [
      'hoodies-and-crewnecks',
      'tees-and-tanks',
      'headwear',
    ],
    menu: [
      {
        label: 'Hoodies and Crewnecks',
        URL: '/apparel/hoodies-and-crewnecks',
        category: 'hoodies-and-crewnecks',
      },
      {
        label: 'Tees + Tanks',
        URL: '/apparel/tees-and-tanks',
        category: 'tees-and-tanks',
      },
      {
        label: 'Headwear',
        URL: '/apparel/headwear',
        category: 'headwear',
      },
    ],
  },
  {
    label: 'Extras',
    URL: '/extras',
    category: 'extras',
    categories: [
      'dicebags-and-trays',
      'bags',
    ],
    menu: [
      {
        label: 'Dice Bags and Trays',
        URL: '/extras/dicebags-and-trays',
        category: 'dicebags-and-trays',
      },
      {
        label: 'Bags',
        URL: '/extras/bags',
        category: 'bags',
      },
    ],
  },
  {
    label: 'Custom',
    URL: '/custom',
    category: 'custom',
    categories: [
      'adventurers-garb',
      '3d-prints'
    ],
    menu: [
      {
        label: 'Adventurers Garb',
        URL: '/custom/adventurers-garb',
        category: 'adventurers-garb',
      },
      {
        label: '3D Prints',
        URL: '/custom/3d-prints',
        category: '3d-prints',
      }
    ],
  },
  {
    label: 'Collections',
    URL: '/collections',
    category: 'collection',
    categories: [
      'classic-vintage',
      'esport-emblem',
    ],
    menu: [
      {
        label: 'Classic Vintage',
        URL: '/collections/classic-vintage',
        category: 'classic-vintage',
      },
      {
        label: 'Esport Emblem',
        URL: '/collections/esport-emblem',
        category: 'esport-emblem'
      },
    ],
  },
];

const MobileNavBar: React.FC<MobileNavBarProps> = ({ active, onLinkClick }) => {
  const [currentMenu, setCurrentMenu] = useState<string>('primary');
  const [activePrimary, setActivePrimary] = useState<string | null>(null);

  return (
    <div className={`${styles.container} ${active ? styles.active : ''}`}>
      <div className={styles.topContainer}>
        <button
          className={`${styles.button} ${currentMenu === 'secondary' ? styles.secondaryActive : ''}`}
          onClick={() => {
            setCurrentMenu('primary')
            setActivePrimary(null);
          }}
        >
          <FaChevronLeft className={styles.backArrow} />
        </button>

        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={imgSrc} className={styles.image} alt="East Coast Gamers logo" />
          </Link>
        </div>

        <button className={styles.closeButton} onClick={(event) => onLinkClick(event)}>
          <FaTimes className={styles.timesIcon} />
        </button>
      </div>

      <div className={styles.primaryMenu}>
        {NAVIGATION.map(primary => (
          <div
            key={primary.URL}
            className={styles.primaryGroup}
          >
            <Link
              href={primary.URL}
              className={currentMenu !== 'primary' ? styles.hide : ''}
              onClick={(event) => {
                if (primary.menu) {
                  event.preventDefault();
                  setActivePrimary(primary.category);
                  setCurrentMenu('secondary');
                } else {
                  onLinkClick(event);
                }
              }}
              >
                <div className={styles.textContainer}>
                  <h3>{primary.label}</h3>

                  {primary.menu && (
                    <FaChevronRight className={styles.rightArrow} />
                  )}
                </div>
            </Link>

            {primary.menu && primary.menu.map(secondary => (
              <div
                key={secondary.URL}
                className={`${styles.secondaryMenu} ${currentMenu === 'secondary' && activePrimary === primary.category ? styles.show : ''}`}
              >
                <div className={styles.secondaryGroup}>
                  <Link
                    key={secondary.URL}
                    href={secondary.URL}
                    onClick={(event) => {
                      onLinkClick(event);
                    }}
                  >
                    <div className={styles.secondaryTextContainer}>
                      <h3>{secondary.label}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileNavBar;
