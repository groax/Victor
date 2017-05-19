<?php
echo file_get_contents('head.html');
?>

    <div class="col-sm-12">
        <h3>Counter</h3>
        <hr>
    </div>

    <div class="col-sm-6">
        <p>
            Hier gebruik ik de SetInterval van Javascript. Hiermee laat ik een teller lopen
            naar 100 en maak de achtergrond dan zwart.
            <br><br>
            Druk op "Start" om hem te starten.
        </p>
        <span class="pull-left"><button onclick="start()" class="btn btn-success">Start</button></span>
        <span class="pull-right"><div id="counter"></div></span>
    </div>

    <div class="col-sm-6">
        <pre class="language-javascript"><code><?php echo file_get_contents('js/counter.js'); ?></code></pre>
    </div>

    <div class="col-sm-12"></div>

    <link rel="stylesheet" href="css/counter.css">
    <script src="js/counter.js"></script>

<?php
echo file_get_contents('end.html');
?>