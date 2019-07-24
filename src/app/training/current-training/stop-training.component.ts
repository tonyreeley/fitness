import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-stop-training',
  // tslint:disable-next-line: max-line-length
  template: '<h1 mat-dialog-title>Are you afraid of the Mason?</h1><div><img src="https://lh3.googleusercontent.com/z0yKYzGqdRvcz2ZiSCp2kR30fYzVBshROZ2ly3CqVzvpbAqVNi97OfDOCYf60sTog_KLMuTKKv86Jyx2-p0fylT1IuXQfnu92x14_JXr52c2OTnmboNgF_VyyfNSaGk8x6VBElKt1d0=s704-no" height="200" width="200"></div><mat-dialog-content><p>He is {{ passedData.progress }}% more awesome than you.</p></mat-dialog-content><mat-dialog-actions><button mat-button [mat-dialog-close]="true">Yes</button><button mat-button [mat-dialog-close]="false">No</button></mat-dialog-actions>'
})

export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
