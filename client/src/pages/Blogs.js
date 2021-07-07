import React, {useState} from 'react';
import './Blogs.css';
import BlogItem from './BlogItem';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BlogCard from './BlogCard'

function Blogs({ blogs, setBlog, setFilterBlogs, onFilter, filterblogs }) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
	  <div>
	<div className='cards'>
	<select onChange={e =>setFilterBlogs(e.target.value)} className="drop-down" id="drop-down">
	<option value="all">-- Filter through blog topics --</option>
    <option value="Bridesmaids">Bridesmaids</option>
    <option value="Wedding Registry">Wedding Registry</option>
    <option value="Venue">Venue</option>
</select>
	<button className="blog-submit" onClick={onFilter}> Submit</button>
<div>
	{blogs.map((blogItem) => {
		return (
            <BlogCard
             blogItem={blogItem}
			 key={blogItem.id}
            />
)})}
</div>
</div>
	</div>
  );
}

export default Blogs;