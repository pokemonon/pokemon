// export const FN_PLACEHOLDER = 'pokemon_knife_fn_placeholder';
// const FN_PLACEHOLDER_SYMBOL = Symbol('FN_PLACEHOLDER_SYMBOL')
// const Fn_Placeholder = {
//     [FN_PLACEHOLDER_SYMBOL]: FN_PLACEHOLDER_SYMBOL
// }
// type FN_PLACEHOLDER = typeof Fn_Placeholder
const FN_PLACEHOLDER_ID = 'FN_PLACEHOLDER_ID';

export class FN_PLACEHOLDER {
    id = 'FN_PLACEHOLDER_ID'
}

export const isFnPlaceholder = ins => ins.id == FN_PLACEHOLDER_ID;

