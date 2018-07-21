import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Additional System Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Custom Modules
import { MaterialModule } from './app.material.module';

// Components
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxMenuComponent } from './box-menu/box-menu.component';
import { IndexComponent } from './index/index.component';

// Directives

// Services

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    BoxMenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
