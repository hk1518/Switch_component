import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .SwitchContainerInactive::before {
    transform: translateX(5px);
  }
  .SwitchContainerActive::before {
    --width: ${(props) => props.width - 25}px;
    transform: translateX(var(--width));
  }
`;

const SwitchContainer = styled.div`
  display: inline;
  transition: all 0.3s ease;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: 26px;
  border-radius: 100px;
  transition: background 200ms ease-in-out;
  background: ${(props) => (props.value ? props.colors.on : props.colors.off)};

  .label {
    position: relative;
    margin: 0 auto;
    font-size: 12px;
    line-height: 14px;
    font-weight: 600;
  }
  .labelInactive {
    transition: transform 200ms ease-in-out;
    transform: translateX(10px);
    color: ${(props) => props.textColors.off};
  }

  .labelActive {
    transition: transform 200ms ease-in-out;
    transform: translateX(-10px);
    color: ${(props) => props.textColors.on};
  }

  &:before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 100px;
    transition: transform 200ms ease-in-out;
    background: ${(props) => props.ballColor};
  }
`;

function Switch(props) {
  const {
    className,
    size,
    textColors,
    ballColor,
    colors,
    onChange,
    value,
    labels,
    disabled,
  } = props;

  const widthMap = {
    large: 110,
    medium: 60,
    small: 50,
  };

  const classNames = `${className}`;

  return (
    <Wrapper width={widthMap[size] || size}>
      <SwitchContainer
        className={`${classNames || ""} ${
          value ? "SwitchContainerActive" : "SwitchContainerInactive"
        }`}
        width={`${widthMap[size] || size}px`}
        textColors={textColors}
        ballColor={ballColor}
        colors={colors}
        value={value}
        disabled={disabled}
        onClick={() => {
          !disabled && onChange(!value);
        }}
      >
        <div className={`label ${value ? "labelActive" : "labelInactive"}`}>
          {value ? labels.on : labels.off}
        </div>
      </SwitchContainer>
    </Wrapper>
  );
}

Switch.defaultProps = {
  size: "large",
  labels: {
    on: "ENABLED",
    off: "DISABLED",
  },
  colors: {
    on: "#91be62",
    off: "rgba(0, 0, 0, 0.4)",
  },
  disabled: false,
  ballColor: "#ffffff",
  textColors: {
    on: "#ffffff",
    off: "#ffffff",
  },
};

export default Switch;
