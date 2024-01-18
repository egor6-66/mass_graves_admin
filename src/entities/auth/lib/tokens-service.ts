import { useStorage } from 'shared/hooks';

type Tokens = {
    accessToken: string;
    refreshToken: string;
};

class TokenService {
    checkAuth() {
        const storage = useStorage();
        const access_token = storage.cookiesGet('accessToken');
        const refresh_token = storage.cookiesGet('refreshToken');
        return !!(access_token && refresh_token);
    }

    save(tokens: Tokens) {
        const storage = useStorage();
        storage.cookiesSet('accessToken', tokens.accessToken);
        storage.cookiesSet('refreshToken', tokens.refreshToken);
    }

    get() {
        const storage = useStorage();
        const access_token = storage.cookiesGet('accessToken');
        const refresh_token = storage.cookiesGet('refreshToken');
        if (access_token && refresh_token) return { access_token, refresh_token };
    }

    remove() {
        const storage = useStorage();
        storage.cookiesRemove('accessToken');
        storage.cookiesRemove('refreshToken');
    }
}

export default new TokenService();
