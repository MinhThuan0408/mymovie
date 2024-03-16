import styled from "styled-components";

export const BGDetail = styled.div`
.bg-detail {
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;

  .bg-detail-custom {
    background: #000000ba;
    }

  .detail {
    padding: 30px 40px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      padding: 15px;
    }

    &__poster {
      border-width: 0;
      min-width: 300px;
      width: 300px;
      height: 450px;
      border-radius: 5px;
      position: relative;

      img {
        width: 100%;
        border-radius: 5px;
      }

      .wrapper {
        transition: all 0.5s;
        position: absolute;
        width: 100%;
      
      }

      &:hover .wrapper {
        transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
        box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
      }

      .character {
        width: 100%;
        opacity: 0;
        transition: all 0.5s;
        position: absolute;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
      }

      &:hover .character {
        opacity: 1;
        z-index: 1;
        transform: translate3d(0%, -30%, 100px);
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: center;
      box-sizing: border-box;
      padding-left: 40px;
      flex-direction: column;

      @media only screen and (max-width: 768px) {
        padding-left: 0;
      }

      .title {
        margin-bottom: 24px;

        .fact{
          display: flex;
          flex-wrap: wrap;
        }
        h2 {
          font-size: 2.2rem;
          margin: 0;
        }

        span {
          font-weight: 400;
          opacity: .8;
        }

        .certification {
          display: inline-flex;
          white-space: nowrap;
          align-items: center;
          align-content: center;
          padding: 0.06em 4px 0.15em !important;
          border: 1px solid #fff;
          color: #fff;
          line-height: 1;
          border-radius: 2px;
          margin-right: 7px;
        }

        .genres {
          padding-left: 20px;
          position: relative;
          top: 0;
          left: 0;
          display: flex;
          flex-wrap: wrap;
          &::before {
            font-size: 1.1em;
            line-height: 1;
            content: "•";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 7px;
            display: inline-flex;
            align-content: center;
            align-items: center;
            z-index: -1;
          }

          a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
          }
        }

        .runtime {
          padding-left: 20px;
          position: relative;
          top: 0;
          left: 0;

          &::before {
            font-size: 1.1em;
            line-height: 1;
            content: "•";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 7px;
            display: inline-flex;
            align-content: center;
            align-items: center;
            z-index: -1;
          }
        }
      }

      .action {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        flex-wrap: wrap;

        @media only screen and (max-width: 768px) {
          justify-content: space-around;
       }

        .chart {
          display: flex;
          align-items: center;
          margin-right: 20px;

          span {
            font-weight: 700;
            margin-left: 6px;
            white-space: pre-line;
          }
        }

        .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          background: #032541;
          border-radius: 50%;
          width: 46px;
          height: 46px;
          margin-right: 20px;
          margin-bottom: 10px;
        }

        .none-play {
          display: inline-flex;
          justify-content: center;
          color: #fff;

          span {
            font-weight: 600;
          }
        }
      }

      .info {
        color: #fff;

        .tagline {
          margin-bottom: 0;
          font-size: 1.1em;
          font-weight: 400;
          font-style: italic;
          opacity: .7;
        }

        ol {
          margin-top: 20px;
          justify-content: flex-start;
          flex-wrap: wrap;
          list-style-type: none;
          list-style-position: inside;
          margin: 0;
          padding: 0;
          display: flex;
          position: relative;
          top: 0;
          left: 0;
        }

        li {
          background-color: transparent;
          height: auto;
          margin-bottom: 0;
          color: #fff;
          width: 33%;
          flex-basis: 33%;
          text-align: left;
          margin-bottom: 14px;
          margin-right: 0;
          box-sizing: border-box;
          padding-right: 20px;

          p {
            font-size: 1em;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;

            a {
              font-weight: 700;
              color: #fff;
              text-decoration: none;
            }
          }

          .character {
            font-size: .9em;
          }
        }
      }
    }
  }
}
`