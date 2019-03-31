import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './admin/produtos/produtos/produtos.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'painel', component: AdminComponent },
  { path: 'admin/produtos', component: ProdutosComponent },
  { path: 'auth', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
