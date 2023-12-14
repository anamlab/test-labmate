import { Component } from '@angular/core';
import { faLinkedin, faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  linkdinIcon = faLinkedin;
  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;
  emailIcon = faEnvelope;
  
}
