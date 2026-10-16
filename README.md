# Portfolio de Younes AROUK — octobre 2026

Portfolio en français, actualisé à partir du CV d’octobre 2026.
Site statique HTML/CSS/JavaScript, prêt à être placé sur GitHub et hébergé sur Vercel.

## Contenu actualisé

- Profil et recherche de stage PFE.
- Cinq expériences : alternance DRE, stage PFA OTA chez SEGULA Technologies, Auto Hall et deux stages OCP.
- Cycle d’ingénieur, licence professionnelle, DUT et baccalauréat.
- Compétences du CV regroupées en neuf cartes, avec les mentions « notions » et « bases ».
- Cinq projets : ADAS sur robot 4WD, somnolence, freinage régénératif, coach de conduite et suspension.
- L’intégration matérielle du projet ADAS est indiquée comme prévue.
- Deux certifications : MathWorks/Coursera et Starweaver.
- Arabe : langue maternelle ; français : B2 ; anglais : B1.
- Deux PDF à télécharger : CV avec photo et CV sans photo (ATS).

## 1. Ouvrir sur votre PC

1. Téléchargez puis extrayez entièrement le ZIP (clic droit → Extraire tout).
2. Ouvrez `index.html` dans votre navigateur.
3. Conservez `styles.css`, `app.js` et le dossier `assets` à côté de `index.html`.

La copie automatique de l’email nécessite généralement HTTPS ; l’adresse reste
visible et sélectionnable lorsqu’un navigateur limite le presse-papiers en local.

## 2. Mettre à jour votre dépôt existant cv-web-

Votre dossier de travail connu est `C:\Users\HP\cv-web-`.

1. Copiez tout le contenu extrait dans ce dossier et acceptez le remplacement des
   fichiers correspondants. Le nouveau `index.html` affiche le portfolio en page d’accueil.
2. Le dossier `assets` contient la photo et les deux CV. Copiez-le avec les autres fichiers.
3. Placez `index.html` directement à la racine de `cv-web-`, au même niveau que
   `styles.css`, `app.js`, `README.md` et `vercel.json`.
4. Ouvrez CMD et exécutez les commandes suivantes une par une :

```bat
cd /d "C:\Users\HP\cv-web-"
git status
git add -- index.html styles.css app.js assets vercel.json .vercelignore README.md .nojekyll
git diff --cached --stat
git commit -m "Actualisation du portfolio et configuration Vercel"
git push origin main
```

Vérifiez que la liste affichée avant le commit correspond aux changements souhaités.
En cas d’erreur, conservez le message complet pour identifier le problème.
Si vous utilisez l’interface GitHub : Add file → Upload files, puis déposez les
fichiers extraits avec leur dossier `assets` et enregistrez le commit.

## 3. Héberger sur Vercel

1. Ouvrez https://vercel.com/new et connectez votre compte GitHub.
2. Autorisez Vercel à accéder au dépôt `YounesArouk/cv-web-`.
3. Sélectionnez ce dépôt puis cliquez sur **Import**.
4. Vous pouvez nommer le projet `younes-arouk-portfolio` si ce nom est disponible.
5. Conservez la racine du dépôt comme **Root Directory** (valeur par défaut).
6. Vérifiez les réglages suivants :

| Réglage | Valeur |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Racine du dépôt, valeur par défaut |
| Build Command | Vide : aucune compilation |
| Install Command | Vide : aucune dépendance à installer |
| Output Directory | `.` |

Le fichier `vercel.json` fourni définit déjà le framework, les commandes et le
 dossier de sortie. Aucun package npm ni variable d’environnement n’est requis.

7. Cliquez sur **Deploy**.
8. À la fin, ouvrez l’URL fournie par Vercel. Vérifiez la photo, les cinq fiches
   projets, le menu mobile et les deux téléchargements PDF.

Les prochains envois sur la branche de production connectée (normalement `main`)
déclenchent une nouvelle publication. L’archive préparée n’est pas encore déployée
dans votre compte Vercel.

## Fichiers à conserver

| Fichier | Rôle |
| --- | --- |
| `index.html` | Contenu du portfolio |
| `styles.css` | Mise en page et adaptation aux écrans |
| `app.js` | Menu mobile, fiches des projets et copie de l’email |
| `assets/younes-arouk.jpg` | Photo issue du nouveau CV |
| `assets/CV_AROUK_Younes.pdf` | CV avec photo, une page |
| `assets/CV_AROUK_Younes_ATS.pdf` | CV sans photo, une page |
| `vercel.json` | Configuration de publication Vercel |
| `.vercelignore` | Exclusion du guide, des ZIP et de l’ancien dossier LP MQSE du déploiement |
| `.nojekyll` | Compatibilité avec GitHub Pages |

Le profil LinkedIn est indiqué par son nom, sans URL inventée.
Les images, styles, scripts et PDF sont inclus : aucun service de police externe.
Pour modifier le contenu, éditez `index.html` et les fiches de l’objet `projects`
dans `app.js`. Remplacez les PDF dans `assets` en conservant leurs noms.

## Documentation officielle

- https://vercel.com/docs/getting-started-with-vercel
- https://vercel.com/docs/builds/configure-a-build
- https://vercel.com/docs/project-configuration/vercel-json
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
