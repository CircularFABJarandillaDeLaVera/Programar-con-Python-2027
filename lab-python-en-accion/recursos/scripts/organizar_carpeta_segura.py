from pathlib import Path
import shutil


MOVER_ARCHIVOS = True


def organizar_carpeta_segura():
    base_dir = Path(__file__).resolve().parents[1]
    carpeta = base_dir / "lab_archivos_prueba"
    carpeta.mkdir(parents=True, exist_ok=True)

    destinos = {
        ".pdf": "PDFs",
        ".jpg": "Imagenes",
        ".jpeg": "Imagenes",
        ".png": "Imagenes",
        ".py": "Codigo",
        ".txt": "Textos",
        ".md": "Textos",
    }

    for ruta in carpeta.iterdir():
        if ruta.is_file():
            nombre_destino = destinos.get(ruta.suffix.lower(), "Otros")
            carpeta_destino = carpeta / nombre_destino
            carpeta_destino.mkdir(parents=True, exist_ok=True)
            destino = carpeta_destino / ruta.name
            print(f"{ruta.name} -> {nombre_destino}/{ruta.name}")

            if MOVER_ARCHIVOS:
                shutil.move(str(ruta), str(destino))

    print("Carpeta de laboratorio organizada.")


if __name__ == "__main__":
    organizar_carpeta_segura()
