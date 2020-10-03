import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlError'
})
export class ControlErrorPipe implements PipeTransform {

  transform(error: object, controlError: object, show: boolean = false): string {
    if (show)  {
        return this.map(error, controlError);
    }
    return '';
  }

  private map(error: object, controlError: object): string {
    let response = '';
    if (error) {
        Object.keys(error).forEach((key: string) => {
          response = controlError[key];
        });
    }
    return response;
  }

}
