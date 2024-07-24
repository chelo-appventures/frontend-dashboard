import { StaticImageData } from 'next/image';

import sprinter from "@/ui/img/vehicles/Sprinter_Minibus_17_1_PPD 1.png"
import sharan from "@/ui/img/vehicles/Sharan.png"
import cronos from "@/ui/img/vehicles/fiat_cronos_versiones 1.png"
import bus45 from "@/ui/img/vehicles/bus45.png"
import bus60 from "@/ui/img/vehicles/bus60.png"
import iveco24 from "@/ui/img/vehicles/iveco24.png"





interface IDictionary {
    [index: string]: StaticImageData;
}
export default {
    sprinter, 
    sharan,
    cronos,
    bus45,
    bus60,
    iveco24,
} as IDictionary;