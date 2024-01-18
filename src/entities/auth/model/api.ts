import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { axiosClient } from 'shared/configs';
import { BaseTypes } from 'shared/types';

class AuthApi {
    handleLogin = () => {
        return useMutation<any, BaseTypes.Error, any, any>((data: { login: string; password: string }) => axiosClient.post('auth/login', data));
    };

    handleLogout = () => {
        return useMutation(() => axiosClient.post('auth/logout'));
    };
}

export default new AuthApi();
