# OpenCV - Webcam interactiva

## VER

Vas a abrir la webcam desde Python y cambiar el modo de imagen en tiempo real con el teclado.

Controles:

- `1` NORMAL
- `2` GRIS
- `3` BLUR
- `4` BORDES
- `S` CAPTURA
- `Q` SALIR

Resultado: una ventana de video interactiva y, si pulsas `S`, una imagen guardada como `captura_opencv.png`.

## PROBAR

Instalacion:

```bash
pip install opencv-python
```

Ejecuta:

```bash
python ../scripts/webcam_gris.py
```

La ventana de OpenCV debe estar activa para que `waitKey()` detecte las teclas.

Codigo minimo:

```python
import cv2

cap = cv2.VideoCapture(0)
modo = "normal"

while True:
    ret, frame = cap.read()
    if not ret:
        break

    if modo == "gris":
        mostrado = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    elif modo == "blur":
        mostrado = cv2.GaussianBlur(frame, (15, 15), 0)
    elif modo == "bordes":
        gris = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        suave = cv2.GaussianBlur(gris, (5, 5), 0)
        mostrado = cv2.Canny(suave, 100, 200)
    else:
        mostrado = frame

    cv2.imshow("Webcam interactiva OpenCV", mostrado)
    tecla = cv2.waitKey(1) & 0xFF

    if tecla == ord("1"):
        modo = "normal"
    elif tecla == ord("2"):
        modo = "gris"
    elif tecla == ord("3"):
        modo = "blur"
    elif tecla == ord("4"):
        modo = "bordes"
    elif tecla == ord("s") or tecla == ord("S"):
        cv2.imwrite("captura_opencv.png", mostrado)
    elif tecla == ord("q") or tecla == ord("Q"):
        break

cap.release()
cv2.destroyAllWindows()
```

## MODIFICAR

Elige una opcion:

- A. Cambiar la intensidad de `GaussianBlur` usando otro kernel impar, por ejemplo `(31, 31)`.
- B. Modificar los umbrales de `Canny`, por ejemplo de `(100, 200)` a `(50, 150)`.
- C. Personalizar el nombre de la captura.

## MINI-RETO

Haz que el nombre de la captura indique el modo activo: `captura_normal.png`, `captura_gris.png`, `captura_blur.png` o `captura_bordes.png`.

## Plan B

Si la webcam no abre, revisa permisos, cierra otras apps que usen la camara o prueba cambiando el indice `VideoCapture(0)` por `VideoCapture(1)`.

## Que no entra

No se trabaja reconocimiento facial, reconocimiento de objetos, YOLO, MediaPipe, `CascadeClassifier`, modelos de IA ni vision artificial avanzada.
