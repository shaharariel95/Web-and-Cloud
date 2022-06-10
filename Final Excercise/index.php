<?php
//create mySQL DB connection
include "config.php";

$connection = mysqli_connect($dbhost , $dbuser , $dbpass , $dbname);

//testing connection success
if(mysqli_connect_errno()){
    die("DB connection failed: " . mysqli_connect_error() . "(" . mysqli_connect_errno() . ")");
}
?>

<?php
    $query = "SELECT * FROM tbl_users_215";
    $result = mysqli_query($connection , $query);
    if(!$result)
    {
        die("DB query failed");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Track it Green</title>
</head>
<body>
    <?php
        echo "<ul>";
        while($row = mysqli_fetch_assoc($result)){
            echo "<li><h3>" . $row["id"] . "</h3>";
            echo "<p>" . $row["txt"] . "</p></li>";
        }
        echo "</ul>";
    ?>
    <?php
        mysqli_free_result($result);
    ?>
</body>
</html>
<?php
mysqli_close($connection);
?>