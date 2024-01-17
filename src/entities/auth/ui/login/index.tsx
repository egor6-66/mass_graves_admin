import { Button, Input } from 'antd';
import React from 'react';

import { UseInputTypes } from 'shared/hooks';

import styles from './styles.module.scss';

type Props = {
    onLogin: () => void;
    inputs: {
        login: UseInputTypes.Attrs;
        pass: UseInputTypes.Attrs;
    };
};

function LoginView(props: Props) {
    const { onLogin, inputs } = props;

    return (
        <div className={styles.wrapper}>
            <Input placeholder="Логин" {...inputs.login} />
            <Input placeholder="Пароль" {...inputs.pass} />
            <Button type="primary" onClick={onLogin}>
                login
            </Button>
        </div>
    );
}

export default LoginView;
