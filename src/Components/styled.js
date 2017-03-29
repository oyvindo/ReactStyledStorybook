import styled from 'styled-components';

export const CheckboxDiv = styled.div`
    position: relative;
    display: inline;
    margin: 0 0 0.5rem 0;

    input[type=checkbox]:checked + label:after {
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        filter: alpha(opacity=100);
        opacity: 1;
    }

    input {
        visibility: hidden;
        width: 30px;
        height: 30px;
        margin-top: 0;
    }

    input:checked + input:after{
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
        filter: alpha(opacity=100);
        opacity: 1;
    }

    &.small {
        margin: 0;
    }

    &.small input[type="checkbox"],
    &.small label {
      width: 20px;
      height: 20px;
    }

    &.small label:after {
      width: 11px;
      height: 7px;
      background: transparent;
      top: 4px;
      left: 3px;
        border: 4px solid #333;
    	border-top: none;
    	border-right: none;
    }

    &.labeled {
        margin-top: 5px;
        left: 40px;
    }
    span {
        display: block;
        margin: 0 0 0.25rem 0;
    }

    &.templateEditor {
        display: block;

    }

    &.templateEditor>span {
        position: absolute;
        left: 8px;
    }
    &.red {
        background: red;
        padding: 3px;
    }
`;

export const CheckboxLabel = styled.label`
    cursor: pointer;
    position: absolute;
    width: 30px;
    height: 30px;
    left: -40px;
    border: 2px solid black;
    background-color: transparent;

    &:after {
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
          opacity: 0;
          content: ' ';
          position: absolute;
          width: 15px;
          height: 12px;
          background: transparent;
          top: 5px;
          left: 5px;
          border: 4px solid #333;
          border-top: none;
          border-right: none;
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
    }

    &:hover::after {
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
        opacity: 0.5;
    }
`;
