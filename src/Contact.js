import React, { Component } from 'react';
import {Footer, FooterDropDownSection, FooterLinkList, FooterSection} from 'react-mdl';


class Contact extends Component {
  render() {
    return(
        <Footer size="mega" style={{color: 'white', backgroundColor:'#48b1bf'}}>
    <FooterSection type="middle">
        <FooterDropDownSection title="U N I Q ">
            <FooterLinkList>
                <a>info@uniq.edu.pe</a>
                <a>084-282728</a>
                <a>El Arenal S/N-Quillabamba</a>
                <a>Directorio Electrónico</a>
                <a>Correo Institucional</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Enlaces">
            <FooterLinkList>
                <a href="#">Ministerio de educación</a>
                <a href="#">Concitec</a>
                <a href="#">DINA</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Enlaces">
        <FooterLinkList>
        <div className="social-links">

            {/* LinkedIn */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Youtube */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>
        </div>
        </FooterLinkList>
    </FooterDropDownSection>
    </FooterSection>
</Footer>
    );
  }
}
export default Contact;