<?php
header('Content-Type: application/json');
/***

Funciones simples para generar un CRUP con SlimFramework
http://www.slimframework.com/

C - Created User (addContact)
R - Read users   (getContacts)          
U - Update users (updateContact)
D - Delete users (deleteContact)

***/

require 'lib/mysql.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

/*Definiendo las rutas y asociando las funciones*/
$app->get('/', 'help');
$app->post('/contact',		'addContact');
$app->get ('/contact',		'getContacts');
$app->put ('/contact/:id', 	'updateContact');
$app->get ('/contact/:id', 	'deleteContact');

$app->run();


function help(){
	echo "TEST";
}

function addContact(){
	
}

function getContacts(){
	$db  = new Mysqlidb('localhost','restful','pass','restful_example');
	$contacts = $db->get('contacts');
	echo json_encode($contacts);
}

function updateContact(){

}

function getContact(){

}

function deleteContact(){

}
