import { GetStaticProps } from 'next';
import { Htag, Ptag, Tag } from '../components/index';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import styles from './styles.module.css';

function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Htag tag='h2'>Вы находитесь на сайте, посвященном курсам</Htag>

      <Ptag
        size='l'
        className={styles.semiTitle}
      >
        Выберите курс в панели слева
      </Ptag>

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
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
