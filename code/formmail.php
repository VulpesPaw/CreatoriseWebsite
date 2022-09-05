<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Namnlöst dokument</title>
</head>

<body>

<?php

$to = "richard.jh.johansson@gmail.com"; /*If it ends in spam, exhange for @hotmail.com*/
$from = $_POST["email"];
$subject = $_POST["subject"];
$name = $_POST["name"];
$message = $_POST["message"];

if (mail ($to, $subject, $message ,"From: $name <$from>"))

echo nl2br("<h2>Ditt meddelande har skickats!</h2> 
<b>mottagare:</b> $to
<b>ämne:</b> $subject
<b>meddelande:</b>
$message
");

else
echo "Det gick inte att skicka ditt meddelande";

?>

</body>
</html>