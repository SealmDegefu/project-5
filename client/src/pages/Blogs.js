import React, {useState} from 'react';
import './Blogs.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BlogCard from './BlogCard'

const useStyles = makeStyles((theme) => ({
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	formControl: {
	  margin: theme.spacing(1),
	  minWidth: 120
	},
  }));

function Blogs({ blogs, setBlog, setFilterBlogs, onFilter, filterblogs }) {
	
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [age, setAge] = React.useState('');
	
  
	const handleChange = (event) => {
	  setAge(Number(event.target.value) || '');
	};
  
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	  onFilter()
	};

  return (
	  <div>
	<div className='cards'>
	<div className="drop-down">
	<Button className="blog-selector" onClick={handleClickOpen}>Choose A Blog title</Button>
	</div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>What topic do you feel like reading?</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Blog Title</InputLabel>
              <Select
			  
                native
                onChange={e =>setFilterBlogs(e.target.value)}
              >
                <option aria-label="None" value="" />
				<option value="Bridesmaids">Bridesmaids</option>
                <option value="Venue">Venue</option>
                <option value="Wedding Registry">Wedding Registry</option>
				<option value="Guest-list">Guest List</option>
				<option value="Flower Arrangements">Flower Arrangements</option>
				<option value="Food and Beverage">Food and Beverage</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
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