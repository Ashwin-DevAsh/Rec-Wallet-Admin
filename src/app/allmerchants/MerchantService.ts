import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../login/LoginService';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  constructor(private loginService: LoginService) {}

  allMerchants = [];
  allMerchantsTemp: Array<any> = [];
  merchants = [];
  pageIndex = 0;
  selectedMerchant = JSON.parse(localStorage.getItem('selectedUser'));

  colors = [
    '#8bc34a',
    '#f9a825',
    '#00b0ff',
    '#ff1744',
    '#512da8',
    '#00acc1',
    '#1a237e',
    '#5d4037',
    '#880e4f',
  ];

  async getMerchants() {
    var response;
    try {
      response = await axios.get(this.loginService.url + 'getMerchants', {
        headers: { token: this.loginService.token },
      });

      this.allMerchants = response.data;
      this.allMerchantsTemp = response.data;
      console.log(this.allMerchants);
    } catch (e) {
      response = { data: { err: e } };
      this.allMerchants = [];
    }
    console.log(response);
  }

  filter(query: String) {
    this.pageIndex = 0;
    this.allMerchants = [];
    for (var i = 0; i < this.allMerchantsTemp.length; i++) {
      if (
        this.allMerchantsTemp[i].name
          .toLowerCase()
          .includes(query.toLowerCase())
      ) {
        console.log(this.allMerchantsTemp[i]);
        this.allMerchants.push(this.allMerchantsTemp[i]);
      }
    }
  }

  convertToURL(id: String): String {
    return `https://rec-wallet-profile-pictures.s3.us-east-2.amazonaws.com/${id}.jpg`;
  }

  getNext(isMove = false): Array<any> {
    if (isMove) this.pageIndex += 1;
    this.merchants = [];
    for (
      var i = 0 + this.pageIndex * 20;
      i < (this.pageIndex + 1) * 20 && i < this.allMerchants.length;
      i++
    ) {
      this.merchants.push({ ...this.allMerchants[i], index: i + 1 });
      console.log(this.allMerchants[i]);
    }
    return this.merchants;
  }

  getPrev(): Array<any> {
    this.pageIndex -= 1;
    this.merchants = [];
    for (
      var i = 0 + this.pageIndex * 20;
      i < (this.pageIndex + 1) * 20 && i < this.allMerchants.length;
      i++
    ) {
      this.merchants.push({ ...this.allMerchants[i], index: i + 1 });
    }
    return this.merchants;
  }
}
