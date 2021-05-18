import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
// @ts-ignore
import { Observable } from 'rxjs/Observable';
import {BlogComponent} from '../content/blog/blog.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}


@Injectable({
  providedIn: 'root'
})
export class BlogGuardService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }

  // tslint:disable-next-line:max-line-length
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-ignore
    return undefined;
  }
}
