import React from 'react';

import { RankingTable } from '../components/ranking-table/RankingTable';
import { Header } from '../layout/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Work Rank"
          description="This is a work rank about every countries information all over the world."
        />
      }
    >
      <>
        <Header />
        <RankingTable />
      </>
    </Main>
  );
};

export default Index;
