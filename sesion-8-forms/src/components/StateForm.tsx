import React, { useState } from 'react';

const StateForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('El formulario vale:', form);
    // Consumimos nuestra API
    // postUser()
  };

  console.log('Renderizando StateForm');

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <label htmlFor="username">Username:</label>
        <input
          value={form.username}
          onChange={(e) => {
            setForm((prevForm) => ({
              ...prevForm,
              username: e.target.value,
            }));
          }}
          id="username"
          name="username"
          type="text"
        />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password:</label>
        <input
          value={form.password}
          onChange={(e) => {
            setForm((prevForm) => ({
              ...prevForm,
              password: e.target.value,
            }));
          }}
          id="password"
          name="password"
          type="password"
        />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StateForm;
