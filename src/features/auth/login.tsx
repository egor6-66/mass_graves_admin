import React from 'react';

import { LoginView, TokensService, AuthApi } from 'entities/auth';
import { useInput, useRouter, useStorage, useYup } from 'shared/hooks';

function Login() {
    const { navigate } = useRouter();
    const yup = useYup();

    const { mutate: handleLogin, error } = AuthApi.handleLogin();

    const loginInput = useInput({ yupSchema: yup.required });
    const passwordInput = useInput({ yupSchema: yup.required });

    const onLogin = async () => {
        const login = await loginInput.asyncValidate();
        const password = await passwordInput.asyncValidate();
        if (!login.error && !password.error) {
            handleLogin(
                { login: login.value, password: password.value },
                {
                    onSuccess: (res) => {
                        TokensService.save(res.data.data);
                        navigate('/main');
                    },
                }
            );
        }
    };

    return <LoginView onLogin={onLogin} inputs={{ login: loginInput, pass: passwordInput }} error={error?.message} />;
}

export default Login;
