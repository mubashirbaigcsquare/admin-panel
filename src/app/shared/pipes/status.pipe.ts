import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
    transformedValue = ''
  
    transform(value: any, type: any) {
        switch(type) {
            case 2 : {
                this.terminalsStatusConversion(value)
                break
            }
            case 3 : {
                this.monitoringStatusConversion(value)
                break
            }
        }
        return this.transformedValue
    }

    terminalsStatusConversion(value:any) {
        switch(value) {
            case '0': {
                this.transformedValue = 'In-Active'
                break
            }
            case '1': {
                this.transformedValue = 'Active'
                break
            }
        }
    }

    monitoringStatusConversion(value:any) {
        switch(value) {
            case '0': {
                this.transformedValue = 'Active'
                break
            }
            case '1': {
                this.transformedValue = 'Warning'
                break
            }
            case '2': {
                this.transformedValue = 'Critical'
                break
            }
        }
    }

}