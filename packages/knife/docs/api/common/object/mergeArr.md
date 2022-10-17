# mergeArr
```ts
/**
 * 遍历对象的值, 数组会被合并
 * @category Object
 * @param object
 * @param source1
 * @param source2
 * @param ...
 * @param customizer
 */
export declare const mergeArr: {
    <T, S1>(obj: T, src1: S1, customizer?: ((objVal?: any, srcVal?: any, key?: any, obj?: any, src?: any) => boolean) | undefined): T & S1;
    <T_1, S1_1, S2>(obj: T_1, src1: S1_1, src2: S2, customizer?: ((objVal?: any, srcVal?: any, key?: any, obj?: any, src?: any) => boolean) | undefined): T_1 & S1_1 & S2;
    <T_2, S1_2, S2_1, S3>(obj: T_2, src1: S1_2, src2: S2_1, src3: S3, customizer?: ((objVal?: any, srcVal?: any, key?: any, obj?: any, src?: any) => boolean) | undefined): T_2 & S1_2 & S2_1 & S3;
    <T_3, S1_3, S2_2, S3_1, S4>(obj: T_3, src1: S1_3, src2: S2_2, src3: S3_1, src4: S4, customizer?: ((objVal?: any, srcVal?: any, key?: any, obj?: any, src?: any) => boolean) | undefined): T_3 & S1_3 & S2_2 & S3_1 & S4;
    <T_4, S1_4, S2_3, S3_2, S4_1, S5>(obj: T_4, src1: S1_4, src2: S2_3, src3: S3_2, src4: S4_1, src5: S5, customizer?: ((objVal?: any, srcVal?: any, key?: any, obj?: any, src?: any) => boolean) | undefined): T_4 & S1_4 & S2_3 & S3_2 & S4_1 & S5;
    (...arg: any[]): any;
};

```
