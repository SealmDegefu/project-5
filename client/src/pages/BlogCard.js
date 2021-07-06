import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BlogItem from './BlogItem';
import './Blogs.css'

const BlogCard = ({ blogItem }) => {

	return (
<div className='cards__container'>
<div className='cards__wrapper'>
<div className="cards_item">
		<ul className='cards_item'>
			<BlogItem
              src={blogItem.src}
              text={blogItem.text}
              label={blogItem.label}
              href={blogItem.href}
            />
			</ul>
      </div>
    </div>
	</div>
	)
}

export default BlogCard
