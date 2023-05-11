import React, { useEffect } from 'react';
import EmptyTable from '../../components/Table/EmptyTable';

const Home = () => {
  useEffect(() => {
    console.log('montou')
  }, [])
  return (
    <>
      <h1>Bem-vindo à página inicial</h1>
      <EmptyTable />
    </>
  );
};

export default Home;
