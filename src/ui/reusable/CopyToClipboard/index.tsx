"use client";

import { ICopyToClipboardProps } from "./types";
import { MdCopyAll } from "react-icons/md";
import { IconButton } from "../IconButton";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/lib/helpers/getErrorMessage";

export const CopyToClipboard = ({ text }: ICopyToClipboardProps) => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Saved to clipboard!");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <IconButton onClick={() => handleCopy(text)}>
      <MdCopyAll />
    </IconButton>
  );
};
