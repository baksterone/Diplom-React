import React from 'react'
import TagsService from '../../../services/TagsService'
import './Tags.scss'

export default function Tags() {
  return(
    <div className="tags">
      <h2>Popular Tags</h2>
      <div className="tag-list">
        <TagsService/>
      </div>
    </div>
  )
};
