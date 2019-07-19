import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatCheckboxModule
    } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule

    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule
    ]
})

export class MaterialModule {}
