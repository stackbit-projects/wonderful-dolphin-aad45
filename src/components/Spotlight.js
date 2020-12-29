import React from 'react';
import _ from 'lodash';

import {markdownify, getPages, safePrefix, Link, classNames} from '../utils';

export default class Spotlight extends React.Component {
    render() {
        return (
            <section className="wrapper style1 special">
                <div className="inner">
                    <header>
                        <h2>{_.get(this.props, 'section.title')}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </header>
                    {_.map(_.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc'), (post, post_idx) => (
                        <section key={post_idx} className="spotlight">
                            <span className="image"><img src={safePrefix(_.get(post, 'frontmatter.img_path'))} alt="" /></span>
                            <div className="content">
                                <header>
                                    <h3>{_.get(post, 'frontmatter.title')}</h3>
                                </header>
                                {markdownify(_.get(post, 'frontmatter.excerpt'))}
                                <footer>
                                    <ul className="actions">
                                        <li><Link to={safePrefix(_.get(post, 'url'))} className="button">{_.get(post, 'frontmatter.post_button_label')}</Link></li>
                                    </ul>
                                </footer>
                            </div>
                        </section>
                    ))}
                    {markdownify(_.get(this.props, 'section.content'))}
                    {_.get(this.props, 'section.actions') && 
                        <footer>
                            <ul className="actions special">
                                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                    <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                                ))}
                            </ul>
                        </footer>
                    }
                </div>
            </section>
        );
    }
}
