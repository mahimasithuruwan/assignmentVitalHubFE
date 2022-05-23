import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { MessageService, SharedModule, TreeDragDropService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ChipsModule } from 'primeng/chips';
import { SkeletonModule } from 'primeng/skeleton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { EditorModule } from 'primeng/editor';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule, InputMaskModule as PInputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { TreeModule } from 'primeng/tree';
// import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
// import { ImageCropperModule } from 'ngx-image-cropper';

import { PasswordModule } from 'primeng/password';

import { MegaMenuModule } from 'primeng/megamenu';
import { ListOrderComponent, OrderService } from './orders';
import { EnvService } from './env.service';
import { EnumAsStringPipe } from './shared/pipes';

// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent,
    ListOrderComponent,
    EnumAsStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    DividerModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    CardModule,
    TabViewModule,
    ToastModule,
    MessagesModule,SharedModule,
    MessageModule,
    ConfirmDialogModule,
    RadioButtonModule,
    CalendarModule,
    InputNumberModule,
    CheckboxModule,
    ColorPickerModule,
    MultiSelectModule,
    SplitterModule,
    ScrollPanelModule,
    BadgeModule,
    SelectButtonModule,
    DialogModule,
    AutoCompleteModule,
    NgxSpinnerModule,
    InputTextareaModule,
    PInputMaskModule,
    InputMaskModule,
    DialogModule,
    ListboxModule,
    OverlayPanelModule,
    ContextMenuModule,
    ChipsModule,
    SkeletonModule,
    AutoCompleteModule,
    FieldsetModule,
    PanelModule,
    DataViewModule,
    TagModule,
    FileUploadModule,
    NgxSpinnerModule,
    EditorModule,
    SelectButtonModule,
    NgxMaterialTimepickerModule,
    TreeModule,
    PasswordModule,
    MegaMenuModule,
  ],  
  exports: [
    ListOrderComponent,
    EnumAsStringPipe,
  ],
  providers: [SharedService,OrderService,EnvService,ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
