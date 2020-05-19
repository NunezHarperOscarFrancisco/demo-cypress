### Descripción
Demo de automatización en cypress de la pagina de arkus interview, consta de tres ejemplos de prueba:
* Un login válido
* Un login inválido
* Una alta de prospectos (esta prueba debe fallar y tomar captura del momento de fallo)

### Instalación
1. Clona el repositorio
2. en el direcotrio base del repositorio corre el siguiente comando: ```npm ci```

### Uso
* Para correrlo en modo grafico utiliza : ```.\node_modules\.bin\cypress open```
* Para correrlo en modo automático usa : ```.\node_modules\.bin\cypress run```

**NOTAS:** 
- La pagina web de arkus interview se esta tomando como http://localhost:8080 si esta alojada en otra dirección se ocupa cambiar la linea de cy.visit en cada prueba por el url correspondiente.
- Supone un usuario reclutador, si este es distinto al de la prueba se tiene que cambiar por uno adecuado.
