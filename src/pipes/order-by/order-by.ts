import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the OrderByPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
 

  static _orderByComparator(a: any, b: any,type:any): number {

    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      //  是不是一个数字如此小写字符串才能正确比较
      if (type=="up") {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
      }else {
        if (a.toLowerCase() < b.toLowerCase()) return 1;
        if (a.toLowerCase() > b.toLowerCase()) return -1;
      }
      
    }
    else {
      //  将字符串解析为数字以进行正确比较
      if (type == "up") {
        if (parseFloat(a) < parseFloat(b)) return -1;
        if (parseFloat(a) > parseFloat(b)) return 1;
      }else{
        if (parseFloat(a) < parseFloat(b)) return 1;
        if (parseFloat(a) > parseFloat(b)) return -1;
      }
      
    }

    return 0; //equal each other  
  }

  transform(input: any, [config = '+'], type): any {
console.log(type);
    if (type == " ") { return input}
    
    if (!Array.isArray(input)) return input;

    if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
      var propertyToCheck: string = !Array.isArray(config) ? config : config[0];
      var desc = propertyToCheck.substr(0, 1) == '-';

      //Basic array  
      if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
        return !desc ? input.sort() : input.sort().reverse();
      }
      else {
        var property: string = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
          ? propertyToCheck.substr(1)
          : propertyToCheck;

        return input.sort(function (a: any, b: any) {
          return !desc ? OrderByPipe._orderByComparator(a[property], b[property],type)
            : -OrderByPipe._orderByComparator(a[property], b[property], type);
        });
      }
    }
    else {
      //Loop over property of the array in order and sort  
      return input.sort(function (a: any, b: any) {
        for (var i: number = 0; i < config.length; i++) {
          var desc = config[i].substr(0, 1) == '-';
          var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
            ? config[i].substr(1)
            : config[i];

          var comparison = !desc ?
            OrderByPipe._orderByComparator(a[property], b[property], type)
            : -OrderByPipe._orderByComparator(a[property], b[property], type);

          //Don't return 0 yet in case of needing to sort by next property  
          if (comparison != 0) return comparison;
        }

        return 0; //equal each other  
      });
    }
  }
  
}

// 使用 < ion - item - group * ngFor="let group of formatContacts | orderBy:['key']" > </ion-item-group>  