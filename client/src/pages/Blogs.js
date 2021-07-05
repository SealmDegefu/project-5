import React, {useState} from 'react';
import './Blogs.css';
import BlogItem from './BlogItem';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Blogs() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
	<div className="blog-body">
	<center>
	<Dropdown isOpen={dropdownOpen} toggle={toggle}>
  <DropdownToggle caret>
    Filter through different blog topics
  </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem>Header</DropdownItem>
    <DropdownItem>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
  </DropdownMenu>
</Dropdown>
</center>
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <BlogItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaYIwcvXlcEeUF1IAUCRYLbu6PoC274UJww&usqp=CAU'
              text='This blog will walk you through 10 most nutritious foods to eat everyday'
              label='Nutrition'
              href= "https://www.health.harvard.edu/blog/10-superfoods-to-boost-a-healthy-diet-2018082914463"
            />
            <BlogItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8kouaCENqhhso5l-yU2UrQ9n172HowHZJw&usqp=CAU'
              text='Learn the benefits of doing 30 minutes workout everyday'
              label='Exercise'
              href='https://www.genesisfitness.com.au/blog/9-benefits-30-mins-exercise-day'
            />
          </ul>
          <ul className='cards__items'>
            <BlogItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSUETkIiR9V3ZqBgybqX8yKiC2duhNK8dhQ&usqp=CAU'
              text='The power of meditating before you start your day'
              label='Mental Health'
              href='https://littlecoffeefox.com/benefits-morning-meditation/'
            />
            <BlogItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZmOP3fNgOVLpIqqsxYKfNycxkTcqqF96Sw&usqp=CAU'
              text='How having a therapist to talk to on a weekly basis can improve your confidence'
              label='Mental Health'
              href='https://www.goodtherapy.org/learn-about-therapy/issues/self-esteem/improve'
            />
            <BlogItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejcq6ijJdbZNcofncymMcbLsL5tiai44WKA&usqp=CAU'
              text='What are some of the best ready-to-drink protein shakes?'
              label='Nutrition'
              href='https://www.medicalnewstoday.com/articles/best-protein-shakes'
            />
			
          </ul>
        </div>
      </div>
    </div>
	</div>
  );
}

export default Blogs;