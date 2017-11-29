import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StatusPipe } from './status.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [StatusPipe],
    exports: [StatusPipe]
})
export class PipeModule { }