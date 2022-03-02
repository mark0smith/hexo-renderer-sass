[Sass] renderer plugin for [Hexo]
=================================

## Modification from mark0smith

Because of original package not being maintained currently, I update the requirement libs and run `standard --fix`.

If you want to use my version of `hexo-renderer-sass`, you can run following code:
``` bash
git clone https://github.com/mark0smith/hexo-renderer-sass.git
cd hexo-renderer-sass
npm link
cd Some_hexo_blog
npm link --save hexo-renderer-sass
```

Now you can use `hexo-renderer-sass` and happy bloging!

## Original
[![npm version](https://badge.fury.io/js/hexo-renderer-sass.svg)](https://badge.fury.io/js/hexo-renderer-sass)
[![Build Status](https://travis-ci.org/knksmith57/hexo-renderer-sass.svg?branch=master)](https://travis-ci.org/knksmith57/hexo-renderer-sass)
[![Coverage Status](https://coveralls.io/repos/github/knksmith57/hexo-renderer-sass/badge.svg?branch=master)](https://coveralls.io/github/knksmith57/hexo-renderer-sass?branch=master)

> A hexo plugin for node-sass

## Install
```sh
$ npm install --save hexo-renderer-sass
```

## Config
Anything specified under the key `node_sass` in your `_config.yml` files will
be [passed directly] to the `sass.render()` call. Check out the [node sass options docs]
for all available settings.

### _config.yml
```yaml
node_sass:
  outputStyle: nested
  precision: 5
  sourceComments: false
```

### Inheritance
The config object passed to node sass is constructed by merging properties from
the following locations using a least-specific-first order:

1. Hardcoded Defaults (`{outputStyle: 'nested',sourceComments: false}`)
2. Theme specific `_config.yml`
3. Blog root `_config.yml`


## ♥︎
Questions, comments, concerns?
* [@JLHwung](https://github.com/JLHwung)
* [@jojoee](https://github.com/jojoee)
* [@knksmith57](https://github.com/knksmith57)


[Hexo]:                   http://hexo.io
[Sass]:                   http://sass-lang.com/
[node-sass]:              https://github.com/andrew/node-sass
[passed directly]:        index.js:#L22
[node sass options docs]: https://github.com/sass/node-sass#options

