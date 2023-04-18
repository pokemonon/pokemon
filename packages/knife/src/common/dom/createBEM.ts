import { isArray } from '../base/isArray'

/**
 * copy from vant
 */
 type Mod = string | { [key: string]: any }
 type Mods = Mod | Mod[]

function genBem(name: string, mods?: Mods): string {
  if (!mods) {
    return ''
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`
  }

  if (isArray<Mod[]>(mods)) {
    return mods.reduce<string>((ret, item) => ret + genBem(name, item), '')
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name, key) : ''),
    '',
  )
}

/**
  * @return bem helper
  * @example b = createBEM('button')
  * @example b() // 'button'
  * @example b('text') // 'button__text'
  * @example b({ disabled }) // 'button button--disabled'
  * @example b('text', { disabled }) // 'button__text button__text--disabled'
  * @example b(['disabled', 'primary']) // 'button button--disabled button--primary'
  */
export function createBEM(name: string) {
  return ((el?: Mods, mods?: Mods): Mods => {
    if (el && typeof el !== 'string') {
      mods = el
      el = ''
    }

    el = el ? `${name}__${el}` : name

    return `${el}${genBem(el, mods)}`
  }) as {
    (el: string, mods: Mods): string
    (el?: string): string
    (mods: Mods): string
  }
}

export type BEM = ReturnType<typeof createBEM>

