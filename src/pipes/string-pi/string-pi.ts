import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the StringPiPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'stringPi',
})
export class StringPiPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, args?: any) {
    args = args || 10;
    //方法一
    // if(value){ //value不为空
    //   return value.length>10?value.substr(0,args)+'...':value;
    // }
    //   return null;

    //方法二
    return value && value.length > 10 ? value.substr(0, args) + '...' : value;

 
  }
}
// 用法 < td > {{ info ?.attraction | stringPi : 10 }}</td>  没有指定数字的话默认截取10个