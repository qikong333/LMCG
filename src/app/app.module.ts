import { ComponentsModule } from './../components/components.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



import { MyApp } from './app.component';
import { Http, XHRBackend, RequestOptions, ConnectionBackend, HttpModule, JsonpModule } from "@angular/http";

import { CategrayPage } from '../pages/categray/categray';
import { FoundPage } from '../pages/found/found';
import { MinePage } from '../pages/mine/mine';
import { SearchPage } from '../pages/search/search';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { KindPage } from '../pages/kind/kind';
import { TabsPage } from '../pages/tabs/tabs';


import { SelectStorePage } from '../pages/select-store/select-store';

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
    TabsPage,
    HomePage,
    CategrayPage,
    FoundPage,
    MinePage,
    SearchPage,
    SelectStorePage,
    AboutPage,
    ContactPage, 
    KindPage,
  ],
  imports: [
    HttpModule,
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
    tabsHideOnSubPages: 'true',//������ҳ��tabs����
      backButtonText: '',
      iconMode: 'ios',
      mode: 'ios',
      // cache: false,             //��ֹӦ�û���
      autoFocusassist: false,   //�Զ��۽�
      scrollAssist: false,      // ��ֹ���ܹ���
      tabsHighlight: false,      //�Ƿ���ѡ���ѡ�ʱ��ʾ�����ߡ�

      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      backButtonIcon: 'backicon'
   
    })
  
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    CategrayPage,
    FoundPage,
    MinePage,
    SearchPage,
    SelectStorePage,

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
export class AppModule { }
