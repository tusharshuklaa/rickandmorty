import React from 'react'
import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const __Dark_Theme_Key = '__dark';
export const __Dark_Theme_Name = 'theme_dark';

const Header = () => {
  React.useEffect(() => {
    const lsItem = localStorage.getItem(__Dark_Theme_Key);
    console.log('ls val: ', lsItem);
    const isDark = localStorage.getItem(__Dark_Theme_Key) === 'true'
    console.log('is dark', isDark);
    const existingClasses = document.documentElement.className;

    if(isDark) {
      const newClasses = (existingClasses.trim() + ' ' + __Dark_Theme_Name).trim()
      document.documentElement.className = newClasses
    }
  })

  const [isDark, setDark] = React.useState(false);

  const addClass = (src: string, val: string): string => {
    const _src = src.length ? (src.trim()) + ' ' : '';
    return _src + val;
  };

  const removeClass = (src: string, val: string): string => {
    return src.length ? src.replace(new RegExp(__Dark_Theme_Name, 'gi'), '') : '';
  }

  const themeToggle = ():void => {
    const existingClasses = document.documentElement.className;
    const isDarkTheme = existingClasses.indexOf(__Dark_Theme_Name) > -1;
    localStorage.setItem(__Dark_Theme_Key, JSON.stringify(!isDarkTheme))
    setDark(!isDarkTheme);

    document.documentElement.className = isDarkTheme ?
      removeClass(existingClasses, __Dark_Theme_Name) :
      addClass(existingClasses, __Dark_Theme_Name)
  }

  const toggleIcon = isDark ? 'toggle-on' : 'toggle-off';

  return (
    <header className={styles.header}>
      <div>Rick <span>And</span> Morty</div>
      <div className={styles.icons}>
        <FontAwesomeIcon className={styles.icon} onClick={themeToggle} icon='search' role='button' />
        <FontAwesomeIcon className={styles.icon} onClick={themeToggle} icon={toggleIcon} role='button' />
      </div>
    </header>
  )
}

export default Header;
