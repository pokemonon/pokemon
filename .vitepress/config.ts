import path from 'path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import globby from 'globby'
import {
  getDeepProp,
  setDeepProp,
} from '../packages/knife'
import {
  name,
} from '../package.json'
import { version as knifeVersion } from '../packages/knife/package.json'

type SidebarItem = DefaultTheme.SidebarItem

function getKnifeSidebar() {
  const res = globby.sync('packages/knife/docs/api/**/*.md')
  const map: Record<string, Record<string, SidebarItem[]>> = {
    common: {},
    node: {},
    browser: {},
  }
  res.forEach((i) => {
    const [_, group, type, functionName] = i.match(/packages\/knife\/docs\/api\/(\w+)\/(\w+)\/(\w+)/)!
    let links: SidebarItem[] = getDeepProp(map, `${group}.${type}`)
    if (!links) {
      links = []
      setDeepProp(map, `${group}.${type}`, links)
    }
    links.push({
      text: functionName,
      link: `/packages/knife/docs/api/${group}/${type}/${functionName}`,
    })
  })

  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Get Started',
          link: '/packages/knife/docs/',
        },
      ],
    },
    {
      text: 'API',
      items: Object.keys(map).map((group) => {
        return {
          text: group,
          items: Object.keys(map[group]).map((type) => {
            return {
              text: type,
              items: map[group][type],
            }
          }),
        }
      }),
    },
  ]
}

export default defineConfig({
  base: `/${name}`,
  title: 'Pokemonon',
  description: 'Collection of Utilities',
  themeConfig: {
    nav: [
      {
        text: `knife@${knifeVersion}`,
        link: '/packages/knife/docs/',
      },
    ],
    sidebar: {
      '/packages/knife': getKnifeSidebar(),
    },
  },
})
