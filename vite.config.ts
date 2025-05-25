import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dsv from '@rollup/plugin-dsv'
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig(({ command }) => {
  const plugins = [svelte(), dsv()]

  if (command === 'build') {
    return {
      plugins,
      base: '/chatgpt-web/',
      css: {
        postcss: {
          plugins: [
            purgecss({
              content: ['./**/*.html', './**/*.svelte'],
              safelist: ['pre', 'code']
            })
          ]
        }
      }
    }
  } else {
    return {
      plugins
    }
  }
})
