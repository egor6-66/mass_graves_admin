import { Button } from 'antd';
import React from 'react';

import { TokensService } from 'entities/auth';
import { useRouter, useStorage } from 'shared/hooks';
import { Box } from 'shared/ui';

import styles from './styles.module.scss';

function MainPage() {
    const { navigate } = useRouter();
    const logout = () => {
        TokensService.remove();
        navigate('/auth');
    };

    return (
        <Box className={styles.wrapper}>
            <Button onClick={logout}>dawddawd</Button>
        </Box>
    );
}

export default MainPage;
