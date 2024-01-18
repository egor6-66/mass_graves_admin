import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { axiosClient } from 'shared/configs';
import { BaseTypes } from 'shared/types';

class CitiesApi {
    handleGetCities = () => {
        return useQuery(['get-cities'], () => axiosClient.get('admin/w'));
    };
}

export default new CitiesApi();
