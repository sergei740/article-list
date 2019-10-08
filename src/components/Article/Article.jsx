import React from 'react';

export default function Article(props) {
  return (
    <li className='card mx-auto mb-4' style={{width:'100%'}}>
      <div className='card-header d-flex justify-content-between align-items-center'>
        <h1>{ props.article.title }</h1>
        <button className='btn btn-primary btn-lg' onClick={ () => { props.changeOpenArticleId(props.article.id) } }>
          { props.isOpen ? "Hide" : "Show" }
        </button>
      </div>
      <div className='card-body'>
        { props.isOpen ? <p>{ props.article.text }</p> : null }
        <h6 className='card-subtitle text-muted py-3'>creation
          date:{ (new Date(props.article.date)).toDateString() }</h6>
      </div>
    </li>
  )
}
