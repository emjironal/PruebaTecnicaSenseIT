import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

//Components
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ProducttableComponent } from './producttable/producttable.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientinfoComponent,
    ClientlistComponent,
    ClientdetailComponent,
    OrderdetailComponent,
    ProducttableComponent
  ], //end declarations
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Http
    HttpClientModule,
    //GUI
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ], //end imports
  providers: [],
  bootstrap: [AppComponent],
}) //end HgModule
export class AppModule { }
