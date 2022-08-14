import React from 'react'
import Menu from '../../Component/generally/menu/js/Menu'
import ArticleItem from './ArticleItem'

function Article() {
  return (
    <div className="article">
        <Menu />
        <div className="content">
            <h6>مقالات محبوب</h6>
            <div className="article_list">
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
            </div>
        </div>
    </div>
  )
}

export default Article