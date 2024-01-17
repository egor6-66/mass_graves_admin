import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import authRoutes from './auth';
import mainRoutes from './main';
import { TokensService } from '../entities/auth';

function Routing() {
    const location = useLocation();

    const isAuth = TokensService.checkAuth();

    const guestRoutes = (
        <>
            {authRoutes}
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </>
    );

    const privateRoutes = (
        <>
            {mainRoutes}
            <Route path="*" element={<Navigate to="/main" replace />} />
        </>
    );

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname.split('/')[1]}>
                {isAuth ? privateRoutes : guestRoutes}
            </Routes>
        </AnimatePresence>
    );
}

export default Routing;
