import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-listproduto',
  templateUrl: 'listproduto.html',
})
export class ListprodutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListprodutoPage');
  }

  detalheProduto(){
    this.navCtrl.push('DetalheprodutoPage');
  }

  carrinho(){
    this.navCtrl.push('CarrinhoPage');
  }

}
