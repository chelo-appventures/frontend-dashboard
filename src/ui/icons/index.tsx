import { StaticImageData } from 'next/image';

import adult from './adult.png'
import bag from './bag.png'
import puppie from './puppie.png'


interface IDictionary {
    [index: string]: StaticImageData;
}
export default {
    adult,
    bag,
    puppie
} as IDictionary;