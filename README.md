# Hive Minify Tool

This project recreates the steps __Hive__ uses in his release process to minify / uglify any __Hive Plugin__ for all the supported players

## Installation

Use the npm package manager to install the __Hive Minify Tool__

```bash
npm i
```

## Usage

To use __Hive Minify Tool__ three env variables need to be exported:

* __PLUGIN_FILENAME__ - Path to the unminified __Hive Plugin__
* __EXCLUDES_FILE__ - Path to the excludes file (list of words that will not be mangled)
* __MINIFIED_FILENAME__ - Path where to create the minified __Hive Plugin__

### Example:
```bash
PLUGIN_FILENAME=facebook.java.hivejs.hive.js EXCLUDES_FILE=./full-excludes.json MINIFIED_FILENAME=facebook.java.hivejs.hive.min.js npm run minify
```

