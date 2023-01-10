/**
 *
 * BlockUI represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primefaces.org/primereact/blockui)
 *
 * @module blockui
 *
 */
import * as React from 'react';

/**
 * Defines valid properties in BlockUI component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface BlockUIProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Controls the blocked state.
     * @defaultValue false
     */
    blocked?: boolean | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * @todo Write the documentation.
     *
     */
    containerClassName?: string | undefined;
    /**
     * @todo Write the documentation.
     *
     */
    containerStyle?: React.CSSProperties | undefined;
    /**
     * When enabled, the whole document gets blocked.
     * @defaultValue false
     */
    fullScreen?: boolean | undefined;
    /**
     * Template of mask.
     * @defaultValue null
     */
    template?: React.ReactNode | ((props: BlockUIProps) => React.ReactNode) | null | undefined;
    /**
     * Fired when the element gets blocked.
     *
     */
    onBlocked?(): void;
    /**
     * Fired when the element gets unblocked.
     *
     */
    onUnblocked?(): void;
}

/**
 * @group Component
 */
export declare class BlockUI extends React.Component<BlockUIProps, any> {
    public block(): void;
    public unblock(): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
