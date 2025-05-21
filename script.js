function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      
       let articlePricipal = document.getElementById('article-prncipal');
      console.log(articlePricipal);
      
      let dataArticlePrincipal = data.journal.articlePrincipal;

      let h1 = document.createElement('h1');               
      h1.textContent = dataArticlePrincipal.titre

      articlePricipal.appendChild(h1)
          

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici