export default function Separator ( {title}:{title:string}) {
    return (
        <>
            <h5 className="text-[18px]">{title}</h5>
            <span className="inline-block w-full h-[1px] bg-gray-400 mb-2"></span>
        </>
    )
}