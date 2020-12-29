import React from 'react';
import _ from 'lodash';

import Social from './Social';
import Contact from './Contact';
import {htmlToReact, Link} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <section id="footer" className="wrapper split style2">
                <div className="inner">
                    {_.get(this.props, 'pageContext.site.data.social.enabled') && 
                        <Social {...this.props} />
                    }
                    {_.get(this.props, 'pageContext.site.data.footer.enable_contact_section') && 
                        <Contact {...this.props} />
                    }
                </div>
                <div className="copyright">
                    <p>
                        {htmlToReact(_.get(this.props, 'pageContext.site.data.footer.copyright'))}
                        &nbsp;
                        {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                            <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                        </React.Fragment>))}
                    </p>
                </div>
            </section>
        );
    }
}
