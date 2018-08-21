import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';
import {SyntheticEvent} from "react";

interface MenuProps {
    id?: string;
    model?: MenuItem[];
    popup?: boolean;
    style?: object;
    className?: string;
    autoZIndex?: boolean;
    bazeZIndex?: number;
    onShow?(e: Event): void;
    onHide?(e: Event): void;
}

export class Menu extends React.Component<MenuProps ,any> {
    public toggle(event:SyntheticEvent):void;
}
