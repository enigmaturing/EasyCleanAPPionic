import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {

  // the input property appHasRole will recieve an array of
  // strings with the names of the roles from which the user
  // should at least have one to view the template where this
  // directive is apllied to. We will check that in the
  // ngOnInit() method
  @Input() appHasRole: string[];

  // viewContainerRef puede ser un component o un template,
  // en este caso será un template: el elemento al que le
  // estamos aplicando esta directiva (ver que en nav.component.html)
  // le aplicamos esta directiva al elemento de la lista ordenada
  // presente en el nav que nos lleva al admin panel:
  // <li *appHasRole="['Admin']" class="nav-item" routerLinkActive="active">
  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private authService: AuthService) { }

  ngOnInit() {
    // Check if the has the propper role
    if (this.authService.roleMatch(this.appHasRole)) { // if user has proper role
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else { // if the user does not have the proper role
      this.viewContainerRef.clear();
    }
  }
}
