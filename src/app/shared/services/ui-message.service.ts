import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UIMessageService {
    commanMeesageSubject = new Subject<any>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert message
                    this.clear();
                }
            }
        });

        this.commanMeesageSubject = new BehaviorSubject<any>(null);
    }

    getAlert(): Observable<any> {
        ////console.log("getAlert")
        return this.commanMeesageSubject.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = false;
        this.commanMeesageSubject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterRouteChange = false) {
        //console.log(message);
        this.keepAfterRouteChange = false;
        this.commanMeesageSubject.next({ type: 'error', text: message });
    }

    information(message: string, keepAfterRouteChange = false) {
        //console.log(message);
        this.keepAfterRouteChange = false;
        this.commanMeesageSubject.next({ type: 'information', text: message });
    }

    warning(message: string, keepAfterRouteChange = false) {
        //console.log(message);
        this.keepAfterRouteChange = false;
        this.commanMeesageSubject.next({ type: 'warning', text: message });
    }

    clear() {
        // clear by calling subject.next() without parameters
        this.commanMeesageSubject.next();
    }
}