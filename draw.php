<?php

/**
 * Created by PhpStorm.
 * User: moese
 * Date: 16-6-2017
 * Time: 09:02
 */

echo file_get_contents('head.html');

?>

    <div class="col-sm-12">
        <h3>Draw</h3>
        <hr>
        <p>
            Nu gaan we tekenen.
        </p>
    </div>



    <div id="sketch">
        <canvas id="paint" style="background-color: #F8ECC2"></canvas>
    </div>

    <div class="col-sm-12">
        <pre class="language-javascript"><code><?php echo file_get_contents('js/draw.js'); ?></code></pre>
    </div>

    <div class="col-sm-12"></div>

    <link rel="stylesheet" href="css/draw.css">
    <script src="js/draw.js"></script>

<?php
echo file_get_contents('end.html');
?>