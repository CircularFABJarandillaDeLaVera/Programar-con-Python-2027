from pathlib import Path
import argparse
import json
import shutil

REQUIRED_FIELDS = {"numero", "slug", "titulo"}
TEXT_SUFFIXES = {".html", ".css", ".js", ".json", ".md", ".txt"}


def parse_args():
    parser = argparse.ArgumentParser(description="Crear un bloque EduSDK desde la plantilla canonica.")
    parser.add_argument("config", help="Ruta al JSON de configuracion del bloque.")
    parser.add_argument("project_root", help="Ruta raiz del curso destino.")
    parser.add_argument("--dry-run", action="store_true", help="Mostrar que se crearia sin escribir archivos.")
    return parser.parse_args()


def load_config(config_path):
    if not config_path.exists():
        raise FileNotFoundError(f"No existe: {config_path}")
    cfg = json.loads(config_path.read_text(encoding="utf-8-sig"))
    missing = sorted(REQUIRED_FIELDS - set(cfg))
    if missing:
        raise ValueError(f"Faltan campos requeridos: {', '.join(missing)}")
    return cfg


def replace_tokens(destino, replacements):
    for path in destino.rglob("*"):
        if path.is_file() and path.suffix.lower() in TEXT_SUFFIXES:
            text = path.read_text(encoding="utf-8")
            for old, new in replacements.items():
                text = text.replace(old, new)
            path.write_text(text, encoding="utf-8")


def main():
    args = parse_args()
    config_path = Path(args.config).resolve()
    project_root = Path(args.project_root).resolve()
    cfg = load_config(config_path)

    slug = str(cfg["slug"])
    numero = str(cfg["numero"])
    titulo = str(cfg["titulo"])
    destino = project_root / "bloques" / slug
    template = Path(__file__).resolve().parent.parent / "plantilla-bloque"

    if destino.exists():
        raise FileExistsError(f"Ya existe: {destino}")

    replacements = {
        "{{BLOQUE_NUMERO}}": numero,
        "{{BLOQUE_SLUG}}": f"bloque{numero}",
        "{{BLOQUE_TITULO}}": titulo,
        "{{BLOQUE_DURACION}}": str(cfg.get("duracion", "")),
        "{{BLOQUE_DESCRIPCION}}": str(cfg.get("descripcion", "")),
        "{{CURSO_NOMBRE}}": str(cfg.get("curso", "Curso EduSDK")),
        "{{PRODUCTO_NOMBRE}}": str(cfg.get("producto", "EduSDK"))
    }

    print(f"Plantilla: {template}")
    print(f"Destino: {destino}")
    print(f"Datos: data/bloque.json -> data/bloque{numero}.json")
    print(f"Datos: data/bloque.js -> data/bloque{numero}.js")

    if args.dry_run:
        print("Dry-run: no se han escrito archivos.")
        return

    shutil.copytree(template, destino)

    data_dir = destino / "data"
    generic_json = data_dir / "bloque.json"
    generic_js = data_dir / "bloque.js"
    if generic_json.exists():
        generic_json.rename(data_dir / f"bloque{numero}.json")
    if generic_js.exists():
        generic_js.rename(data_dir / f"bloque{numero}.js")

    replace_tokens(destino, replacements)

    print(f"Creado: {destino}")
    print("Siguiente paso: sustituir los datos provisionales por el contenido pedagogico validado.")


if __name__ == "__main__":
    main()
