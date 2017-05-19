<?php
echo file_get_contents('head.html');
?>

    <div class="col-sm-6">
        <form action="">
            <label for="id">Voer nummer in</label>
            <input class="form-control" name="id" type="text" id="id">
        </form>
        <br>
        <button onclick="getResponse()" class="btn btn-success">Get Employees</button>
    </div>
    <div class="col-sm-12"></div><br><br>

    <div class="col-sm-6"><h3>JSON</h3><hr>
        <div id="out"></div>
        <div class="col-sm-12">
            <table class="table table-hover" style="display: none"><tr><th>Naam</th><th>Bedrijf</th></tr></table>
        </div>
    </div>

    <div class="col-sm-6"><h3>XML</h3><hr>
        <div class="col-sm-12" id="code"></div>
    </div>

    <script src="js/employees.js"></script>
<?php
echo file_get_contents('end.html');
?>