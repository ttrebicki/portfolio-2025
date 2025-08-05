import Link from "next/link";
import { IProjectProps } from "./types";
import Image from "next/image";

export const Project = ({
  name,
  description,
  image,
  codeUrl,
  url,
  inverted,
}: IProjectProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3>{name}</h3>
      <div className={`flex flex-col md:flex-row gap-8 md:gap-32`}>
        <div
          className={"relative items-center justify-center md:flex md:flex-1"}
        >
          <Image fill src={image} alt={name} objectFit={"contain"} />
        </div>
        <div className={"flex flex-col gap-4 flex-1 md:flex-2"}>
          {description.map((p) => (
            <p className="flex">{p}</p>
          ))}
        </div>
      </div>
      <h4>Links:</h4>
      <Link href={url}>Website</Link>
      {!!codeUrl?.length && <Link href={codeUrl}>Code</Link>}
    </div>
  );
};
