import React from 'react';
import range from 'lodash.range';
import styled from 'styled-components';

const PaginationWrapper = styled.div `
  margin-top: 1.5rem;
`;

const PaginationPage = styled.span `
  >span {
    text-decoration: none;
    border-bottom: none;
    margin: 0 0.5rem;
    padding: 0 0.15rem;
    color: black;
    border-color: black;
    font-weight: 400;
  }
  >a {
    text-decoration: none;
  }
  >a span {
    color: #a4a49e;
    border-bottom: 1px solid #a4a49e;
    text-decoration: none;
    margin: 0 0.5rem;
    padding: 0 0.15rem;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  >a:hover span {
    color: black;
    border-color: black;
  }
`;

export default class Pagination extends React.Component {
    render() {
        let {numberOfPages, currentPage, onChangePage} = this.props;
        let pageStart = Math.max(0, currentPage - 4);
        let pageEnd = Math.min(numberOfPages, currentPage + 6);
        let pageLinks = range(pageStart, pageEnd)
            .map(i => {
                let page = i + 1;
                return (
                    <PaginationPage key={"page_" + page }>
                        {
                            i == currentPage
                                ? <span>{page}</span>
                                : <a href="#" onClick={ e => { e.preventDefault(); onChangePage(page); } }><span>{page}</span></a>
                        }
                    </PaginationPage>
                );
            });
        return (
            <PaginationWrapper>{pageLinks}</PaginationWrapper>
        );
    }
}
