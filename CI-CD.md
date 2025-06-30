# Documentation des Pipelines CI/CD

## Introduction
Ce document explique le fonctionnement de notre système d'intégration continue et de déploiement continu (CI/CD) pour les non-développeurs.

## Vue d'ensemble
Nous avons mis en place deux pipelines automatisés qui s'activent à différents moments :
1. Pipeline de Test (develop.yml)
2. Pipeline de Déploiement (netlify.yml)

## Pipeline de Test (Branche Develop)
Ce pipeline s'active automatiquement chaque fois qu'un développeur pousse du code sur la branche "develop".

### Que fait-il ?
1. **Préparation de l'environnement** :
    - Met en place un environnement Python version 3.13
    - C'est comme préparer une cuisine avant de commencer à cuisiner

2. **Installation des outils** :
    - Installe les outils nécessaires pour les tests
    - Comparable à sortir tous les ustensiles dont on a besoin

3. **Exécution des tests** :
    - Lance tous les tests automatisés
    - C'est comme vérifier que chaque plat est bien cuisiné avant de le servir

### Pourquoi est-ce important ?
- Garantit que le code fonctionne correctement
- Évite d'envoyer du code défectueux en production
- Permet de détecter les problèmes tôt

## Pipeline de Déploiement (Branche Main)
Ce pipeline s'active automatiquement quand du code est poussé sur la branche "main".

### Que fait-il ?
1. **Récupération du code** :
    - Prend la dernière version du code
    - Comme rassembler tous les ingrédients d'une recette

2. **Déploiement sur Netlify** :
    - Publie automatiquement le site sur Internet
    - C'est comme servir le plat aux clients

### Configuration requise
Pour que ce pipeline fonctionne, il faut :
- Un compte Netlify
- Deux informations secrètes configurées dans GitHub :
    - NETLIFY_AUTH_TOKEN (comme une clé pour accéder à Netlify)
    - NETLIFY_SITE_ID (l'identifiant unique de votre site)

## En résumé
- La branche "develop" est utilisée pour tester le code
- La branche "main" est utilisée pour déployer le site en production
- Tout est automatisé : pas besoin d'intervention manuelle une fois configuré

## Processus typique
1. Les développeurs travaillent sur "develop"
2. Les tests vérifient automatiquement que tout fonctionne
3. Une fois validé, le code est envoyé sur "main"
4. Le site est automatiquement mis à jour sur Netlify

---
**Note** : Si vous voyez des erreurs dans les pipelines (voyants rouges dans GitHub), contactez l'équipe de développement.