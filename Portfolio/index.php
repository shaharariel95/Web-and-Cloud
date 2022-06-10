<?php 
include "config.php";

$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

//connection test
if(mysqli_connect_errno()){
	die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
}
?> 
<?php
//DB Data Fetch
	$query = "SELECT * FROM portfolio_shahar";
	$result = mysqli_query($connection , $query);
	if(!$result){
		die("DB Query failed");
	}
	
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>Shahar Ariel</title>
		<meta name="keywords" content="">
		<meta name="description" content="">
        <meta name="author" content="templatemo">
        <!-- 
        Lavish HTML CSS Template
        https://templatemo.com/tm-458-lavish
        -->
        
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- animate -->
		<link rel="stylesheet" href="css/animate.min.css">
		<!-- bootstrap -->
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<!-- font-awesome -->
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<!-- google font -->
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700,800' rel='stylesheet' type='text/css'>
		<!-- fullpage -->
		<link rel="stylesheet" href="css/jquery.fullPage.css">
		<!-- custom -->
		<link rel="stylesheet" href="css/templatemo-style.css">

	</head>
	<body>

	<div id="fullpage">

		<!-- start home -->
		<div id="home" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8 wow fadeIn" data-wow-delay="0.9s">
						<h3>Simple and Elegant</h3>
						<h1>Shahar Ariel</h1>
						<h2 class="rotate">Software Engineering Student, Full Stack, Fast Learner</h2>
						<p>Hi! Im Shahar and Im a software Engineering student, I love technology and computer, from hardware to software and everything in between!</p>
						<a href="#work" class="btn btn-default smoothScroll wow fadeInUp" data-wow-delay="1s">Get started</a>
						<a href="Shahar Ariel CV.pdf" download="Shahar Ariel CV" target="_blank" class="btn btn-default smoothScroll wow fadeInUp" data-wow-delay="1s">Get CV</a>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</div>
		<!-- end home -->

		<!-- start work -->
		<div id="work" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow bounce">
						<h2>WHAT I DO</h2>
					</div>
                </div>  
                
                <div class="row">
					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-object media-left">
								<i class="fa fa-laptop"></i>
							</div>
							<div class="media-body">
								<h3 class="media-heading">HTML coding</h3>
								<p>I build and design websites, with JavaScript, PHP and mySql.</p>
							</div>
						</div>
					</div>
                    
					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-object media-left">
								<i class="fa fa-link"></i>
							</div>
							<div class="media-body">
								<h3 class="media-heading">Coding in C</h3>
								<p>Coding in C language</p>
							</div>
						</div>
					</div>
                    
					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-object media-left">
								<i class="fa fa-paper-plane"></i>
							</div>
							<div class="media-body">
								<h3 class="media-heading">CPP</h3>
								<p>Coding in OOP system in CPP with UML and STL's</p>
							</div>
						</div>
					</div>
                    
				</div>
			</div>
		</div>
		<!-- end work -->

		<!-- start about -->
		<div id="about" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
						<h2>ABOUT ME</h2>
						<h4>Software Engineering Student</h4>
						<p>Im a second year student in Shenkar College, I love learning new things and challenge myself, I love technology and everything computers, software, hardware and everything between</p>
						<p>In my free time I like to play racing games and flight sim, I love to read and learn about new tech and to learn how they work, if its a new phone or a new AI program</p>
					</div>
					<div class="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
						<span class="text-top">C <small>90%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"></div>
							</div>
						<span>CPP <small>95%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"></div>
							</div>
						<span>HTLM5 &AMP; CSS3 <small>90%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"></div>
							</div>
						<span>JavaScript <small>85%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div>
							</div>
						<span>PHP &AMP; mySQL <small>90%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"></div>
							</div>
							
					</div>
				</div>
			</div>
		</div>
		<!-- end about -->

		<!-- start portfolio -->
		<div id="portfolio" class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="wow bounce">PORTFOLIO</h2>
				</div>
				<?php
				//Dynamic Projects
				while($row = mysqli_fetch_row($result)){
					echo '<div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">';
					echo '<div class="portfolio-thumb">';
					echo '<img src="' .$row["project_img1"].'" class="img-responsive" alt="portfolio img">';
					echo '<div class="portfolio-overlay">';
					echo '<h4>' . $row["name"] . '</h4>';
					echo '<h5>' . $row["project_descreption"] . '</h5>';
					echo '<a href="' . $row["project_url"] . '" target="_black"> Link </a>';
					echo '<a href="' . $row["project_git"] . '" target="_black"> Git </a>';
					echo '</div> </div> </div>';
				} 
				?>
			</div>
		</div> 
	</div> 
	<!-- end portfolio -->

		<!-- start contact -->
		<div id="contact" class="section">
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
						<address>
							<p class="contact-title">CONTACT ME</p>
							<p><i class="fa fa-phone"></i> 0508802266</p>
							<p><i class="fa fa-envelope-o"></i> ShaharAriel95@gmail.com</p>
							<p><i class="fa fa-map-marker"></i> Ramat Gan</p>
						</address>
					</div>
					<!-- <div class="col-lg-6 col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s">
						<form role="form" method="post" action="#">
							<input name="name" type="text" class="form-control" id="name" placeholder="Your Name">
							<input name="email" type="email" class="form-control" id="email" placeholder="Your Email">
							<textarea name="message" rows="5" class="form-control" id="message" placeholder="Your Message"></textarea>
							<input name="send" type="submit" class="form-control" id="send" value="SEND ME">
						</form>
					</div> -->
					<div class="col-md-1 col-sm-1"></div>
				</div>
			</div>
		</div>
		<!-- end contact -->

		<!-- start footer -->
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow fadeIn" data-wow-delay="0.9s">
						<p>Copyright &copy; 2022 Shahar Ariel
                        
                        . Designed by <a rel="nofollow noopener" href="https://templatemo.com">templatemo</a></p>
						<a href="https://www.shenkar.ac.il/he/departments/engineering-software-department" target="_blank">תואר ראשון בהנדסת תוכנה שנקר </a>
						<hr>
						<ul class="social-icon">
							<li><a href="https://www.linkedin.com/in/shaharariel/" class="fa fa-linkedin"></a></li>
							<li><a href="https://github.com/shaharariel95" class="fa fa-github"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		<!-- end footer -->

	</div>

		<!-- jQuery -->
		<script src="js/jquery.js"></script>
		<!-- bootstrap -->
		<script src="js/bootstrap.min.js"></script>
		<!-- fullpage -->
		<script src="js/jquery.fullPage.js"></script>
		<!-- smoothScroll -->
		<script src="js/smoothscroll.js"></script>
		<!-- wow -->
		<script src="js/wow.min.js"></script>
		<!-- text rotater -->
		<script src="js/jquery.simple-text-rotator.js"></script>
		<!-- custom -->
		<script src="js/custom.js"></script>

	</body>
</html>

<?php
//Close DB connection
mysqli_close($connection);
?>