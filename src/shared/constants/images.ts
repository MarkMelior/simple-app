const PublicImagesData = {
  header: {
    four: '3.svg',
    one: '1.png',
    three: '3.svg',
    two: '2.png',
  },
  interface: {
    IceCube: 'ice-cube.png',
    Light: 'light.avif',
    LightDark: 'light-dark.avif',
    noise: 'noise.png',
  },
  minecraft: {
    AmethystShard: 'AmethystShard.webp',
    Cake: 'Cake.webp',
    Diamond: 'Diamond.webp',
    EnderPearl: 'EnderPearl.webp',
    IronPickaxe: 'IronPickaxe.webp',
    IronSword: 'IronSword.webp',
    LeatherTunic: 'LeatherTunic.webp',
    NetherStar: 'NetherStar.webp',
  },
  misc: {
    Banner: 'banner.jpg',
    Heart: 'heart.png',
  },
  sticker: {
    catCursor: 'cat-cursor.webm',
    catShake: 'cat-shake.webm',
    displeased: 'displeased.webp',
    Ryan: 'ryan.webp',
    sausage: 'sausage.webm',
    shrek: 'shrek.webm',
    twoCats: 'two-cats.webm',
  },
} as const;

type PublicImageNamesType = typeof PublicImagesData;

type PublicImagesType = {
  [C in keyof PublicImageNamesType]: {
    // @ts-expect-error - Всё ок
    [K in keyof PublicImageNamesType[C]]: `/images/${C}/${PublicImageNamesType[C][K]}`;
  };
};

export const PublicImages: PublicImagesType = Object.fromEntries(
  Object.entries(PublicImagesData).map(([category, images]) => [
    category,
    Object.fromEntries(
      Object.entries(images as Record<string, string>).map(([key, filename]) => [
        key,
        `/images/${category}/${filename}`,
      ]),
    ),
  ]),
) as PublicImagesType;

export type PublicImagePath =
  PublicImagesType[keyof PublicImagesType] extends infer Category
    ? Category extends Record<string, infer Img>
      ? Img
      : never
    : never;
