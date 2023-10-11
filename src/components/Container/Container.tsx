import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & ComponentProps<"div">;

const Container = ({ className, children, ...restProps }: Props) => {
  return (
    <div
      className={twMerge("mx-auto w-full max-w-7xl px-4", className)}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Container;
