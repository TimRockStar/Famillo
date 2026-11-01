# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
L'aidant principal d'une personne malade ou vieillissante. Deux profils autant l'un que l'autre :
- l'enfant adulte (40-65 ans) qui s'occupe d'un parent, souvent en plus du travail et de sa propre famille;
- le conjoint aîné (65 ans et plus) qui s'occupe de son mari ou de sa femme, avec une vue et une aisance techno parfois limitées.

Une seule personne installe l'app : l'aidant. La personne aidée ne l'utilise pas. La famille ne l'installe pas non plus; elle reçoit des textos.

## Product Purpose
Garder en un seul endroit, sur le téléphone de l'aidant, tout ce qu'il faut pour s'occuper de la personne aidée : sa fiche, ses médicaments, ses rendez-vous, les tâches, et la famille qui peut aider. Réussir, c'est que l'aidant n'oublie rien (renouvellement, rendez-vous) et qu'il demande de l'aide plus facilement au lieu de tout porter seul.

## Positioning
Rien à installer pour la famille. Seul l'aidant a l'app; les proches reçoivent un simple texto envoyé de son propre téléphone (lien `sms:`, gratuit avec son forfait). Pas de compte, pas de serveur : les données restent sur le téléphone de l'aidant.

## Operating Context
- L'aidant ouvre l'app sur son téléphone Android (PWA installée, publication prévue sur Google Play avec Bubblewrap), souvent en courant entre deux obligations, ou chez la pharmacie, ou au rendez-vous.
- Le pot de pilules et l'étiquette de la pharmacie servent de source : l'aidant y lit la quantité et recompte les pilules qui restent.
- Les rappels passent par le calendrier du téléphone (fichier .ics); les demandes d'aide passent par l'app de textos du téléphone.

## Capabilities and Constraints
- Fiche de la personne aidée : nom, photo, médecin et téléphone, numéro d'assurance maladie (RAMQ), notes (allergies, etc.).
- Médicaments : dose, moment de prise, date de renouvellement ou suivi des pilules (pilules attendues vs comptées, doses possiblement oubliées, alerte de fin de pot à 7 jours, rappel calendrier, texto à la famille).
- Rendez-vous, tâches, famille (contacts avec photo), vue « Cette semaine ».
- Demande d'aide par texto à un membre de la famille, puis on note qui a dit oui.
- Personnalisation : 6 thèmes de couleurs, mode Auto/Clair/Sombre, photos et arrière-plan.
- Bilingue FR (fr-CA) / EN, langue choisie selon le téléphone.
- Un seul fichier `index.html`, plus `manifest.json` et `sw.js`, sans framework. Hébergé sur GitHub Pages à https://famillo.ca.
- Données et photos dans localStorage (environ 5 Mo, sur le téléphone seulement). Pas de synchronisation entre appareils, pas de sauvegarde en ligne.
- L'app ne sonne pas pour que la personne aidée prenne ses pilules : elle sert à l'aidant.
- Prix : un seul prix fixe, sans options payantes. **Montant à décider.**

## Brand Commitments
- Nom : Famillo (domaine famillo.ca). Logo : `logo-famillo.jpg` et les icônes PNG.
- Ton chaleureux et simple, tutoiement en français.
- Pied de page de chaque app Lance ton app : « 💡 Suggérer une idée » (courriel prêt vers bonjour@lancetonapp.com), « ✅ Vous l'avez demandé, c'est fait » et « Propulsé par Lance ton app » (lien vers https://lancetonapp.com).
- Avis visible : l'app ne remplace pas les conseils du pharmacien ou du médecin.

## Evidence on Hand
- L'idée du suivi des pilules vient d'un ami de Tim (oct. 2026).
- Aucun témoignage, aucun utilisateur nommé, aucun chiffre d'usage pour l'instant : ne pas en inventer.
- La liste « Vous l'avez demandé » (`DEMANDES` dans `index.html`) ne contient que de vraies demandes.

## Product Principles
1. L'aidant d'abord : chaque écran sert la personne qui s'occupe, pas la personne malade.
2. Zéro friction pour la famille : jamais de compte ni d'app à installer pour aider.
3. Sur le téléphone, à soi : pas de serveur, pas de compte, les données restent chez l'aidant.
4. Prudence santé : rappeler, compter, alerter, mais jamais donner de conseil médical (jamais doubler une dose).
5. Écouter les utilisateurs : les idées suggérées deviennent des fonctions, gratuites dans le prix unique.

## Accessibility & Inclusion
Une partie des aidants sont des aînés : texte lisible, grosses zones à toucher, mots simples, rien de caché derrière des gestes compliqués. Mode sombre offert. Bilingue FR/EN.
