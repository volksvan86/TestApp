import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemDetailResolver } from './_resolvers/item-detail-resolver';
import { ItemListResolver } from './_resolvers/item-list-resolver';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemEditResolver } from './_resolvers/item-edit-resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';

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
            { path: 'item/edit', component: ItemEditComponent,
                resolve: {user: ItemEditResolver}, canDeactivate: [PreventUnsavedChanges] },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
