const itemCategories = new Map();
const categories = [
  'CLOTHING',
  'CI_CATEGORY_WARDROBE_ACCESSORIES',
  'CI_CATEGORY_WARDROBE_ACCESSORY',
  'CI_CATEGORY_WARDROBE_AGEING',
  'CI_CATEGORY_WARDROBE_APRONS',
  'CI_CATEGORY_WARDROBE_BADGE',
  'CI_CATEGORY_WARDROBE_BAG',
  'CI_CATEGORY_WARDROBE_BANDANA',
  'CI_CATEGORY_WARDROBE_BEARD',
  'CI_CATEGORY_WARDROBE_BELTS',
  'CI_CATEGORY_WARDROBE_BIG_MASK',
  'CI_CATEGORY_WARDROBE_BLOUSES',
  'CI_CATEGORY_WARDROBE_BLUSH',
  'CI_CATEGORY_WARDROBE_BODICE',
  'CI_CATEGORY_WARDROBE_BODY',
  'CI_CATEGORY_WARDROBE_BOOTS',
  'CI_CATEGORY_WARDROBE_BRACELET',
  'CI_CATEGORY_WARDROBE_BUCKLE',
  'CI_CATEGORY_WARDROBE_CHAPS',
  'CI_CATEGORY_WARDROBE_CLOAK',
  'CI_CATEGORY_WARDROBE_COATS',
  'CI_CATEGORY_WARDROBE_COMPLEXION',
  'CI_CATEGORY_WARDROBE_CORSETS',
  'CI_CATEGORY_WARDROBE_DRESSES',
  'CI_CATEGORY_WARDROBE_EYEBROWS',
  'CI_CATEGORY_WARDROBE_EYELINER',
  'CI_CATEGORY_WARDROBE_EYES',
  'CI_CATEGORY_WARDROBE_EYEWEAR',
  'CI_CATEGORY_WARDROBE_FOUNDATION',
  'CI_CATEGORY_WARDROBE_FRECKLES',
  'CI_CATEGORY_WARDROBE_GAUNTLETS',
  'CI_CATEGORY_WARDROBE_GENDER',
  'CI_CATEGORY_WARDROBE_GLASSES',
  'CI_CATEGORY_WARDROBE_GLOVES',
  'CI_CATEGORY_WARDROBE_GRIME',
  'CI_CATEGORY_WARDROBE_GUNBELT',
  'CI_CATEGORY_WARDROBE_HAIR',
  'CI_CATEGORY_WARDROBE_HAIR_ACCESSORY',
  'CI_CATEGORY_WARDROBE_HAT',
  'CI_CATEGORY_WARDROBE_HEAD',
  'CI_CATEGORY_WARDROBE_HEADBAND',
  'CI_CATEGORY_WARDROBE_LEFT_RINGS',
  'CI_CATEGORY_WARDROBE_LIPSTICK',
  'CI_CATEGORY_WARDROBE_MASK',
  'CI_CATEGORY_WARDROBE_MOLES',
  'CI_CATEGORY_WARDROBE_NECKWEAR',
  'CI_CATEGORY_WARDROBE_NIGHTGOWN',
  'CI_CATEGORY_WARDROBE_OUTFIT',
  'CI_CATEGORY_WARDROBE_OVERALLS',
  'CI_CATEGORY_WARDROBE_PANT',
  'CI_CATEGORY_WARDROBE_PONCHO',
  'CI_CATEGORY_WARDROBE_RIGHT_RINGS',
  'CI_CATEGORY_WARDROBE_RINGS',
  'CI_CATEGORY_WARDROBE_SATCHEL',
  'CI_CATEGORY_WARDROBE_SCAR',
  'CI_CATEGORY_WARDROBE_SCARVES',
  'CI_CATEGORY_WARDROBE_SHAWLS',
  'CI_CATEGORY_WARDROBE_SHIRT',
  'CI_CATEGORY_WARDROBE_SKIRTS',
  'CI_CATEGORY_WARDROBE_SPATS',
  'CI_CATEGORY_WARDROBE_SPOTS',
  'CI_CATEGORY_WARDROBE_STOCKINGS',
  'CI_CATEGORY_WARDROBE_SUSPENDERS',
  'CI_CATEGORY_WARDROBE_TEETH',
  'CI_CATEGORY_WARDROBE_TIES',
  'CI_CATEGORY_WARDROBE_UNDERGARMENT',
  'CI_CATEGORY_WARDROBE_UNIONSUIT',
  'CI_CATEGORY_WARDROBE_UNIONSUIT_LOWER',
  'CI_CATEGORY_WARDROBE_VEST',
];

for (const category of categories) {
  itemCategories.set(GetHashKey(category), category);
}

export default itemCategories;
