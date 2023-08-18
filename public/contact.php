<?php

// configure
$from = 'Demo contact form <demo@domain.com>';
$sendTo = 'Test contact form <comercial@bunker99.com.br>'; // Add Your Email
$subject = 'Nova mensagem do Site';
$fields = array('name' => 'Name', 'subject' => 'Subject', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in the email
$okMessage = 'Formulário de contato enviado com sucesso. Obrigado!';
$errorMessage = 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde';

// let's do the sending

try
{
    $emailText = "Você tem uma nova mensagem do formulário de contato\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
