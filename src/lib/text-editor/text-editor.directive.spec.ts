/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AfterViewInit, Component, ViewChild, DebugElement } from '@angular/core';

import { TextEditorModule } from './text-editor.module';
import { TextEditorDirective } from './text-editor.directive';

describe('Directive: TextEditorDirective', () => {
  let component: MockWrapperComponent;
  let debugElem: DebugElement;
  let directive: TextEditorDirective;
  let fixture: ComponentFixture<MockWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockWrapperComponent
      ],
      imports: [
        TextEditorModule
      ],
      providers: [

      ]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MockWrapperComponent);
    component = fixture.componentInstance;
    debugElem = fixture.debugElement;
    //fixture.detectChanges();
  });

  beforeEach(() => {
    /* latest way to access directive that you are testing--works in our tests only */
    //directive = debugElem.query(By.directive(TextEditorDirective)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create TextEditorDirective', () => {
    expect(component.directive).toBeTruthy();
  });
});

@Component({
  template: `<div #div rdTextEditor [elem]="div" [options]="textEditorOptionsMock"></div>`
})
export class MockWrapperComponent implements AfterViewInit {
  /* alternate way you could access directive
     @ViewChild()--works in tests and in production */
  /* you would access it this way via component.directive */
  /* not available until afterViewInit() */
  @ViewChild(TextEditorDirective) directive: TextEditorDirective;

  /* toolbar configurator: plugins/ckeditor/samples/toolbarconfigurator/index.html */
  textEditorOptionsMock: CKEDITOR.config = {
    toolbarGroups: [
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'forms', groups: ['forms'] },
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'colors', groups: ['colors'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
      { name: 'links', groups: ['links'] },
      { name: 'insert', groups: ['insert'] },
      { name: 'styles', groups: ['styles'] },
      { name: 'editing', groups: ['find', 'selection', 'editing'] },
      { name: 'tools', groups: ['tools'] },
      { name: 'others', groups: ['others'] },
      { name: 'about', groups: ['about'] }
    ],

    disableNativeSpellChecker: false,
    removePlugins: 'contextmenu,liststyle,tabletools',

    removeButtons: 'Source,Save,Templates,Cut,Find,SelectAll,Form,Outdent,Blockquote,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Youtube,Format,Font,FontSize,Maximize,ShowBlocks,About,Indent,CreateDiv,BidiLtr,BidiRtl,Language,Copy,Paste,PasteText,PasteFromWord,Print,Preview,NewPage,Replace,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Superscript,Subscript,Strike,RemoveFormat,JustifyBlock,JustifyRight,JustifyCenter,JustifyLeft,Styles',
  };

  constructor() { }

  ngAfterViewInit() {
    /* directive should be defined after this point */
  }
}
