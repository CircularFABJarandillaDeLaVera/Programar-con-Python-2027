window.EDUSDK_MAP_DATA = {
  title: 'Mapa mental interactivo - Bloque {{BLOQUE_NUMERO}}',
  documentTitle: 'Mapa mental - Bloque {{BLOQUE_NUMERO}}',
  brand: 'Circular FAB · {{PRODUCTO_NOMBRE}}',
  backHref: '../index.html',
  printNote: 'EduSDK - Bloque {{BLOQUE_NUMERO}} - Mapa mental',
  width: 1560,
  height: 980,
  nodeWidth: 210,
  centerWidth: 310,
  legend: [
    { label: 'Concepto', tone: 'blue' },
    { label: 'Practica', tone: 'green' },
    { label: 'Dato', tone: 'amber' },
    { label: 'Riesgo', tone: 'red' }
  ],
  nodes: [
    {
      id: 'root',
      parent: null,
      x: 625,
      y: 400,
      type: 'central',
      title: 'BLOQUE {{BLOQUE_NUMERO}}',
      subtitle: 'Tema central',
      def: 'Nodo central del mapa generado para el bloque.',
      key: 'Resume la idea principal que organiza el aprendizaje.',
      err: 'Usar el mapa como fuente pedagogica maestra en lugar de artefacto de visualizacion.'
    },
    {
      id: 'conceptos',
      parent: 'root',
      x: 520,
      y: 70,
      type: 'rama',
      title: 'Conceptos',
      subtitle: 'Ideas base',
      def: 'Rama para agrupar los conceptos principales.',
      key: 'Cada concepto debe venir de la fuente pedagogica del bloque.',
      err: 'Anadir contenido que no exista en la fuente validada.'
    },
    {
      id: 'concepto_a',
      parent: 'conceptos',
      x: 300,
      y: 185,
      type: 'sub',
      title: 'Concepto A',
      subtitle: 'Detalle',
      def: 'Ejemplo neutro de subnodo conceptual.',
      key: 'El visor solo representa datos ya generados.',
      err: 'Confundir datos de visualizacion con autoria.'
    },
    {
      id: 'concepto_b',
      parent: 'conceptos',
      x: 760,
      y: 185,
      type: 'sub',
      title: 'Concepto B',
      subtitle: 'Detalle',
      def: 'Segundo ejemplo neutro de subnodo.',
      key: 'Los nodos usan coordenadas locales para mantener el mapa estable.',
      err: 'Depender de rutas absolutas.'
    },
    {
      id: 'practica',
      parent: 'root',
      x: 190,
      y: 520,
      type: 'rama',
      title: 'Practica',
      subtitle: 'Aplicacion',
      def: 'Rama para conectar conceptos con actividad.',
      key: 'La practica traduce el bloque a decisiones observables.',
      err: 'Dejar la actividad desconectada de los objetivos.'
    },
    {
      id: 'datos',
      parent: 'root',
      x: 1000,
      y: 520,
      type: 'rama',
      title: 'Datos criticos',
      subtitle: 'Valores y reglas',
      def: 'Rama para datos que el alumno debe reconocer con precision.',
      key: 'Separar datos, criterios y errores habituales.',
      err: 'Mezclar datos de bloques distintos.'
    },
    {
      id: 'cierre',
      parent: 'root',
      x: 625,
      y: 760,
      type: 'rama',
      title: 'Cierre',
      subtitle: 'Repaso',
      def: 'Rama de consolidacion y revision final.',
      key: 'El mapa debe ayudar a repasar sin sustituir la leccion.',
      err: 'Convertir el mapa en una pagina de texto larga.'
    }
  ]
};


