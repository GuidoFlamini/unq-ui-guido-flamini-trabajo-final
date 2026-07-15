# El jueguito de las palabritas

Juego de palabras encadenadas desarrollado en React. El objetivo es formar la cadena más larga posible de palabras válidas antes de que se agote el tiempo, encadenando cada palabra nueva a partir de la última letra de la anterior.

## Características

- Validación de palabras contra el diccionario español mediante la API provista por la cátedra.
- Encadenamiento de palabras: cada palabra nueva debe comenzar con la última letra de la anterior.
- Puntaje acumulado (1 punto por letra).
- Temporizador de 15 segundos por turno, que se reinicia con cada palabra válida.
- Mensajes de error claros: palabra inexistente, ya utilizada, o que no respeta el encadenamiento.
- Pantalla de fin de partida con resumen de palabras encadenadas y puntaje final.
- Teclado en pantalla, con soporte también para teclado físico.
- Interfaz responsive.
- Posibilidad de jugar más de una partida.
- Leaderboard local con los mejores 10 puntajes, persistido en `localStorage`.

## Tecnologías

- React + Vite
- React Router (navegación entre el juego y el leaderboard)

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/GuidoFlamini/unq-ui-guido-flamini-trabajo-final.git
cd unq-ui-guido-flamini-trabajo-final
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Por defecto queda levantado en `http://localhost:5173`.

## Cómo jugar

1. Presionar **Jugar** para iniciar una partida.
2. Ingresar una palabra cualquiera para arrancar la cadena.
3. Cada palabra siguiente debe empezar con la última letra de la palabra anterior, existir en el diccionario, y no haber sido usada antes en la partida.
4. Cada palabra válida suma puntos (1 por letra) y reinicia el contador de 15 segundos.
5. La partida termina cuando se agota el tiempo. Se puede volver a jugar o consultar el leaderboard local.


