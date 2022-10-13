import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModules } from '../../material.modules';
import { CustomTableComponent } from './custom-table.component';
import { FormsModule } from '@angular/forms';
import { CustomTableSort } from './custom-table-sort.component';
@NgModule({
    declarations: [
        CustomTableComponent,
        CustomTableSort
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModules,
        FormsModule
    ],
    exports: [
        CustomTableComponent
    ]
})
export class CustomTableModule { }