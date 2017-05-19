<?php
echo file_get_contents('head.html');
?>
    <div class="col-sm-12">
        <table class="table">
            <tr>
                <td><b>Hout:</b> <span id="wood"></span></td>
                <td><b>Goud:</b> <span id="gold"></span></td>
                <td><b>Eten:</b> <span id="food"></span></td>
                <td><b>Werkers:</b> <span id="worker"></span></td>
                <td><b>Boeren:</b> <span id="farmer"></span></td>
            </tr>
        </table>
        <hr>
    </div>

    <div class="col-sm-6">
        <button onclick="buy('worker')" class="btn btn-success">Werker trainen</button>
        <button onclick="buy('farmer')" class="btn btn-success">Boer trainen</button>
        <div id="buy"></div>
    </div>


    <link rel="stylesheet" href="css/game.css">
    <script src="js/game.js"></script>

<?php
echo file_get_contents('end.html');
?>