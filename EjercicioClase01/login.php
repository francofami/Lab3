<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ingreso</title>
    <script src="./todoJunto.js" ></script>
    <style type="text/css">
			@import url("login.css");
    </style> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>

            <div class="col-4">
        <form>
            <div class="row">
                <div class="col-12" align="center">INGRESO</div>
            </div>

            <div class="row">
                <div class="col-3"> <label for="usr">Legajo:</label> </div>
                <div class="col-9"> <input type="number" class="form-control" id="legajoIngreso"></div>
            </div>
            
            <div class="row">
                <div class="col-3"><label for="pwd">Password:</label></div>
                <div class="col-9"><input type="password" class="form-control" id="claveIngreso"></div>
            </div>

            <div class="row">
                <div class="form-group col-12">
                    <button type="button" class="btn btn-success col-4" onclick="Login()">Aceptar</button>
                    <button type="reset" class="btn btn-danger col-4">Cancelar</button>
                </div>
            </div>
        </form>
            </div>
        
            <div class="col-4"></div>
        </div>
    </div>
            
</body>
</html>