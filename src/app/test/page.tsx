'use client'
import LabelInput, { SearchPlaces } from "@/components/input";

export default function Test () {
    return (
        <div className="bg-purple-200 p-20">
            <div className="container m-auto bg-white shadow-lg py-10 px-20">
                <LabelInput placeholder="Nombre"/>
                <SearchPlaces label={"Ciudad"} />
            </div>
        </div>
    )
}