import { Button, Htag } from '../components/index';

export default function Home(): JSX.Element {
  return (
    <div>  
      <Htag tag='h2'> Твою ж мать</Htag>
      <Button appeareance='primary'>Кнопке</Button>
      <Button appeareance='ghost'>Еще Кнопке</Button>
    </div>
  );
}
