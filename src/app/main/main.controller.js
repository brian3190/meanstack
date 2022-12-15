import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '@angualr/platform-browser';
import { Product } from 'app/models/product';
import { Customer } from 'app/models/customer';
import { DataService } from 'app/data.service';


export class MainController {
    // constructor($timeout, webDevTec, toastr) {
    //     'nginject';

    //     this.awesomeThings = [];
    //     this.classAnimation = '';
    //     this.creationDate = 15122019;
    //     this.toastr = toastr;

    //     this.activate($timeout, webDevTec);
    // }

    constructor() {
        'ngInject';
    }

    postMessage() {
        console.log("post");
    }

    // activate($timeout, webDevTec) {
    //     this.getWebDevTec(webDevTec);
    //     $timeout(() => {
    //         this.classAnimation = 'rubberBand';
    //     }, 4000);
    // }

    // getWebDevTec(webDevTec) {
    //     this.awesomeThings = webDevTec.getTec();

    //     angular.forEach(this.awesomeThings, (awesomeThing) => {
    //         awesomeThing.rank = Math.random();
    //     });
    // }

    // showToastr() {
    //     this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //     this.classAnimation = '';
    // }
}