import adultOK from "@/ui/icons/adultOK.svg"
import adultNOK from "@/ui/icons/adultEMPTY.svg"
import kidOK from "@/ui/icons/kidOK.svg"
import kidNOK from "@/ui/icons/kidEMPTY.svg"
import babyOK from "@/ui/icons/babyOK.png"
import babyNOK from "@/ui/icons/babyEMPTY.svg"

import littleBagOK from "@/ui/icons/littleBagOK.svg"
import littleBagNOK from "@/ui/icons/littleBagEMPTY.svg"
import bigBagOK from "@/ui/icons/bigBagOK.svg"
import bigBagNOK from "@/ui/icons/bigBagEMPTY.svg"
import specialOK from "@/ui/icons/specialOK.svg"
import specialNOK from "@/ui/icons/specialEMPTY.svg"
import Image from "next/image"

function AdultIcon({ OK }: { OK:boolean }) {
    return(
        OK 
        ?  <><Image src={adultOK} alt=""/></>
        : !OK 
            ? <><Image src={adultNOK} alt=""/></>
            : null        
    )
}

function KidIcon({ OK }: { OK:boolean }) {
    return(
        OK 
        ?  <><Image src={kidOK} alt=""/></>
        : !OK 
            ? <><Image src={kidNOK} alt=""/></>
            : null        
    )
}

function BabyICON({ OK }: { OK:boolean }) {
    return(
        OK 
        ?  <><Image src={babyOK} alt=""/></>
        : !OK 
            ? <><Image src={babyNOK} alt=""/></>
            : null        
    )
}

function LittleBagICON ({ OK }: { OK:boolean }) {
    return(
        OK 
        ?  <><Image src={littleBagOK} alt=""/></>
        : !OK 
            ? <><Image src={littleBagNOK} alt=""/></>
            : null  
    )
}

function BigBagICON ({ OK }: { OK:boolean }) {
    return(
        OK 
        ?  <><Image src={bigBagOK} alt=""/></>
        : !OK 
            ? <><Image src={bigBagNOK} alt=""/></>
            : null  
    )
}

function SpecialICON ({ OK }: { OK:boolean }) {
    return(
        OK 
        ?  <><Image src={specialOK} alt=""/></>
        : !OK 
            ? <><Image src={specialNOK} alt=""/></>
            : null  
    )
}


export { AdultIcon, KidIcon, BabyICON, LittleBagICON, BigBagICON, SpecialICON }
