import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';
import { AppRoutingModule } from './app-routing.module';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KanbanAllModule,
    HttpClientModule,
    TabAllModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
