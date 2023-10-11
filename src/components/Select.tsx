import { nanoid } from "@reduxjs/toolkit";
import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState
} from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  options?: Array<string>;
  label?: string;
} & ComponentProps<"select">;

const Select = (
  { options, label, className, ...restProps }: Props,
  ref: ForwardedRef<HTMLSelectElement>
) => {
  const id = useId();
  const [keySlug, setKeySlug] = useState<string>("");

  useEffect(
    useCallback(() => {
      setKeySlug(nanoid());
    }, [keySlug, setKeySlug, nanoid]),
    []
  );

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...restProps}
        id={id}
        ref={ref}
        className={twMerge(
          "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50",
          className
        )}
      >
        {useMemo(
          () =>
            options?.map((option) => (
              <option key={`${option}-${keySlug}`} value={option}>
                {option}
              </option>
            )),
          [options, keySlug]
        )}
      </select>
    </div>
  );
};

export default forwardRef(Select);
