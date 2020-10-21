import { moduleMetadata } from '@storybook/angular';

import { AppComponent } from '../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';

export default {
  title: 'AppComponent',
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [    BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxFileDropModule],
    }),
  ],
};

export const Basic = () => ({
  component: AppComponent,
  template: `<app-root></app-root>`,
  props: {
  },
});
