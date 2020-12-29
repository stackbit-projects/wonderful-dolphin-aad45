import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link, classNames} from '../utils';

export default class Intro extends React.Component {
    render() {
        return (
            <section id="intro" className="wrapper featured style1">
                <div className="inner">
                    <span className="image"><img src={safePrefix(_.get(this.props, 'section.img_path'))} alt="" /></span>
                    <div className="content">
                        <header>
                            <h1>{_.get(this.props, 'section.title')}</h1>
                            {markdownify(_.get(this.props, 'section.content'))}
                        </header>
                        {_.get(this.props, 'section.actions') && 
                            <footer>
                                <ul className="actions">
                                    {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                        <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', 'big', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                                    ))}
                                </ul>
                            </footer>
                        }
                    </div>
                </div>
            </section>
        );
    }
}
