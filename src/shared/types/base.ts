import { ReactNode } from 'react';

export type Empty = undefined | null;

export type Component = {
    children?: ReactNode;
    className?: string;
};
