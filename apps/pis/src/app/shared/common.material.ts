
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatMenuModule} from '@angular/material/menu'; 



export const material = [
  CommonModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,  // 拿掉
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule, // 拿掉
    MatSidenavModule,
    MatListModule,
    MatMenuModule
];
