import React from 'react';

import { LoginView, TokensService } from 'entities/auth';
import { useInput, useRouter, useYup } from 'shared/hooks';

function Login() {
    const { navigate } = useRouter();
    const yup = useYup();

    const loginInput = useInput({});
    const passwordInput = useInput({
        yupSchema: yup.checkEmail,
        realtimeValidate: true,
    });

    const onLogin = () => {
        // TokensService.save({ access_token: 'a', refresh_token: 'a' });
        // navigate('/main');
    };

    return <LoginView onLogin={onLogin} inputs={{ login: loginInput.attrs, pass: passwordInput.attrs }} />;
}

export default Login;
