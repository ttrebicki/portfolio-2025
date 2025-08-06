import Link from "next/link";
import { IProjectProps } from "./types";
import Image from "next/image";

export const Project = ({
  name,
  description,
  image,
  codeUrl,
  url,
}: IProjectProps) => {
  return (
    <div className="flex flex-col gap-16">
      <h3>{name}</h3>
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-32`}>
        <div
          className={
            "min-h-[300px] lg:min-h-auto relative items-center justify-center lg:flex lg:flex-1"
          }
        >
          <Image
            fill
            src={image}
            alt={name}
            objectFit={image.endsWith(".gif") ? "cover" : "contain"}
            className={"rounded-xl"}
          />
        </div>
        <div className={"flex flex-col gap-4 flex-1 lg:flex-2"}>
          {description.map((p, index) => (
            <p key={p.substring(0, 10) + "-" + index} className="flex">
              {p}
            </p>
          ))}
        </div>
      </div>
      {(!!url?.length || !!codeUrl?.length) && (
        <div className="flex flex-col gap-4">
          <h4>Links:</h4>
          {!!url?.length && (
            <Link target={"_blank"} href={url}>
              Website
            </Link>
          )}
          {!!codeUrl?.length && (
            <Link target={"_blank"} href={codeUrl}>
              Code
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
