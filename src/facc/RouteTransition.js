import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

const willEnter = () => ({
    opacity: 0,
    translateY: -12
});

const willLeave = () => ({
    opacity: spring(0),
    translateY: -12
});

const getStyles = () => ({
    opacity: spring(1),
    translateY: spring(0)
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