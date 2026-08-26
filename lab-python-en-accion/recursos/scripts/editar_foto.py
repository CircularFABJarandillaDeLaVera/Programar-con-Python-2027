from pathlib import Path

from PIL import Image, ImageFilter


def editar_foto():
    base_dir = Path(__file__).resolve().parents[1]
    entrada = base_dir / "assets" / "foto_original.ppm"
    salida = base_dir / "assets" / "foto_editada.jpg"

    imagen = Image.open(entrada)
    pequena = imagen.resize((400, 300))
    recortada = pequena.crop((30, 20, 370, 280))
    rotada = recortada.rotate(8)
    gris = rotada.convert("L")
    suave = gris.filter(ImageFilter.BLUR)

    suave.save(salida)
    print(f"Imagen guardada: {salida}")


if __name__ == "__main__":
    editar_foto()
