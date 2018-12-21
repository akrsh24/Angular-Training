import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()//make it injectable to other service
export  class PostsService {
    constructor(private httpInstance: HttpClient) {

    }

    getAllPosts() {
        //return JSON DATA
    }
}