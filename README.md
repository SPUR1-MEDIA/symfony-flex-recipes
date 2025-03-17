# Spur1 Symfony Flex Recipes

Symfony Flex Recipes API

## Installation

You need to add the following endpoint to your `composer.json` file:

```json
"extra": {
    "symfony": {
        "endpoint": [
            "https://api.github.com/repos/spur1-media/symfony-flex-recipes/contents/index.json",
            "flex://defaults"
        ],
        "allow-contrib": true,
        "require": "6.4.*"
    }
},
```

## Available Recipes

| Package | Latest Recipe |
| --- | --- |
| [spur/spur1-base-bundle](https://github.com/spur1-media/spur1-base-bundle) | [2.0](spur1-media/spur1-base-bundle/2.0) |
| [spur/spur1-api-bundle](https://github.com/spur1-media/spur1-api-bundle) | [1.0](spur1-media/spur1-api-bundle/1.0) |