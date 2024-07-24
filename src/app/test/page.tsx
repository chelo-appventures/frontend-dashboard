import { AdultIcon, BabyICON, KidIcon } from "@/components/test/paxIcon"

export default function Test () {
    const cantAdultos = 3

    const adultsArray =  Array.from({length: cantAdultos}, (_) => {}) 
    console.log(adultsArray)
    return (
        <div className="container items-center justify-between w-1/2 m-auto">
            <h1 className="font-bold text-3xl">Pagina para testeo de componentes y otros</h1>
            <p>Cantidad de adultos: {cantAdultos}</p>
            <div>
                {adultsArray.map( (adult, index: number) => {
                    return <AdultIcon OK={true} />
                } )}
                
            </div>
            {/* <div>
                <KidIcon OK={true} />
                <KidIcon OK={false} />
            </div>
            <div>
                <BabyICON OK={true} />
                <BabyICON OK={false} />
            </div> */}
        </div>
    )
}