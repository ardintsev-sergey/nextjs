import React, { useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './search.svg';
import Router, { useRouter } from 'next/router';

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const goToSearch = () => {
    router.push({
      pathname: 'search',
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };
  
  return (
    <form className={cn(className, styles.search)} {...props} role='search'>
      <Input 
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appeareance='primary'
        className={cn(className, styles.btn)}  
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <SearchIcon />
      </Button>       
    </form>
  );
};
