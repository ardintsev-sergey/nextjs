import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, Input, Ptag, Rating, Tag, Textarea } from '../components/index';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import styles from './styles.module.css';

function Home({ menu }: HomeProps): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);
  useEffect(() => {
    console.log(count + ' счетчик');
      
    return () => {
      console.log('Unmount');      
    };
  });
  
  // return <Error statusCode={404}></Error>;

  return (
    <div className={styles.wrapper}>  
      <Htag tag='h2'>Вы находитесь на сайте, посвященном курсам</Htag>
      
      <Ptag size='l' className={styles.semiTitle}>Выберите курс в панели слева</Ptag>
                     
      <div className={styles.tags}>
        <Ptag size='s'>Powered by</Ptag>
        <Tag color='green'>React.js</Tag>
        <Tag color='red'>Next.js</Tag>
        <Tag color='primary'>TypeScript</Tag>
        <Tag color='gray'>CSS Grid</Tag>
      </div>  
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}