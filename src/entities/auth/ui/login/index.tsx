import { Button, Input } from 'antd';
import React from 'react';

import { UseInputTypes } from 'shared/hooks';
import { Title } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    onLogin: () => void;
    error?: string;
    inputs: {
        login: UseInputTypes.ReturnedType;
        pass: UseInputTypes.ReturnedType;
    };
};

function LoginView(props: Props) {
    const { onLogin, error, inputs } = props;

    return (
        <div className={styles.wrapper}>
            <Input placeholder="Логин" {...inputs.login.attrs} />
            <Title visible={inputs.login.error} textAlign="center" color="red" variant="H3M">
                {inputs.login.errorTitle}
            </Title>
            <Input placeholder="Пароль" {...inputs.pass.attrs} />
            <Title visible={inputs.pass.error} textAlign="center" color="red" variant="H3M">
                {inputs.pass.errorTitle}
            </Title>
            <Title visible={!!error} textAlign="center" color="red" variant="H3M">
                {error}
            </Title>
            <Button type="primary" onClick={onLogin}>
                login
            </Button>
        </div>
    );
}

export default LoginView;
