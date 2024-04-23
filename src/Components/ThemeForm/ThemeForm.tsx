import Select from 'react-select';

const ThemeForm = () => {

  const options = [
    {value: 'random', label: 'Select a Theme'},
    {value: 'animals', label: 'Animals'},
    {value: 'flowers', label: 'Flowers'},
    {value: 'fruits', label: 'Fruits'},
  ];

  function changeTheme(selectedOption:any) {
    localStorage.setItem("selectedTheme", JSON.stringify(selectedOption));
    window.location.reload();
  }

  const selectedValue = () => {
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme !== null) {
      return JSON.parse(storedTheme);
    } else {
      localStorage.setItem("selectedTheme", JSON.stringify(options[0]));
      return options[0];
    }
  };

  return (
    <div className="dropdown">
      <Select 
        options={options} 
        defaultValue={selectedValue()} 
        onChange={changeTheme}
      />
    </div>
  );
}

export default ThemeForm;