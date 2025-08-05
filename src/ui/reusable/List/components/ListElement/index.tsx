import { IListElementProps } from "./types";
import Image from "next/image";
import { Box } from "@/ui/reusable/Box";
import { ProgressBar } from "../ProgressBar";

export const ListElement = ({ item }: IListElementProps) => {
  const { name, imageUrl, description, skillLevel } = item;

  return (
    <li className={"flex flex-col relative"}>
      <Box
        isHover
        imageSlot={
          !!imageUrl?.length && (
            <div className="relative w-[100%]">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className={"flex object-contain"}
              />
            </div>
          )
        }
      >
        <div className={"flex flex-1 flex-col gap-2"}>
          <div className={"flex flex-1 flex-col gap-1"}>
            <span className={"text-xs block"}>
              <strong>{name}</strong>
            </span>
            <span className={"text-xs block"}>{description}</span>
          </div>
          {skillLevel && <ProgressBar skillLevel={skillLevel} />}
        </div>
      </Box>
    </li>
  );
};
