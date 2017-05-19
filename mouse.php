<?php
echo file_get_contents('head.html');
?>
    <div id="circle"></div>
    <div class="col-sm-12">
        <h3>Mouse</h3>
        <hr>
    </div>

    <div class="col-sm-6">
        <p>
            Doormiddel van Javascript de cursor laten volgen.
            Met dubbelklik wordt de cirkel groter en/of kleiner.
            <br><br>
            Druk op "Start" om hem te starten.
        </p>
        <button onclick="start()" class="btn btn-success">Start</button>
        <button onclick="stop()" class="btn btn-danger">Stop</button>
    </div>

    <div class="col-sm-6">
        <pre class="language-javascript"><code><?php echo file_get_contents('js/mouse.js'); ?></code></pre>
    </div>

    <div class="col-sm-12"></div>

    <link rel="stylesheet" href="css/mouse.css">
    <script src="js/mouse.js"></script>

<?php
echo file_get_contents('end.html');
?>