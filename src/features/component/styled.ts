import styled, { css } from 'styled-components';

const fill_color= 'transparent';
const diameter= '34px';
const border_width= '4px';
const font_size= '10px';
const duration= '.2s';

interface CSSProps {
  position?: string;
  rating?: number;
  percent?: number;
}


export const CircleRatingStyled = styled.div<CSSProps>`
  .circle {
    position: ${props => props.position};
    top: -30px;
    left: 10px;
    background: #081C22;
    border-radius: 50%;
    padding: 2px;
    width: 42px;
    height: 42px;
    cursor: default;

    span {
      position: absolute;
      display: block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
      text-align: center;
      color: #fff;
      line-height: 42px;
      font-size: ${font_size};
      font-family: Helvetica, Arial, Geneva, sans-serif;
      transition: font-size ${duration} ease-out;
    }

    &:before {
      position: absolute;
      content: '';
      background-color: ${fill_color};
      
      width: ${diameter};
      height: ${diameter};
      border: ${border_width} solid #204529;
      background: transparent;
      border-radius: 100%;
      transition: width ${duration} ease-out, height ${duration} ease-out, border-width ${duration} ease-out;
    }

    .percentage-bar {
      width: 42px;
      height: 42px;
      position: absolute;
      clip-path: inset(0 0 0 50%);
      &:before {
        position: absolute;
        content: '';
        clip-path: inset(0 50% 0 0);
        transform: rotate(0deg);

        width: ${diameter};
        height: ${diameter};
        border: ${border_width} solid red;
        background: transparent;
        border-radius: 100%;
        transition: width ${duration} ease-out, height ${duration} ease-out, border-width ${duration} ease-out;

        ${(props: CSSProps) => {
            if (props.rating! <= 50) {
              return css`
                border-color: red;
              `;
            } else {
              return css`
                border-color: green;
              `;
            }
          }
        }
      }

      &:after {
        ${(props: CSSProps) => {
          if (props.rating! > 50) {
            return css`
              position: absolute;
              content: "";
              -webkit-clip-path: inset(0 0 0 50%);
              clip-path: inset(0 0 0 50%);
              transform: rotate(0deg);
              width: 42px;
              height: 42px;
              border: 4px solid #74B3CE;
              background: transparent;
              border-radius: 100%;
              transition: width 0.2s ease-out, height 0.2s ease-out, border-width 0.2s ease-out;
            `;
          }
        }}
      }

        }
    &.percentage-12 {
      .percentage-bar:before {
        transform: rotate(${props => props.percent}deg);
      }
    }
  }

`;