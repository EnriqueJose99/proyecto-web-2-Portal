// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'ios',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Portal Unitec',
	dialog: {
		title: 'Portal Unitec',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		{
		path: '/clases/',
    	url: 'clases.html',
    	name: 'clases',
  		},
		{
		path: '/cursos/',
    	url: 'cursos.html',
    	name: 'cursos',
  		},
		{
		path: '/info-g/',
    	url: 'info-g.html',
    	name: 'info-g',
  		},
		{
		path: '/notas/',
    	url: 'notas.html',
    	name: 'notas',
  		},
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		{
		path: '/contenido-1/',
    	url: 'contenido-1.html',
    	name: 'contenido-1',
  		},
		{
		path: '/recursos/',
    	url: 'recursos.html',
    	name: 'recursos',
  		},
		{
		path: '/actividades/',
    	url: 'actividades.html',
    	name: 'actividades',
  		},
		{
		path: '/bibliografia/',
    	url: 'bibliografia.html',
    	name: 'bibliografia',
  		},
		{
		path: '/foro/',
    	url: 'foro.html',
    	name: 'foro',
  		},
		{
		path: '/foro-1/',
    	url: 'foro-1.html',
    	name: 'foro-1',
  		},
		{
		path: '/settings/',
    	url: 'settings.html',
    	name: 'settings',
  		},
		{
		path: '/edicionvideo/',
    	url: 'edicionvideo.html',
    	name: 'edicionvideo',
  		},
		{
		path: '/guion/',
    	url: 'guion.html',
    	name: 'guion',
  		},
		{
		path: '/fotografia/',
    	url: 'fotografia.html',
    	name: 'fotografia',
  		},
		{
		path: '/digital/',
    	url: 'digital.html',
    	name: 'digital',
  		},
		{
		path: '/help/',
    	url: 'help.html',
    	name: 'help',
  		},
		{
		path: '/configuracion/',
    	url: 'configuracion.html',
    	name: 'configuracion',
  		},
		{
		path: '/editarcontraseña/',
    	url: 'editarcontraseña.html',
    	name: 'editarcontraseña',
  		},
		{
		path: '/editarfoto/',
    	url: 'editarfoto.html',
    	name: 'editarfoto',
  		},
		{
		path: '/numerostelefono/',
    	url: 'numerostelefono.html',
    	name: 'numerostelefono',
  		},
		{
		path: '/info-personal/',
    	url: 'info-personal.html',
    	name: 'info-personal',
  		},
		{
		path: '/correosunitec/',
    	url: 'correosunitec.html',
    	name: 'correosunitec',
  		},
		{
		path: '/ubicaciones/',
    	url: 'ubicaciones.html',
    	name: 'ubicaciones',
  		},
		{
		path: '/privacidad/',
    	url: 'privacidad.html',
    	name: 'privacidad',
  		},
	]
});
// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click',function() {
	app.dialog.alert('Hola Diseño web 2');
});

