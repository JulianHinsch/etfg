import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  public searchForm = this.fb.group({
    term: ["", Validators.required]
  });

  constructor(public fb: FormBuilder, public auth: AuthService, public router: Router) { 
    auth.handleAuthentication();
  }

  public handleSearch = (event) => {
    //dummy search
    //this.router.navigateByUrl(`/products/${this.searchForm.controls.term.value}`);
    //real search
    this.router.navigateByUrl(`/search/${this.searchForm.controls.term.value}`);
    this.searchForm.reset();
    //this is a hack, angular should reload page content on route change...
    //location.reload();
  }

  ngOnInit() {}
}
