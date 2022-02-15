# MiniCodeLab - Taller de React desde 0 Parte 1

Repositorio creado en el segundo Taller de React desde Cero de MiniCodeLab, donde hemos visto los Hooks `useState` y `useEffect` en profundidad 🚀.

Aquí te dejamos el vídeo resubido del taller para ver cómo hemos desarrollado este código: https://youtu.be/5EiAGGHunOA

Y el artículos de la web donde podrás repasar todo lo que hemos trabajado juntos:

https://www.minicodelab.dev/feed/react-0-hooks-parte-1

Gracias por participar en esta comunidad ♥

---

# Ejercicios propuestos

Como te comentamos en el taller en directo (o en youtube si lo has visto en diferido), te proponemos una serie de ejercicios para que practiques y compartas el resultado con nosotros en Discord. Aquí te dejamos el documento con los enunciados 🧙‍♂️

## Ejercicios UseState y UseEffect

¡Hey 👋 MiniCoder! ha llegado el momento de ponernos a prueba, después de todo lo que hemos aprendido estaría chachi hacer algunos ejercicios para comprobar si han calado los conocimientos. ¡Vamos a por ello!

Recuerda que tenemos un canal de Discord en el que podrás conocer a más personas del mundo de desarrollo, anunciamos los artículos y comentamos los ejercicios 😊 Si te quieres unir revisa nuestros talleres en directo en [Twitch](https://www.twitch.tv/minicodelab) y vídeos en [Youtube](https://www.youtube.com/channel/UCN1SyK4zRHbdIO6HptDoDOA) para ver como acceder.

---

### Valor del Bitcoin 💶

Vamos a realizar un conversor de euros a Bitcoin. Como el valor fluctúa tanto podemos decir que un euro son 0.01 Bitcoin. El user introduce un valor en euros y se mostrará el valor del Bitcoin.

```tsx
const BitcoinConversor = (): React.FC => {
  // Añade los estados que necesites...

  return (
    <div>
      <h2>Convierte Euros a Bitcoins 💶</h2>

      {/* Aquí deberíamos tener un input! */}

      <h3>{euro} EUR</h3>
      <h3>{bitcoin} BTC</h3>
    </div>
  );
};
```

---

### Select Avenger

Desarrollar una aplicación sencilla en la que, al pulsar sobre cada uno de los botones representados por el nombre un avenger, debe cargarse la imagen del Avenger. ¡Punto extra si consigues ocultarla y mostrarla con cada click! 🦸‍♂️

```tsx
const myAvenger = {
  ironMan:
    'https://www.sideshow.com/storage/product-images/500846U/the-invincible-iron-man_marvel_silo_lg.png',
  spiderMan:
    'https://pbs.twimg.com/media/EYbVjfXXgAEe2yG?format=jpg&name=4096x4096',
  blackPanther:
    'https://www.lafuerzararuna.com/files/products/avengers-37-alex-ross-black-panther-timeless-var-7eb333d8eb012e32.jpg?width=600&quality=100'
};

const AvengersPanel = (): React.FC => {
  // Deberíamos tener un state más complejo para manejar los botones

  return (
    <div>{/* Aquí mapearemos el objeto myAvenger convertido en array */}</div>
  );
};
```

---

### Cambia el nombre en el Render

Crea un componente que cuando se monte cambie el valor del state inicial, es decir, tienes un useState con un valor inicial y en el effect debería cambiar por otro que queráis. ¡Recuerda el segundo argumento del effect!

Ahora añade un input a través del cual al cambiar su valor, cambie el state del nombre. Y añade un useEffect que cambie ese state nuevamente a un nombre en mayúsculas 🧙‍♂️

```tsx
const ChangeName = (): React.FC => {
  const [name, setName] = useState('MiniCodeLab');

  // Aquí cambiaremos el nombre en el render inicial, ¿como lo harás?
  // useEffect(() => {});

  return (
    <h1>El nombre es: {name}</h1>

    // Y un input que nos permita cambiarlo...
  );
};
```

---

### Renderizado en el click 🔄

Crea un componente en el que cada vez que se haga click sobre un botón su state cambie y por lo tanto se lance un repintado de nuestra aplicación. ¡Punto extra si consigues hacer un contador con las veces que lo hemos renderizado!

```tsx
const RenderOnClick = (): React.FC => {};
```

---

### Filtrado de elementos

Crea un filtro de personajes de Rick and Morty, para ello debes recuperar los valores de la API y después filtrar cada uno de los personajes (solo en el cliente, no desde la API) en base a un input. ¡Este es el más complejo, ten un poquito de paciencia y prueba a conseguirlo!

```tsx
const RickMortyFiler = (): React.FC => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Pediremos los personajes a la API...
  }, []);

  return (
    <div>
      <input
        value={filter}
        placeholder="Filtra por nombre"
        onChange={() => {}} // Cambiamos el state cuando cambie el input
      />

      <h2>Los personajes:</h2>
      {/* Listamos los personajes... */}
    </div>
  );
};
```
