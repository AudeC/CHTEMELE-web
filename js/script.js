/* script.js */

function dragnDrop()
{ 
	$(".carte-jeu").draggable({
		revert: true
	});
	$(".carte-drop").droppable({
		accept: ".carte-jeu",
		//hoverClass: 'droppable-hover',
		drop: function(event, ui) {
			var drop = $(this); //élément d'accueil
			var drag = $(ui.draggable[0]); // élément qui va être déplacé
			$(drag).parent().remove(); // suppression du li dans lequel se trouvait la carte
			$(drag).appendTo(drop); // déposer la carte sur la ligne
			$(drag).removeAttr("style");
			$(drag).removeAttr("title"); //suppression de l'attribut title de la carte déposée
			$(drag).removeAttr("data-uk-tooltip"); //suppression du data-uk-tooltip de la carte déposée
			$(drag).removeAttr("data-cached-title"); //suppression du data-cached-title de la carte déposée
			// drag.draggable("disable");			
		}
	});
}

//dragnDrop();

