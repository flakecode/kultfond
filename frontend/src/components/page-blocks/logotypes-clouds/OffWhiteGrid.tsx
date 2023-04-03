import Image from "next/image";
import { ILogotypesCloudBlock } from ".";
import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import Link from "next/link";

export default function OffWhiteGrid(props: ILogotypesCloudBlock) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600">
          {props.title}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {props.logotypes?.map((logotype, index) => {
            if (!logotype.media) {
              return <></>;
            }

            return (
              <div
                key={index}
                className="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
              >
                <Link
                  href={logotype?.url || ``}
                  className="relative h-12 w-full"
                >
                  {logotype.media.length ? (
                    <Image
                      fill={true}
                      src={getImageUrl(logotype.media[0], { BACKEND_URL })}
                      alt="Tuple"
                    />
                  ) : null}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
