import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../app/pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'telefonia',
    loadComponent: () => import('./pages/telefonia/telefonia.page').then( m => m.TelefoniaPage)
  },
  {
    path: 'detalle-producto',
    loadComponent: () => import('./pages/detalle-producto/detalle-producto.page').then( m => m.DetalleProductoPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito/carrito.page').then( m => m.CarritoPage)
  },
  {
    path: 'audifonos-bt',
    loadComponent: () => import('./pages/audifonos-bt/audifonos-bt.page').then( m => m.AudifonosBtPage)
  },
  {
    path: 'manos-libres',
    loadComponent: () => import('./pages/manos-libres/manos-libres.page').then( m => m.ManosLibresPage)
  },
  {
    path: 'cargadores',
    loadComponent: () => import('./pages/cargadores/cargadores.page').then( m => m.CargadoresPage)
  },
  {
    path: 'bocinas',
    loadComponent: () => import('./pages/bocinas/bocinas.page').then( m => m.BocinasPage)
  },
  {
    path: 'smart-watch',
    loadComponent: () => import('./pages/smart-watch/smart-watch.page').then( m => m.SmartWatchPage)
  },
  {
    path: 'hogar',
    loadComponent: () => import('./pages/hogar/hogar.page').then( m => m.HogarPage)
  },
  {
    path: 'cables',
    loadComponent: () => import('./pages/cables/cables.page').then( m => m.CablesPage)
  },
  {
    path: 'plug-in',
    loadComponent: () => import('./pages/plug-in/plug-in.page').then( m => m.PlugInPage)
  },
  {
    path: 'power-bank',
    loadComponent: () => import('./pages/power-bank/power-bank.page').then( m => m.PowerBankPage)
  },
  {
    path: 'belleza',
    loadComponent: () => import('./pages/belleza/belleza.page').then( m => m.BellezaPage)
  },
  {
    path: 'ver-detalle/:idmkt_productos/:categoria',
    loadComponent: () => import('./pages/ver-detalle/ver-detalle.page').then( m => m.VerDetallePage)
  },
  {
    path: 'respaldo-pay-pal',
    loadComponent: () => import('./pages/respaldo-pay-pal/respaldo-pay-pal.page').then( m => m.RespaldoPayPalPage)
  },
  {
    path: 'envio',
    loadComponent: () => import('./pages/envio/envio.page').then( m => m.EnvioPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'recupera-cuenta',
    loadComponent: () => import('./pages/recupera-cuenta/recupera-cuenta.page').then( m => m.RecuperaCuentaPage)
  },
  {
    path: 'sims',
    loadComponent: () => import('./pages/sims/sims.page').then( m => m.SimsPage)
  },
  {
    path: 'mis-pedidos',
    loadComponent: () => import('./pages/mis-pedidos/mis-pedidos.page').then( m => m.MisPedidosPage)
  },
];
