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

      let articleTitre = document.createElement('h2')                
        let articleDate =  document.createElement('p')
        let articleTheme = document.createElement('h4')
        let articleImage = document.createElement('img')


        articleTitre.textContent = dataArticlePrincipal.titre        
        articleDate.textContent = dataArticlePrincipal.date
        articleTheme.textContent = dataArticlePrincipal.theme
        articleImage.src = dataArticlePrincipal.image

      articlePricipal.appendChild(articleTitre)
      articlePricipal.appendChild(articleDate)
      articlePricipal.appendChild(articleTheme)
      articlePricipal.appendChild(articleImage)
          
      
      let articles = data.journal.articles;
      let articlesContainer = document.getElementById(`articles`)
      // foreach
      articles.forEach(article => {
        let cardArticle = document.createElement('article')
        let h1 = document.createElement('h1');               
      h1.textContent = article.titre

      let articleTitre = document.createElement('h2')                
        let articleDate =  document.createElement('p')
        let articleTheme = document.createElement('h4')
        let articleImage = document.createElement('img')


        articleTitre.textContent = article.titre        
        articleDate.textContent = article.date
        articleTheme.textContent = article.theme
        articleImage.src = article.image

      cardArticle.appendChild(articleTitre)
      cardArticle.appendChild(articleDate)
      cardArticle.appendChild(articleTheme)
      cardArticle.appendChild(articleImage)
      articlesContainer.appendChild(cardArticle)
      });



      let animauxContainer = document.getElementById('animaux-container');
      console.log(animauxContainer);


      // `${jounral.nom} - ${journal.date}`


       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici