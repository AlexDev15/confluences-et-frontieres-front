"use client";

type ButtonVariant = "squarePrimary" | "squareSecondary" | "underlinePrimary" | "underlineSecondary";

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
}

const focusClasses = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme";

const variantClasses: Record<ButtonVariant, string> = {
  squarePrimary: [
    "min-w-[200px] min-h-[60px] h-[55px] px-5",
    "bg-theme text-on-primary font-bold whitespace-nowrap shadow-lg",
    "hover:bg-on-primary hover:text-theme transition-colors",
    "phone:min-w-[150px] phone:min-h-[50px] phone:h-[45px] phone:px-4",
    focusClasses,
  ].join(" "),
  squareSecondary: [
    "min-w-[200px] min-h-[60px] h-[55px] px-5",
    "bg-transparent border border-on-primary text-on-primary font-bold whitespace-nowrap shadow-lg",
    "hover:bg-on-primary hover:text-on-surface transition-colors",
    "disabled:bg-white/50 disabled:border-white/50 disabled:text-on-surface disabled:cursor-default",
    "phone:min-w-[150px] phone:min-h-[50px] phone:h-[45px] phone:px-4",
    focusClasses,
  ].join(" "),
  underlinePrimary: [
    "inline-block text-theme whitespace-nowrap",
    "bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-bottom bg-no-repeat",
    "transition-[background-size] duration-200 ease-in-out",
    focusClasses,
  ].join(" "),
  underlineSecondary: [
    "inline-block text-xs font-light text-on-primary whitespace-nowrap",
    "bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-bottom bg-no-repeat",
    "transition-[background-size] duration-200 ease-in-out",
    focusClasses,
  ].join(" "),
};

function getUnderlineStyle(variant: ButtonVariant): React.CSSProperties | undefined {
  if (variant === "underlinePrimary") {
    return { backgroundImage: "linear-gradient(var(--theme-color), var(--theme-color))" };
  }
  if (variant === "underlineSecondary") {
    return { backgroundImage: "linear-gradient(white, white)" };
  }
  return undefined;
}

export default function Button({
  text,
  variant,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${variantClasses[variant]}${className ? ` ${className}` : ""}`}
      style={getUnderlineStyle(variant)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
