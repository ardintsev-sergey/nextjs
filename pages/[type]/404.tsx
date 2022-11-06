import { Button, Htag } from '../../components';
import React from 'react';
import { withLayout } from '../../layout/Layout';

export function Error404(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Ошибка 404</Htag>
      <Button appeareance='primary'>
        <a href='/nextjs/'>Перейти на главную?</a>
      </Button>
    </>
  );
}

export default withLayout(Error404);
