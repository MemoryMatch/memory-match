import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const ThemeForm = () => {

  const options = [
    {value: 'random', label: 'Select a Theme'},
    {value: 'animals', label: 'Animals'},
    {value: 'flowers', label: 'Flowers'},
    {value: 'fruits', label: 'Fruits'},
  ]

  function changeTheme(event:any) {
    localStorage.setItem("selectedTheme", JSON.stringify(event));
    window.location.reload();
  }

  const selectedValue = () => {
    if (localStorage.getItem("selectedTheme") != null) {
      return JSON.parse(localStorage.getItem("selectedTheme") || '{}')
    } else {
      localStorage.setItem("selectedTheme", JSON.stringify(options.at(0)))
      return options.at(0);
    }
  }

  return (
    <div className="dropdown">
      <Select 
        options={options} 
        defaultValue={selectedValue} 
        onChange={changeTheme}
      />
    </div>
  );
}

export default ThemeForm;