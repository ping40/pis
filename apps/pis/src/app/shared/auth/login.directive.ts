import { Directive, OnDestroy, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { SessionQuery } from './login.query';

@Directive({ 
  selector: '[pisShowIfLoggedIn]' 
})
export class ShowIfLoggedInDirective implements OnDestroy {
  subscription: Subscription;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authQuery: SessionQuery
  ) {
  }

 @Input() set  pisShowIfLoggedIn(condition: boolean) {
    this.subscription = this.authQuery.isLoggedIn$.subscribe(isLoggedIn => {
      this.viewContainer.clear();
      if (isLoggedIn) {
        if (condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      } else {
        if (condition) {
          this.viewContainer.clear();
        } else {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}