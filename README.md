# Facturier

This template should help get you started developing with Vue 3 in Vite.

Avoir une nomenclature cohérente et bien structurée pour tes fichiers est essentiel pour la lisibilité, la maintenabilité, et la scalabilité de ton projet. Voici un **guide complet** pour nommer tes fichiers dans un projet Vue 3 (avec TypeScript), basé sur les meilleures pratiques.

---

## **Règles Générales de Nomenclature**

1. **Cohérence :**
   - Adopte une convention et respecte-la dans tout ton projet. La cohérence est plus importante que le choix spécifique des conventions.

2. **Lisibilité :**
   - Les noms doivent être explicites pour qu’on comprenne immédiatement leur rôle.

3. **Cas (case) :**
   - **PascalCase** (majuscule au début de chaque mot) pour les composants Vue.
   - **kebab-case** (mots séparés par des tirets) pour les fichiers non Vue (interfaces, stores, etc.).

---

## **Nomenclature pour les Fichiers `.vue`**

### 1. **Composants Vue**
- Utilise **PascalCase** pour nommer les fichiers des composants Vue. Exemple :
  - `ClientForm.vue`
  - `ProduitCard.vue`
  - `FactureSummary.vue`

#### Pourquoi PascalCase ?
- C'est la convention recommandée par la documentation officielle de Vue.js.
- Cela s'aligne avec les conventions de nommage des classes en TypeScript/JavaScript.

---

### 2. **Organisation des Composants**
Structure ton dossier `components` pour refléter les fonctionnalités de ton application :

#### Exemple :
```
src/
├── components/
│   ├── Client/
│   │   ├── ClientForm.vue
│   │   ├── ClientList.vue
│   │   └── ClientDetails.vue
│   ├── Produit/
│   │   ├── ProduitCard.vue
│   │   ├── ProduitForm.vue
│   │   └── ProduitList.vue
│   └── Facture/
│       ├── FactureSummary.vue
│       ├── FactureDetails.vue
│       └── FactureActions.vue
```

---

### 3. **Pages Vue (pour Vue Router)**
- Si tu utilises Vue Router, les pages principales (routes) doivent être placées dans un dossier `pages` ou `views`.
- Utilise **PascalCase** pour les fichiers des pages également.

#### Exemple :
```
src/
├── views/
│   ├── ClientPage.vue
│   ├── ProduitPage.vue
│   ├── FacturePage.vue
│   └── DashboardPage.vue
```

---

## **Nomenclature pour les Fichiers de Stores (Pinia)**

- Nomme les fichiers dans **kebab-case** et termine-les par `.store.ts` pour indiquer qu’ils contiennent un store Pinia.

#### Exemple :
```
src/
├── stores/
│   ├── client.store.ts
│   ├── produit.store.ts
│   ├── facture.store.ts
│   └── user.store.ts
```

#### Pourquoi `kebab-case` ?
- C'est une convention courante pour les fichiers TypeScript/JavaScript en dehors des composants Vue.
- Les noms restent lisibles et adaptés à une structure modulaire.

---

## **Nomenclature pour les Interfaces**

- Utilise **kebab-case** pour nommer les fichiers des interfaces.
- Préfixe ou suffixe le nom des fichiers avec `interface` pour indiquer qu’ils contiennent une interface TypeScript.

#### Exemple :
```
src/
├── interfaces/
│   ├── client.interface.ts
│   ├── produit.interface.ts
│   ├── facture.interface.ts
│   └── user.interface.ts
```

---

## **Nomenclature pour les Autres Dossiers**

### 1. **Services**
- Place les fonctions qui communiquent avec des API ou contiennent une logique métier réutilisable dans un dossier `services`.
- Utilise **kebab-case** pour nommer les fichiers.
- Nomme les fichiers en fonction de la ressource ou fonctionnalité qu’ils gèrent.

#### Exemple :
```
src/
├── services/
│   ├── client.service.ts
│   ├── produit.service.ts
│   ├── facture.service.ts
│   └── auth.service.ts
```

---

### 2. **Utilitaires (Utils ou Helpers)**
- Les fonctions utilitaires peuvent être regroupées dans un dossier `utils` ou `helpers`.
- Utilise **kebab-case** pour les fichiers.
- Précise leur rôle dans le nom.

#### Exemple :
```
src/
├── utils/
│   ├── date-utils.ts
│   ├── string-utils.ts
│   ├── validation-utils.ts
│   └── math-utils.ts
```

---

### 3. **Assets**
Pour les ressources comme les images, les styles ou les icônes, organise-les par type dans un dossier `assets`.

#### Exemple :
```
src/
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── background.jpg
│   ├── styles/
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   └── icons/
│       ├── user.svg
│       ├── product.svg
```

---

### 4. **Directives**
- Les directives personnalisées peuvent être placées dans un dossier `directives`.
- Utilise **kebab-case** et termine-les par `.directive.ts`.

#### Exemple :
```
src/
├── directives/
│   ├── tooltip.directive.ts
│   ├── focus.directive.ts
```

---

### 5. **Plugins**
- Si tu crées ou utilises des plugins Vue, place-les dans un dossier `plugins`.
- Utilise **kebab-case**.

#### Exemple :
```
src/
├── plugins/
│   ├── pinia-plugin.ts
│   ├── vuetify.ts
│   └── i18n.ts
```

---

## **Références Rapides : Résumé des Conventions**

| **Type**                  | **Nom du Fichier**                | **Exemple**                     |
|---------------------------|------------------------------------|----------------------------------|
| **Composant Vue**          | `PascalCase.vue`                  | `ClientForm.vue`                |
| **Page Vue (Vue Router)**  | `PascalCase.vue`                  | `DashboardPage.vue`             |
| **Store (Pinia)**          | `kebab-case.store.ts`             | `client.store.ts`               |
| **Interface TypeScript**   | `kebab-case.interface.ts`         | `client.interface.ts`           |
| **Service**                | `kebab-case.service.ts`           | `client.service.ts`             |
| **Utilitaire**             | `kebab-case-utils.ts`             | `date-utils.ts`                 |
| **Directive**              | `kebab-case.directive.ts`         | `tooltip.directive.ts`          |
| **Plugin**                 | `kebab-case.ts`                   | `vuetify.ts`                    |

---

## **Astuce : Structure Totale du Projet**

Voici à quoi pourrait ressembler un projet bien organisé avec une nomenclature claire :

```
src/
├── assets/
│   ├── images/
│   ├── styles/
│   └── icons/
├── components/
│   ├── Client/
│   ├── Produit/
│   └── Facture/
├── directives/
│   ├── tooltip.directive.ts
├── interfaces/
│   ├── client.interface.ts
│   ├── produit.interface.ts
│   └── facture.interface.ts
├── plugins/
│   ├── pinia-plugin.ts
│   ├── vuetify.ts
├── services/
│   ├── client.service.ts
│   ├── produit.service.ts
├── stores/
│   ├── client.store.ts
│   ├── produit.store.ts
├── utils/
│   ├── date-utils.ts
├── views/
│   ├── ClientPage.vue
│   ├── ProduitPage.vue
│   └── DashboardPage.vue
```

---

En respectant ces conventions, ton projet sera :
- **Lisible** : On comprend facilement le rôle de chaque fichier.
- **Organisé** : Les fichiers similaires sont regroupés.
- **Facile à maintenir** : Les changements ou ajouts futurs seront plus simples.

Si tu veux plus de détails sur une partie spécifique ou des recommandations supplémentaires, fais-moi signe ! 😊