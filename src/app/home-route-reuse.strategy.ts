import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from '@angular/router';
import { Home } from './pages/home/home';

/** Keep a single Home instance when switching between /, /about, /courses, /contact. */
export class HomeRouteReuseStrategy extends BaseRouteReuseStrategy {
  override shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return (
      future.routeConfig?.component === curr.routeConfig?.component &&
      future.routeConfig?.component === Home
    );
  }
}
