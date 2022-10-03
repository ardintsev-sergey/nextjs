import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, Input, Ptag, Rating, Tag, Textarea } from '../components/index';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);
  useEffect(() => {
    console.log(count + ' счетчик');
      
    return () => {
      console.log('Unmount');      
    };
  });
  

  return (
    <>  
      <Htag tag='h2'> {count}</Htag>
      <Button appeareance='primary' arrow='right' onClick={() => setCount(x => x + 1 )}>Кнопке</Button>
      <Button appeareance='ghost' arrow='right' onClick={() => setCount(x => x - 1 )}>Еще Кнопке</Button>
      <Ptag size='s'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</Ptag>
      <Ptag>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Ptag>
      <Ptag size='l'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</Ptag>
      <Tag size='s' color='ghost'>Ghost</Tag>
      <Tag color='green'>green</Tag>
      <Tag color='red'>red</Tag>
      <Tag color='primary'>primary</Tag>
      <Tag size='s' color='gray'>Ggrayt</Tag>
      <Tag color='ghost'>Ghost</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='текст'/>
      <Textarea placeholder='textarea'/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
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