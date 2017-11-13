import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'analyze', loadChildren: './analyze-page/analyze-page.module#AnalyzePageModule' },
            { path: 'contacts', loadChildren: './contacts/contacts-page.module#ContactsPageModule' },
            { path: 'inside-monitoring', loadChildren: './presentations/inside-monitoring/inside-monitoring-page.module#InsideMonitoringPageModule'},
            { path: 'perspectives', loadChildren: './presentations/perspective/perspective-page.module#PerspectivePageModule'},
            { path: 'improvements', loadChildren: './presentations/improvements/improvements-page.module#ImprovementsPageModule'},
            { path: 'strategy', loadChildren: './presentations/strategy/strategy-page.module#StrategyPageModule'},
            { path: 'results', loadChildren: './presentations/results/results-page.module#ResultsPageModule'},
            { path: 'trustability', loadChildren: './presentations/trustability/trustability-page.module#TrustabilityPageModule'},
            { path: 'preparations', loadChildren: './presentations/preparations/preparations-page.module#PreparationsPageModule'},
            { path: 'models', loadChildren: './presentations/models/models-page.module#ModelsPageModule'},
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
