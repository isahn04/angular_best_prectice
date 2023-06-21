import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

const allComponents = [LoaderComponent];

@NgModule({
  declarations: [...allComponents],
  imports: [
    CommonModule,
  ],
  exports:[...allComponents]
})
export class SharedModule { }
