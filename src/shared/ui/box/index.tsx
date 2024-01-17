import { motion } from 'framer-motion';
import React from 'react';

import * as BoxTypes from './types';

function Box(props: BoxTypes.Props) {
    const { children, className, visible = true, ...divAttrs } = props;

    const animateVariant = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { type: 'tween', duration: 0.2 },
    };

    return visible ? (
        <motion.div {...animateVariant} className={className} {...divAttrs}>
            {children}
        </motion.div>
    ) : null;
}

export default Box;
