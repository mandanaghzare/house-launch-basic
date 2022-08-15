import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Menu from '../../Component/generally/menu/js/Menu';
import ArticleItem from './ArticleItem';
import datas from '../../data/cities.json'

function Article() {
  const PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => fetchData(), []);

  function fetchData() {
    setData(datas);
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((index) => <ArticleItem key={index} />);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="article">
        <Menu />
        <div className="content">
            <h6>مقالات محبوب</h6>
            <div className="article_list">
              {currentPageData}
            </div>
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
        </div>
    </div>
  )
}

export default Article