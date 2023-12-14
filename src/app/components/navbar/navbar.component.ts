import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faFacebook,faTwitter,faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}


  linkdinIcon = faLinkedin;
  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;
  emailIcon = faEnvelope;
  whatsappIcon = faWhatsapp;
  searchIcon = faSearch;
  search: string = '';

  searchProduct() {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/search'], { queryParams: { searchItem: this.search } });
    });
  }

}
