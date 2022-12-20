
      /* 
       * Copyright © Monetizer101 - All Rights Reserved
       * Unauthorized copying of this file, via any medium is strictly prohibited.
       * Proprietary and confidential.       
       * Version: 1.0.0
       * Written by Emilio Venezia <e.venezia@monetizer101.com>, 11/11/2020
       */
      
!function(e,t){for(var r in t)e[r]=t[r]}(this,function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}({6:function(e,t){!function(){if(/baby-products\//.test(document.location.href)&&!document.getElementById("skimWidgetOFF")){document.querySelectorAll("a.product__retailer__btns__btn.__retailer").forEach(function(e){var t=e.getAttribute("href").replace(/\&user_id=\d+/,"");e.closest(".product__retailer").insertAdjacentHTML("afterend",'<div data-type="price-comparison" data-template="oycbvbuxtt" data-config=\'{"market":"usd_en", "limit":6}\' data-url="'+t+'" data-title="Also available at:"></div>')});var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://m.skimresources.com/widget/price-comparison/app.bundle.js",e.onload=function(){new PriceComparison({shopId:1267,excludeImages:!0,externalPartner:11,pub:"104425X1561157"})};var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}()}}));