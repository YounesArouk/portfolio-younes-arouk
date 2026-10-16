# Fichiers complets pour ajouter vos photos

Ce dossier contient les versions COMPLÈTES de index.html, styles.css et app.js.

## Installation dans votre projet existant

1. Extrayez le ZIP.
2. Copiez index.html, styles.css et app.js dans :
   C:\Users\HP\Desktop\Portfolio_Younes_AROUK
3. Acceptez le remplacement de ces trois fichiers.
4. Fusionnez le dossier assets/photos avec votre dossier assets existant.
5. Gardez votre nouvelle photo assets/younes-arouk.jpg et vos deux PDF.
   Ce ZIP ne contient ni photo de profil ni PDF : il n’écrase pas ces fichiers.

## Photos attendues dans assets/photos

| Section | Fichiers |
| --- | --- |
| Formations | ensa.jpg, est.jpg, bac.jpg |
| Expériences | segula.jpg, auto-hall.jpg, ocp.jpg |
| Projets | adas.jpg, dms.jpg, ev.jpg, can.jpg, cao.jpg |

Une même photo SEGULA sert au DRE et au stage PFA ; la photo OCP sert aux deux stages.
Le nom doit correspondre exactement, y compris l’extension et les majuscules.
Pour un PNG, changez uniquement le chemin src correspondant dans index.html.
Les photos ne sont pas fournies : ajoutez celles que vous avez choisies.
Une image absente conserve automatiquement le visuel textuel de sa carte.
Les projets affichent aussi leur photo dans la fiche « Voir le projet ».

## Logos et schémas

Pour afficher un logo entièrement, ajoutez la classe portfolio-media--logo
sur son cadre (la balise portant data-photo-frame).

Exemple pour ENSA :
<div class="school-visual portfolio-media portfolio-media--logo" data-photo-frame>

Pour afficher entièrement un schéma de projet, ajoutez project-cover--contain
sur la balise portant project-cover et data-photo-frame.

Exemple pour ADAS :
<div class="project-cover adas-cover project-cover--contain" data-photo-frame>

## Prévisualisation et publication

Dans VS Code, ouvrez index.html et utilisez l’aperçu HTML. Vérifiez les photos,
le menu mobile, les fiches projets et les deux téléchargements de CV.
Les boutons de CV utilisent les PDF déjà présents dans votre dossier assets.
Votre vercel.json existant convient ; aucun changement n’est nécessaire.

Dans CMD, exécutez une commande à la fois :

```bat
cd /d "C:\Users\HP\Desktop\Portfolio_Younes_AROUK"
git add -- index.html styles.css app.js assets/photos
git diff --cached --stat
git commit -m "Ajout des photos aux formations experiences et projets"
git push origin main
```

Vercel publiera la mise à jour du dépôt portfolio-younes-arouk.
Le dépôt cv-web- reste séparé.
