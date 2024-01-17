import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Title } from 'shared/ui';

import styles from './styles.module.scss';

function AuthPage() {
    return (
        <Box className={styles.wrapper}>
            <Title textAlign="center" variant="H1">
                ADMIN
            </Title>
            <Outlet />
        </Box>
    );
}

export default AuthPage;
