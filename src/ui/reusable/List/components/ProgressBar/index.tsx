import React from "react";
import { IProgressBarProps } from "./types";

export const ProgressBar: React.FC<IProgressBarProps> = ({ skillLevel }) => {
  const percentage = Math.max(0, Math.min(skillLevel, 10)) * 10;

  return (
    <div className="w-full h-4 rounded bg-background overflow-hidden shadow">
      <div
        className="h-full bg-secondary-main"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
