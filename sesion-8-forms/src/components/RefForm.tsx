import React, { useRef } from 'react';

const RefForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      // Cambiaremos un state de error
      // setError('Los dos campos son requeridos')
      return;
    }

    const payload = {
      username,
      password,
    };

    console.log(payload);
  };

  console.log('Rendering RefForm');

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <label htmlFor="username">Username:</label>
        <input ref={usernameRef} id="username" name="username" type="text" />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password:</label>
        <input
          ref={passwordRef}
          id="password"
          name="password"
          type="password"
          required
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RefForm;
