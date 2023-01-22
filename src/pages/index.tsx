import Head from "next/head";
import styled from "@emotion/styled";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "types/next-page";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
`;

const PageTitle = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
`;

const IndexPage: NextPageWithLayout = () => {
  return (
    <PageContainer>
      <PageTitle>Stylish Next App</PageTitle>
    </PageContainer>
  );
};

IndexPage.getLayout = (page: ReactElement) => (
  <>
    <Head>
      <title>Stylish Next App</title>
    </Head>
    {page}
  </>
);

export default IndexPage;
