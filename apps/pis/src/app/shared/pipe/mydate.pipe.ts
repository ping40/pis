import { Pipe, PipeTransform } from "@angular/core";
import { sprintf } from 'sprintf-js';

@Pipe({
  name: "mydate"
})
export class MydatePipe implements PipeTransform {
  transform(value: number): string {
    const y = value / 10000;
    const m = (value % 10000) / 100;
    const d = value % 100;
    return sprintf("%d/%02d/%02d", y, m, d);
  }
}
