import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardCountrySkeleton = () => (
    <div className="bg-el w-[266px] shadow-md rounded-lg overflow-hidden">
        {/* Imagen */}
        <Skeleton className=" w-full" height={150} width="100%"/>

        {/* Contenido */}
        <div className="p-6 pb-9 text-sm">
            {/* Título */}
            <Skeleton width={140} height={20} className="mb-3" />

            {/* Texto */}
            <Skeleton width={120} />
            <Skeleton width={100} />
            <Skeleton width={140} />
        </div>
    </div>

);

export default CardCountrySkeleton;
