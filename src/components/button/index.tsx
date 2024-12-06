import { FC, PropsWithChildren } from "react";

const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="py-3 px-6 bg-primary text-secondary hover:opacity-90 rounded-xl text-xl font-bold transition duration-150ms">
      {children}
    </button>
  );
};

export default Button;
