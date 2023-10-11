import { ComponentProps, ForwardedRef, forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label?: string;
} & ComponentProps<"input">;

const Input = forwardRef(
  (
    { label, type = "text", className, ...restProps }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 inline-block pl-1" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          type={type}
          id={id}
          className={twMerge(
            "w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50",
            className
          )}
          ref={ref}
          {...restProps}
        />
      </div>
    );
  }
);

export default Input;
