export default function Separator ( {title}:{title:string}) {
    return (
        <>
            <h5 className="text-[18px] mt-8 font-semibold">{title}</h5>
            <span className="inline-block w-full h-[1px] bg-gray-400 mb-2"></span>
        </>
    )
}

export function SeparatorHeading ( {title}:{title:string}) {
    return (
        <>
            <h4 className="text-[22px] font-bold text-blue-900 mt-12">{title}</h4>
            <span className="inline-block w-full h-[1px] bg-blue-900 mb-2"></span>
        </>
    )
}