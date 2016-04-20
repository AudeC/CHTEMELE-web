/* script.js */


/* VARIABLES GLOBALES */
var condition = ""; 
var etapes = [
["Bienvenue dans le CHTEMELE ! En 11 petites étapes, tu auras toutes les cartes en main (c'est le cas de le dire) pour te lancer dans la grande aventure du HTML. Prêt pour l'aventure ?<br /><br /> Tout d'abord, parce qu'un train ne démarre jamais sans sa locomotive, tout code commence par une seule et même carte. Le &lt;HTML&gt; permet de créer le document où tu pourras « coder. » <br><strong>Étape 1 : Placer la carte &lt;HTML&gt; pour créer le document où sera le code</strong>", "<html>"], 

["Parfait ! Maintenant, nous sommes fins prêts à commencer à faire du HTML… Mais le HTML, c'est quoi, au fait ? <br />Il s'agit d'un langage qui se base principalement sur ce qu'on nomme des \"balises\", autrement dit des repères à placer un peu partout sur un document pour déterminer ses différentes parties. En fait, une balise, c'est comme un sac ; on l'ouvre, on met des choses dedans, et après on le referme pour que le contenu ne s'en aille pas. Un document, c'est un tas de sacs plus ou moins grands, et parfois emboîtés les uns dans les autres.<br /><br />Dit comme ça, pas très passionnant, alors rien ne vaut la pratique, n'est-ce pas ? Pour ouvrir une balise, c'est comme avec le &lt;HTML&gt; (qui est une balise aussi, d'ailleurs), il faut trouver une carte de la forme &lt;BALISE&gt; où BALISE représente souvent un mot peu francophile. Comme par exemple, essayons dès maintenant, la balise de titre qui est symbolisée par un &lt;H1&gt; ! Place la sur le plateau.<br /><strong>Etape 2 : Créer la première balise en ouvrant un &lt;H1&gt;</strong>", "<h1>"],

["Maintenant qu'on a ouvert notre sac, il est temps de le remplir. Les balises peuvent contenir du texte, des images, des liens, d'autres balises diverses et variées.. En fait, à part quelques exceptions, on peut mettre tout ce que l'on veut à l'intérieur.<br />Nous, avec un titre, on voudrait bien rajouter un peu de texte. Cherche donc la carte LOREM et place-la sur le plateau.<br /><strong>Etape 3 : Mettre du contenu dans la balise, placer un \"LOREM\" </strong> ", "lorem"],

["Bravo, tu as rempli une balise ! Dans le CHTEMELE, deux cartes permettent d'ajouter du texte : les LOREM et les IPSUM. Cela fait référence aux \"textes de substitution\" qui s'utilisent par exemple en web et en imprimerie pour remplir une page de mots latins au hasard afin de tester une mise en page.<br /><br />Maintenant qu'on a tout ça, il est temps de refermer le sac ! En HTML, il y a des balises ouvrantes (comme le &lt;H1&gt; et le &lt;HTML&gt) qui permettent, comme leur nom l'indique, d'ouvrir une balise, tandis que les balises fermantes sont là pour les fermer. Une balise fermante, elle se présente toujours sous la forme &lt;/BALISE&gt;, seul changeant le / pour marquer la différence.<br />De là, on en déduit notre prochaine carte.. Il est grand temps en effet de poser la carte &lt;/H1&gt; pour terminer ce travail ! <br /><strong>Etape 4 : Fermer la balise avec un &lt;/H1&gt;.</strong>", "</h1>"],

["Félicitations pour cette première balise ! Comme tu peux le voir, la fenêtre à droite de ton écran affiche en direct le résultat de ce que tu es en train de créer. Cela te sera notamment très pratique lorsque tu seras libre de tes cartes. Ensuite, partons à la découverte d'une autre balise, car cette univers est bien trop vaste pour se contenter d'un seul titre, n'est-ce pas ? Il est impossible de \"surfer\" sur le web sans cliquer sur des liens de droite et de gauche, mais en tant qu'initié, tu sauras désormais que tu cliques en réalité sur des balises &lt;A&gt; ! Les &lt;A&gt;, comme leur nom l'indiquent peu, permettent de créer des liens, notamment entre différentes pages d'un site internet. À toi de jouer ! <br /><strong>Etape 5 : Créer un &lt;A&gt; pour avoir un lien.</strong>", "<a>"],

["On est bien partis ! Mais avant que tu ne te jettes sur un nouveau LOREM pour faire comme tout à l'heure, laisse-moi t'apprendre une chose de plus sur le HTML. Si tu veux - à tout hasard - un lien vers la page http://www.chtemele.org, comment ton code va-t-il savoir vers quelle page se rendre ? Il n'est pas très doué pour lire dans les pensées, c'est pourquoi nous devons le lui préciser aussi.<br /><br />En HTML, on utilise ainsi les \"attributs\" pour préciser des informations à propos d'une balise. Sur un lien en particulier, on va donner l'adresse à laquelle on souhaite se rendre, mais on peut aussi lui donner un petit nom par exemple, via un ID ou un NAME ! Dans le CHTEMELE, et dans la vrai vie aussi, tu trouveras les attributs sous la forme ATTRIBUT=\"\", sachant qu'on mettra ce que l'on appelle la valeur de l'attribut entre les guillemets. Essaie donc de poser l'attribut HREF ! <br /><strong>Etape 6 : Choisir l'attribut HREF qui spécifie la cible du lien</strong>", "href=''"],

["Et voilà, notre balise est plus utile comme ça n'est-ce pas ? Afin de voir si tu n'as pas perdu le fil, à toi d'accomplir les deux prochaines étapes, qui consistent à remplir et à fermer notre fameuse balise &lt;A&gt;.<br /><strong>Etape 7 : Placer encore un lorem</strong", "lorem"],

["Etape 8 : fermer le lien &lt;/A&gt;", "</a>"],

["Parfait ! Maintenant que tu as (du moins je l'espère) tout compris des balises et des attributs, nous allons voir un type de balise un peu différent. Souviens-toi, on avait parlé de sacs qui s'ouvrent, se remplissent et se ferme.. Mais il existe certains sacs que l'on ne peut ni ouvrir ni remplir, ils sont fermés sitôt qu'ils sont ouverts et ne peuvent être \"personnalisés\" qu'avec ces fameux attributs.<br />Afin de rester dans le concret, évoquons le cas le plus courant de \"balise unique\" (ou balise autofermante, indépendante, comme tu préfères) : les images. En effet, une image, c'est une balise, mais elle se suffit à elle-même alors on n'a pas besoin de placer du contenu dedans. Comme toute balise de ce type, la balise image s'écrit &lt;IMG /&gt; où tu noteras bien la présence du slash sur la fin. À toi de la placer !<br /><strong>Etape 9 : placer image &lt;IMG /&gt;</strong>", "<img />"],

["Pour l'instant, on a juste choisi de placer une image, mais ça manque un peu d'informations tu ne trouves pas ? Tant qu'à faire, on aimerait bien pouvoir choisir quelle image on veut poser n'est-ce pas ? Rien de plus simple avec l'attribut SRC (comme source) ! Essaie de le poser.<br /><strong>Etape 10 : placer SRC</strong>", "src=''"],

["Et voilà, comme tu peux le constater sur la droite, le résultat ressemble tout de suite plus à une image maintenant, n'est-ce pas ? Tu sais désormais tout ce qu'il faut savoir pour jouer au CHTEMELE, bien qu'il te reste encore d'autres balises et attributs à découvrir le long de ton épopée… Et quoi de mieux pour ça que la pratique ? Même si c'est sans doute avec les larmes aux yeux, il est temps pour toi d'apposer la touche finale à ton premier code, en posant aussitôt la carte &lt;/HTML&gt;.. <br /><strong>Etape 11 : Fermer le html</strong>", "</html>"],


];
var id_etape = 0; // id de la prochaine étape  
var tuto_stop = 0; // Permet d'afficher le tuto quand c'est ok (=0)
var tuto_active = 0; 
var scoretot=0;

var finir_jeu = false; // on peut finir le jeu 
var dern = new Object();
dern.defausse = ""; // contient la dernière carte jetée à la défausse  
dern.pioche = 0; // contient l'ID de la dernière carte piochée 
dern.action = ""; // contient la dernière action. Valeurs : "pioche", "defausse", "drag" ou "" (vide)
dern.scoretot_prec=0;


$(document).ready(function(){
	$('.tuto').click(function(){
		tuto_active = 1; 
		if(id_etape>0){ 
			id_etape--; 
		}
		afficherEtape(id_etape); 
		
	});

	$('#arreter_tuto').click(function(){
		tuto_active = 0; 
	}); 
	
	supprimerCarte();
	
});




function DragnDrop(){

	$(".carte-jeu").draggable({
		revert:true,
	});

	$(".carte-drop").droppable({
		accept: ".carte-jeu",
		hoverClass: 'droppable-hover',
		drop: function(event, ui) {
			var drop = $(this); //élément d'accueil, zone de drop
			var drag = $(ui.draggable[0]); // élément qui va être déplacé
			
			var restriction = restreindre(drop, drag); 
			var dragndrop_ok = restriction[0]; // Insérer ici les restrictions sur les cartes
				// Si on ne peut pas poser une carte, on remplit msg et on met cette valeur à false
			var msg = restriction[1];

			if($(drop).find('.carte-jeu').length >= 6){
				dragndrop_ok = false; 
				msg = "Vous ne pouvez poser que six cartes par ligne ! ";
				$(drop).parent().addClass("disabled").find('.carte-drop').droppable( "option", "disabled", true );
			}
			
			
			
			if(tuto_active == 1){
				if($(drag).data('value') == condition){
					// Si c'est bon.. 
				
				}else {
					var dragndrop_ok = false;
					msg = "Vous ne pouvez pas poser cette carte (tutoriel)";
				}
			}
			
			if(dragndrop_ok){
			
				$(drag).unbind('mouseup'); 
				$(drag).appendTo(drop); // déposer la carte sur la ligne
				//$(drag).removeAttr('title');
				$('.tooltip').remove(); 
				dern.scoretot_prec = scoretot; // On stocke le score précédent 
				scoretot=scoretot+calculScore2(drag);
				actualiserScore(); 
				
				if(($(drag).data('type') == 'attr')){ // Si c'est un attribut	
							attr = $(drag);  
							var attr_nom = Dico.getNom(attr); // instance de Carte
							tuto_stop = 1; 
							// Et là, on enlève le dernier caractère de la balise ou de l'attr précédente
							modifierPrev(); 
						
							if($(drag).data('value') == "src=''"){ // cas du src
								modifierImage($(drag)); 
							}else {
								remplirVal('Donnez une valeur à l\'attribut '+attr_nom, attr);
							}
							
				}
					
				if($(drag).data('type') == 'text'){
					tuto_stop = 1; 
					remplirVal("Choisissez le texte à entrer", $(drag)); 
				}
				
				// Fin du dragndrop, on règle les derniers détails.
				previewCode(); //affiche la preview du code
				drag.draggable("disable");	
				$(drop).parent().next().fadeIn(); // On affiche la ligne suivante
				$(drop).parent().prev().addClass("disabled").find('.carte-drop').droppable( "option", "disabled", true );
				
				// On affiche la possibilité de faire précédent 
				afficherPrecedent('drag'); 
				
				// On lance la prochaine étape du tuto si tuto il y a.
				if(tuto_active == 1){
					if(etapes[id_etape]){
						if(tuto_stop == 0) afficherEtape(id_etape);
					} else {
						$('#modal_tuto .modal-body').html("Vous avez fini le tutoriel !");
						$('#modal_tuto').modal();
						tuto_active = 0; 
						id_etape = 0;
						$('.tuto h5').text("Refaire le tutoriel");
					}
				}
				
				if(finir_jeu){
					finirJeu(); 
				}
				
			}else{ // Si on peut pas poser la carte
				
				alertMessage(msg, "Impossible de poser la carte !"); 
				
			}
		}
	});
}


/* AFFICHER UNE ETAPE DU TUTO */ 
function afficherEtape(id_e){	
		$('#modal_tuto .modal-body').html(etapes[id_e][0]);
		$('#modal_tuto').modal({"backdrop": "static"});
		condition = etapes[id_e][1]; 
		id_etape = id_e+1; 
		piocherCartePrecise(condition);
}



function piocherCartePrecise(value, precedent){ // A partir d'un data-value 
	
	var randomCard = Dico.getCarteByValue(value);
	id++; // var globale id pour les cartes
	creerCarte(randomCard);
	DragnDrop();	
	if(precedent){ // Si on peut annuler 
		afficherPrecedent("pioche"); 
	} else {
		afficherPrecedent(false); // Sinon on peut pas annuler 
	}
	
}

// Finit le jeu 
function finirJeu(){
	alertMessage('Vous avez fini le jeu ! Votre score: '+$('.score b').text(), "Félicitations");
	$('.carte-drop').addClass("disabled").droppable( "option", "disabled", true );
	$('.carte-jeu').addClass("disabled").draggable( "option", "disabled", true );
	$(".modal-footer").append('<a href="http://chtemele.mmi-lepuy.fr/jouer.html"><button class="btn btn-primary">Recommencer</button></a>');
}

// Modifie et affiche le modal divers
function alertMessage(texte, titre){

	if(titre){
		$('#modal_divers .modal-title').html(titre);
	}
	$('#modal_divers .modal-body').html(texte);
	$('#modal_divers').modal({"backdrop": "static"});
		
}

// Restrictions
function restreindre(dro, dra){	
	var dragndrop_ok = true; 
	var msg = "Vous ne pouvez pas"; 
		if($('.ligne .carte-jeu').length==0 && $(dra).data('value')!="<html>"){
			dragndrop_ok = false;
			msg="Il faut tout d'abord poser la carte HTML";
		}
		else{switch($(dra).data('value')) {
		
			case '</html>':
				finir_jeu = true;  
			case '</h1>':
			case '</h2>':
			case '</h3>':		
			case '</a>':		
			case '</p>':		
			case '</strong>':
			case '</em>':		
			
			var bool=0;
			var v1=Dico.getCarteByValue($(dra).data('value')).nom;
			var v2=v1.substr(0, v1.length-2);
				$('.ligne [data-type="ouvr"]:not([data-value="<'+v2+'>"])').each(function(){
					var v3=Dico.getCarteByValue($(this).data('value')).nom;
						
					if($('.ligne [data-value="<'+v3+'>"]').length==$('.ligne [data-value="</'+v3+'>"]').length){
					}
					else{
						bool=1;
					}
				});
				
				if( trouverDerniereBaliseOuvrante() == v2){ 
				//if($('.ligne .carte-jeu[data-type="ouvr"]').last().data('value') =='<'+v2+'>'){ 
				// Si la dernière carte posée ou la première carte ouvrante précédente posée correspond à la carte fermante que l'on souhaite poser, alors on peut poser
					bool = 0;
				}
				else {
					if(($('.ligne [data-value="<'+v2+'>"]').length==$('.ligne [data-value="</'+v2+'>"]').length) || (bool==1)){
					// Là on ne peut pas 
						console.log(bool+" bool");
						console.log($('.ligne .carte-jeu[data-type="ouvr"]').last().data('value'));
						dragndrop_ok = false; 
						msg = "Vous ne pouvez pas poser cette carte car la balise ouvrante correspondante n'existe pas, ou alors toutes les balises posées précédemment n'ont pas été fermées.";
					}
					
				}
						
			break;
				
			case "src=''":
				if($('.ligne .carte-jeu:not([data-type="attr"])').last().data('value')!='<img />'){
					dragndrop_ok = false; // Insérer ici les restrictions sur les cartes
					msg = "Cette carte doit être précédée de la carte &lt;img /&gt;";
				}
			
			break;
			
			case "href=''":
				if($('.ligne .carte-jeu:not([data-type="attr"])').last().data('value')!='<a>'){
					dragndrop_ok = false; // Insérer ici les restrictions sur les cartes
					msg = "Cette carte doit être précédée de la carte &lt;a&gt;";
				}
			
			break;
			case "alt=''":
			
			case "id=''":	
				
			case "class=''":	
			
			case "name=''":
				if($('.ligne .carte-jeu:not([data-type="attr"])').last().data('type')!="ouvr" && $('.ligne .carte-jeu:not([data-type="attr"])').last().data('type')!="ind"){
					dragndrop_ok = false; // Insérer ici les restrictions sur les cartes
					msg = "Cette carte doit être précédée d'une carte <...> ou <... />";
				}
				
			break;
			
			// default:
				
		}
	}
	return [dragndrop_ok, msg];
}


// Test - permet de trouver la dernière balise ouvrante non fermée 
function trouverDerniereBaliseOuvrante(){
	var bool =0;
	var i = 1;
	var last, lastNom;
	//var ids = [];
	
	while(bool == 0){ // Tant qu'il existera une balise fermante pour cette balise 
		last = $('.ligne .carte-jeu[data-type="ouvr"]').eq(-i); // derniere balise ouvrante : -1, puis on remonte
		if($(last).length != 0)
		{
			lastNom = Dico.getNom($(last));
			console.log(lastNom);
			var fermantes = $('.ligne .carte-jeu[data-value="</'+lastNom+'>"]');
			var ouvrantes = $('.ligne .carte-jeu[data-value="<'+lastNom+'>"]');
			if(fermantes.length == 0){ // s'il n'existe pas une balise fermante
				bool = 1;
			}else if(ouvrantes.length >= fermantes.length+1){ // S'il existe une balise fermante et qu'il y a une balise fermante de moins que d'ouvrantes
				bool = 1;
				
			}
		} else { bool = 1; } // Il n'y a pas de précédente balise ouvrante. 
		i++;
	}
	return lastNom;
}

function supprimerCarte(){
	$(function(){
		$('#cartes .carte-jeu').mouseup(function(e){
			var isCtrlPressed = e.ctrlKey;
			if(isCtrlPressed){
				$(this).remove();
				$('.tooltip').remove(); 
			}
		});
	});
}


// Annule la précédente action s'il s'agit de piocher une carte, jeter une carte ou poser une carte
function precedent(){
	switch(dern.action){ // On switche la valeur de la dernière action, var globale
		case "pioche":
			if(dern.pioche){
				$('#'+dern.pioche).remove(); 
				return true;
			} else return false;
		break;
		case "defausse":
			if(dern.defausse){
				piocherCartePrecise(dern.defausse, false); // le "false" permet de dire qu'on ne veut pas activer le précédent 
				return true; 
			}
			else return false; 
		break;
		case "drag":
			//$('.ligne .carte-jeu').eq(-1).appendTo("#cartes").removeClass('ui-draggable-disabled ui-state-disabled').removeAttr("aria-disabled"); 
			//			DragnDrop(); 
			var last = $('.ligne .carte-jeu').eq(-1);
			piocherCartePrecise($(last).data("value"), false); 
			$(last).remove();
			scroretot = dern.scoretot_prec; 
			actualiserScore(); 
			return true; 
		break;
		default: 
		return false; 
	
	}
	afficherPrecedent(false); 
}

// actualise le score 
function actualiserScore(){
	$('h5.score').html('Votre score : <b>'+scoretot+'</b>');

}

// Affiche un bouton "précédent" si il est possible de revenir en arrière 
function afficherPrecedent(arg){
	if(arg){ // Si on a donné un argument
		dern.action = arg; 
	} else {
		dern.action = ""; 
	}
	$('#precedent').remove(); 
	if(dern.action != ""){
		$('body > header > div.col-md-6').append('<h5 data-toggle="tooltip" id="precedent" data-placement="bottom" title="" class="btn btn-lg btn-primary" data-original-title="Annule la dernière action"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></h5>');
		$('#precedent').click(function(){
			precedent(); 
		}); 
	} 
}



