import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DropdownModule} from 'primeng/dropdown';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {InputMaskModule} from 'primeng/inputmask';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {GrowlModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {DialogModule} from 'primeng/dialog';
import {AccordionModule} from 'primeng/accordion';

import {ConfirmationService} from 'primeng/api';

const primeNg = [
  SidebarModule,
  ToolbarModule,
  PanelMenuModule,
  ButtonModule,
  AutoCompleteModule,
  CalendarModule,
  CheckboxModule,
  ChipsModule,
  ColorPickerModule,
  DropdownModule,
  KeyFilterModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  ListboxModule,
  InputMaskModule,
  MultiSelectModule,
  PasswordModule,
  RadioButtonModule,
  TableModule,
  ToastModule,
  GrowlModule,
  CardModule,
  PanelModule,
  TooltipModule,
  ConfirmDialogModule,
  MessagesModule,
  DialogModule,
  AccordionModule
];

@NgModule({
  declarations: [],
  imports: [primeNg],
  exports: [primeNg],
  providers: [ConfirmationService]
})
export class PrimengModule { }
