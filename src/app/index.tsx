import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routing from 'pages';

import './index.scss';
import { useTheme } from '../shared/hooks';

const queryClient = new QueryClient();

function App() {
    useTheme();

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routing />
                <ReactQueryDevtools position="bottom-left" />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
