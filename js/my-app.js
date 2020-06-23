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
		path: 'biblio/',
    	url: 'bibliografia.html',
    	name: 'biblio',
  		},
		
	]
});
// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click',function() {
	app.dialog.alert('Hola Diseño web 2');
});

