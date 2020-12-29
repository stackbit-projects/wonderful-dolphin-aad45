import React from 'react';

import {Link} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <nav>
                    <ul>
                        <li><Link to="#menu">Menu</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
