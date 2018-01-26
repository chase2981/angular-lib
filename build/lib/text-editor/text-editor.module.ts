import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextEditorDirective } from './text-editor.directive';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    TextEditorDirective,
  ],
  exports: [
    FormsModule,
    TextEditorDirective,
  ],
  providers: [

  ]
})
export class TextEditorModule { }
