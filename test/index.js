'use strict'

/* eslint-env mocha */

var should = require('chai').should(); // eslint-disable-line

describe('Sass renderer', function () {
  const ctx = {
    config: {},
    theme: {
      config: {}
    }
  }

  const r = require('../lib/renderer')

  it('default: scss syntax', function () {
    const body = [
      '$color: red;',
      '.foo {',
      '  color: $color;',
      '}'
    ].join('\n')

    const result = r('scss').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo {',
      '  color: red; }'
    ].join('\n') + '\n')
  })

  it('default: sass syntax', function () {
    const body = [
      '$color: red',
      '.foo',
      '  color: $color'
    ].join('\n')

    const result = r('sass').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo {',
      '  color: red; }'
    ].join('\n') + '\n')
  })

  it('outputStyle compressed: scss syntax', function () {
    ctx.theme.config = { node_sass: { outputStyle: 'compressed' } }

    const body = [
      '$color: red;',
      '.foo {',
      '  color: $color;',
      '}'
    ].join('\n')

    const result = r('scss').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo{color:red}'
    ].join('\n') + '\n')
  })

  it('outputStyle compressed: sass syntax', function () {
    ctx.theme.config = { node_sass: { outputStyle: 'compressed' } }

    const body = [
      '$color: red',
      '.foo',
      '  color: $color'
    ].join('\n')

    const result = r('sass').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo{color:red}'
    ].join('\n') + '\n')
  })

  it('supports root config: scss syntax', function () {
    ctx.config = { node_sass: { outputStyle: 'compressed' } }
    ctx.theme.config = {}

    const body = [
      '$color: red;',
      '.foo {',
      '  color: $color;',
      '}'
    ].join('\n')

    const result = r('scss').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo{color:red}'
    ].join('\n') + '\n')
  })

  it('supports root config: sass syntax', function () {
    ctx.config = { node_sass: { outputStyle: 'compressed' } }
    ctx.theme.config = {}

    const body = [
      '$color: red',
      '.foo',
      '  color: $color'
    ].join('\n')

    const result = r('sass').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo{color:red}'
    ].join('\n') + '\n')
  })

  it('throw when error occurs: scss syntax', function () {
    ctx.theme.config = { node_sass: { outputStyle: 'compressed' } }
    ctx.config = {}

    const body = [
      '.foo {',
      '  color: $color;',
      '}'
    ].join('\n')

    should.Throw(function () {
      return r('scss').call(ctx, { text: body }, {})
    }, 'Undefined variable: "$color".')
  })

  it('throw when error occurs: sass syntax', function () {
    ctx.theme.config = { node_sass: { outputStyle: 'compressed' } }
    ctx.config = {}

    const body = [
      '.foo',
      '  color: $color'
    ].join('\n')

    should.Throw(function () {
      return r('sass').call(ctx, { text: body }, {})
    }, 'Undefined variable: "$color".')
  })
})
