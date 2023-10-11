import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & ComponentProps<"button">;

const Button = ({
  children,
  type = "button",
  className,
  ...restProps
}: Props) => {
  return (
    <button
      className={twMerge("bg-blue-600 text-gray-100", className)}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
