"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7840],{970:(v,x,l)=>{l.d(x,{c:()=>o});var e=l(1571),n=l(7699),u=l(4633);let o=(()=>{class f{constructor(m){this.router=m,this.url="https://wa.me/message/4SJ5QOKAXRHSC1",this.urlinsta="https://instagram.com/cellularplanet_app?igshid=OGQ5ZDc2ODk2ZA==",this.urlface="https://www.facebook.com/cellularplanetmexico",this.urllocal="https://www.google.com.mx/maps/place/CELLULAR+PLANET/@19.4275382,-99.1446357,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff0e39dc976d:0x65dcfcbb5dee5582!8m2!3d19.4275332!4d-99.1420608!16s%2Fg%2F11ghpn3z5r?entry=ttu"}ngOnInit(){}whats(){window.open(this.url,"_blank")}insta(){window.open(this.urlinsta,"_blank")}face(){window.open(this.urlface,"_blank")}local(){window.open(this.urllocal,"_blank")}}return f.\u0275fac=function(m){return new(m||f)(e.Y36(n.F0))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-footer"]],decls:34,vars:0,consts:[[1,"negro"],["fixed",""],["size","5"],["color","light"],["color","light",3,"click"],["color","light","slot","start","name","logo-whatsapp"],["color","light","slot","start","name","logo-facebook"],["color","light","slot","start","name","logo-instagram"],["color","light","slot","start","name","location"],["size","7"],["href","https://images-celullarplanet-marketplace.s3.amazonaws.com/legales/aviso_de_privacidad.pdf","target","\u201d_blank\u201d"],["href","https://images-celullarplanet-marketplace.s3.amazonaws.com/legales/CONDICIONES+GENERALES+DE+VENTA.pdf","target","\u201d_blank\u201d"],["href","https://images-celullarplanet-marketplace.s3.amazonaws.com/legales/TERMINOS+Y+CONDICIONES+CELLULAR+PLANET.pdf","target","\u201d_blank\u201d"]],template:function(m,b){1&m&&(e.TgZ(0,"ion-footer")(1,"ion-toolbar",0)(2,"ion-grid",1)(3,"ion-row")(4,"ion-col",2)(5,"ion-label",3),e._uU(6,"CONTACTO:"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"ion-label",4),e.NdJ("click",function(){return b.whats()}),e._UZ(9,"ion-icon",5),e._uU(10," 5541054696 "),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"ion-label",4),e.NdJ("click",function(){return b.face()}),e._UZ(13,"ion-icon",6),e._uU(14," cellular planet "),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"ion-label",4),e.NdJ("click",function(){return b.insta()}),e._UZ(17,"ion-icon",7),e._uU(18," cellular planet "),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"ion-label",4),e.NdJ("click",function(){return b.local()}),e._UZ(21,"ion-icon",8),e._uU(22," ubicaci\xf3n "),e.qZA(),e._UZ(23,"br")(24,"br"),e.qZA(),e.TgZ(25,"ion-col",9)(26,"a",10),e._uU(27,"Aviso de Privacidad"),e.qZA(),e._UZ(28,"br"),e.TgZ(29,"a",11),e._uU(30,"Condiciones de venta"),e.qZA(),e._UZ(31,"br"),e.TgZ(32,"a",12),e._uU(33,"Terminos y Condiciones"),e.qZA()()()()()())},dependencies:[u.wI,u.fr,u.jY,u.gu,u.Q$,u.Nd,u.sr],styles:[".footer[_ngcontent-%COMP%]{float:left;text-align:justify;font-size:15px;line-height:15px;word-break:break-all}.negro[_ngcontent-%COMP%]{--background: rgb(0, 0, 0)}"]}),f})()},499:(v,x,l)=>{l.d(x,{G:()=>w});var e=l(5861),n=l(1571),u=l(7699),o=l(4633),f=l(529);let h=(()=>{class s{constructor(r){this.http=r}GetProductosHeader(r){return new Promise((c,d)=>{this.http.post("https://lhu8h50b84.execute-api.us-east-1.amazonaws.com/dev/get_productos_header",r).subscribe({next:a=>{c(a)},error:a=>{d(a)}})})}}return s.\u0275fac=function(r){return new(r||s)(n.LFG(f.eN))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var m=l(7727),b=l(6895);function Z(s,C){if(1&s){const r=n.EpF();n.TgZ(0,"div")(1,"ion-button",2),n.NdJ("click",function(){n.CHM(r);const d=n.oxw();return n.KtG(d.carrito())}),n._UZ(2,"ion-icon",11),n.TgZ(3,"ion-col",12)(4,"span"),n._uU(5),n.qZA()()()()}if(2&s){const r=n.oxw();n.xp6(5),n.hij(" ",r.contador," ")}}function t(s,C){if(1&s){const r=n.EpF();n.TgZ(0,"ion-row")(1,"ion-col",13)(2,"ion-input",14),n.NdJ("keyup",function(d){n.CHM(r);const a=n.oxw();return n.KtG(a.applyFilter(d))}),n.qZA()(),n.TgZ(3,"ion-col",1)(4,"ion-buttons")(5,"ion-button",2),n.NdJ("click",function(){n.CHM(r);const d=n.oxw();return n.KtG(d.cerrar())}),n._UZ(6,"ion-icon",15),n.qZA()()()()}}function O(s,C){if(1&s){const r=n.EpF();n.TgZ(0,"ion-col",19)(1,"ion-item",2),n.NdJ("click",function(){const a=n.CHM(r).$implicit,p=n.oxw(2);return n.KtG(p.productobuscado(a.idmkt_productos,a.categoria))}),n.TgZ(2,"ion-thumbnail",20),n._UZ(3,"img",21),n.qZA(),n.TgZ(4,"ion-label"),n._uU(5),n.qZA()()()}if(2&s){const r=C.$implicit;n.xp6(3),n.s9C("src",r.imagen,n.LSH),n.xp6(2),n.hij(" ",r.producto," ")}}function T(s,C){if(1&s&&(n.TgZ(0,"ion-content",16)(1,"ion-grid",17)(2,"ion-row"),n.YNc(3,O,6,2,"ion-col",18),n.qZA()()()),2&s){const r=n.oxw();n.xp6(3),n.Q6J("ngForOf",r.data_header)}}let w=(()=>{class s{constructor(r,c,d,a,p,i,g){this.router=r,this.alertController=c,this.menu=d,this.route=a,this.menuCtrl=p,this.getProductosHeader=i,this.getCountCarrito=g}ngOnInit(){var r=this;this.cliente=localStorage.getItem("id_cliente"),this.cliente&&this.getCountCarrito.GetCountCarrito({cliente:this.cliente}).then(function(){var d=(0,e.Z)(function*(a){r.contador=a.data[0].contador});return function(a){return d.apply(this,arguments)}}())}toogleMenu(){this.menuCtrl.toggle()}miperfil(){this.menu.toggle(),this.route.navigate(["/perfil"])}salir(){var r=this;return(0,e.Z)(function*(){localStorage.setItem("id_cliente",""),localStorage.setItem("cliente",""),r.menu.toggle(),yield(yield r.alertController.create({header:"Alert",subHeader:"Sesi\xf3n cerrada con \xe9xito",buttons:["OK"]})).present(),window.location.reload(),localStorage.removeItem("ingresado")})()}buscar(){this.open=!0}cerrar(){var r=this;return(0,e.Z)(function*(){r.open=!1,r.filterValue=void 0})()}applyFilter(r){var c=this;return(0,e.Z)(function*(){c.filterValue=r.target.value,c.filterValue=c.filterValue.trim().toLowerCase();let d={producto:"%"+c.filterValue+"%"};c.filterValue.length>0&&(yield c.getProductosHeader.GetProductosHeader(d).then(function(){var a=(0,e.Z)(function*(p){c.data_header=p.data});return function(p){return a.apply(this,arguments)}}()))})()}home(){this.route.navigate(["/home"])}productobuscado(r,c){this.open=!1,this.filterValue=void 0,this.router.navigate(["/ver-detalle/"+r+"/"+c])}carrito(){this.route.navigate(["/carrito"])}}return s.\u0275fac=function(r){return new(r||s)(n.Y36(u.F0),n.Y36(o.Br),n.Y36(o._q),n.Y36(u.F0),n.Y36(o._q),n.Y36(h),n.Y36(m._))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-header"]],decls:21,vars:3,consts:[[1,"negro"],["size","2"],[3,"click"],["slot","icon-only","name","menu","color","light"],["size","6"],["src","https://cellular-planet-productos.s3.amazonaws.com/audifonos/logo+(1).png","alt","",2,"width","70%",3,"click"],["size","4"],[4,"ngIf"],["size","5"],["color","light","slot","icon-only","name","search-outline"],["class","ionheader",4,"ngIf"],["color","light","name","bag-outline"],[1,"numberCircle"],["size","10"],["color","dark","placeholder","Busca en cellularplanet.mx",3,"keyup"],["slot","icon-only","name","close-outline"],[1,"ionheader"],["fixed",""],["size","12",4,"ngFor","ngForOf"],["size","12"],["slot","start"],["alt","Silhouette of mountains",3,"src"]],template:function(r,c){1&r&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-buttons")(6,"ion-button",2),n.NdJ("click",function(){return c.toogleMenu()}),n._UZ(7,"ion-icon",3),n.qZA()()(),n.TgZ(8,"ion-col",4)(9,"ion-img",5),n.NdJ("click",function(){return c.home()}),n.qZA()(),n.TgZ(10,"ion-col",6)(11,"ion-row")(12,"ion-col",4)(13,"ion-buttons"),n.YNc(14,Z,6,1,"div",7),n.qZA()(),n.TgZ(15,"ion-col",8)(16,"ion-buttons")(17,"ion-button",2),n.NdJ("click",function(){return c.buscar()}),n._UZ(18,"ion-icon",9),n.qZA()()()()()(),n.YNc(19,t,7,0,"ion-row",7),n.qZA()()(),n.YNc(20,T,4,1,"ion-content",10)),2&r&&(n.xp6(14),n.Q6J("ngIf",c.cliente),n.xp6(5),n.Q6J("ngIf",1==c.open),n.xp6(1),n.Q6J("ngIf",(null==c.filterValue?null:c.filterValue.length)>0))},dependencies:[o.YG,o.Sm,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Xz,o.pK,o.Ie,o.Q$,o.Nd,o.Bs,o.sr,o.j9,b.sg,b.O5],styles:["ion-img[_ngcontent-%COMP%]{height:1;width:1;margin:auto;display:block;border-radius:50%;align-items:center}ion-toolbar[_ngcontent-%COMP%]{--background: transparent}ion-input[_ngcontent-%COMP%]{--background: rgb(255, 255, 255);width:100%;height:40px;border-radius:50px;--padding-start: 30px;--padding-end: 20px}.negro[_ngcontent-%COMP%]{--background: rgb(0, 0, 0)}ion-header[_ngcontent-%COMP%]{--background: rgb(0, 0, 0)}ion-row.row[_ngcontent-%COMP%]{padding:5px 26px;justify-content:space-between}ion-row.row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{flex-grow:0}.numberCircle[_ngcontent-%COMP%]{border-radius:50%;width:25px;height:25px;display:inline-flex;background:#fff;border:2px solid #666;flex-grow:0;padding:0}.numberCircle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#666;text-align:center;font:12px Arial,sans-serif;width:25px;display:inline-block;margin:auto}.backgroundheader[_ngcontent-%COMP%]{--background: rgb(255, 255, 255)}.menuproductos[_ngcontent-%COMP%]{height:auto;--background: rgb(255, 0, 0)}ion-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:50%}.ionheader[_ngcontent-%COMP%]{height:200%}"]}),s})()},7840:(v,x,l)=>{l.r(x),l.d(x,{MisPedidosPage:()=>d});var e=l(5861),n=l(6895),u=l(433),o=l(4633),f=l(4144),h=l(4676),m=l(6308),b=l(7155),Z=l(6087),t=l(1571),O=l(529);let T=(()=>{class a{constructor(i){this.http=i}GetEstatusPedido(i){return new Promise((g,P)=>{this.http.post(" https://lhu8h50b84.execute-api.us-east-1.amazonaws.com/dev/get_estatus_pedidos",i).subscribe({next:_=>{g(_)},error:_=>{P(_)}})})}}return a.\u0275fac=function(i){return new(i||a)(t.LFG(O.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var w=l(499),s=l(970);function C(a,p){if(1&a&&(t.TgZ(0,"div")(1,"ion-label")(2,"b"),t._uU(3,"Proveedor:"),t.qZA(),t._uU(4),t.qZA(),t._UZ(5,"br"),t.TgZ(6,"ion-label")(7,"b"),t._uU(8,"Guia:"),t.qZA(),t._uU(9),t.qZA()()),2&a){const i=t.oxw().$implicit;t.xp6(4),t.hij(" ",i.proveedor,""),t.xp6(5),t.hij(" ",i.guia,"")}}function r(a,p){if(1&a&&(t.TgZ(0,"ion-row")(1,"ion-col",2)(2,"ion-card")(3,"ion-card-content")(4,"ion-row")(5,"ion-col",12)(6,"b"),t._uU(7,"Orden:"),t.qZA(),t._UZ(8,"br"),t._uU(9),t._UZ(10,"br"),t.TgZ(11,"ion-label")(12,"b"),t._uU(13,"Estatus:"),t.qZA(),t._UZ(14,"br"),t._uU(15),t.qZA(),t._UZ(16,"br"),t.TgZ(17,"ion-label")(18,"b"),t._uU(19,"Producto:"),t.qZA(),t._UZ(20,"br"),t._uU(21),t.qZA(),t._UZ(22,"br"),t.qZA(),t.TgZ(23,"ion-col",13),t._UZ(24,"ion-img",14),t.qZA()(),t.TgZ(25,"ion-accordion-group")(26,"ion-accordion",15)(27,"ion-item",16)(28,"ion-label"),t._uU(29,"Detalle de pedido"),t.qZA()(),t.TgZ(30,"div",17)(31,"ion-label")(32,"b"),t._uU(33,"Cantidad:"),t.qZA(),t._uU(34),t.qZA(),t._UZ(35,"br"),t.YNc(36,C,10,2,"div",18),t.TgZ(37,"ion-label",19)(38,"b"),t._uU(39,"Direcci\xf3n:"),t.qZA(),t._UZ(40,"br"),t._uU(41),t.qZA()()()()()()()()),2&a){const i=p.$implicit,g=t.oxw(2);t.xp6(9),t.hij("",i.orden," "),t.xp6(6),t.hij(" ",i.estatus_envio," "),t.xp6(6),t.hij(" ",i.producto," "),t.xp6(3),t.Q6J("src",i.imagen),t.xp6(10),t.hij(" ",i.cantidad," "),t.xp6(2),t.Q6J("ngIf",g.guia),t.xp6(5),t.hij("",i.direccion," ")}}function c(a,p){if(1&a&&(t.TgZ(0,"ion-col",2)(1,"ion-grid",1),t.YNc(2,r,42,7,"ion-row",11),t.qZA()()),2&a){const i=t.oxw();t.xp6(2),t.Q6J("ngForOf",i.data)}}let d=(()=>{class a{constructor(i){this.getEstatusPedidos=i}ngOnInit(){}ionViewWillEnter(){var i=this;return(0,e.Z)(function*(){i.id_cliente=localStorage.getItem("id_cliente");let g={estatus_envio:"PREPARANDO ENVIO",id_cliente:i.id_cliente};yield i.getEstatusPedidos.GetEstatusPedido(g).then(function(){var P=(0,e.Z)(function*(_){i.data=_.data,i.guia=!1});return function(_){return P.apply(this,arguments)}}())})()}abremenu(){this.estadomenu=!0}cierramenu(){this.estadomenu=!1}ordmaymen(){return(0,e.Z)(function*(){})()}ordmenmay(){return(0,e.Z)(function*(){})()}cambio(){var i=this;return(0,e.Z)(function*(){if("EN RUTA"===i.estatus){let g={estatus_envio:"EN RUTA",id_cliente:i.id_cliente};yield i.getEstatusPedidos.GetEstatusPedido(g).then(function(){var P=(0,e.Z)(function*(_){i.data=_.data,i.guia=!0});return function(_){return P.apply(this,arguments)}}())}else if("ENTREGADO"===i.estatus){let g={estatus_envio:"ENTREGADO",id_cliente:i.id_cliente};yield i.getEstatusPedidos.GetEstatusPedido(g).then(function(){var P=(0,e.Z)(function*(_){i.data=_.data,i.guia=!0});return function(_){return P.apply(this,arguments)}}())}else i.ionViewWillEnter()})()}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-mis-pedidos"]],standalone:!0,features:[t.jDz],decls:25,vars:3,consts:[[3,"fullscreen"],["fixed",""],["size","12"],["lines","none",1,"lineacarrito"],[1,"ion-text-center"],["slot","icon-only","size","large","name","cart-outline"],["label","Filtro por estatus","placeholder","Selecciona",3,"ngModel","ionChange","ngModelChange"],["value","PREPARANDO ENVIO"],["value","EN RUTA"],["value","ENTREGADO"],["size","12",4,"ngIf"],[4,"ngFor","ngForOf"],["size","8"],["size","4"],[3,"src"],["value","first"],["slot","header","color","light"],["slot","content",1,"ion-padding"],[4,"ngIf"],[1,"footer"]],template:function(i,g){1&i&&(t.TgZ(0,"ion-header"),t._UZ(1,"app-header"),t.qZA(),t.TgZ(2,"ion-content",0)(3,"ion-grid",1)(4,"ion-row")(5,"ion-col",2)(6,"ion-item",3)(7,"ion-grid",1)(8,"ion-row")(9,"ion-col",2)(10,"ion-label",4),t._UZ(11,"ion-icon",5),t._uU(12," Mis Pedidos"),t.qZA()()()()(),t.TgZ(13,"ion-col",2)(14,"ion-list")(15,"ion-item")(16,"ion-select",6),t.NdJ("ionChange",function(){return g.cambio()})("ngModelChange",function(_){return g.estatus=_}),t.TgZ(17,"ion-select-option",7),t._uU(18,"PREPARANDO ENVIO"),t.qZA(),t.TgZ(19,"ion-select-option",8),t._uU(20,"EN RUTA"),t.qZA(),t.TgZ(21,"ion-select-option",9),t._uU(22,"ENTREGADO"),t.qZA()()()()(),t.YNc(23,c,3,1,"ion-col",10),t.qZA()()(),t._UZ(24,"app-footer"),t.qZA()),2&i&&(t.xp6(2),t.Q6J("fullscreen",!0),t.xp6(14),t.Q6J("ngModel",g.estatus),t.xp6(7),t.Q6J("ngIf",g.data))},dependencies:[o.Pc,o.We,o.eh,o.PM,o.FN,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Xz,o.Ie,o.Q$,o.q_,o.Nd,o.t9,o.n0,o.QI,b.p0,h.TU,f.c,m.JX,n.ez,n.sg,n.O5,Z.K,w.G,s.c,u.u5,u.JJ,u.On],styles:["ion-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:50%}ion-card[_ngcontent-%COMP%]{margin:auto;width:100%;border:2px solid rgb(0,0,0);padding:10px;border-radius:10px;--ion-background-color: rgb(255, 255, 255)}.pickable[_ngcontent-%COMP%]{height:70%;width:70%;margin:auto;display:block;border-radius:10px}img[_ngcontent-%COMP%]{height:60%;width:60%;margin:auto;display:block;border-radius:10px}.footer[_ngcontent-%COMP%]{float:left;text-align:justify;font-size:15px;line-height:15px;word-break:break-all}.negro[_ngcontent-%COMP%]{--background: rgb(0, 0, 0)}ion-label[_ngcontent-%COMP%]{--color: #000;font-size:80%}ion-item[_ngcontent-%COMP%]{background-color:#fff;--min-height: 58px}ion-fab-button[_ngcontent-%COMP%]{background-color:#fff}ion-input[_ngcontent-%COMP%]{background-color:#000;color:#fff;width:100%;height:40px;border-radius:50px;--padding-start: 20px;--padding-end: 20px;--highlight-color-focused: none}swiper-container[_ngcontent-%COMP%]{--swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);--swiper-pagination-color: var(--ion-color-primary, #3880ff);--swiper-pagination-progressbar-bg-color: rgba( var(--ion-text-color-rgb, 0, 0, 0), .25 );--swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), .1);--swiper-scrollbar-drag-bg-color: rgba( var(--ion-text-color-rgb, 0, 0, 0), .5 )}swiper-slide[_ngcontent-%COMP%]{display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;box-sizing:border-box}.badboy[_ngcontent-%COMP%]{width:300px;height:150px;margin:0 auto;display:block;transition:ease all .5s}.none[_ngcontent-%COMP%]{padding-right:0}.botondestacados[_ngcontent-%COMP%]{color:#fff;--background: rgb(179, 179, 179);text-align:center;width:100%;height:90%}.centrado[_ngcontent-%COMP%]{text-align:center}ion-toolbar[_ngcontent-%COMP%]{--background: rgb(255, 255, 255)}.producto[_ngcontent-%COMP%]{font-size:90%;text-align:center}.flecha[_ngcontent-%COMP%]{padding:8px}ion-fab[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;justify-content:right;padding-right:5px;background-color:#fff}.labelcantidad[_ngcontent-%COMP%]{text-align:center;padding-top:0;padding-left:20%;padding-right:0}.ion-icon-cantidad-derecha[_ngcontent-%COMP%]{padding-right:60%}.ion-icon-cantidad-izquierda[_ngcontent-%COMP%]{padding-left:40%}.imagenprincipal[_ngcontent-%COMP%]{height:auto;width:auto;margin:auto;display:block}.botoncarrito[_ngcontent-%COMP%]{padding-right:10px;padding-left:10px}.botoneliminar[_ngcontent-%COMP%]{padding-right:0}.lineacarrito[_ngcontent-%COMP%]{border-bottom:4px solid rgb(0,0,0)}ion-textarea[_ngcontent-%COMP%]{width:100%;height:120px;--background: rgb(230, 230, 230)}"]}),a})()},7727:(v,x,l)=>{l.d(x,{_:()=>u});var e=l(1571),n=l(529);let u=(()=>{class o{constructor(h){this.http=h}GetCountCarrito(h){return new Promise((m,b)=>{this.http.post("https://lhu8h50b84.execute-api.us-east-1.amazonaws.com/dev/get_count_carrito",h).subscribe({next:Z=>{m(Z)},error:Z=>{b(Z)}})})}}return o.\u0275fac=function(h){return new(h||o)(e.LFG(n.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);