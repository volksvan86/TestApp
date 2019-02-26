import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemDetailResolver } from './_resolvers/item-detail-resolver';
import { ItemListResolver } from './_resolvers/item-list-resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'items', component: ItemListComponent, resolve: {users: ItemListResolver} },
            { path: 'items/:id', component: ItemDetailComponent, 
                resolve: {user: ItemDetailResolver} },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
