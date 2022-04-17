import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
    ]
})
export class DownloadModule { }
