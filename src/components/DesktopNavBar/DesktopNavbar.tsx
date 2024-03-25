'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from './desktopNavbar.module.css';

const NAVIGATION = [
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

interface PrimaryMenuItem {
  URL: string;
  label: string;
  menu?: SecondaryMenuItem[];
}

interface SecondaryMenuItem {
  URL: string;
  label: string;
}

const DesktopNavbar: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState<string>('primary');
  const [accordianActive, setAccordianActive] = useState<{ [key: string]: boolean }>({});
  const [activePrimary, setActivePrimary] = useState<string | null>(null);

  const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {};

  return (
    <div className={styles.nav}>
      <div className={styles.primaryMenu}>
        {NAVIGATION.map((primary: PrimaryMenuItem) => (
          <div key={primary.URL} className={styles.primaryGroup}>
            <div className={styles.menuItem}>
              <Link
                key={primary.URL}
                href={primary.URL}
              >
                <div className={styles.textWrapper}>
                  <p className={styles.menuItemText}>{primary.label}</p>
                </div>
              </Link>
            </div>

            {primary.menu && (
              <div className={styles.secondaryMenu}>
                {primary.menu.map((secondary: SecondaryMenuItem) => (
                  <div
                    key={secondary.URL}
                    className={styles.secondaryGroup}
                  >
                    <div className={styles.secondaryMenuItems}>
                      <Link
                        key={secondary.URL}
                        href={secondary.URL}
                        >
                          <div className={styles.textWrapper}>
                            <p className={styles.secondaryMenuItemText}>{secondary.label}</p>
                          </div>
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
};

export default DesktopNavbar;
