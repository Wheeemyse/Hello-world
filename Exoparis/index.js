function verif_champ() {
  var prenom = document.getElementsByName('prenom') == ""
  alert('<b>Erreur</b><br/><br/>Le champs est vide');
  return false;
}
