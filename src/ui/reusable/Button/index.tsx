import { IButtonProps } from "./types";

export const Button = ({
  padding = 2,
  variant = "contained",
  disabled,
  ...props
}: IButtonProps) => {
  const variantCn =
    variant === "contained"
      ? "bg-primary-main hover:bg-secondary-main text-button-text"
      : `border border-primary-main ${
          disabled ? "" : "hover:bg-secondary-main hover:text-button-text"
        }`;

  return (
    <button
      {...props}
      className={`${variantCn} p-4 cursor-pointer rounded-sm shadow-lg ${
        disabled ? "opacity-50 cursor-default pointer-none:" : ""
      } p-${padding} ${props.className}`}
      onClick={!disabled ? props.onClick : undefined}
    />
  );
};
