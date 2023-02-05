import PT from 'prop-types';
import React, { PureComponent } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';

import {
  ButtonLabel,
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends PureComponent {
  state = {
    name: '',
  };

  onInputChange = e => {
    const name = e.currentTarget.value.trim();
    this.setState({ name: name.toLowerCase() });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.state.name !== ''
      ? this.props.onSubmit(this.state.name)
      : toast.error('🥺 Please enter a picture name');

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchFormButton type="submit">
            <BiSearchAlt2
              style={{
                width: 30,
                height: 30,
              }}
            />
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PT.func.isRequired,
};
