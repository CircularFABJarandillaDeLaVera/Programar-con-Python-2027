# Proyecto B4 - SAMI-OOP

## Evolucion
SAMI-Lite -> SAMI-OOP.

## Objetivo
Reorganizar el problema conocido de auditoria de mercado usando objetos.

## Estructura
```text
sami_oop/
  analizador.py
  persistencia.py
  main.py
```

## Clases
- `Producto`: nombre, precio base validado y calculo base.
- `ProductoHardware`: producto con peso y recargo.
- `ProductoLicencia`: producto digital con clave y descuento posible.
- `AuditoriaMercado`: contiene productos y genera reporte.
- `ManejadorDatos`: carga configuracion y registra salidas.

## Evidencias
- Objetos instanciados.
- Herencia con `super()`.
- Composicion en `AuditoriaMercado`.
- Sobrescritura de `calcular_precio_final`.
- Reporte polimorfico.
- Configuracion JSON y CSV de transacciones.

## Archivos base
Los tres archivos Python estan en esta carpeta.
