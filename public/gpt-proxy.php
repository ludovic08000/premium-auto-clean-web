
<?php
// Script for loading gptengineer.js with proper MIME type and CORS headers
// Prevent any output before headers
ob_start();

// Set proper JavaScript MIME type
header("Content-Type: application/javascript");

// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// URL of the script to proxy
$scriptUrl = 'https://cdn.gpteng.co/gptengineer.js';

try {
    // Initialize cURL
    $ch = curl_init();

    // Configure cURL
    curl_setopt($ch, CURLOPT_URL, $scriptUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; PremiumAutoCleanProxy/1.0)');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Not ideal for production
    curl_setopt($ch, CURLOPT_TIMEOUT, 10); // 10 second timeout
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Accept: */*',
        'Origin: https://premiumautoclean.com'
    ));

    // Execute the request
    $content = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        // Return a JavaScript comment instead of HTML error
        echo "console.error('Proxy error: " . addslashes(curl_error($ch)) . "');";
        curl_close($ch);
        exit;
    }

    // Check HTTP status code
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($httpCode !== 200) {
        echo "console.error('HTTP error: " . $httpCode . "');";
        curl_close($ch);
        exit;
    }

    // Verify content is JavaScript (not HTML)
    if (strpos($content, '<!DOCTYPE html>') === 0 || strpos($content, '<html') === 0) {
        echo "console.error('Content returned is HTML, not JavaScript');";
        
        // Use a local fallback if available
        if (file_exists(__DIR__ . '/gptengineer.js')) {
            echo file_get_contents(__DIR__ . '/gptengineer.js');
        } else {
            // Minimal fallback
            echo "console.log('gptengineer.js could not be loaded - functionality limited');";
        }
    } else {
        // Return the JavaScript content
        echo $content;
    }

    // Close cURL
    curl_close($ch);
} catch (Exception $e) {
    // Return a JavaScript comment instead of a PHP error
    echo "console.error('Proxy exception: " . addslashes($e->getMessage()) . "');";
}

// Flush and end output buffering
ob_end_flush();
?>
