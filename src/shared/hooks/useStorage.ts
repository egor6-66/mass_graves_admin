import Cookies from 'universal-cookie';

const ls = window.localStorage;
const cookies = new Cookies(null, { path: '/' });
export type ValuesInStorage = 'access_token' | 'refresh_token' | 'theme';

function useStorage() {
    const lsSet = (name: ValuesInStorage, value: any) => {
        ls.setItem(name, typeof value === 'string' ? value : JSON.stringify(value));
    };

    const lsGet = <T = any>(name: ValuesInStorage): T | null => {
        const valueInLs = ls.getItem(name);
        if (!valueInLs) return null;
        if (valueInLs[0] === '{' && valueInLs[valueInLs.length - 1] === '}') return JSON.parse(valueInLs);
        return valueInLs as T;
    };

    const lsRemove = (name: ValuesInStorage) => {
        ls.removeItem(name);
    };

    const cookiesSet = (name: ValuesInStorage, value: any) => {
        cookies.set(name, typeof value === 'string' ? value : JSON.stringify(value));
    };

    const cookiesGet = <T = any>(name: ValuesInStorage): T | null => {
        const valueInLs = cookies.get(name);
        if (!valueInLs) return null;
        if (valueInLs[0] === '{' && valueInLs[valueInLs.length - 1] === '}') return JSON.parse(valueInLs);
        return valueInLs as T;
    };

    const cookiesRemove = (name: ValuesInStorage) => {
        cookies.remove(name);
    };

    return { lsSet, lsGet, lsRemove, cookiesSet, cookiesGet, cookiesRemove };
}

export default useStorage;
