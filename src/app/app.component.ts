import { NativeServiceProvider } from './../providers/native-service/native-service';
import { ApiServiceProvider } from './../providers/api-service/api-service';
import { Http } from '@angular/http';
import { HttpServiceProvider } from './../providers/http-service/http-service';
import { IsPlarform, AGENT, SERVER_URL } from './../providers/constants/constants';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { PublicServiceProvider } from '../providers/public-service/public-service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  search

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public http: HttpServiceProvider,
    public http2: Http,
    public ps: PublicServiceProvider,
    public api: ApiServiceProvider,
    public native: NativeServiceProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      
      // localStorage.setItem('shopId', '9999001')//商品id
      localStorage.setItem('userAgent', 'IOS')//环境

      this.test();

      this.getshop();

      console.log(localStorage.getItem("shopId"))
    });




  }


  test() {



    //本地调试使用
    localStorage.setItem('latname', '113.746385')
    localStorage.setItem('lngname', '22.987403')

    let loginParam = {
      account: '13794836380',
      password: 'qq123456',
      authcode: '666666', //验证码(选填)
      userAgent: 'Android',//终端类型
    }

    this.http2.get('http://39.108.49.210:8066/user/login', { search: HttpServiceProvider.buildURLSearchParams(loginParam) })
      .map(r => r.json())
      .subscribe(r => {
        console.log(r)
        if (r.code == 200) {

          localStorage.setItem('ifLogin', r.code);
          localStorage.setItem('userCode', r.data.userCode);
          localStorage.setItem('token', r.data.token);
          localStorage.setItem('sex', r.data.userInfo.sex);
          localStorage.setItem('headimgurl', r.data.userInfo.avatarPath);
          localStorage.setItem('birthday', r.data.userInfo.birthday);
          localStorage.setItem('mobileno', r.data.mobileno);

          this.search = "http://appapi.lmchaoshi.com?userToken=" + r.data.token + "&userCode=" + r.data.userCode + "&userAgent=" + AGENT + '&getLng=' + '113.746385' + '&getLat=' + '22.987403' + '&mobileno=' + r.data.mobileno;
          console.log(this.search)



          let userToken = this.search.split('=')[1].split('&')[0];
          let userCode = this.search.split('=')[2].split('&')[0];
          let userAgent = this.search.split('=')[3].split('&')[0];
          let mobileno = this.search.split('=')[6].split('&')[0];
          let param = {
            userCode: userCode,
            userToken: userToken,
            userAgent: userAgent,
            mobile: mobileno
          }
          console.log(param);

          this.http.get('/api/shop/msUser/lmCardLogin', param)
            .map(r => r.json())
            .subscribe(response => {
              console.log(response)
              if (response['resultCode'] == 200) {
                localStorage.setItem('userId', response['data'].passId);
                localStorage.setItem('tokenId', response['data'].tokenId);
                localStorage.setItem('memberId', response['data'].memberId);
                localStorage.setItem('recordStatus', response['data'].recordStatus);
                localStorage.setItem('nickname', response['data'].nickname);
                localStorage.setItem('headimgurl', response['data'].avatarpath);
                localStorage.setItem('ifLogin', '200');
              }
            })
          localStorage.setItem('userToken', userToken);
          localStorage.setItem('userCodes', userCode);
          localStorage.setItem('userAgent', userAgent);
          localStorage.setItem('mobileno', mobileno);

          let getLng = this.search.split('=')[4].split('&')[0];
          let getLat = this.search.split('=')[5].split('&')[0];
          console.log(getLng)
          console.log(getLat)
          // // console.log(window.location.search)
          localStorage.setItem('latname', getLat)
          localStorage.setItem('lngname', getLng)

        }


      });
  }


  //新闻消息
  News() {
    let params = {
      shopId: localStorage.getItem('shopId')
    }
    this.http.get('/api/shop/info/contContent/notice', params)
      .map(r => r.json())
      .subscribe(r => {
        console.log('新闻消息')
        console.log(r)
      })

  }

  getshop() {
    
    this.api.gaode()
      .map(r => r.json())
      .subscribe(r => {
        console.log('------------------定位--------------------');
        console.log(r);
        localStorage.setItem('shopInfo', JSON.stringify(r))
        if (r.status == 1) {
          localStorage.setItem('shopId', r.datas[0].shopid)//商品id
          localStorage.setItem('localshop', JSON.stringify(r.datas[0]))//商品id
        } 

      })
  }



}
