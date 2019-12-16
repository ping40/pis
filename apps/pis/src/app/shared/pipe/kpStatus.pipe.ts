import { Pipe, PipeTransform } from "@angular/core";
import { KPStatus } from '@pis/api-interfaces';

@Pipe({
  name: "kpstatus"
})
export class KpStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
       case KPStatus.Done: {
         return 'Done';
       }  

       case KPStatus.PARTIAL_DONE: {
         return 'PARTIAL_DONE';
       }

       case KPStatus.NO_DONE: {
         return 'NO_DONE';
       }      
    }

    return "UNKOWN_STATUS"
  }
}
