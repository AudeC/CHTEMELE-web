/**********


FONCTION DE CALCUL DU SCORE 
Cette fonction va parcourir toutes les lignes et calculer le score


**********/
function calculScore(drag){
	var score=0;
	var ligne =0;
	var nbLigneMax=10;
	
	var elemjq=drag; // le dernier élément posé
	var posey=$(elemjq).data("value");  /* valeur de la carte posée */
	var elemjs=cartes[posey]; /* carte generique de la carte posée */
	
	var poseyprec=$(elemjq).prev().data('value'); /* valeur de la carte precedente la carte posée */
	var elemjsprev=cartes[poseyprec];	/* carte generique de la carte precedente la carte posée */
	
	var numeroLi=$(elemjq).parent().data("ligne"); /* numero de ligne du dernier element posé */
	
	var elemjqvar=$('.ligne[data-ligne='+ligne+'] img:first-child'); // Carte en cours de test initialisé au premier élément de la 1ère ligne
	var valeur=$(elemjqvar).data('value'); /* valeur de la carte en cours de test */
	var elemjsvar=cartes[valeur];	/* carte générique de la carte en cours de test */
	
	var valeurprec=$(elemjqvar).prev().data('value'); /* valeur de la carte precedente la carte en cours de test */ // Même remarque, un prev sur le 1er élément me paraît bien étrange.
	var elemjsvarprev=cartes[valeurprec];	/* carte generique de la carte precedente la carte en cours de test */
	

	score=0;
	
		
	while(ligne != nbLigneMax){ //tant qu'on a pas pacouru toutes les lignes du plateau de jeu
		while(elemjqvar[0] != $('.ligne[data-ligne="'+ligne+'"] img:last-child')[0]){ //tant que l'élément en cours de test n'est pas le dernier élément de la ligne  // Voir si un "!=" est possible, je crois qu'on utilise plutôt is()
			if(elemjsvar.type=='ouvr'||elemjsvar.type=='ind'||elemjsvar.type=='attr'||elemjsvar.type=='text'){ //si le type de la carte en cours de test n'est pas une balise fermante
				if(elemjsvar.nom=='ipsum'){ // si l'element en cours de test est une carte texte 'ipsum'
					if(elemjsvarprev.nom=='lorem'){ // si la carte précédente est une carte texte 'lorem'
						score=score+1; // incrémentation du score de 1  // ou score++;
					}
				}
				score=score+elemjsvar.score; //ajout du score de la carte en cours de test au score
			}
			/* Cas des balises fermantes */
			else{
				var numLi=ligne;
				var elemjqvar2=$('.ligne[data-ligne="'+numLi+'"] img:last-child'); /* seconde carte en cours de test pour retrouver la balise ouvrante */
				var elemjsvar2=cartes[$(elemjqvar2).data("value")]; /* carte générique de la seconde carte en cours de test pour retrouver la balise ouvrante */
				
				while(elemjsvar2.nom != (elemjsvar.nom).substr(0,(elemjs.nom).length-2)){ //tant que le second element en cours de test n'est pas la balise ouvrante correpondante à la balise fermante
					
					if(elemjqvar2.is(":first-child")==false){ //si le second element en cours de test n'est pas le 1er element de la ligne
						score=score+elemjsvar2.score; //ajout du score de la seconde carte en cours de test au score
						elemjqvar2=$(elemjqvar2).prev(); //on recule la seconde carte en cours de test d'un element
						elemjsvar2=cartes[$(elemjqvar2).data("value")];
					}
					else{
						score=score+elemjsvar2.score; //ajout du score de la seconde carte en cours de test au score
						numLi=numLi-1; //décrémentation de 1 de numLi (numero de ligne de la seconde carte en cours de test)
						elemjqvar2=$('[data-ligne="'+numLi+'"] img:last-child'); //change la seconde carte en cours de test en le dernier element de la ligne numLi
						elemjsvar2=cartes[$(elemjqvar2).data("value")];
					}
				}
			}
		
		
		elemjqvar=$(elemjqvar).next(); //on avance la carte en cours de test d'un element
		valeur=$(elemjqvar).data('value');
		elemjsvar=cartes[valeur];
		}
		ligne=ligne+1; //incrémentation de la ligne de 1
	}
}

/**********


FONCTION DE CALCUL DU SCORE 
Cette fonction ajoute au score, le score associé à la dernière carte ajoutée


**********/

function calculScore2(drag){
	
	var score=0;
	var elemjq=drag; // carte en cours de test initialisée au dernier élément posé
	var posey=$(elemjq).data("value");  /* valeur de la carte en cours de test initialisée à la dernière carte posée */
	var elemjs=cartes[posey]; /* carte generique de la carte en cours de test initialisée à la dernière carte posée */
	
	var poseyprec=$('.ligne .carte-jeu').eq(-2).data('value'); /* valeur de la carte precedente la carte en cours de test */
	var elemjsprev=cartes[poseyprec];	/* carte generique de la carte precedente la carte en cours de test */
	
	var numeroLi=$(elemjq).parent().parent().data("ligne"); /* numero de ligne de la carte en cours de test initialisé au dernier element posé */

	if(elemjs.type != 'ferm'){ //si le type de la carte en cours de test n'est pas une balise fermante
		if(elemjs.nom=='ipsum'){ // si la carte en cours de test est une carte texte 'ipsum'
			if(elemjsprev.nom=='lorem'){ // si la carte précédente est une carte texte 'lorem'
				score=score+1; // incrémentation du score de 1  // ou score++;
			}
		}
		score=score+elemjs.score; //ajout du score de la carte en cours de test au score

}else{		
		while(elemjs.nom != (cartes[$(drag).data("value")].nom).substr(0,(cartes[$(drag).data("value")].nom).length-2)){ 
		//tant que l'element en cours de test n'est pas la balise ouvrante correpondante à la balise fermante de la carte posée
			
			if(elemjq.is(":first-child")==false){ //si l'element en cours de test n'est pas le 1er element de la ligne
				score=score+elemjs.score; //ajout du score de la carte en cours de test au score
				elemjq=$(elemjq).prev(); //on recule la carte en cours de test d'un element
				elemjs=cartes[$(elemjq).data("value")];
				console.log('non first child');
			}
			else{
				score=score+elemjs.score; //ajout du score de la carte en cours de test au score
				numeroLi=numeroLi-1; //décrémentation de 1 de numeroLi (numero de ligne de la carte en cours de test)
				elemjq=$('[data-ligne="'+numeroLi+'"] img:last-child'); //change la carte en cours de test en le dernier element de la ligne numeroLi
				elemjs=cartes[$(elemjq).data("value")];
				console.log('first child'+numeroLi);
			}
		}
		score=score+elemjs.score;
	}
	return score;
}

