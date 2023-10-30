import React from 'react';
import Form from 'react-bootstrap/Form';
import './searchbar.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className='search-bar'>
         <Form>
            <Form.Group>
                <Form.Control className='search-input-field' type="search" placeholder="Search Here..." />
                <Button className='search-btn main-btn'><FontAwesomeIcon icon={faSearch}/></Button>
            </Form.Group>
        </Form>
    </div>
  )
}

export default SearchBar