
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Données manquantes"]);
    exit;
}

$toAdmin = "contact@premiumautoclean.com";
$subjectAdmin = "📅 Nouveau RDV client - " . $data['nom'];

$messageAdmin = "
NOUVELLE DEMANDE DE RDV :

Nom : {$data['nom']}
Email : {$data['email']}
Téléphone : {$data['telephone']}
Véhicule : {$data['vehicule']}
Service : {$data['service']}
Date : {$data['date']}

Message :
{$data['message']}
";

$headers = "From: contact@premiumautoclean.com\r\nReply-To: {$data['email']}\r\n";

// ✅ Envoi à l'admin
mail($toAdmin, $subjectAdmin, $messageAdmin, $headers);

// ✅ Envoi au client
$toClient = $data['email'];
$subjectClient = "✅ Confirmation RDV - Premium Auto Clean";
$messageClient = "
Bonjour {$data['nom']},

Merci pour votre demande de rendez-vous. Voici le récapitulatif :

- Service : {$data['service']}
- Véhicule : {$data['vehicule']}
- Date souhaitée : {$data['date']}

Nous vous contacterons très vite pour confirmer.

– L'équipe Premium Auto Clean
";

mail($toClient, $subjectClient, $messageClient, $headers);

// ✅ Fin de script : réponse JSON attendue par le JS
echo json_encode(["message" => "Emails envoyés"]);
?>
