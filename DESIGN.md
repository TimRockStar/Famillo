---
name: Famillo
description: Le carnet de bord chaleureux de l'aidant principal.
colors:
  corail: "#ff6b6b"
  abricot: "#ffa94d"
  corail-fonce: "#d04045"
  abricot-fonce: "#a96406"
  mauve: "#9775fa"
  mauve-texte: "#7651d2"
  bleu-rdv: "#4dabf7"
  menthe-taches: "#38d9a9"
  vert-ok: "#077c5c"
  orange-teinte: "#ff922b"
  orange-alerte: "#bc4502"
  rouge-teinte: "#fa5252"
  rouge-danger: "#d31724"
  creme-fond: "#fff8f0"
  carte: "#ffffff"
  peche-carte: "#fff4e6"
  champ: "#fffcf8"
  bord-sable: "#f0e6dc"
  encre-prune: "#2b2140"
  lavande-douce: "#7a7090"
  nuit-fond: "#17131f"
  nuit-carte: "#241e30"
  nuit-carte2: "#2d2540"
  nuit-champ: "#1d1827"
  nuit-bord: "#3a3150"
  nuit-texte: "#f3eefc"
  nuit-doux: "#a89fbd"
  nuit-mauve-texte: "#a286fe"
  nuit-ok: "#37b88d"
  nuit-alerte: "#ff7941"
  nuit-danger: "#ff5e58"
typography:
  display:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 900
  headline:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 900
  section:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 900
  title:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 800
  body:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.4
  field:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  label:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 800
  meta:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  nav:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
rounded:
  field: "14px"
  tile: "16px"
  card: "20px"
  nav: "24px"
  dialog: "26px"
  header: "32px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
components:
  button-plein:
    backgroundColor: "{colors.corail-fonce}"
    textColor: "{colors.carte}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "10px 16px"
  button-doux:
    backgroundColor: "{colors.carte}"
    textColor: "{colors.mauve-texte}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "10px 16px"
  button-danger:
    backgroundColor: "{colors.carte}"
    textColor: "{colors.rouge-danger}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "10px 16px"
  card:
    backgroundColor: "{colors.carte}"
    textColor: "{colors.encre-prune}"
    rounded: "{rounded.card}"
    padding: "14px 16px"
  input:
    backgroundColor: "{colors.champ}"
    textColor: "{colors.encre-prune}"
    typography: "{typography.field}"
    rounded: "{rounded.field}"
    padding: "12px"
  pastille-ok:
    textColor: "{colors.vert-ok}"
    rounded: "{rounded.card}"
    padding: "3px 10px"
  pastille-alerte:
    textColor: "{colors.orange-alerte}"
    rounded: "{rounded.card}"
    padding: "3px 10px"
  nav-bar:
    backgroundColor: "{colors.carte}"
    textColor: "{colors.lavande-douce}"
    typography: "{typography.nav}"
    rounded: "{rounded.nav}"
    padding: "6px"
  bouton-ajouter:
    backgroundColor: "{colors.abricot-fonce}"
    textColor: "{colors.carte}"
    rounded: "{rounded.full}"
    size: "60px"
---

# Design System: Famillo

## Overview

**Creative North Star: "Le carnet de bord chaleureux"**

Famillo est le carnet que l'aidant traîne partout : tout y est en ordre, daté, facile à retrouver, mais il garde la douceur d'un carnet tenu à la main. L'ordre vient d'une seule colonne de cartes claires (fiche, médicaments, rendez-vous, tâches, famille); la chaleur vient du dégradé de l'en-tête, du fond crème, des coins ronds et de la police Nunito, ronde et amicale.

La densité est faible : une idée par carte, de gros titres, beaucoup d'air. L'interface est faite pour être lue d'un coup d'œil entre deux obligations, et pour être touchée avec confiance par un aîné. Les boutons et les cartes doivent paraître **solides et rassurants** : gros, stables, bien contrastés, faciles à viser.

Famillo ne doit jamais avoir l'air d'un hôpital ou d'une clinique (blanc froid, bleu médical, dossier patient), d'une app pour enfants (trop bonbon, trop ludique : les aidants vivent des moments graves), ni d'une banque ou d'un outil corporatif (gris, sec, dense, jargon).

**Key Characteristics:**
- En-tête en dégradé des couleurs foncées du thème, arrondi en bas, qui chevauche le contenu.
- Une seule colonne de cartes blanches sur fond crème, max 640px.
- Nunito partout, poids lourds (800-900) pour les titres, 600 pour le texte.
- Couleur du thème au choix (6 thèmes); les couleurs de sens (ok, alerte, danger) ne changent jamais.
- Tout texte passe 4,5:1, dans les 6 thèmes et dans les 2 modes.
- Mode Auto/Clair/Sombre complet, avec un fond nuit prune plutôt que noir.

## Colors

Une paire chaude et vive pour l'identité, posée sur des neutres crème et prune qui évitent le blanc et le noir purs.

### Primary
Chaque thème a deux paires de la même teinte :
- **Les vives** (`--c1`, `--c2`) : Corail et Abricot par défaut. Accents seulement : onglet actif de la barre du bas (fond à 15 %), bordure des champs au focus, contour du thème choisi au clavier, lueur des boutons pleins.
- **Les foncées** (`--f1`, `--f2`) : Corail foncé et Abricot foncé par défaut. Toute surface qui porte du texte blanc : dégradé de l'en-tête, boutons pleins, bouton « + », aperçu des thèmes, couleur de la barre d'état du téléphone (`theme-color`). Calculées en OKLCH : même teinte, luminosité baissée juste assez pour passer 4,5:1 avec le blanc.

| Thème | Vives (`--c1` / `--c2`) | Foncées (`--f1` / `--f2`) |
|---|---|---|
| Corail | #ff6b6b / #ffa94d | #d04045 / #a96406 |
| Océan | #1c7ed6 / #22b8cf | #0e76ce / #018091 |
| Forêt | #2b8a3e / #82c91e | #25853a / #518202 |
| Lavande | #7950f2 / #f783ac | #7950f2 / #bc4e79 |
| Soleil | #f76707 / #fab005 | #c44f01 / #9c6c02 |
| Petits fruits | #c2255c / #7048e8 | #c2255c / #7048e8 |

Tout nouvel élément de marque passe par ces variables, jamais par une valeur fixe. Un nouveau thème doit fournir ses 4 couleurs.

### Secondary
- **Mauve**: teinte du fond des boutons secondaires (à 14 %). Reste fixe peu importe le thème.
- **Mauve texte** (`--mauve`): texte des boutons secondaires; **nuit mauve texte** en mode sombre.

### Tertiary
- **Bleu rendez-vous** et **Menthe tâches**: fond à 16 % des bulles d'icône, pour reconnaître le type de carte d'un coup d'œil (le corail à 16 % sert aux médicaments).

### Semantic
- **Vert OK** (`--ok`): texte de la pastille « tout va bien », sur fond menthe à 16 %; **nuit ok** en mode sombre.
- **Orange alerte** (`--alerte`): texte de la pastille d'alerte (fin de pot, renouvellement proche), sur fond **orange teinte** à 16 %; **nuit alerte** en mode sombre.
- **Rouge danger** (`--danger`): texte du bouton Supprimer, sur fond **rouge teinte** à 12 %; **nuit danger** en mode sombre.

### Neutral
- **Crème fond**: fond de page en mode clair; aussi `background_color` du manifeste.
- **Carte** / **Pêche carte**: surface des cartes; la fiche de la personne aidée passe en dégradé carte vers pêche.
- **Champ** / **Bord sable**: fond et bordure (2px) des champs.
- **Encre prune**: texte principal. **Lavande douce**: texte secondaire, pied de page, onglets inactifs.
- **Nuit fond**, **nuit carte**, **nuit carte2**, **nuit champ**, **nuit bord**, **nuit texte**, **nuit doux**: les mêmes rôles en mode sombre (prune profond, jamais noir pur). Les textes de sens et le mauve ont leur version nuit, plus claire, pour garder 4,5:1 sur les cartes sombres.

### Named Rules
**La règle du thème qui voyage.** L'identité vit dans `--c1`/`--c2` seulement. Une couleur de marque écrite en dur casse 5 thèmes sur 6.

**La règle du sens fixe.** Vert, orange et rouge veulent toujours dire ok, alerte et danger, dans tous les thèmes. On ne les utilise jamais pour décorer.

**La règle du blanc lisible.** Le texte blanc se pose seulement sur les foncées (`--f1`/`--f2`), jamais sur les vives. Tout texte coloré sur une teinte claire utilise sa version « texte » foncée (ou « nuit » en mode sombre). Minimum 4,5:1 partout.

## Typography

**Display Font:** Nunito (avec system-ui, sans-serif)
**Body Font:** Nunito

**Character:** Une seule famille, ronde et amicale, qui porte à la fois la chaleur et la lisibilité. La hiérarchie vient du poids (600 à 900) et de la taille, pas d'une deuxième police.

### Hierarchy
- **Display** (900, 26px): le titre de l'en-tête (« Bonjour ! »).
- **Headline** (900, 22px): titres de la fiche et des fenêtres.
- **Section** (900, 21px): titres de section (« Cette semaine »).
- **Title** (800, 18px): nom d'un élément dans une carte.
- **Body** (600, 17px, interligne 1.4): texte courant. Les champs sont à 16px pour éviter le zoom automatique sur téléphone.
- **Label** (800, 15px): libellés de champs, texte des boutons.
- **Meta** (600, 15px, lavande douce): détails sous un titre de carte. Les pastilles sont à 800, 14px.
- **Nav** (700, 11px): libellés de la barre du bas, sous une icône de 24px.

### Named Rules
**La règle du gras qui guide.** On hiérarchise avec le poids : 900 pour les titres, 800 pour ce qu'on touche, 600 pour ce qu'on lit. Jamais de texte sous 600.

## Layout

Une seule colonne centrée, `max-width` 640px, avec 16px de marge sur les côtés. L'en-tête prend toute la largeur et le contenu remonte de 36px par-dessus son arrondi. La barre de navigation flotte en bas (12px du bord, max 616px) et le bouton « + » flotte au-dessus d'elle à droite; le corps garde 96px de marge en bas pour ne rien cacher.

Le rythme d'espacement est 8 / 12 / 16 / 22px : 8px entre les boutons, 12px entre les cartes et dans les cartes, 16px de marge, 22px avant un titre de section. Les thèmes s'affichent en grille de 3 colonnes. Pas de point de rupture : la même colonne sert du téléphone à l'ordi.

## Elevation & Depth

Les surfaces sont légèrement soulevées par des ombres douces et diffuses, jamais dures. Plus un élément flotte au-dessus du contenu, plus son ombre est grande; les éléments en couleur pleine ont une lueur teintée de `--c1`.

### Shadow Vocabulary
- **Carte** (`box-shadow: 0 4px 14px rgba(0,0,0,.07)`): toutes les cartes du contenu.
- **Photo** (`box-shadow: 0 4px 12px rgba(0,0,0,.15)`): grande photo ronde de la personne aidée.
- **Barre flottante** (`box-shadow: 0 8px 24px rgba(0,0,0,.18)`): la navigation du bas.
- **Lueur bouton plein** (`box-shadow: 0 4px 12px color-mix(in srgb, var(--c1) 35%, transparent)`).
- **Lueur bouton +** (`box-shadow: 0 8px 20px color-mix(in srgb, var(--c1) 45%, transparent)`).

### Named Rules
**La règle de l'ombre douce.** Ombre floue et basse opacité seulement. Une ombre dure ou décalée n'a pas sa place dans un carnet chaleureux.

## Shapes

Tout est arrondi, de façon généreuse et cohérente : 14px pour les champs et boutons, 16px pour les bulles d'icône et aperçus photo, 20px pour les cartes et pastilles, 24px pour la barre du bas, 26px pour les fenêtres, 32px pour le bas de l'en-tête. Les personnes (avatars, photo de la personne aidée, bouton « + ») sont en cercle parfait. Un grand cercle blanc translucide décore le coin de l'en-tête quand il n'a pas de photo.

**La règle du rond pour les gens.** Le cercle est réservé aux personnes et au bouton d'ajout; le reste est un rectangle arrondi.

## Components

### Buttons
Solides et rassurants : gros, contrastés, avec un léger enfoncement quand on appuie.
- **Shape:** rectangle arrondi (14px).
- **Plein:** dégradé `--f1` vers `--f2`, texte blanc, lueur teintée de `--c1`; pour l'action principale d'une carte ou d'une fenêtre (Enregistrer, Texter).
- **Doux:** fond mauve à 14 %, texte mauve texte; actions secondaires.
- **Danger:** fond rouge teinte à 12 %, texte rouge danger; supprimer.
- **Pressé:** `transform: scale(.95)` pendant 0.1s.
- **Rond (en-tête):** pilule à bord blanc translucide 2px, fond noir à 18 % (compense le cercle décoratif clair derrière), texte blanc 800 14px; langue et réglages.

### Chips (pastilles)
- **Style:** pilule (20px), texte 800 14px, fond de la couleur de sens à 16 %.
- **State:** OK (vert) ou alerte (orange). Pas d'état sélectionné.

### Cards / Containers
- **Corner Style:** 20px.
- **Background:** carte (blanc / nuit carte); la fiche de la personne aidée en dégradé carte vers pêche.
- **Shadow Strategy:** ombre Carte.
- **Border:** aucune.
- **Internal Padding:** 14px 16px, contenu en rangée avec 12px d'écart : bulle d'icône (46px) ou avatar à gauche, texte à droite.
- **Entrée:** glisse de 10px vers le haut en 0.35s.

### Inputs / Fields
- **Style:** pleine largeur, bordure 2px bord sable, fond champ, 14px de rayon, 12px de padding, Nunito 600 16px.
- **Focus:** la bordure passe à `--c2`, sans contour supplémentaire.
- **Libellé:** au-dessus du champ, 800, 12px de marge en haut.

### Navigation
- **Style:** barre flottante blanche (24px de rayon) en bas de l'écran, onglets égaux : icône de 24px au-dessus d'un libellé 700 11px en lavande douce.
- **Actif:** fond `--c1` à 15 %, texte `--c1`, icône agrandie (1.2) et remontée de 2px.

### Fenêtres (dialog)
- Carte de 26px de rayon, largeur min(92vw, 480px), fond assombri prune à 50 %. Monte de 30px en 0.25s à l'ouverture.

### Bouton d'ajout « + »
- Cercle de 60px en dégradé `--f2` vers `--f1`, flottant à 22px du bord droit, au-dessus de la barre du bas, avec la lueur la plus forte du système.

### État vide
- Carte centrée, grande icône (44px), texte en lavande douce, ton encourageant (« Rien encore. Touche + pour commencer ! »).

## Do's and Don'ts

### Do:
- **Do** passer toute couleur de marque par `--c1`/`--c2` (accents) ou `--f1`/`--f2` (surfaces sous texte blanc) pour qu'elle suive les 6 thèmes.
- **Do** vérifier 4,5:1 pour tout nouveau texte, dans les 6 thèmes et les 2 modes.
- **Do** définir chaque nouvelle surface pour les deux modes (clair crème, sombre prune) avec les neutres existants.
- **Do** garder une seule colonne de cartes de 20px de rayon, max 640px.
- **Do** utiliser Nunito à 600 minimum, 800-900 pour titres et boutons.
- **Do** faire des zones à toucher grosses et stables : un aîné doit viser sans hésiter.
- **Do** respecter `prefers-reduced-motion` (toutes les animations coupées).

### Don't:
- **Don't** donner un air d'hôpital ou de clinique : pas de blanc froid, pas de bleu médical, pas de mise en page de dossier patient.
- **Don't** tomber dans l'app pour enfants : pas de décor bonbon ni d'effets ludiques en trop.
- **Don't** faire corporatif : pas de gris sec, de tableaux denses ni de jargon.
- **Don't** utiliser vert, orange ou rouge pour décorer : ils veulent dire ok, alerte et danger.
- **Don't** utiliser des ombres dures ou décalées.
- **Don't** utiliser le noir pur ou le blanc pur comme fond de page.
- **Don't** poser du texte blanc sur les couleurs vives du thème, ni baisser l'opacité d'un texte de l'en-tête.
