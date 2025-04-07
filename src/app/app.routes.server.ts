import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'login-component', renderMode: RenderMode.Prerender },
  { path: 'signup-component', renderMode: RenderMode.Prerender },
  { path: 'employee-component', renderMode: RenderMode.Server },
  { path: 'add-employee', renderMode: RenderMode.Server },
  { path: 'edit-employee/:id', renderMode: RenderMode.Server },
  { path: 'view-employee/:id', renderMode: RenderMode.Server },
  { path: 'delete-employee/:id', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Client }
];
