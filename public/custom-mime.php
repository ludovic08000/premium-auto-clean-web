
<?php
// Script pour corriger les problèmes de MIME type
header("Content-Type: application/javascript");
$filePath = __DIR__ . $_SERVER['REQUEST_URI'];
if (file_exists($filePath)) {
    readfile($filePath);
} else {
    header("HTTP/1.0 404 Not Found");
}
?>
