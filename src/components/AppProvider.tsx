import React from 'react';
import { Global } from '@emotion/react';

import styles from 'styles';

const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    <Global styles={styles} />
    {children}
  </>
);

export default AppProvider;
