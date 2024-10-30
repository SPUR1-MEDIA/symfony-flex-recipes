# Spur1 Symfony Flex Recipes

Symfony Flex Recipes API

## Installation

You need to add the following endpoint to your `composer.json` file:

```json
"extra": {
    "symfony": {
        "endpoint": [
            "https://api.github.com/repos/wolfkidsounds/symfony-flex-recipes/contents/index.json",
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
| [wolfkidsounds/spur1-base-bundle](https://github.com/wolfkidsounds/spur1-base-bundle) | [1.0](wolfkidsounds/spur1-base-bundle/1.0) |