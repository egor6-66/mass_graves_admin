import { useStorage } from 'shared/hooks';

type Tokens = {
    access_token: string;
    refresh_token: string;
};

class TokenService {
    checkAuth() {
        const storage = useStorage();
        const access_token = storage.cookiesGet('access_token');
        const refresh_token = storage.cookiesGet('refresh_token');
        return !!(access_token && refresh_token);
    }

    save(tokens: Tokens) {
        const storage = useStorage();
        storage.cookiesSet('access_token', tokens.access_token);
        storage.cookiesSet('refresh_token', tokens.refresh_token);
    }

    get() {
        const storage = useStorage();
        const access_token = storage.cookiesGet('access_token');
        const refresh_token = storage.cookiesGet('refresh_token');
        if (access_token && refresh_token) return { access_token, refresh_token };
    }

    remove() {
        const storage = useStorage();
        storage.cookiesRemove('access_token');
        storage.cookiesRemove('refresh_token');
    }
}

export default new TokenService();
