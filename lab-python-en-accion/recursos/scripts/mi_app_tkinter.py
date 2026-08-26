import tkinter as tk


def main():
    def saludar():
        nombre = entrada.get()
        if nombre:
            mensaje.set(f"Hola, {nombre}. Tu codigo ya tiene ventana.")
        else:
            mensaje.set("Escribe un nombre para probar la app.")

    root = tk.Tk()
    root.title("Mi primera app")

    mensaje = tk.StringVar()
    mensaje.set("Escribe tu nombre y pulsa el boton.")

    tk.Label(root, text="Nombre:").pack(padx=16, pady=(16, 4))
    entrada = tk.Entry(root)
    entrada.pack(padx=16, pady=4)

    tk.Button(root, text="Saludar", command=saludar).pack(padx=16, pady=8)
    tk.Label(root, textvariable=mensaje).pack(padx=16, pady=(4, 16))

    root.mainloop()


if __name__ == "__main__":
    main()
