import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../http-service/http-service';
import { SERVER_URL } from '../constants/constants';


@Injectable()
export class AipServiceProvider {

  constructor(public http: HttpServiceProvider) {
    console.log('Hello AipServiceProvider Provider');
  }

  public SHOPID;


  /*********************home.ts**************************** */

  /**
* @name  
*/

  notice(shopId) {
    let param = {
      shopId: shopId,
    }
    return this.http.get('/api/shop/info/contContent/notice', param)
  }


  couponActivityListByPassId(tokenId, page = 1, size = 10, userAgent) {
    let param = {
      tokenId: tokenId,
      page: page,
      size: size,
      userAgent: userAgent
    }
    return this.http.get('/api/shop/couponActivity/couponActivityListByPassId', param)
  }

  couponActivityList(page = 1, size = 10) {
    let param = {
      page: page,
      size: size,
    }
    return this.http.get('api/shop/couponActivity/couponActivityList', param)
  }

  distributeCondition(shopId) {
    let param = {
      shopId: shopId
    }
    return this.http.get('/api/shop/info/contContent/distribute-condition', param)
  }

  list(code) {
    let param = {
      code: code,
    }
    return this.http.get('/api/shop/shopcar/odShopcarDetail/list' + this.SHOPID, param)
  }


  product(tokenId, userAgent) {
    let param = {
      tokenid: tokenId,
      userAgent: userAgent
    }
    return this.http.get('/api/shop/home/product/' + this.SHOPID, param)
  }

  shpocarinfo(tokenId, userAgent) {
    let param = {
      tokenid: tokenId,
      userAgent: userAgent
    }
    return this.http.get('/api/shop/shopcar/odShopcarDetail/shpocarinfo/' + this.SHOPID, param)
  }

  odShopcarDetaillist(page = 0, size = 6, tokenid, userAgent) {
    let param = {
      page: page, 
      size: size, 
      tokenid: tokenid, 
      userAgent:userAgent 
    }
    return this.http.get('/api/shop/shopcar/odShopcarDetail/list', param)
  }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }



  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

}
