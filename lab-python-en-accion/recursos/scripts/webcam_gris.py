import cv2


VENTANA = "Webcam interactiva OpenCV"
CAPTURA = "captura_opencv.png"


def procesar_frame(frame, modo):
    if modo == "gris":
        return cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    if modo == "blur":
        return cv2.GaussianBlur(frame, (15, 15), 0)

    if modo == "bordes":
        gris = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        suave = cv2.GaussianBlur(gris, (5, 5), 0)
        return cv2.Canny(suave, 100, 200)

    return frame


def mostrar_instrucciones():
    print("WEBCAM INTERACTIVA CON OPENCV")
    print("1 -> video original")
    print("2 -> escala de grises")
    print("3 -> GaussianBlur")
    print("4 -> Canny")
    print("S -> guardar captura")
    print("Q -> salir")
    print("Pulsa las teclas con la ventana de video activa.")


def ejecutar_webcam_interactiva():
    mostrar_instrucciones()
    cap = cv2.VideoCapture(0)
    modo = "normal"
    frame_mostrado = None

    try:
        ret, frame = cap.read()
        if not ret:
            print("No se pudo utilizar la webcam.")
            return

        while True:
            ret, frame = cap.read()

            if not ret:
                print("No se pudo leer la webcam.")
                break

            frame_mostrado = procesar_frame(frame, modo)
            cv2.imshow(VENTANA, frame_mostrado)

            tecla = cv2.waitKey(1) & 0xFF

            if tecla == ord("1"):
                modo = "normal"
                print("Modo: NORMAL")
            elif tecla == ord("2"):
                modo = "gris"
                print("Modo: GRIS")
            elif tecla == ord("3"):
                modo = "blur"
                print("Modo: BLUR")
            elif tecla == ord("4"):
                modo = "bordes"
                print("Modo: BORDES")
            elif tecla == ord("s") or tecla == ord("S"):
                if frame_mostrado is not None:
                    cv2.imwrite(CAPTURA, frame_mostrado)
                    print(f"Captura guardada: {CAPTURA}")
            elif tecla == ord("q") or tecla == ord("Q"):
                break
    finally:
        cap.release()
        cv2.destroyAllWindows()


if __name__ == "__main__":
    ejecutar_webcam_interactiva()
