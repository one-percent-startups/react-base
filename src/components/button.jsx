import React from "react";
import {
  ButtonBase,
  ButtonDisable,
  ButtonSize,
  ButtonVariant,
} from "../theme/button";

const defaultProps = {
  variant: "primary",
  size: "small",
  type: "button",
  loading: false,
  disabled: false,
};

const Button = ({
  className,
  loading,
  variant,
  size,
  type,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const classNames =
    ButtonBase +
    " " +
    (disabled === true ? ButtonDisable : ButtonVariant[variant]) +
    " " +
    ButtonSize[size] +
    " " +
    className;

  const onClickHandler = (event) => {
    if (disabled || loading) return;
    onClick && onClick(event);
  };

  return (
    <button
      onClick={onClickHandler}
      className={classNames}
      disabled={disabled}
      type={type}
      aria-label={type}
      {...props}
    >
      {!loading && children}
      {loading && (
        <div
          className="w-5 h-5 border-white bg-red rounded-full border-3px border-t-3px animate-spin"
          style={{ borderTopColor: "#f1f1f1" }}
        />
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export const ButtonWithIcon = ({ icon, title, className, ...props }) => {
  return (
    <div className={className}>
      <Button {...props}>
        <span className="">{icon}</span>
        {title}
      </Button>
    </div>
  );
};

export default Button;
