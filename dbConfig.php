<?php 
 
// Database configuration 
$dbHost     = "localhost"; 
$dbUsername = "u8wufdss9ip0t"; 
$dbPassword = "uc^@y3k(c(%+"; 
$dbName     = "dbexgfxobp883k"; 
 
// Create database connection 
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName); 
 
// Check connection 
if ($db->connect_error) { 
    die("Connection failed: " . $db->connect_error); 
} 
 
?>