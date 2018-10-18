<?php

	$bdd = new PDO('mysql:host=localhost:3306;dbname=netflixKiller;charset=utf8', 'root', 'root');
	
	$taille= $bdd->query("SELECT COUNT(*) FROM matiere WHERE Numero >= 1");
	$taille1 = $taille->fetch();
	

	$hasard = rand(1, $taille1['COUNT(*)']);
	//echo $hasard;
	
	$requete= "SELECT nom, film FROM matiere";
	$test = $bdd->query($requete);

	for ($i=1; $i<=$hasard; $i++){
	$donnees = $test->fetch();
	}
	/*	echo $donnees['nom'];
		echo $donnees['film'];*/

		$valeurs = array('Nom' => $donnees['nom'], 'Film' => $donnees['film']);

		echo json_encode($valeurs);
		
	?>