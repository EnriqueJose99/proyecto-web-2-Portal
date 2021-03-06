// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
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
		path: '/notas/',
    	url: 'notas.html',
    	name: 'notas',
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
		path: '/cambioContrasena/',
    	url: 'cambioContrasena.html',
    	name: 'cambioContrasena',
  		},
		{
		path: '/cambioFotoPerfil/',
    	url: 'cambioFotoPerfil.html',
    	name: 'cambioFotoPerfil',
  		},
		{
		path: '/cursosACTPREV/',
    	url: 'cursosACTPREV.html',
    	name: 'cursosACTPREV',
  		},
		{
		path: '/cursosPrevios/',
    	url: 'cursosPrevios.html',
    	name: 'cursosPrevios',
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
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		{
		path: '/contenido-1/',
    	url: 'contenido-1.html',
    	name: 'contenido-1',
  		},
		/*HECHO POR JEYSEL*/
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
		path: '/editarcontra/',
    	url: 'editarcontra.html',
    	name: 'editarcontra',
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


$$('#btnLogout').on('click', function(e){
   	e.preventDefault();

	app.loginScreen.open('.login-screen');
	
});



