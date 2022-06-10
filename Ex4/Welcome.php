<!DOCTYPE html>
<html>

<body>

    Your Email address: <?php echo $_GET["mail"]; ?><br>
    Password: <?php echo $_GET["pass"]; ?><br>
    You use mainly:  
    <? $i = $_GET["select"];
                    if($i==1){ echo "Mac";}
                    if($i==2){ echo "Windows";}
                    if($i==3){ echo "Linux";}
                    ?> <br>
    Your favourite animals are: <?php echo $_GET["ani1"]; ?>
    , <?php echo $_GET["ani2"]; ?> 
    and <?php echo $_GET["ani3"]; ?>
    
</body>

</html>