<?php
echo file_get_contents('head.html');

include('webservices/api-docs/countries.html');
include('webservices/api-docs/employees.html');
include('webservices/api-docs/tables.html');
?>



<?php
echo file_get_contents('end.html');
?>