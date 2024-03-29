import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TransactionListComponent} from './transactions/components/transaction-list/transaction-list.component';
import {DataNodeService} from './services/data-node.service';
import {Web3Service} from './services/web3.service';
import {ItemStringDataComponent} from './transactions/components/transaction-list-item/item-data/string/item-string-data.component';
import {ItemBlobDataComponent} from './transactions/components/transaction-list-item/item-data/download/item-blob-data.component';
import {TransactionListItem} from './transactions/components/transaction-list-item/transaction-list-item.component';
import {FileDropModule} from 'ngx-file-drop';
import {ItemImageDataComponent} from './transactions/components/transaction-list-item/item-data/image/item-image-data.component';
import {MessageInputComponent} from './upload/components/message-input/message-input.component';
import {UploadCostInfoComponent} from './upload/components/upload-cost-info/upload-cost-info.component';
import {TransactionCostInfoComponent} from './upload/components/transaction-cost-info/transaction-cost-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FileInputComponent} from './upload/components/file-input/file-input.component';
import {UploadButtonComponent} from './upload/components/upload-button/upload-button.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {NoEthBrowserComponent} from './no-eth-browser/no-eth-browser.component';
import {UploadInputGroupComponent} from './upload/components/upload-input-group/upload-input-group.component';
import {ContractAddressConfigComponent} from './contract-address-config/contract-address-config.component';
import {HeaderComponent} from './header/header.component';
import {MetaInformationsComponent} from './upload/components/meta-informations/meta-informations.component';
import {SidenavAndContainerComponent} from './sidenav-and-container/sidenav-and-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    ItemStringDataComponent,
    ItemImageDataComponent,
    ItemBlobDataComponent,
    TransactionListItem,
    MessageInputComponent,
    UploadCostInfoComponent,
    TransactionCostInfoComponent,
    FileInputComponent,
    UploadButtonComponent,
    NoEthBrowserComponent,
    UploadInputGroupComponent,
    ContractAddressConfigComponent,
    HeaderComponent,
    MetaInformationsComponent,
    SidenavAndContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileDropModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule
  ],
  providers: [
    DataNodeService,
    Web3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
