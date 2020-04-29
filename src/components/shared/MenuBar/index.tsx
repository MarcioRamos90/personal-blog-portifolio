import React from 'react';
import { Content, Title, MenuLinks, Link } from './styled';
import { PropsMenuBar } from './types';

export default function MenuBar(props: PropsMenuBar) {
    return (
        <Content>
            <Title>{props.title}</Title>
            <MenuLinks>
                <Link>Home</Link>
                <Link>Categories</Link>
                <Link>About Me</Link>
            </MenuLinks>
        </Content>
    );
}