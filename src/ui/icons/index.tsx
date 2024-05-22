import { StaticImageData } from 'next/image';

import adult from './adult.svg'
import child from './child.svg'
import person_bold from './person_bold.svg'

import exclamation from './exclamation.svg'

import bag_1 from './bag_1.svg'
import bag_23 from './bag_23.svg'
import carry_1 from './carry_1.svg'
import special from './special.svg'

import puppyBig from './puppyBig.svg'
import puppySmall from './puppySmall.svg'


interface IDictionary {
    [index: string]: StaticImageData;
}
export default {
    adult,
    child,
    person_bold,
    exclamation,
    bag_1,
    bag_23,
    carry_1,
    special,
    puppyBig,
    puppySmall
} as IDictionary;