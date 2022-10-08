//function injects the HTML for the cards into the full HTML with the head, body, etc.
function generateFullHTML(cards) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav id="header">My Team</nav> <!--Header-->

    <nav id="card-holder" class="d-flex justify-content-center flex-wrap"> <!--section that all the cards are within-->
        ${cards}
    </nav>
</body>
</html>`;
}

module.exports = generateFullHTML;

