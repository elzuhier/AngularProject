import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalIDBirthReturn'
})
export class NationalIDBirthReturnPipe implements PipeTransform {

  
  transform(value:any):any {
    /*The slice() method returns a shallow copy of a portion of an array 
    into a new array object selected from start to end (end not included) 
    where start and end represent the index of items in that array. 
    The original array will not be modified.*/ 

    if(value.slice(1,3)<20)
      return value.slice(3,5)+"/"+value.slice(5,7)+"/20"+value.slice(1,3);
    else
    return value.slice(5,7)+"/"+value.slice(3,5)+"/19"+value.slice(1,3);
      
  }

}
