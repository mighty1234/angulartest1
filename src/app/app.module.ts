import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './hover.directive';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { AgmCoreModule } from '@agm/core';
import {EventComponent} from './event/event.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventlistComponent} from './side-nav/eventlist/eventlist.component';
import {routing} from './route.module';
import {HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    EventComponent,
    HoverDirective,
    SearchPipe,
    SideNavComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    [BrowserAnimationsModule],
    [MatButtonModule, MatCheckboxModule],
    HttpClientModule,
    // google maps
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }

