import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

import { FlexLayoutModule } from '@angular/flex-layout';
// angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

// partial modules
import { ToolBarModule } from './partials/tool-bar/tool-bar.module';
import { SidenavModule } from './partials/sidenav/sidenav.module';
import { LoadingModule } from './partials/loading/loading.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatInputModule,
    ToolBarModule,
    SidenavModule,
    LoadingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
