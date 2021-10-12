import React, { useState } from "react";
import styled from "styled-components";

const Wrapper1 = styled.div`
  .switch {
    position: relative;
    display: flex;
    align-items: center;
    width: 110px;
    height: 26px;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.4);
  }
  .switchS {
    position: relative;
    display: flex;
    align-items: center;
    width: 60px;
    height: 26px;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.4);
  }
  .switchxs {
    position: relative;
    display: flex;
    align-items: center;
    width: 50px;
    height: 26px;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.4);
  }

  .switchG {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 110px;
    width: 110px;
    height: 26px;
    border-radius: 100px;
    background: #91be62;
  }
  .switchGS {
    position: relative;
    display: flex;
    align-items: center;

    width: 60px;
    height: 26px;
    border-radius: 100px;
    background: #91be62;
  }
  .switchGxs {
    position: relative;
    display: flex;
    align-items: center;

    width: 50px;
    height: 26px;
    border-radius: 100px;
    background: #91be62;
  }
  .ball {
    position: absolute;
    left: 5px;
    width: 18px;
    height: 18px;
    border-radius: 100px;
    background: #ffffff;
  }
  .ballU {
    position: absolute;
    left: 85px;
    width: 18px;
    height: 18px;
    border-radius: 100px;
    background: #ffffff;
  }

  .label {
    position: relative;
    margin: 0 auto;
    left: 10px;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  }

  .labels {
    position: relative;
    margin: 0 auto;
    right: 10px;

    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  }
`;

function Toggle(props) {
  const [active, setActive] = useState(props.state);

  const Switch = (props) => {
    return (
      <div className='shake'>
        <Wrapper1>
          {/* {props.state === false ? ( */}
            <div
              className={
                props.size == "small"
                  ? "switchS"
                  : props.size == "check"
                  ? "switchxs"
                  : props?.state?"switch active":"switch"
              }
              onClick={() => {
                props.handleOnClick();
              }}
            >
              <div className='ball'></div>
              <div className='label'>
              {props?.state? props.label[1]:props.label[0]}
              </div>
            </div>
          {/* ) : ( */}
            <div
              className={
                props.size == "small"
                  ? "switchGS"
                  : props.size == "check"
                  ? "switchGxs"
                  : "switchG"
              }
              onClick={() => {
                props.handleOnClick();
              }}
            >
              <div className='ballU'></div>

              <div className='labels'>{props.label[1]}</div>
            </div>
          {/* )} */}
        </Wrapper1>
      </div>
    );
  };

  const handleOnClick = () => {
    setActive(!active);
    {
      props.onChange(active);
    }
  };

  return (
    <Switch
      size={props.size}
      onChange={props.onChange}
      handleOnClick={handleOnClick}
      state={active}
      label={props.label}
    />
  );
}

export default Toggle;
