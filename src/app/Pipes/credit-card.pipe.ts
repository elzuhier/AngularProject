import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(plainCreditCard: string): string {
    // plainCreditCard متعرف في app.module.ts
      
      //using regex
      return plainCreditCard.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ') ; 
    }

}
