import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { PrimengModule } from '../primeng/primeng.module';
import { TableDemoComponent } from './table-demo/table-demo.component';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {OrderListModule} from 'primeng/orderlist';
@NgModule({
  declarations: [PaginatorComponent, TableDemoComponent],
  imports: [
    CommonModule,
    PrimengModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    OrderListModule
  ],
  providers: [ConfirmationService]
})
export class PrimengDemoModule { }
