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
$db  = new Mysqlidb('localhost','restful','pass','restful_example');

$app->get ('/contact',		function() use ($db){
		$contacts = $db->get('contacts');
		echo json_encode($contacts);
});

$app->post('/contact' , function() use ($db, $app) {
	$request 	= $app->request();	
	$body 		= $request->getBody();
	$contact 	= (array) json_decode($body);
	$id 			= $db->insert('contacts' , $contact);

	$db->where('id' , $id);
	$user 		= $db->getOne('contacts');
	echo json_encode($user);

});

$app->get ('/contact/:id' , function($id) use ($db){
	$db->where('id' , $id);

	if($db->delete('contacts')){
		echo json_encode( array('message'=>'successfully deleted') ); 
	}else{
		echo json_encode( array('message'=>'not deleted') ); 
	}
});

$app->post ('/contact/:id' , function($id) use($db, $app){
	$request 	= $app->request();	
	$body 		= $request->getBody();
	$contact 	= (array) json_decode($body);

	$db->where('id' , $id);
	if($db->update('contacts', $contact)){
		echo json_encode( array('message'=>'successfully updated') ); 
	}else{
		echo json_encode( array('message'=>'not updated') ); 
	}

});

$app->run();

?>