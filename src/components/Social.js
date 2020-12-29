import React from 'react';
import _ from 'lodash';

import {markdownify, Link} from '../utils';

export default class Social extends React.Component {
    render() {
        return (
            <section>
                <header>
                    <h3>{_.get(this.props, 'pageContext.site.data.social.title')}</h3>
                </header>
                {markdownify(_.get(this.props, 'pageContext.site.data.social.social_content'))}
                <ul className="icons">
                    {_.map(_.get(this.props, 'pageContext.site.data.social.social_links'), (link, link_idx) => (
                        <li key={link_idx}><Link to={_.get(link, 'link_url')} className={'icon ' + _.get(link, 'icon')}><span className="label">{_.get(link, 'title')}</span></Link></li>
                    ))}
                </ul>
            </section>
        );
    }
}
