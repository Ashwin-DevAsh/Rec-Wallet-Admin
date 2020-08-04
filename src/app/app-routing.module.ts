import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { UserprofileComponent } from './alluser/userprofile/userprofile.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NodesComponent } from './nodes/nodes.component';
import { BlocksComponent } from './blocks/blocks.component';
import { AlluserComponent } from './alluser/alluser.component';
import { AllmerchantsComponent } from './allmerchants/allmerchants.component';
import { AlladminsComponent } from './alladmins/alladmins.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddmerchantsComponent } from './addmerchants/addmerchants.component';
import { AddadminsComponent } from './addadmins/addadmins.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ListusersComponent } from './alluser/listusers/listusers.component';
import { ListmerchantsComponent } from './allmerchants/listmerchants/listmerchants.component';
import { MerchantprofileComponent } from './allmerchants/merchantprofile/merchantprofile.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      { path: 'Overview', component: OverviewComponent },
      { path: 'Transactions', component: TransactionsComponent },
      { path: 'Nodes', component: NodesComponent },
      { path: 'Blocks', component: BlocksComponent },
      {
        path: 'AllUsers',
        component: AlluserComponent,
        children: [
          { path: 'ListUsers', component: ListusersComponent },
          { path: 'UserProfile', component: UserprofileComponent },
          { path: '**', redirectTo: 'ListUsers' },
        ],
      },
      {
        path: 'AllMerchants',
        component: AllmerchantsComponent,
        children: [
          { path: 'ListMerchants', component: ListmerchantsComponent },
          { path: 'MerchantProfile', component: MerchantprofileComponent },
          { path: '**', redirectTo: 'ListMerchants' },
        ],
      },
      { path: 'AllAdmins', component: AlladminsComponent },
      { path: 'AddUsers', component: AdduserComponent },
      { path: 'AddMerchants', component: AddmerchantsComponent },
      { path: 'AddAdmins', component: AddadminsComponent },
      { path: 'MyAccount', component: MyaccountComponent },
      {
        path: '**',
        redirectTo: 'Overview',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'Home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
