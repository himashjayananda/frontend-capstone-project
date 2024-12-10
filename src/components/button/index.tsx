import { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  type?: "submit" | "button";
}

const Button: FC<ButtonProps> = ({ type = "button", children }) => {
  return (
    <button
      type={type}
      className="py-3 px-6 bg-primary text-secondary hover:opacity-90 rounded-xl text-xl font-bold transition duration-150ms"
    >
      {children}
    </button>
  );
};

export default Button;
