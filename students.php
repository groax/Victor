<?php
echo file_get_contents('head.html');
?>
    <div class="col-sm-6">
        <form action="">
            <label for="id">Voer nummer in</label>
            <input class="form-control" name="id" type="text" id="id">
        </form>
        <br>
        <button onclick="getResponse()" class="btn btn-success">Get Employee</button>
        <div id="out"></div>
        <div id="name"></div>
    </div>
    <div class="col-sm-6">
        <pre  class="language-JSON">
            <code><?php echo file_get_contents('js/students.js'); ?></code>
        </pre>
    </div>
    <script src="js/students.js"></script>
<?php
echo file_get_contents('end.html');
?>