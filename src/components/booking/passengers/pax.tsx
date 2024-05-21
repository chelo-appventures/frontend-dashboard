import Person from "./Person";
import { SeparatorHeading } from "../../separator";
import PaxAddress from "./paxAddress";

export default function Pax({title, sameAddress}:{title:string, sameAddress:boolean}){
    return (
        <>
            <SeparatorHeading title={title}/>
            <Person />
            <PaxAddress checked={false}/>
        </>
    )
}