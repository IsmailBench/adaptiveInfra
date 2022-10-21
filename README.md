# adaptiveInfra JamStack et Adaptive infra

## Objectifs

Démontrer la possibilité de réduire le recours aux instances de compute pour propulser un site web.

Anti-pattern :
*  Un wordpress ou un Drupal qui tourne en 24/7 365 jours par an sur la stack LAMP d'une ressource de compute et alors que les contenus restent inchangés. Recalcul systématique des page "on query". Base de données toujours disponible avec du stockage haute performance.

Pattern :
* La JAM Stack : propulser un maximum d'assets statiques via du storage. Recalcul à la modification des contenus.
* L'adaptive infrastructure : mobiliser la ressource d'infrastructure quand elle est nécesaire, puis l'éteindre.

## Le socle d'infrastructure
* sur un cloud provider ( AWS, GCP, ... ) ou on-premise,
* Idéalement déployé via une pipeline CI/CD depuis un repo dédié,
* contexte d'exécution d'un self hosted strapi et d'un self-hosted runner (Gitlab ou Github)

## Strapi
* expose les entités du catalogue produits via API
* permet l'ajout et la modifications des produits du catalogue
* Permet de publier via webhook en déclenchant la pipeline Gitlab ou Github du repo de la SPA

## Single Page Application (SPA)
* Elle présente un catalogue produit de votre choix (une description, un prix par produit)
* Next/React ou Nuxt/Vue
* Le build de la SPA est déclenché via Strapi (webhook)
* Buildée et déployée via le selfhosted runner du socle d'infra
* Déployée sur une service de stockage d'objets ( object storage: S3, GCP Cloud Storage, Azure storage account, etc ... )

## Acceptance test
* état initial : une version de la SPA est en ligne, hébergée sur un bucket ( S3 ou autres ). Aucune ressource de compute démarrée au sein de l'environnement Cloud,
* Le user démarre Strapi et les dépendances nécessaires (bdd, runner),
* Le user modifie le contenu du catalogue produits et publie,
* la pipeline de la SPA déploie la nouvelle version du catalogue sur le bucket,
* le user éteint Strapi
* nouvelle itération
