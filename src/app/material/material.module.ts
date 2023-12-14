import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';

const MaterialComponents = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatListModule,
  MatInputModule,
  MatMenuModule,
  MatExpansionModule,
  MatCardModule,
  MatSidenavModule,
  MatTabsModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatTableModule,
  
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
