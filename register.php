<?php
require 'config.php';
if(isset($_POST["submit"])){
    $username=$_POST["username"];
    $password=$_POST["password"];
    $duplicate=mysqli_query($conn, "SELECT * FROM registerdetails WHERE username = '$username'");
    if(mysqli_num_rows($duplicate) > 0){
        echo "<script> alert('username already exist create unique one');</script>";
    }else{
        $query="INSERT INTO registerdetails VALUES('','$username','$password')";
        mysqli_query($conn,$query);
        echo "<script> alert('Registration Successful');</script>";
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.css">
</head>
<style>
.one{
    background: linear-gradient(to top, rgba(0,0,0,0.5),rgba(0, 0, 255, 0.2)), url(image.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
}
.form-control{
    border-radius: 30px;
    box-shadow: 3px 3px 5px gray;
}
.logo{
    color: lime;
    float: left;
    margin-left: 20px;
    border-bottom: 2px solid lime ;
    border-left: 2px solid lime;
    border-radius: 50px;
    box-shadow: -2px 2px 5px limegreen;
    padding: 0px 10px;
    font-size:medium;
    font-weight: 100;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>
<body>
    <div class="container-fluid one">
        <div class="row">
            <div class="navbar">
                <div class="logo">
                    <h1>SRSDC</h1>
                </div>
            </div>
        </div>
        <form action="" method="post" autocomplete="off">
        <div class="container" id="r">
            <div class="row">
                <div class="col-lg-4 m-auto mt-5" style="border: 2px solid white; background-color: white; padding: 40px 60px; border-radius: 30px;">
                    <h4 style="text-align: center; margin-bottom: 50px;">Registration</h4>
                    <form action="" method="post">
                        <div class="form-group">
                            <input type="text" class="form-control mt-3" placeholder="Username" name="username" required>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control mt-3" placeholder="Password" name="password" required>
                        </div>
                        <div class="row">
                            <div class="col"><button type="submit" name="submit" class="btn btn-success mt-5 form-control">Register</button></div>
                        </div>
                        <div class="row">
                                <a href="login.php"><div class="col mt-5" style="border:2px solid black; border-radius:20px; color:white;background-color:red;text-align:center;">Login</div></a>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        </form>
    </div>
</body>
</html>