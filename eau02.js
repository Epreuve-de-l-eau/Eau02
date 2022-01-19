#! node
let chiffre = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let nb = [];
let grp = [];

//Fonction qui fait un tableau de nombre entre 0 et 99
let nombre = (chiffre) => {
  let i = 0;
  for (let n = 0; n < chiffre.length; n++) {
    for (let nn = 0; nn < chiffre.length; nn++) {
      nb[i] = chiffre[n] + chiffre[nn]
      i++
    }
  }
}
//Fonction qui fait fait toutes les combinaisons de deux nombres différents
let groupe = (nb) => {
  let j = 0;
  for (let a = 0; a < nb.length; a++) {
    for (let b = a + 1; b < nb.length; b++) {
      grp[j] = nb[a] + nb[b]
      j++
    }
  }
  grp = grp.toString()
}

//Gestion des erreurs
if (process.argv.length > 2) {
  console.log("Le script n'a pas besoin d'argument pour fonctionner.")
  return
}

//Résolution du problème
nombre(chiffre)
groupe(nb)

//Affichage du Résultat
console.log(grp)
