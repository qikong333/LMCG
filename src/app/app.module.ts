import { ComponentsModule } from './../components/components.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Http, XHRBackend, RequestOptions, ConnectionBackend, HttpModule, JsonpModule } from "@angular/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { KindPage } from '../pages/kind/kind';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { UtilsProvider } from '../providers/utils/utils';
import { NativeServiceProvider } from '../providers/native-service/native-service';
import { AipServiceProvider } from '../providers/aip-service/aip-service';
import { PublicServiceProvider } from '../providers/public-service/public-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage, 
    HomePage,
    KindPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',//所有子页面tabs隐藏
      backButtonText: '',
      iconMode: 'ios',
      mode: 'ios',
      // cache: false,             //禁止应用缓存
      autoFocusassist: false,   //自动聚焦
      scrollAssist: false,      // 禁止智能滚动
      tabsHighlight: false,      //是否在选择该选项卡时显示高亮线。

      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      backButtonIcon: 'backicon'

      // backButtonIcon:'arrow-back'
      // 后面这两是应对手机键盘弹出时会把界面撑上去的问题
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    KindPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    UtilsProvider,
    NativeServiceProvider,
    AipServiceProvider,
    PublicServiceProvider
  ]
})
export class AppModule {}
