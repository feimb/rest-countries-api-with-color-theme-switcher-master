import Skeleton from "react-loading-skeleton";
const CountryInfoSkeleton = () => {
    return (
        <div className=" flex flex-col lg:flex-row gap-12 items-start ">
            <div className="w-full max-w-lg shadow-lg">
                <Skeleton 
                    className="" 
                    height={400}
                />

            </div>
            <div className="flex-1 p-6 ">
                <h3 className="text-3xl font-bold mb-6">
                    <Skeleton width={200} height={40} />
                </h3>
                <div className="md:flex font-extralight text-sm  items-baseline gap-20">
                    <div className="">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="mt-2">
                                <Skeleton width={100} height={20} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 md:mt-0">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="mt-2">
                                <Skeleton width={150} height={20} />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="mt-8  md:flex gap-2 items-baseline">
                    <p className="">Border Countries:</p>
                    <div className="mt-4 md:mt-0 flex gap-2  flex-wrap">
                        {[1, 2, 3].map((item) => (
                            <Skeleton 
                                key={item}
                                width={80} 
                                height={35}
                                className="rounded-xs"
                            />
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default CountryInfoSkeleton;