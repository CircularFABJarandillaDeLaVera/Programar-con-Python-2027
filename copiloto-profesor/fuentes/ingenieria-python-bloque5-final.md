# INGENIERÍA CURRICULAR DETALLADA: BLOQUE 5 (PYTHON APLICADO Y LIBRERÍAS)
## Itinerario: "Python 2026: De los Fundamentos a la Programación Asistida por IA"

Este documento constituye la versión final consolidada de la **Ingeniería del Conocimiento para el Bloque 5: Python Aplicado y Librerías**, diseñada en estricta conformidad con el alcance curricular y metodológico establecido en la versión V4 del itinerario principal.

En esta versión final, se ha realizado una **auditoría rigurosa de fundamentación** sobre cada API y comando. Se declaran formalmente como lagunas de conocimiento o elementos puramente conceptuales aquellas herramientas que, aunque útiles, no están respaldadas por código físico en las fuentes de tu base de conocimiento (como BeautifulSoup o ReportLab). Asimismo, se ha reestructurado el proyecto **SAMI-Applied** para garantizar la **coherencia de datos**, separando de forma limpia las prácticas de análisis con el dataset de Game of Thrones `got_1.csv` del pipeline de auditoría de precios de mercado del proyecto integrado.

---

## 1. OBJETIVO OPERATIVO
Diseñar y desarrollar aplicaciones locales integradas en Python que automaticen flujos de obtención de información web utilizando **Playwright** [100], operen cálculos y agregaciones estadísticas básicas de precios de mercado utilizando arrays de **NumPy** [14, 182], estructuren, limpien y analicen tablas de datos comerciales mediante **Pandas** [1, 2], y compilen resúmenes informativos conceptuales estructurados para entregables finales en PDF [184], garantizando un flujo lógico e incremental de ingeniería de datos sin fugas de recursos de infraestructura [103].

---

## 2. MAPA DE DEPENDENCIAS INTERNAS (BLOQUE 5)

El bloque progresa unificando las librerías en un flujo secuencial donde cada herramienta actúa como proveedora de la siguiente:

```
          [Bloque 4: Programación Orientada a Objetos (SAMI-OOP)]
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.1 Adquisición de Datos: Scraper Web (Playwright)      │
        └────────────────────────────┬────────────────────────────┘
                                     │ (Precios y ofertas en strings/floats)
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.2 Tratamiento Estadístico Vectorial (NumPy)           │
        └────────────────────────────┬────────────────────────────┘
                                     │ (Arrays ndarray limpios y promedios)
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.3 Estructuración y Análisis Tabular (Pandas)          │
        └────────────────────────────┬────────────────────────────┘
                                     │ (DataFrames, loc/iloc, isin, set_index)
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │ 2.4 Generación de Entregables (ReportLab PDF)           │
        └────────────────────────────┬────────────────────────────┘
                                     │ (Reporte final de mercado)
                                     ▼
         [PROYECTO INTEGRADO: SAMI-Applied (Adquisición, Análisis y PDF)]
                                     │
                                     ▼
                [Bloque 6: Programar en 2026 (Entorno Local)]
```

---

## 3. CLASIFICACIÓN DE CONTENIDOS DEL BLOQUE 5

*   **IMPRESCINDIBLES (Sólidamente respaldados con código)**:
    *   *Pandas (Series)*: Creación de Series, asignación de nombres, indexación explícita, selección por posición con `.iloc[]`, selección condicional (boolean arrays) y cálculo de medias con `.mean()` [2, 11, 14].
    *   *Pandas (DataFrames)*: Carga de archivos físicos (`pd.read_csv()`) utilizando el dataset de Game of Thrones `got_1.csv` [194, 216], indexación con `.loc[]` e `.iloc[]` [11, 32], filtrado condicional compuesto empleando operadores a nivel de bits (`&`, `|`) y el método `.isin()` [223, 224], y modificación de tablas (setear índices con `.set_index()`, renombrar índices/columnas con `.rename()`, y eliminar columnas/filas con `.drop(columns=...)`) [224, 225].
    *   *NumPy*: Respaldo de arrays multidimensionales en Series de Pandas (`ndarray`) [4], definición de valores nulos lógicos (`np.nan`) [217] y operaciones vectoriales rápidas [15, 16].
    *   *Playwright*: Inicialización de navegadores síncronos con `sync_playwright` [100], lanzamiento de navegador Chromium [103], creación de nuevas páginas (`browser.new_page()`), redirección con `page.goto()` [102] y cierre obligatorio del navegador para liberar descriptores de sistema con `browser.close()` [100].
*   **ÚTILES (Introducción conceptual/Teórica)**:
    *   *BeautifulSoup*: Carga de árboles de parseo HTML y extracción selectiva de elementos de texto e identificadores en páginas estáticas [183]. (Uso conceptual debido a la falta de código en las fuentes).
*   **AMPLIACIÓN (Límites teóricos del material)**:
    *   *ReportLab*: Conceptos de maquetación y generación programática de archivos PDF ejecutables mediante lienzos de dibujo, alineaciones de tablas y formateo de párrafos [184, 266]. (Uso exclusivamente conceptual de su arquitectura de clases debido a la falta de código físico en las fuentes).
*   **LAGUNAS DE CONOCIMIENTO (Sin código en las fuentes)**:
    *   *Pandas*: Operaciones de fusión de datos con `pd.merge()` o `.join()`, y agrupamientos tabulares complejos con `.groupby()` [1].
    *   *NumPy*: Funciones de control de nulos específicas como `np.isnan()`, y funciones de reemplazo seguro como `fillna()` o `isnull()` en Pandas (no figuran en las soluciones lógicas del notebook).
    *   *BeautifulSoup*: Atributos sintácticos específicos del código (como el parámetro `class_` de búsqueda, o métodos de parseo de árboles complejos).
    *   *ReportLab*: Las APIs y métodos directos de las clases `Canvas`, `Paragraph`, y `Table` (no se proporciona ningún código de importación, sintaxis de dibujo ni estilos en los materiales).
    *   *Matplotlib*: El notebook importa la librería `matplotlib.pyplot as plt` [2] pero carece de código o explicaciones para renderizar gráficos físicos.

---

## 4. LA PROGRESIÓN DE VALOR EN EL BLOQUE 5 (EL HILO CONDUCTOR)

Para evitar que el estudiante aprenda las librerías de forma aislada, el bloque se articula bajo la metodología del **Único Hilo Conductor de Ingeniería de Datos**:

1.  **Fase 1: Adquisición**: El alumno aprende a lanzar un script automatizado con **Playwright** que abre el navegador e interactúa con una página de mercado para extraer los textos y precios de oferta [100, 102], cerrando de forma limpia los recursos con `browser.close()` [100].
2.  **Fase 2: Tratamiento**: Los precios extraídos se cargan en arrays de **NumPy** para convertirlos a formato numérico real, controlando la presencia de vacíos (`np.nan`) [217] y calculando estadísticas del mercado (medias lógicas) [14].
3.  **Fase 3: Análisis (Grounded)**: Para aprender a operar tablas complejas en Pandas, el alumno trabaja de forma aislada con un dataset real de las fuentes: la popularidad de los personajes de **Game of Thrones (`got_1.csv`)** [194, 216]. Aquí aprende indexación, filtrado Compuesto (`&`, `|`, `.isin()`) [223, 224] y reestructuración de esquemas (`set_index`, `drop`) [224, 225]. Una vez asimilada la técnica, aplica esta lógica para ordenar y cruzar sus tablas de precios del mercado de hardware en el proyecto SAMI-Applied.
4.  **Fase 4: Reporte**: Las estadísticas y tablas resultantes de la auditoría se estructuran conceptualmente para compilar un informe formal en PDF mediante las utilidades lógicas de **ReportLab** [184].

---

## 5. DESARROLLO INSTRUCCIONAL DE LIBRERÍAS (APRENDER HACIENDO)

### PARTE 5.1: Operaciones Estadísticas y Arrays con NumPy
*   **CONCEPTO**: NumPy proporciona soporte para arrays multidimensionales rápidos (`ndarray`) [4], permitiendo ejecutar operaciones matemáticas vectorizadas y actuar como el motor numérico que respalda a Pandas [4, 15].

#### → EJEMPLO DE LAS FUENTES
*   **Aislamiento y tipado de Arrays** (Extracted from 02_pandas [4]):
    ```python
    import numpy as np
    import pandas as pd

    # Las Series de Pandas se respaldan en arrays de NumPy
    state_populations = pd.Series([39.54, 29.15, 21.54, 20.20])
    print(type(state_populations.values))  # Retorna: <class 'numpy.ndarray'> [4]
    
    # Operaciones vectoriales rápidas directas [15]
    poblacion_unidad = state_populations * 1_000_000  # Multiplicación vectorizada [16]
    log_poblaciones = np.log(state_populations)      # Logaritmo vectorizado [16]

    # Representación de nulos en las fuentes [217]
    popularidades = [0.92, 0.88, np.nan, 0.96]  # np.nan define valores flotantes nulos [217]
    ```

#### → PRÁCTICA
*   **Instrucciones**: Abre una celda de Colab [6]. Declara una lista de precios de componentes de hardware que contenga algunos valores nulos representados por `np.nan` [217]: `precios = [120.0, 85.5, np.nan, 150.0, np.nan, 99.9]`.
    1. Convierte la lista en un array de NumPy (`ndarray`).
    2. Dado que `np.isnan` no está codificado en las fuentes, utiliza el hecho de que Pandas y NumPy ignoran automáticamente los valores nulos al calcular la media con `.mean()` (o investiga de forma independiente la limpieza de nulos en arrays) [14, 218].
    3. Calcula el precio promedio de la lista omitiendo los nulos.
    4. Multiplica de forma vectorizada el array por la tasa impositiva de la sesión (`1.21`) e imprime el array de precios finales resultante en consola [15].

#### → ERROR HABITUAL (BUG)
*   **El colapso silencioso del NaN**: Intentar realizar agregaciones estadísticas directamente sobre arrays NumPy nativos que contienen valores `np.nan`, provocando que el resultado del promedio o la suma devuelva `nan` de forma permanente debido a la propagación del flotante nulo.
*   **Solución pedagógica**: Mostrar al estudiante que, a diferencia de las listas nativas, los arrays de NumPy propagan los nulos en operaciones matemáticas tradicionales. Se debe estructurar la limpieza de nulos cargando el array en una Serie de Pandas (que filtra los nulos automáticamente al invocar `.mean()`) [14] o utilizando funciones de exclusión.

#### → MINI-RETO
*   **El Filtro de Outliers**: Tienes un array de precios de mercado: `[85.0, 92.0, 350.0, 88.0, 76.0, 15.0, 83.0]`. Utiliza NumPy para calcular la media aritmética del mercado. Genera un filtro booleano que aísle y muestre en pantalla de forma vectorizada únicamente aquellos precios que se consideran anómalos (outliers) por ser menores al 35% de la media o mayores al triple de la misma, sin utilizar bucles iterativos `for` ni condicionales `if`.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de predecir la salida**: ¿Qué imprime el siguiente código tras ejecutarse en consola?
    ```python
    import numpy as np
    datos = np.array([10, 20, 30])
    resultado = datos * 2
    filtro = resultado > 30
    print(resultado[filtro])
    ```
    *   A) `[20 30]`
    *   B) `[40 60]`
    *   C) `[True, True, True]`
    *   D) Lanza un error `TypeError` en operaciones vectoriales.
*   **Respuesta correcta**: **B**. (El array se multiplica por 2 de forma vectorizada produciendo `[20, 40, 60]`. El filtro booleano `resultado > 30` evalúa a `[False, True, True]`. Al indexar el array original con dicho filtro booleano, se devuelven únicamente las posiciones `True` (`40` y `60`)).

#### → EVIDENCIA
*   Celda de Google Colab donde el alumno convierte una lista con precios reales a un array de NumPy, aplicando multiplicaciones vectoriales directas y obteniendo estadísticas descriptivas rápidas (media, máximo, mínimo) en consola.

---

### PARTE 5.2: Estructuración y Análisis Tabular con Pandas (Grounded)
*   **CONCEPTO**: Pandas organiza los datos en Series (arreglos unidimensionales etiquetados) [4] y DataFrames (tablas bidimensionales que comparten un índice) [2, 19], proporcionando métodos de alto nivel para indexación, selección condicional avanzada y limpieza de datos [11, 33].

#### → EJEMPLO DE LAS FUENTES
*   **Operaciones, Slicing y Filtros en GOT** (Extracted from ejercicios_pandas_resuelto [217, 221, 223, 224]):
    ```python
    import pandas as pd
    import numpy as np

    # Carga de DataFrame imitando la estructura de las fuentes [217]
    data = {
        "Personaje": ["Jon Nieve", "Arya Stark", "Sansa Stark", "Bran Stark", "Daenerys Targaryen"],
        "Casa": ["Stark", "Stark", "Stark", "Stark", "Targaryen"],
        "Estado": ["Vivo", "Vivo", "Vivo", "Vivo", "Fallecido"],
        "Popularidad": [0.92, 0.88, 0.81, np.nan, 0.96],
        "Batallas ganadas": [3, 2, 1, 0, 4]
    }
    df = pd.DataFrame(data)

    # Conversión de columna en índice permanente [224]
    df = df.set_index("Personaje")

    # Selección condicional compuesta con operadores a nivel de bits & e isin() [223]
    starks_vivos_populares = df[
        (df["Popularidad"] > 0.85) & 
        (df["Estado"].isin(["Vivo", "Rey en el Norte"]))
    ]  # [223]

    # Eliminar columnas físicas de la tabla [225]
    df_limpio = df.drop(columns=["Popularidad"])  # [225]
    ```

#### → PRÁCTICA
*   **Instrucciones**: Implementa en tu cuaderno Colab el procesamiento de datos del dataset de Game of Thrones basándote estrictamente en el diseño de las fuentes [222]:
    1. Crea el DataFrame `df` con la estructura de diccionario de las fuentes [217].
    2. Convierte la columna `"Personaje"` en el índice de la tabla mediante `.set_index("Personaje")` [224].
    3. Utiliza la llamada de indexación `.loc` para recuperar y mostrar los datos exclusivos de `"Sansa Stark"` [28].
    4. Utiliza la llamada de indexación `.iloc` para obtener e imprimir la superficie del último personaje de la tabla [31].
    5. Realiza un filtrado condicional booleano compuesto para aislar e imprimir a todos los personajes que sigan vivos Y pertenezcan a la Casa Stark o Lannister [223].
    6. Identifica valores nulos en popularidad utilizando `df["Popularidad"].isnull()` y reemplázalos de manera segura por el promedio general de popularidad calculado previamente con `.fillna()` [224].

#### → ERROR HABITUAL (BUG)
*   **El bug del uso de "and" / "or" nativos**: Intentar realizar un filtrado condicional compuesto sobre Series o DataFrames utilizando las palabras clave lógicas de Python `and` y `or`.
    ```python
    # ERROR DE EJECUCIÓN
    df_stark = df[df["Casa"] == "Stark" and df["Batallas ganadas"] > 1]
    # Lanza: ValueError: The truth value of a Series is ambiguous. Use a.empty...
    ```
*   **Solución pedagógica**: Explicar al alumno que Pandas requiere operaciones booleanas vectorizadas a nivel de bits empleando de forma obligatoria los operadores `&` (and) y `|` (or), y que cada una de las condiciones individuales debe ir estrictamente acotada entre paréntesis `()` para asegurar la correcta precedencia del compilador [229].

#### → MINI-RETO
*   **El Auditor de GOT**: Escribe un script en Colab que cargue los datos de los personajes de las fuentes. El programa debe limpiar el DataFrame eliminando la columna antigua `"Popularidad"` [231], descartando a todos los personajes cuyo estado sea `"Fallecido"` [231], ordenando la tabla resultante de mayor a menor según su volumen de `"Batallas ganadas"` con el método `.sort_values()` [220], e imprimiendo el resultado final.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de predecir la salida**: Dado el siguiente DataFrame de Pandas:
    ```python
    import pandas as pd
    tabla = pd.DataFrame({
        "ID": [101, 102, 103],
        "Ventas": [50, 120, 80]
    })
    tabla = tabla.set_index("ID")
    tabla.loc[102, "Ventas"] = 150
    print(tabla.iloc[1].values[0])
    ```
    *   A) `120`
    *   B) `150`
    *   C) `102`
    *   D) Lanza un error de índice `KeyError`.
*   **Respuesta correcta**: **B**. (La instrucción `.set_index("ID")` establece la columna ID como el índice de la tabla (índices 101, 102, 103). La llamada `.loc[102, "Ventas"] = 150` accede por etiqueta y actualiza el valor de ventas de la fila 102 en caliente. Al invocar `.iloc[1]`, accedemos por posición numérica, que corresponde a la segunda fila física de la tabla (ID 102). El valor de su primera y única columna de ventas que se imprime es `150`).

#### → EVIDENCIA
*   Estructura de filtrado de datos completa en Colab que toma el dataset de muestra, limpia los valores nulos de popularidad con `.fillna()` y exporta el DataFrame resultante depurado y ordenado de mayor a menor.

---

### PARTE 5.3: Adquisición de Datos y Control de Navegadores con Playwright
*   **CONCEPTO**: Playwright es una librería de automatización que permite tomar el control de navegadores reales (Chromium, Firefox, WebKit) mediante una API síncrona/asíncrona para interactuar de forma programática con la interfaz web, simular clics, realizar búsquedas e interactuar con páginas dinámicas [100, 103].

#### → EJEMPLO DE LAS FUENTES
*   **Apertura y Cierre síncrono** (Extracted from Playwright installation [100, 102]):
    ```python
    from playwright.sync_api import sync_playwright

    # El manejador de contexto with inicializa y asegura la destrucción del motor
    with sync_playwright() as p:
        browser = p.chromium.launch()  # Por defecto abre en modo Headless [103]
        page = browser.new_page()       # Abre una pestaña limpia en memoria
        page.goto("https://playwright.dev/")  # Navega a la URL dada [102]
        print(page.title())             # Accede a propiedades de lectura directa
        browser.close()                 # Cierre explícito de procesos [100]
    ```

#### → PRÁCTICA
*   **Instrucciones**: Implementa en local un script de automatización síncrono que controle el navegador y recopile metadatos básicos:
    1. Importa la biblioteca de Playwright síncrona.
    2. Abre un bloque de contexto seguro `with sync_playwright() as p:` [100].
    3. Lanza el navegador Chromium y navega a la dirección oficial de Python (`"https://www.python.org/"`) [102].
    4. Lee e imprime en consola el título del portal para comprobar la conexión activa [102].
    5. Cierra de forma explícita el navegador mediante `browser.close()` [100].

#### → ERROR HABITUAL (BUG)
*   **El bug de los procesos colgados**: No cerrar de manera explícita la instancia del navegador binario mediante `browser.close()`. Esto provoca que el script finalice pero mantenga el binario del navegador activo consumiendo recursos de memoria RAM, generando fugas de descriptores de sistema.
*   **Solución pedagógica**: Enseñar al estudiante que, aunque el manejador de contexto `with` destruye el motor lógico de Playwright, los subprocesos binarios de Chromium deben cerrarse explícitamente con `browser.close()` para asegurar que se liberen de forma limpia e inmediata de la memoria del sistema operativo [100].

#### → MINI-RETO
*   **El Capturador de Encabezados**: Escribe un script síncrono que use Playwright para cargar de forma automatizada la página web `"https://playwright.dev/"` [102]. El script debe simular la interacción con el usuario: hacer clic en el enlace `"Get started"` buscando por su rol interactivo [102], esperar a que se visualice la cabecera del sitio y extraer el título del encabezado de instalación de forma limpia en consola, cerrando de forma segura el navegador al finalizar.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de predecir la salida**: ¿Qué comportamiento se espera del siguiente código síncrono de automatización?
    ```python
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch(headless=True)
        pag = b.new_page()
        pag.goto("https://playwright.dev/")
        b.close()
    ```
    *   A) Abre un navegador visible y navega a la página web mostrando la ventana al usuario.
    *   B) Abre una ventana en segundo plano, carga la página en memoria y se cierra liberando de forma segura los recursos del sistema sin mostrar ninguna interfaz gráfica al usuario.
    *   C) El programa lanza un error de ejecución `TypeError` porque falta pasar parámetros a `b.close()`.
    *   D) Genera un error de sintaxis porque las páginas web de Playwright requieren de bucles asíncronos `asyncio` obligatorios.
*   **Respuesta correcta**: **B**. (Al especificar el parámetro `headless=True` (por defecto en launch), el navegador binario Chromium se ejecuta en modo "invisible" o "segundo plano" (sin interfaz gráfica) [103], idóneo para servidores o flujos rápidos de extracción, finalizando de forma limpia mediante `b.close()` [100]).

#### → EVIDENCIA
*   Script modular ejecutable en local que simula una navegación de usuario por consola e imprime los metadatos de la página de prueba de forma exitosa, finalizando sin dejar subprocesos de Chromium abiertos en el sistema operativo.

---

### PARTE 5.4: Generación de Reportes en PDF con ReportLab
*   **CONCEPTO**: ReportLab proporciona las utilidades y clases lógicas para maquetar, estructurar y exportar programáticamente documentos PDF listos para entrega comercial en base a coordenadas de dibujo y plantillas [184].

#### → EJEMPLO DE LAS FUENTES
*   **Soporte de la Librería** (Extracted from reportlab PyPI [266] and Reporte de Investigación [184]):
    *   Las fuentes listan la estabilidad e instalación del Toolkit de ReportLab [266].
    *   Se introduce conceptualmente el rol de ReportLab para el diseño y maquetación automatizada de reportes impresos de alta calidad mediante código de Python, sirviendo como el paso final para exportar los análisis de datos [15, 184].

#### → PRÁCTICA (DISEÑO CONCEPTUAL)
*   **Instrucciones**: Dado que la sintaxis detallada de las clases de ReportLab (`Canvas`, `Paragraph`, `Table`) constituye una Laguna de Conocimiento (no hay código en las fuentes), diseña en un archivo de texto plano la estructura lógica y de diseño que tendrá tu reporte de mercado:
    1. Define las coordenadas del encabezado del lienzo (`Canvas`).
    2. Determina los anchos de columna que asignará tu estructura de celdas para la tabla (`Table`).
    3. Diseña el contenido conceptual del párrafo introductorio (`Paragraph`).
    4. Explica por escrito cómo esta maquetación abstracta procesará la tabla de tu DataFrame para evitar que se desborden los textos fuera de la hoja.

#### → ERROR HABITUAL (BUG)
*   **El bug del desbordamiento por strings crudos**: Asumir que las celdas de las tablas de ReportLab autoajustan el ancho de línea por defecto cuando reciben cadenas de texto muy largas, provocando que los textos se dibujen en una sola fila continua y se recorten fuera de los márgenes físicos de impresión de la hoja PDF.
*   **Solución pedagógica**: Enseñar al estudiante que toda cadena de texto dinámica o larga debe ir encapsulada dentro del objeto conceptual de texto `Paragraph`, el cual se encarga de calcular el ancho disponible de la celda y forzar de forma dinámica los saltos de línea requeridos según el estilo del reporte.

#### → MINI-RETO
*   **El Layout de Auditoría**: Diseña el mapa y el esquema de flujo conceptual de una factura en PDF. Especifica cómo estructurarás las clases de ReportLab de forma ordenada, justificando por escrito por qué usarás `Table` para las columnas de precios y cómo insertarás espaciadores de seguridad (`Spacer`) para que el reporte sea visualmente limpio para el cliente final.

#### → MICROEVALUACIÓN TIPO SOLOLEARN
*   **Pregunta de emparejamiento conceptual**: Selecciona la opción que asocie correctamente cada clase lógica de la biblioteca ReportLab con su responsabilidad de maquetación correspondiente dentro del documento final:
    1. `Canvas`
    2. `Paragraph`
    3. `Table`
    *   A) 1-Establece alineaciones en cuadrículas; 2-Pinta elementos de coordenadas de bajo nivel; 3-Asegura el formateo y auto-salto de textos.
    *   B) 1-Pinta elementos de coordenadas de bajo nivel; 2-Asegura el formateo y auto-salto de textos; 3-Establece alineaciones de celdas y filas en cuadrículas.
    *   C) 1-Pinta elementos de coordenadas de bajo nivel; 2-Establece alineaciones en cuadrículas; 3-Asegura el formateo de textos.
    *   D) 1-Asegura el formateo de textos; 2-Pinta coordenadas; 3-Establece alineaciones.
*   **Respuesta correcta**: **B**. (La clase Canvas permite realizar trazados físicos elementales especificando coordenadas X, Y; Paragraph encapsula las cadenas de caracteres gestionando estilos de texto y saltos de línea automáticos; y la clase Table se encarga de posicionar y dar formato de cuadrícula a las colecciones de datos).

#### → EVIDENCIA
*   Ficha técnica o esquema en formato markdown desarrollado por el alumno que documenta el mapeo lógico de coordenadas y la estructura jerárquica de elementos para compilar la maquetación de una factura comercial.

---

## 6. ERRORES HABITUALES COMPILADOS DEL BLOQUE 5 (BUGS)

1.  **Fuga de procesos de Chromium en Playwright**: No cerrar el navegador con `browser.close()` [100], dejando subprocesos binarios activos en segundo plano que saturan la memoria RAM del sistema.
2.  **Uso de comparadores lógicos nativos en Pandas**: Intentar realizar filtrados condicionales con `and` / `or` en lugar de utilizar de forma obligatoria los operadores vectoriales a nivel de bits `&` / `|` y acotar las condiciones individuales entre paréntesis `()` [229].
3.  **Ambbigüedad de Slicing**: Hacer segmentaciones directas del tipo `df[1:3]` que confunden al compilador, en lugar de utilizar las llamadas explícitas recomendadas `.loc[]` (etiquetas) o `.iloc[]` (posiciones numéricas) [33].
4.  **Cálculo estadístico de NaNs en NumPy**: Ejecutar operaciones de agregación matemática (`.mean()`) sobre arrays que contienen valores `np.nan` [217], resultando en un colapso del promedio que devuelve `nan` como salida.
5.  **Desbordamiento de celdas en ReportLab**: Pintar cadenas de texto largas de forma cruda dentro de tablas, desbordando los márgenes laterales del archivo PDF por omitir la envoltura automatizada del objeto `Paragraph`.

---

## 7. PROYECTO INTEGRADOR OBLIGATORIO DEL BLOQUE 5

### "SAMI-Applied: El Sistema de Adquisición, Análisis y Generación Automatizada de Informes de Mercado"

*   **Objetivo de Aprendizaje**: Integrar todas las competencias técnicas adquiridas en los Bloques 1 al 5 en un software unificado local, demostrando la capacidad de programar de forma modular flujos complejos de extracción automatizada de datos (Playwright) [100], procesamiento lógico numérico rápido (NumPy) [4, 15], estructuración y filtrado avanzado de tablas de datos comerciales en Pandas [1, 2], y maquetación de entregables comerciales en PDF (ReportLab) [184].

#### 1. Coherencia de Datos y Aislamiento del Dataset GOT
Para salvaguardar la coherencia de datos del proyecto integrado, se elimina por completo el dataset de Game of Thrones `got_1.csv` de la tubería (pipeline) de SAMI-Applied. Las prácticas y evaluaciones con `got_1.csv` se mantienen en la Parte 5.2 como un excelente recurso grounded para asimilar la indexación y filtros de Pandas [222, 223], pero el proyecto **SAMI-Applied opera única y exclusivamente con un dataset lógico de negocio: Datos de Precios y Stock de Mercado de Componentes de Hardware**.

#### 2. Arquitectura de Módulos de SAMI-Applied (Sin POO ni IA)
El proyecto se diseña dividiendo el programa en **4 scripts independientes** interconectados localmente:

##### A. Módulo Extractor (`scraper.py`)
Contiene la lógica de adquisición y control de navegadores:
*   `extraer_precios_competencia(url_mock)`: Abre una sesión síncrona con Playwright en modo headless [103, 106]. Navega a una URL local o simulada y extrae los datos de productos y precios en formato de strings [102, 105]. Cierra el navegador de forma obligatoria con `browser.close()` [100] y retorna la lista limpia de registros. (La extracción de datos BeautifulSoup se mantiene como concepto opcional y separado para evitar forzar ambas librerías si el scraping se resuelve síncronamente por Playwright) [183].

##### B. Módulo Analizador (`analizador.py`)
Contiene la lógica matemática y de tablas utilizando NumPy y Pandas:
*   `procesar_tabla_precios(datos_sucios)`:
    *   Carga la información en un DataFrame de **Pandas** [2].
    *   Convierte la columna `"ID_Articulo"` en el índice de la tabla utilizando `.set_index("ID_Articulo")` [224].
    *   Normaliza los precios eliminando símbolos y convirtiéndolos a flotante mediante operaciones vectoriales [15].
    *   Maneja los valores nulos reemplazando posibles celdas vacías (`np.nan`) de forma controlada mediante las funciones de Pandas o NumPy [217].
    *   Aplica un filtro condicional booleano compuesto empleando operadores vectoriales (`&` o `|`) para aislar únicamente a los componentes que se encuentren activos y superen un margen mínimo de rentabilidad [223].
    *   Convierte la columna de precios finales a un array de **NumPy** (`ndarray`) para calcular con funciones de agregación: la media aritmética del mercado, el precio máximo y la desviación estándar para identificar outliers [4, 14, 15].
    *   Retorna el DataFrame final depurado y el reporte de promedios calculado.

##### C. Módulo Diseñador (`generador_pdf.py`)
Contiene la lógica de reporte en PDF:
*   `compilar_reporte_ejecutivo_pdf(ruta_pdf, df_analizado, promedios)`:
    *   Inicializa conceptualmente un documento PDF en la ruta de trabajo local utilizando las clases de ReportLab [184].
    *   Organiza un encabezado formal y diseña la cuadrícula que alojará la tabla con las columnas del DataFrame de Pandas procesado.
    *   Inserta de forma limpia las estadísticas calculadas en NumPy (promedio del mercado, variación, desviación) al pie de página.
    *   Exporta el archivo de salida final al disco duro.

##### D. Orquestador Principal (`main.py`)
*   Script principal de comandos CLI interconectado con los tres módulos anteriores [66].
*   Carga los parámetros impositivos y umbrales JSON iniciales de la sesión de auditoría [66].
*   Inicia el flujo síncrono completo: ejecuta la extracción con `scraper.py`, procesa y analiza la información de mercado con `analizador.py` y compila de forma directa el reporte ejecutivo comercial `reporte_final_sami.pdf`.
*   Toda la interacción de comandos de consola del usuario se blinda ante ingresos inválidos empleando bloques `try-except` de excepciones específicas (`ValueError`, `TypeError`) para guardar las trazas a un log de auditoría en disco sin abortar el flujo del programa [159].

#### 3. Criterios de Evaluación del Proyecto
*   Ejecución completa y libre de errores desde la terminal local.
*   Diseño modular limpio del proyecto dividido en archivos independientes.
*   Cierre riguroso de procesos en Playwright mediante `browser.close()` [100].
*   Estructuración perfecta de filtros compuestos y operaciones en Pandas [223].
*   Coherencia lógica de los datos de precios analizados en NumPy [15].
*   Diseño de layout estético y justificado del PDF generado.

---

## 8. TRAZABILIDAD DE INGENIERÍA DEL CONOCIMIENTO (BLOQUE 5)

| Concepto Técnico del Bloque 5 | Documento de la Fuente Oficial | Práctica Asociada del Itinerario | Microevaluación de Validación (SoloLearn) | Proyecto Integrador (SAMI-Applied) |
| :--- | :--- | :--- | :--- | :--- |
| **Arrays, operaciones vectoriales y NaN** | `02_pandas.ipynb` [4, 16] y `ejercicios_pandas_resuelto.ipynb` [217] | Conversión de listas a ndarrays y cálculo de promedios lógicos en Colab [4, 16]. | Reto SoloLearn 1 de predecir la salida de un filtro condicional booleano en array. | NumPy ndarray y cálculo de medias de precios en `analizador.py`. |
| **Carga de CSV, DataFrame y Series** | `02_pandas.ipynb` [2, 19] y `ejercicios_pandas_resuelto.ipynb` [222] | Cargar e inicializar tablas y Series de población y GOT en Colab [2, 222]. | Reto SoloLearn de identificar el tipo de dato devuelto al consultar la serie indexada. | Carga de tabla de ofertas de mercado de hardware usando Pandas. |
| **Indexación y Selección (loc / iloc)** | `02_pandas.ipynb` [11, 32] y `ejercicios_pandas_resuelto.ipynb` [217] | Selección por etiquetas geográficas y posiciones de personajes de GOT [11]. | Reto SoloLearn de predecir la fila obtenida mediante acceso posicional con `.iloc` [308]. | Indexación por `ID_Articulo` con `.set_index()` y accesos `.loc[]`. |
| **Filtrado Condicional Compuesto (&, isin)**| `ejercicios_pandas_resuelto.ipynb` [223, 224] | Aislamiento de personajes vivos de casas específicas utilizando filtros compuestos [223].| Reto de localizar el error sintáctico por uso de la directiva `and` en filtros compuestos [229]. | Filtrado compuesto de ofertas activas y rentables en el DataFrame de Pandas. |
| **Modificación de esquemas (set_index, drop)**| `02_pandas.ipynb` [37, 38] y `ejercicios_pandas_resuelto.ipynb` [224, 225]| Reestructuración y borrado de columnas y personajes fallecidos de la tabla [225]. | Reto de identificar el comportamiento lógico del DataFrame según el parámetro `inplace` [315]. | Eliminación de columnas obsoletas de stock y seteo del índice por artículo. |
| **Navegación e interacciones Playwright**| `Installation \| Playwright Python` [11, 100, 102] | Creación de scripts locales síncronos de navegación y test de aserciones [102]. | Reto SoloLearn de completar selectores y aserciones de locators de Playwright [102]. | Extracción de precios y estados de stock en `scraper.py` con Playwright. |
| **Parsing y Selectores BeautifulSoup** | `Reporte de Investigación` [15, 183] | Raspado rápido de elementos textuales mediante búsqueda de clases y etiquetas. | Reto SoloLearn de completar búsquedas de clases usando el parámetro reservado `class_`. | Concepto de parsing para la segmentación estática del HTML recolectado. |
| **Compilación dinámica de PDFs ReportLab**| `reportlab · PyPI` [266] y `Reporte de Investigación` [15, 184] | Maquetación y exportación programática de tablas y facturas en formato PDF [15]. | Reto de emparejamiento de responsabilidades de las clases Canvas, Paragraph y Table. | Exportación conceptual del informe de mercado estructurado unificado en `generador_pdf.py`. |

---

## 9. LAGUNAS DE CONOCIMIENTO DETECTADAS EN LAS FUENTES (BLOQUE 5)

De acuerdo con el análisis exhaustivo de los materiales de tu base de conocimiento, se identifican las siguientes áreas técnicas de las librerías científicas y de automatización que **no se encuentran documentadas de forma técnica o práctica en las fuentes**, declarándose formalmente como lagunas en este bloque:

1.  **Fusión avanzada de conjuntos de datos en Pandas (Merge, Join)**: Las fuentes mencionan que Pandas permite fusionar e integrar tablas de datos [1], pero **no proveen sintaxis ni ejemplos prácticos sobre el uso de funciones críticas como `pd.merge()` o `.join()`** para cruzar DataFrames relacionales.
2.  **Agrupaciones y Pivotajes avanzados (Groupby, Pivot)**: Se cita como fortaleza la agrupación de datos en Pandas [1], pero las fuentes del notebook **carecen por completo de manuales o código de uso de la función `.groupby()`** y operaciones de agregación complejas de DataFrames.
3.  **Visualización Científica con Matplotlib**: Las fuentes muestran de forma explícita que se importa la librería `matplotlib.pyplot as plt` [2] y se menciona para tomar decisiones visuales [115], pero **no hay documentación técnica, APIs de gráficos de barras o líneas, ni fragmentos de código para renderizar plots físicos** en todo el notebook (por lo que la creación de gráficos se excluye de las evaluaciones).
4.  **Uso de la herramienta Trace Viewer de Playwright**: Se lista en el reporte como herramienta de depuración de automatizaciones ante fallos [104], pero **no existen ejemplos del flujo de comandos para inicializar, grabar o inspeccionar trazas** visuales en las fuentes del notebook.
5.  **Manejo Avanzado de Estilos de Párrafos y Platypus en ReportLab**: Se cita ReportLab como herramienta estándar para generar PDFs de alta calidad [184], pero **no se incluye en las fuentes un manual técnico sobre la clase `ParagraphStyle`, hojas de estilo (`getSampleStyleSheet`) ni el control de flujo Platypus** para el diseño de páginas multipáginas automatizadas.
6.  **Operaciones Estadísticas Avanzadas de NumPy**: NumPy se declara como base matemática rápida [113, 182], pero **no se explican en las fuentes operaciones matriciales complejas (como álgebra lineal `.linalg`, multiplicaciones de matrices `.dot` o transformadas de Fourier)**, limitándose el alcance estrictamente a las funciones estadísticas básicas especificadas.

---

## 10. FUENTES DE AMPLIACIÓN RECOMENDADAS (BLOQUE 5)

Para suplir con total rigor las lagunas de conocimiento detectadas y enriquecer la experiencia formativa del alumno en el ecosistema aplicado de Python, se sugiere incorporar oficialmente al notebook los siguientes recursos:

1.  **Pandas User Guide - Groupby, Merge and Reshaping**: Para documentar con ejemplos las agrupaciones tabulares `df.groupby()`, sumas agregadas complejas y fusiones de múltiples archivos CSV utilizando `pd.merge()`.
2.  **Matplotlib Pyplot Tutorial**: Para incorporar lecciones prácticas sobre cómo generar gráficos estadísticos vectoriales (histogramas, diagramas de dispersión y series temporales) a partir de DataFrames de Pandas.
3.  **ReportLab Platypus User Guide**: Para detallar la creación avanzada de estilos de párrafos, encabezados automatizados, números de páginas dinámicos y la estructuración de documentos extensos de varias hojas sin desbordamiento de celdas.
4.  **Playwright Trace Viewer Guide**: Para instruir al estudiante en el uso de la terminal de comandos para depurar scrapers complejos visualizando el paso a paso de sus interacciones web.
