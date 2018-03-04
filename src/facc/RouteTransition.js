import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

const willEnter = () => ({
    opacity: 0,
    scale: 0.5
});

const willLeave = () => ({
    opacity: spring(0),
    scale: spring(1.02)
});

const getStyles = () => ({
    opacity: spring(1),
    scale: spring(1)
});

const RouteTransition = ({ children: child, pathname }) => (
    <TransitionMotion
        styles={[{
            key: pathname,
            style: getStyles(),
            data: { child }
        }]}
        willEnter={willEnter}
    >
        {(interpolated) =>
            <div>
                {interpolated.map(({ key, style, data }) =>
                    data.child({ key, style, data })
                )}
            </div>
        }
    </TransitionMotion>
);

var styles = {
    wrapper: {
        position: 'absolute',
        width: '100%'
    }
};

export default RouteTransition;