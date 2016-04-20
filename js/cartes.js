/* 
	VARIABLES GLOBALES 
	Peuvent être modifiées ou utilisées par les fonctions présentes dans ce fichier
	et les deux autres scripts javascript
*/
var id = 0; // ID de la carte
var cartes = new Object(); // Tableau qui contiendra toutes les cartes en guise de référence
var Dico = new Carte();  // Permet d'appeler les fonctions
var images = ['choix_1.jpg', 'choix_2.jpg', 'choix_3.jpg']; // Pour l'attribut src
var pioche; // Initialisée par creerPioche(),
var preview = ''; 

 
/*
	Classe Carte - utilisée pour chacune des cartes du jeu
	Contient également des fonctions utilisées via la variable Dico 
*/		
function Carte(nom, val, nb, type, score, assoc, info){
	this.img = 'images/'+nom+'.png';
	this.nom = nom; // Nom de la carte. ex ; html
	this.value = val; // Valeur html. ex ; <html>
	this.type = type; // Type de carte : ouvr, ferm, ind, attr, text
	this.nb = nb; // Nombre d'exemplaires de la carte (pour la pioche)
	this.score = score; // Score qu'on gagne, si celui-ci n'est pas calculé
	this.assoc = assoc; // Balise avec lesquelles on peut mettre si attr (tableau)
	this.info = info; // Infobulle
	
	this.getNom = function(dom){ //  avec élément du dom
		return cartes[$(dom).data('value')].nom; 
	}
	
	this.getCarte = function(dom){ // Retourne une carte d'après un dom (qui a un data-value)
		return cartes[$(dom).data('value')]; 
	}
	
	this.getCarteByValue = function(value){ // Retourne une carte d'après sa value
		return cartes[value]; 
	}	
	
}


// Types :  ouvr, ferm, ind, attr, text
// Assoc : 
	// 1 - carré
	// 2 - rond
	// 3 - étoile (src)	
			
// var nom = newCarte(nom de l'image .nom, valeur html .val, nb cartes .nb, type carte .type, score (si non calculé) .score, associations .assoc, infobulle .info); 
cartes['<html>'] = new Carte('html', '<html>', 1, 'ouvr',  0, [], "La première carte, permet d'ouvrir le document !"); 
cartes['</html>'] = new Carte('html_f', '</html>', 1, 'ferm', 0, [], "Toute dernière carte, pour fermer le document"); 
cartes['<a>'] = new Carte('a', '<a>', 5, 'ouvr', 2, [1, 2], "Ouvrir un nouveau lien"); 
cartes['</a>'] = new Carte('a_f', '</a>', 5, 'ferm', 0, [], "Fermeture de lien"); 
cartes['<em>'] = new Carte('em', '<em>', 4, 'ouvr', 1, [1], "Texte en italique"); 
cartes['</em>'] = new Carte('em_f', '</em>', 4, 'ferm', 0, [], "Fermer un texte en italique"); 
cartes['<h1>'] = new Carte('h1', '<h1>', 1, 'ouvr', 3, [1], "Titre de d'ordre 1"); 
cartes['</h1>'] = new Carte('h1_f', '</h1>', 1, 'ferm', 0, [], "Fermer un titre d'ordre 1"); 
cartes['<h2>'] = new Carte('h2', '<h2>', 2, 'ouvr', 2, [1], "Titre d'ordre 2"); 
cartes['</h2>'] = new Carte('h2_f', '</h2>', 2, 'ferm', 0, [], "Fermer un titre d'ordre 2"); 
cartes['<h3>'] = new Carte('h3', '<h3>', 3, 'ouvr', 1, [1], "Titre d'ordre 3"); 
cartes['</h3>'] = new Carte('h3_f', '</h3>', 3, 'ferm', 0, [], "Fermer un titre d'ordre 3"); 
cartes['<p>'] = new Carte('p', '<p>', 3, 'ouvr', 1, [1], "Ouvrir un paragraphe"); 
cartes['</p>'] = new Carte('p_f', '</p>', 3, 'ferm', 0, [], "Fermer un paragraphe"); 
cartes['<strong>'] = new Carte('strong', '<strong>', 3, 'ouvr', 3, [1], "Texte en gras"); 
cartes['</strong>'] = new Carte('strong_f', '</strong>', 3, 'ferm', 0, [], "Fermer un texte en gras"); 

cartes['lorem'] = new Carte('lorem', 'lorem', 9, 'text', 1, [], "Mettre du texte"); 
cartes['lorem '] = new Carte('lorem', 'lorem', 9, 'text', 1, [], "Mettre du texte");   
cartes['ipsum'] = new Carte('ipsum', 'ipsum', 9, 'text', 1, [], "Mettre du texte");  
cartes['ipsum '] = new Carte('ipsum', 'ipsum', 9, 'text', 1, [], "Mettre du texte");  

cartes['<hr />'] = new Carte('hr', '<hr />', 2, 'ind', 1, [], "Barre de séparation"); 
cartes['<br />'] = new Carte('br', '<br />', 2, 'ind', 1, [], "Sauter une ligne"); 
cartes['<img />'] = new Carte('img', '<img />', 3, 'ind', 2, [1,3], "Créer une image"); 
 
cartes["alt=''"] = new Carte('alt', "alt=''", 2, 'attr', 1, [1], "Attribut pour mettre un texte alternatif"); 
cartes["href=''"] = new Carte('href', "href=''", 2, 'attr', 3, [1], "Attribut pour préciser la source d'un lien"); 
cartes["src=''"] = new Carte('src', "src=''", 2, 'attr', 3, [1], "Attribut pour préciser la source d'une image"); 
cartes["id=''"] = new Carte('id', "id=''", 2, 'attr', 1, [1], "Attribut pour donner un id (un petit nom!) à une balise"); 
cartes["class=''"] = new Carte('class', "class=''", 2, 'attr', 1, [1], "Attribut pour donner une classe (comme un nom de famille) à une balise"); 
cartes["name=''"] = new Carte('name', "name=''", 2, 'attr', 1, [1], "Attribut pour donner un nom à une balise"); 
			
		
		
		$(document).ready(function(){
			
			// Lorsque le jeu commence...
			$('.ligne').hide(); // On cache toutes les lignes
			$('.ligne:first-child').fadeIn(); // On affiche la première
			
			// Au clique sur "PIOCHER", on pioche une carte et on la rend draggable
			$('.piocher').click(function(){
					piocherCarte(); 
					DragnDrop();
			});
			

			// Changement de CSS au clic 
			$('.css1 a').click(function(e){
				e.preventDefault();
				changerCSS('css1');
			});
			
			$('.css2 a').click(function(e){
				e.preventDefault();
				changerCSS('css2');
			});
			
			$('.css3 a').click(function(e){
				e.preventDefault();
				changerCSS('css3');
			});
		
			// Pour le début, on se case sur le CSS1
			$('.css1 a').trigger('click');	
		
			// Création de la pioche
			creerPioche(); 

			// On pioche 4 cartes pour commencer, on active le DragnDrop et la défausse
			piocherCartePrecise('<html>');
			piocherCarte();
			piocherCarte();
			piocherCarte();
			
			DragnDrop();
			Defausse(); 
			
			// Active les tooltip
		   $('[data-toggle="tooltip"]').tooltip(); 
	
		   // On crée le modal avec les images
			for(var i = 0;i < images.length; i++){
				$('#modal_img .modal-body').append('<img src="images/'+images[i]+'" style="width: 100px; height: 100px; "/>');
				
			}
			
			
		
		}); // FIN DU $(document).ready()
		
		
		/*
			fonction previewCode
			Affiche la prévisualisation du code créé par les cartes
		*/
		function previewCode(){ 
			preview = '';  // cf Var globale 
			$('.ligne .carte-jeu').each(function(){ // Pour chaque carte du plateau
				preview += $(this).attr('data-preview');
				// on rajoute son data preview 
			});
			console.log(preview); 
			$('#preview').html(preview); // Puis on affiche ça.
		}
		
		/*
			fonction remplirVal(titre du modal à afficher, élément du dom)
			Permet d'afficher le modal de changement de valeur d'attribut/texte
			Et de rediriger le "traitement" du résultat
		*/
		function remplirVal(texte, elem){
			val = " ";
			var type = $(elem).data('type'); // on récupère le type
			$("#modal_attr").find('h4').html(texte); // On modifie le titre
			$("#modal_attr").modal(); // affiche le modal
			$('#modal_attr #valider_attr').click(function(e){ // Quand on valide
				e.preventDefault(); // permet de ne pas recharger la page
				val = $("#new_attr").prop('value'); // On récupère le texte entré
				$("#modal_attr").modal('hide');	 // cache le modal
				// Ensuite, on sépare selon si c'est un texte ou un attribut
				if(type == "attr"){ 
					modifierAttr(val, elem); // On modifie l'attribut dans le HTML
				} else if(type == "text") {
					modifierText(val, elem); // Idem
				}
				$(this).unbind('click'); // Maintenant qu'on a fini, on désactive l'event qu'on vient de créer.
				
								
								
				// Si on a activé le tuto et qu'on l'avait mis en pause, il reprend.
				if(tuto_active && tuto_stop) { tuto_stop = 0; afficherEtape(id_etape);}
			});
			
				
		}
		
		
	
	/*
		fonction modifierAttr(valeur, attribut à modifier)
		Permet de mettre une valeur donnée à une carte donnée dans son data-preview
		
	*/
	function modifierAttr(val, attr){
		var attr_nom = Dico.getNom(attr); // cf class Carte
		var new_attr = ' '+attr_nom+'="'+val+'" >'; // remplace attr='' par attr='val'>
		$(attr).attr('data-preview', new_attr);
	
		
		previewCode(); 
				
	}
 
	/*
		fonction modifierText(valeur, texte à modifier)
		Permet de mettre une valeur donnée à une carte texte donnée dans son data-preview
	*/
	function modifierText(val, elem){
		var id_attr = $(elem).attr('id'); 
		$('#'+id_attr).attr('data-preview', val+"&nbsp;");
		previewCode(); 
	}
	
	/*
		fonction modifierImage(attribut)
		Remplit un attribut src avec l'affichage d'un modal
	*/
	function modifierImage(attr){
		$('#modal_img').modal(); 
		$('#modal_img .modal-body img').click(function(){ 
		// Quand on clique sur une image...
			var attr_nom = Dico.getNom(attr); // cf class Carte
			var new_attr = ' '+attr_nom+"='"+$(this).attr('src')+"' >";
			// remplace src='' par src="choix_1.png" />  par exemple.
			$(attr).attr('data-preview', new_attr);
			previewCode();
			$(this).unbind('click'); // On désactive car l'event ne sert qu'une fois 
			$('#modal_img').modal('hide');  // cache le modal
			// Si on a activé le tuto et qu'on l'avait mis en pause, il reprend.
			if(tuto_active) { tuto_stop = 0; afficherEtape(id_etape);}
		});
	}


/*
	fonction piocherCarte
	Permet de piocher une carte au hasard
*/
function piocherCarte() 
{
	if($('#cartes img').length >= 15) // on limite le nombre de cartes par joueur, ici à 6
	{
		alert('Vous ne pouvez plus piocher de carte pour l\'instant (max : 15 cartes).');
	}
	else // on ajoute une carte aléatoire
	{
		// Pour éviter la boucle infinie 
		var nbvide =0;
		for(var j = 0; j < pioche.length; j++){
			if(pioche[j] == 'VIDE'){
				nbvide++;
			}
		}
		
		if(nbvide == pioche.length){ // Si on a autant de "VIDE" que d'entrées dans la pioche, et donc qu'il ne reste aucune carte...
			creerPioche(); // On remet à 0 la pioche 
		}
		
		// TIRER UN NUMERO AU HASARD ET TROUVER LA CARTE DE LA PIOCHE QUI VA BIEN
		// On ne craint pas la boucle car on est sûr qu'il y a au moins une carte qui n'est pas vide grâce à la réflexion précédente. 
		do {
			var rand = Math.floor(Math.random()*pioche.length); 
			var randomCard = pioche[rand]; // on choisit aléatoirement une carte dans le tableau "pioche" créé plus haut 
		} while (randomCard == 'VIDE'); // Tant qu'on a pas une carte vide
	
		// Diminuer le nombre d'exemplaires de la carte
		pioche[rand].nb--; 
		if(pioche[rand].nb == 0){ // S'il n'y a plus cette carte, on la supprime de la pioche (d'où l'intérêt de la pioche puisqu'on ne touche pas à "cartes")
			pioche[rand] = 'VIDE'; 
		}
		
		creerCarte(randomCard); // On insère la nouvelle carte dans le HTML. 
		afficherPrecedent("pioche"); 
	}

		
}

/*
	fonction Defausse
	défausse du jeu (permet de supprimer une carte pour pouvoir en piocher une autre)
*/
function Defausse(){ 

	$(".poubelle").droppable({ // On crée une zone de dépot des cartes (jquery UI)
		accept: ".carte-jeu", // Ne prend que les cartes
		hoverClass: 'droppable-hover',
		drop: function(event, ui) { // Quand on pose une carte
			var drop = $(this); //élément d'accueil, zone de drop
			var drag = $(ui.draggable[0]); // élément qui va être déplacé
			$(drag).fadeOut(500, function(){ $(this).remove(); }); // suppr la carte
			$('.tooltip').remove(); // Supprime son tooltip, sinon il reste..
			dern.defausse = $(drag).data("value"); 
			afficherPrecedent("defausse"); 
		}
	});

 }

 /*
	fonction creerCarte(objet de type Carte)
	Crée une carte dans le HTML, utilisé par piocherCarte et piocherCartePrecise().
*/
 function creerCarte(randomCard){
	 id++; // var globale id pour les cartes
		var newCard = '<img id="'+id+'" data-value="'+randomCard.value+'" data-preview="'+randomCard.value+'"  src="'+randomCard.img+'" class="carte-jeu" data-type="'+randomCard.type+'" data-toggle="tooltip" data-placement="top" title="'+randomCard.info+'"/>'; // html de la carte
		$(newCard).appendTo('#cartes').css('opacity', 0).animate({'opacity': 1}); // on ajoute la carte
		 $('[data-toggle="tooltip"]').tooltip(); // Active les tooltip
		 supprimerCarte(); // Permet de supprimer la carte au ctrl+click 
		 dern.pioche = id; 
		 
 }
 

 /*
	fonction changerCSS('css1'/'css2'/'css3')
	rend actif le css donné pour la preview, utilisé dans $(document).ready()
*/
 function changerCSS(cl){
	 $('#preview').removeClass('css1 css2 css3').addClass(cl);
				$('.css .active').removeClass('active');
				$('.'+cl).addClass('active');
 }
 
  /*
	fonction creerPioche()
	remet la pioche à zéro en copiant cartes[] 
*/
function creerPioche(){
	// $.map Convertit l'objet en tableau
	pioche = $.map(cartes, function(value, index) {
		return [value];
	});
}	

// Modifie l'avant-dernière balise (data preview) pour "coller" un attribut
function modifierPrev(){
	var prev = $('.ligne .carte-jeu').eq(-2); 
	var prev_dp = prev.attr('data-preview');
	if(prev.data('type') == attr){
		var str = prev_dp.substring(0, prev_dp.length-1); // Enlève le > 
		$(prev).attr('data-preview', str); 
	} else {
		var str = prev_dp.substring(0, prev_dp.length-1)+' ';
		$(prev).attr('data-preview', str); 
	} 
}
				