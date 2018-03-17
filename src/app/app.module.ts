import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BootstrapModule } from './bootstrap.module';
import { AppComponent } from './app.component';
// Import routing module
import { AppRoutingModule } from './app.routing';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import { 
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarNavComponent,
  AppSidebarMinimizerComponent,
  AppAsideComponent,
  AppFooterComponent,
  AppBreadcrumbsComponent
} from './components';
const APP_COMPONENTS = [
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarNavComponent,
  AppSidebarMinimizerComponent,
  AppAsideComponent,
  AppFooterComponent,
  AppBreadcrumbsComponent
]

//Import directives
import { 
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES 
} from './directives';
const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]
@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    ...APP_CONTAINERS
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
