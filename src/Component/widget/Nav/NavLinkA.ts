import styled from 'styled-components';

export const NavLinkA = styled('li')`
    align-items: center;
    color: #999;
    display: flex;
    display: inline-block;
    list-style: none;
    padding-left: 20px;
    text-decoration: none;
    text-transform: capitalize;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 10px;
      width: 0;
      background: var(--text);
      transition: width 150ms linear;
    }
    &:hover::before {
      width: 100%;
    }
    `;
