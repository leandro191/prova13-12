import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListprodutoPage } from './listproduto';

@NgModule({
  declarations: [
    ListprodutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListprodutoPage),
  ],
})
export class ListprodutoPageModule {}
