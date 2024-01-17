import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

import { Login } from 'features/auth';

import AuthPage from './ui';

const authRoutes = (
    <Route path="/auth" element={<AuthPage />}>
        <Route index element={<Login />} />
        <Route index path="login" element={<Login />} />
    </Route>
);

export default authRoutes;
