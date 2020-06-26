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
		path: '/notificaciones/',
    	url: 'notificaciones.html',
    	name: 'notificaciones',
  		},
		{
		path: '/calendario/',
    	url: 'calendario.html',
    	name: 'calendario',
  		}
		
		
	]
});
// Export selectors engine
var $$ = Dom7;

$$('#btnAlerta').on('click',function() {
	app.dialog.alert('Hola Diseño web 2');
});

$$('#btnLogin').on('click', function(e){
	e.preventDefault();
	
	var usuario = $$('#username').val();
	var password = $$('#password').val();
	
	if (usuario == '11001100' && password == "password"){
		$$('#nombre').html(usuario);
		app.loginScreen.close('.login-screen');
	}else{
		app.dialog.alert('Los datos ingresados no son válidos. Para ingresar utilice el numero de cuenta: 11001100 y la contraseña: password');
	} 	
  
});