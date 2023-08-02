import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
.p-speeddial {
    position: absolute;
    display: flex;
    z-index: 1;
}

.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear 0.2s;
    pointer-events: none;
}

.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}

.p-speeddial-action {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    text-decoration: none;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}

.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    will-change: transform;
}

.p-speeddial-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-speeddial-opened .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-opened .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}

.p-speeddial-opened .p-speeddial-rotate {
    transform: rotate(45deg);
}

/* Direction */
.p-speeddial-direction-up {
    align-items: center;
    flex-direction: column-reverse;
}

.p-speeddial-direction-up .p-speeddial-list {
    flex-direction: column-reverse;
}

.p-speeddial-direction-down {
    align-items: center;
    flex-direction: column;
}

.p-speeddial-direction-down .p-speeddial-list {
    flex-direction: column;
}

.p-speeddial-direction-left {
    justify-content: center;
    flex-direction: row-reverse;
}

.p-speeddial-direction-left .p-speeddial-list {
    flex-direction: row-reverse;
}

.p-speeddial-direction-right {
    justify-content: center;
    flex-direction: row;
}

.p-speeddial-direction-right .p-speeddial-list {
    flex-direction: row;
}
`;

const classes = {
    root: ({ props, visible }) => classNames(
        `p-speeddial p-component p-speeddial-${props.type}`,
        {
            [`p-speeddial-direction-${props.direction}`]: props.type !== 'circle',
            'p-speeddial-opened': visible,
            'p-disabled': props.disabled
        }
    ),
    button: ({ props }) => classNames(
        'p-speeddial-button p-button-rounded',
        {
            'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
        },
    ),
    mask: ({visible}) => classNames(
        'p-speeddial-mask',
        {
            'p-speeddial-mask-visible': visible
        },
    ),
    action: ({ disabled }) => classNames('p-speeddial-action', { 'p-disabled': disabled }),
    actionIcon: ({ _icon }) =>  classNames('p-speeddial-action-icon', _icon),
    list: 'p-speeddial-list',
    menuitem: 'p-speeddial-item'

};

const inlineStyles = {
    menuitem: ({ index, getItemStyle }) => getItemStyle(index)
}

export const SpeedDialBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'SpeedDial',
        id: null,
        model: null,
        visible: false,
        style: null,
        className: null,
        direction: 'up',
        transitionDelay: 30,
        type: 'linear',
        radius: 0,
        mask: false,
        disabled: false,
        hideOnClickOutside: true,
        buttonStyle: null,
        buttonClassName: null,
        buttonTemplate: null,
        'aria-label': null,
        maskStyle: null,
        maskClassName: null,
        showIcon: null,
        hideIcon: null,
        rotateAnimation: true,
        onVisibleChange: null,
        onClick: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
