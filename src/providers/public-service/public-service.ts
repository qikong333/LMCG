import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// declare var AMap;
/*
  Generated class for the PublicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublicServiceProvider {
 
 


  constructor(public http: HttpClient) {
    console.log('Hello PublicServiceProvider Provider');
  }

/**
 * @name 计算当前时间到最后
 */
 nowTimeSelect(){
   let getHours = new Date().getHours();
   let getMinutes = new Date().getMinutes();
   let openingTime = { from: 8, to: 24 }
   let simpleColumns = [ ];
   for (let hour =  getHours + 1 < openingTime.from ? openingTime.from :  getHours + 1; hour < openingTime.to; hour++) {
    simpleColumns.push(  hour + ':00' + '-' + (hour + 1) + ':00'  )
   }
   return  simpleColumns
 }



  // gaode() {
  //   let latname = localStorage.getItem('latname')
  //   let lngname = localStorage.getItem('lngname')

  //   //加载CloudDataSearch服务插件 云数据检索服务
  //   AMap.service(["AMap.CloudDataSearch"], () => {

  //     let searchOptions = {
  //       query: { keywords: '东莞六沐便利店' },
  //       clickable: true,
  //       keywords: '', //关键字
  //       orderBy: '_distance:ASC' //排序规则
  //     };
  //     let search = new AMap.CloudDataSearch('58e44e9aafdf520ea822b318', searchOptions);
  //     //  检索范围
  //     let latlng = [latname, lngname];
  //     console.log(latlng);

  //     search.searchNearBy(latlng, 1000000, (status, result) => {
  //       if (result) {
  //         // localStorage.setItem('_distance', result.datas[0]._distance)
  //         console.log('---------------高德地图 距离----------------');
  //         console.log(result)
  //         // localStorage.setItem('Distanceretrieval', JSON.stringify(result.datas));
  //       }
  //     });


  //     search.searchByDistrict('东莞市', (status, result) => {
  //       // search.searchByDistrict('广州市', (status, result) => {
  //       console.log('---------------高德地图 商店列表----------------');
  //       console.log(result)
  //       if (result.datas) {
  //         localStorage.setItem('shopInfo', JSON.stringify(result.datas))
  //       }  
        

  //     });

  //   });

  //   // //加载逆地理编码加载逆地理编码
  //   // AMap.service(["AMap.Geocoder"], () => {
  //   //   let geocoder = new AMap.Geocoder({
  //   //     radius: 1000,
  //   //     extensions: "all"
  //   //   });
  //   //   geocoder.getAddress([latname, lngname], (status, result) => {
  //   //     if (status === 'complete' && result.info === 'OK') {
  //   //       console.log("???????????????????????????");
          
  //   //       console.log(result.regeocode.formattedAddress)
  //   //       localStorage.setItem('formattedAddress', result.regeocode.formattedAddress)
  //   //     }
  //   //   });
  //   // });
  // }





}


 