# INFORME: FUENTES TÉCNICAS PARA EL LAB FINAL OPCIONAL
## "Python en Acción: 5 Cosas Más que Puedes Hacer"

Este documento contiene la validación, estructuración y el análisis de trazabilidad para las fuentes técnicas que servirán de base para el diseño del **Lab Final Opcional: "Python en Acción: 5 Cosas Más que Puedes Hacer"**. El objetivo es proporcionar un conjunto de mini-prácticas motivadoras de 10-30 minutos de duración, completamente respaldadas por documentación técnica oficial para evitar invenciones de APIs o procedimientos no soportados.

---

## 1. OPENCV: VISIÓN ARTIFICIAL
*   **FUENTES ENCONTRADAS**:
    *   *Getting Started with Videos - OpenCV-Python Tutorials*: Tutorial oficial de OpenCV para la inicialización de captura y renderizado de video en tiempo real.
    *   *Introduction — OpenCV Tutorial Documentation (Read the Docs)*: Documentación de referencia para operaciones básicas de imágenes y conversiones de color.
*   **APIS RESPALDADAS**:
    *   `cv2.VideoCapture(0)`: Creación del objeto de captura para la webcam integrada (dispositivo indexado en `0`).
    *   `cap.read()`: Lee frame a frame el flujo de video, retornando un booleano de éxito (`ret`) y la matriz de píxeles del cuadro (`frame` como array `ndarray` de NumPy).
    *   `cv2.imshow('nombre_ventana', frame)`: Renderiza el cuadro de video en una ventana interactiva de escritorio.
    *   `cv2.waitKey(1)`: Función de enlace de teclado; espera 1 ms para capturar eventos de teclado. Se combina con la operación a nivel de bits `& 0xFF == ord('q')` para romper el bucle.
    *   `cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)`: Convierte el cuadro de color original en escala de grises.
    *   `cap.release()`: Libera los recursos del hardware de la webcam.
    *   `cv2.destroyAllWindows()`: Destruye todas las ventanas abiertas en memoria de forma limpia.
*   **INSTALACIÓN RESPALDADA**: SÍ (`pip install opencv-python`).
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. Permite un script de streaming interactivo en escala de grises o detección básica de bordes (Canny) muy visual y rápido de ejecutar de forma local.
*   **LAGUNAS**:
    *   La detección avanzada de rostros mediante clasificadores en cascada (`CascadeClassifier`) o redes neuronales no está desarrollada de forma sintáctica directa en el material básico del notebook, por lo que el uso de `.xml` de Haar Cascades debe ser tratado como una ampliación o demostración guiada del profesor en lugar de una práctica obligatoria independiente de 10 minutos.

---

## 2. PILLOW: TRATAMIENTO DE IMÁGENES
*   **FUENTES ENCONTRADAS**:
    *   *Pillow (PIL Fork) Handbook & Tutorial Documentation (Read the Docs)*: Manual de referencia de Pillow para manipulación, escalado, transformación y guardado de archivos de imagen.
*   **APIS RESPALDADAS**:
    *   `Image.open("ruta.jpg")`: Abre y carga la imagen en memoria como un objeto de tipo Image.
    *   `im.resize((ancho, alto))`: Modifica el tamaño físico de la imagen recibiendo una tupla con las nuevas dimensiones.
    *   `im.rotate(angulo)`: Rota la imagen el número de grados especificado en sentido antihorario.
    *   `im.crop((izq, sup, der, inf))`: Recorta una región rectangular de la imagen delimitada por una tupla de cuatro coordenadas.
    *   `im.convert("L")`: Realiza conversiones de modo (ej. convierte imágenes RGB a escala de grises "L").
    *   `im.filter(ImageFilter.BLUR)`: Aplica un filtro de desenfoque de convolución integrado importando el módulo `ImageFilter`.
    *   `im.save("salida.jpg")`: Exporta y guarda la imagen procesada de vuelta al disco en el formato deseado.
*   **INSTALACIÓN RESPALDADA**: SÍ (`pip install Pillow`).
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El alumno puede desarrollar un editor de imágenes básico de consola que aplique transformaciones geométricas y de color de forma secuencial y guarde el resultado en un nuevo archivo físico.
*   **LAGUNAS**: Ninguna. Pillow cuenta con una API extremadamente directa que encaja perfectamente con el nivel del alumno.

---

## 3. AUTOMATIZACIÓN DE ARCHIVOS: PYTHON ESTÁNDAR
*   **FUENTES ENCONTRADAS**:
    *   *pathlib — Object-oriented filesystem paths — Python 3.14.7 Documentation*: Documentación oficial del módulo nativo para manipulación orientada a objetos de rutas de archivos.
    *   *shutil — High-level file operations — Python Documentation*: Guía técnica para operaciones complejas como mover o copiar elementos.
*   **APIS RESPALDADAS**:
    *   `from pathlib import Path`: Importación de la clase concreta de manipulación de rutas locales.
    *   `Path('.')` / `Path('carpeta')`: Inicializa una instancia de ruta apuntando al directorio especificado.
    *   `path.iterdir()`: Generador interactivo que itera sobre todos los elementos (archivos y carpetas) ubicados en el directorio activo.
    *   `path.is_file()` / `path.is_dir()`: Métodos booleanos para determinar el tipo de elemento de forma segura.
    *   `path.suffix`: Atributo de lectura directa que retorna la extensión del archivo (ej. `".txt"`, `".pdf"`).
    *   `path.name` / `path.stem`: Atributos que retornan el nombre completo o el nombre sin la extensión, respectivamente.
    *   `path.mkdir(parents=True, exist_ok=True)`: Crea de forma física directorios locales de forma robusta sin fallar si ya existen.
    *   `path.rename(nueva_ruta)`: Mueve o renombra de forma atómica un archivo local en el disco de trabajo.
    *   `shutil.move(origen, destino)`: Utility del módulo estándar para trasladar de forma segura archivos o carpetas, especialmente útil para operaciones cross-filesystem.
*   **INSTALACIÓN RESPALDADA**: SÍ. No requiere ninguna instalación (utilidades nativas del Core de Python).
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El diseño de un organizador de carpetas que ordene las descargas en `/PDFs`, `/Images` o `/Code` basándose en el atributo `suffix` es un ejercicio directo, limpio y extremadamente satisfactorio para el alumno.
*   **LAGUNAS**: Ninguna. La API moderna de `pathlib` sustituye por completo al antiguo y confuso módulo `os.path`, resultando ideal a nivel pedagógico.

---

## 4. OPENPYXL: EXCEL Y OFIMÁTICA
*   **FUENTES ENCONTRADAS**:
    *   *Tutorial & Styles — openpyxl Documentation (Read the Docs)*: Manual oficial de la librería científica para la manipulación y estilización de archivos Excel en formato `.xlsx`.
*   **APIS RESPALDADAS**:
    *   `from openpyxl import Workbook, load_workbook`: Importación del creador y cargador de libros.
    *   `wb = Workbook()`: Inicialización de un nuevo archivo de hoja de cálculo en memoria.
    *   `wb.active`: Obtención de la hoja de trabajo activa por defecto.
    *   `ws.title = "Nombre"` / `wb["SheetName"]`: Modificación de etiquetas de hojas y selección de pestañas por clave.
    *   `ws.cell(row=r, column=c).value = "Valor"` / `ws['A1'].value`: Lectura y escritura directa en celdas de forma indexada o por etiqueta.
    *   `ws.append(lista_datos)`: Añade de manera ágil una nueva fila completa al final de la última celda escrita de la hoja.
    *   `ws.iter_rows(min_row=1, max_row=10, min_col=1, max_col=5)`: Generador de iteraciones para recorrer rangos específicos de filas y columnas de la hoja.
    *   `ws['C1'] = "=SUM(C2:C10)"`: Soporte de fórmulas estándar escribiéndolas directamente como cadenas de texto.
    *   `PatternFill(start_color="HEX", end_color="HEX", fill_type="solid")`: Clase de estilización de fondos de celda mediante paletas hexadecimales.
    *   `Font(bold=True, size=12, color="HEX")`: Estilos tipográficos aplicados a la propiedad `.font` de las celdas.
    *   `wb.save("ruta.xlsx")`: Guarda físicamente el libro procesado en disco.
*   **INSTALACIÓN RESPALDADA**: SÍ (`pip install openpyxl`).
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El alumno puede cargar un archivo de ventas en bruto, dar formato en negrita a las cabeceras, rellenar de amarillo o rojo filas condicionales aplicando PatternFill, calcular totales con fórmulas nativas de Excel y salvar un nuevo reporte elegante.
*   **LAGUNAS**: Ninguna. La librería proporciona una API perfectamente estructurada y testeable de forma local.

---

## 5. TKINTER: INTERFAZ GRÁFICA
*   **FUENTES ENCONTRADAS**:
    *   *tkinter — Python interface to Tcl/Tk — Python 3.14.7 Documentation*: Documentación de la biblioteca gráfica estándar de Python.
    *   *AskPython — Tkinter Tutorial & StringVar with Examples*: Guía técnica de uso de variables reactivas en ventanas.
*   **APIS RESPALDADAS**:
    *   `root = tk.Tk()`: Inicialización del motor gráfico y ventana principal (root widget) de escritorio.
    *   `tk.Label(root, text="Texto")`: Widget de visualización de información de texto o imágenes no interactivo.
    *   `tk.Entry(root)`: Widget de campo de texto de una sola línea para que el usuario ingrese datos. Se consulta mediante `.get()`.
    *   `tk.Button(root, text="Botón", command=funcion_llamada)`: Widget de botón interactivo que desencadena la ejecución de una función de Python mediante el parámetro `command`.
    *   `widget.pack()` / `widget.grid(row=r, column=c)`: Gestores de geometría para posicionar de forma física los widgets dentro del contenedor.
    *   `tk.StringVar()`: Clase de variable de control reactivo; vinculada a widgets mediante `textvariable`, se actualiza con `.set()` y lee con `.get()` reflejando cambios automáticos.
    *   `root.mainloop()`: Inicia el bucle de eventos del sistema operativo que mantiene la ventana abierta y procesando acciones de usuario.
*   **INSTALACIÓN RESPALDADA**: SÍ. Viene integrada por defecto en la distribución oficial de Python.
*   **SUFICIENTE PARA UNA PRÁCTICA DE 10-30 MIN**: SÍ. El diseño de una pequeña calculadora interactiva o de una app que tome un nombre por un `Entry`, procese un saludo y lo pinte de forma reactiva en una etiqueta StringVar al hacer clic en un `Button` es perfectamente realizable en 15 minutos.
*   **LAGUNAS**: Ninguna. Su arquitectura de clases básicas es sumamente amigable y encaja muy bien tras asimilar las funciones del Bloque 3.

---

## INFORME DE SUFICIENCIA CURRICULAR (LAB FINAL)

*   **OPENCV**: **SUFICIENTE** (API básica, captura, color, waitKey y destrucción de ventanas sólida y física).
*   **PILLOW**: **SUFICIENTE** (API robusta y directa para carga, conversión, filtros y guardado).
*   **AUTOMATIZACIÓN DE ARCHIVOS**: **SUFICIENTE** (Utilidades `pathlib` del Core nativas y limpias).
*   **OPENPYXL**: **SUFICIENTE** (Soporte total para manipulación, append, fórmulas y estilización de celdas).
*   **TKINTER**: **SUFICIENTE** (La interfaz gráfica estándar integrada en Python es ideal para interactuar con botones y campos).

### ESTADO GENERAL: LISTO PARA EL DISEÑO DEL LAB OPCIONAL
Las 5 tecnologías disponen de un soporte de fuentes oficiales impecable, con APIs estables y libres de invenciones, preparadas para estructurar mini-prácticas independientes y motivadoras que demuestren al alumno el gran impacto práctico de programar con Python en la industria tecnológica.
