'use client'
import { useState, useEffect, useContext } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './header.module.css';

import CartContext from '@/app/contexts/Cart';

import Logo from '@/components/Logo/Logo';
import Hamburger from '@/components/Hamburger/Hamburger';
import DesktopNavbar from '@/components/DesktopNavBar/DesktopNavbar';
import MobileNavBar from '@/components/MobileNavBar/MobileNavBar';
import Search from '@/components/Search/Search';
import Cart from '@/components/Cart/Cart';
import SearchBar from '@/components/SearchBar/SearchBar';

const Header = () => {
  const { toggleSidecart } = useCart();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);

  const openSearch = () => {
    setShowSearch(true);

    console.log('button clicked')
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div className={styles.container}>
      {/* <SearchBar
        isOpen={showSearch}
        handleSelect={handleSearchSelect}
        handleSubmit={handleSearchSubmit}
        handleViewAll={handleSearchViewAll}
        handleFocus={handleSearchFocus}
        getReference={getSearchInputElement}
        handleClose={closeSearch}
        ignore={ignoreElements.current || []}
        queryParameter="q"
        location={location}
        history={history}
      /> */}
      <nav className={styles.header}>
        <div className={styles.mobileMenu}>
          <Hamburger
            active={sidebar}
            onClick={toggleSidebar}
          />
        </div>



        <MobileNavBar
          active={sidebar}
          onLinkClick={toggleSidebar}
        />

        <div className={styles.logoContainer}>
          <Logo width="130px" height="auto" />
        </div>
        <DesktopNavbar />

        <div className={styles.right}>
          {/* <Search
            onClick={() => openSearch()}
          /> */}
          <Cart
            // quantity={cartContext.products.quantity}
            onClick={toggleSidecart}
          />
        </div>
      </nav>
    </div>
  )
}

export default Header;
