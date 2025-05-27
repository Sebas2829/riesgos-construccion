const datos = {
  "Obras Preliminares": [
    {
      nombre: "Excavación de hoyos para anclaje de postes para cerramientos provisional",
      descripcion: "Proceso en el cual se comienza la remoción de tierra para la creación de hoyos o cavidades en las cuales poder anclar postes de madera que tengan como función sostener el material con el cual se va a tapar el área de construcción. Dicha actividad se realiza con pico y pala asegurando la estabilidad adecuada de los postes.",
      riesgos: [
        ["Golpes y corte por herramienta menor (Pala, pico)", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
        ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Inhalación de partículas por movimiento de tierra", "Físico", "Dañino", "Baja", "Riesgo Tolerable"],
        ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"]
      ]
    },
    {
      nombre: "Excavación de hoyos para anclaje de postes para casetas de trabajo",
      descripcion: "Proceso en el cual se comienza la remoción de tierra para la creación de hoyos o cavidades en las cuales poder anclar postes de madera que tengan como función ser las bases de las casetas de trabajo. Dicha actividad se realiza con pico y pala asegurando la estabilidad adecuada de los postes.",
      riesgos: [
        ["Golpes y corte por herramienta menor (Pala, pico)", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
        ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Inhalación de partículas por movimiento de tierra", "Físico", "Dañino", "Baja", "Riesgo Tolerable"],
        ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"]
      ]
    },
    {
      nombre: "Hincado o colocación de postes para el cerramiento provisional y casetas de trabajo",
      descripcion: "Proceso que implica la colocación vertical de postes de madera mediante golpes o presión, adquiriendo así el soporte necesario para la creación de cerramientos temporales o casetas de trabajo.",
      riesgos: [
        ["Golpes y corte por herramienta menor (Martillo)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Atrapamiento de manos/dedos durante colocación", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
        ["Caída del poste durante colocación", "Locativo", "Dañino", "Media", "Riesgo Moderado"]
      ]
    },
    {
      nombre: "Ensamble y clavado de elementos de soporte para casetas de trabajo",
      descripcion: "Proceso de montaje de estructuras temporales en obra, mediante la unión de componentes estructurales utilizando clavos u otros elementos de fijación, así garantizando la funcionalidad de dichos elementos estructurales.",
      riesgos: [
        ["Golpes y corte por herramienta menor (Martillo)", "Mecánico", "Dañino", "Alta", "Riesgo Importante"],
        ["Clavos proyectados o desviados", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
        ["Afecciones musculares derivados de mala posiciones de trabajo", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"]
      ]
    },
    {
      nombre: "Limpieza manual del terreno",
      descripcion: "Es el proceso de escarificación del terreno, o también puede verse como un escarpe manual o remoción del material orgánico o capa vegetal que se encuentra en la superficie del área de trabajo, generalmente se quita de 10 a 20 centímetros de material.",
      riesgos: [
        ["Golpes y corte por herramienta menor (Pala, pico, azadón, carretilla)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
        ["Inhalación de partículas por movimiento de tierra", "Físico", "Dañino", "Media", "Riesgo Moderado"],
        ["Peligros asociados al manejo manual de cargas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
      ]
    },
    {
      nombre: "Nivelación del terreno",
      descripcion: "Serie de mediciones y trazados que traspasan al terreno de construcción los dimensionamientos y niveles que se hallan en los planos, especialmente se busca definir correctamente las cotas a las que se debe trabajar teniendo un nivel de referencia como puede ser el nivel de acera .",
      riesgos: [
        ["Inhalación de partículas por movimiento de tierra", "Físico", "Dañino", "Media", "Riesgo Moderado"],
        ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
        ["Golpes y corte por herramienta menor (Martillo, estacas, pala)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
      ]
    }
  ],
  "Desbanque Manual": [
    {
      nombre: "Entibados de paredes de excavación",
      descripcion: "Actividad complementaria de la excavación, puede ser también considerada un tipo de la misma como ¨excavaciones con entibación¨, y que trata de reforzar las paredes de la excavación con soportes llamados tablaestacas que eviten el desprendimiento de material de las paredes laterales .",
      riesgos: [
        ["Colapso de paredes de excavación", "Locativo", "Extremadamente Dañino", "Media", "Riesgo Importante"],
        ["Caída de herramientas y materiales desde altura", "Mecánico", "Dañino", "Alta", "Riesgo Importante"],
        ["Caída del personal dentro de la excavación", "Locativo", "Extremadamente Dañino", "Media", "Riesgo Importante"],
        ["Atrapamiento durante la excavación", "Mecánico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"],
        ["Inhalación de partículas por movimiento de tierra", "Físico", "Dañino", "Media", "Riesgo Moderado"],
        ["Estrés por trabajo en espacio reducido o inseguro", "Psicosocial", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
      ]
    },
    {
      nombre: "Excavación manual de cimientos",
      descripcion: "Forma parte del rubro de movimientos de tierra, en este caso involucra solamente al retiro de material bajo el nivel de superficie del suelo para poder instalar elementos estructurales, sin embargo, debe ser de forma manual y en pequeñas cantidades .",
      riesgos: [
        ["Golpes y corte por herramienta menor (Pala, pico)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
        ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Inhalación de partículas por movimiento de tierra", "Físico", "Dañino", "Alta", "Riesgo Importante"],
        ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
        ["Lesión por deslizamiento de tierra", "Mecánico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"],
        ["Lesiones asociadas al manejo manual de cargas", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
      ]
    },
    {
      nombre: "Perfilado manual de plintos y muros de contención",
      descripcion: "Implica el acabado superficial y la conformación precisa de estos elementos estructurales mediante herramientas manuales, este proceso se realiza para asegurar que la superficie de los plintos y los muros de contención cumplan con sus respectivas especificaciones de diseño, así garantizando su funcionalidad .",
      riesgos: [
        ["Golpes y corte por herramienta menor (Pala, pico, soleras)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
        ["Peligros asociados al manejo manual de cargas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Inhalación de partículas por movimiento de tierra", "Físico", "Dañino", "Media", "Riesgo Moderado"],
        ["Mal uso de escalera o andamios", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
        ["Lesión por deslizamiento de tierra", "Mecánico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"]
      ]
    },
    {
      nombre: "Desalojo manual de materiales",
      descripcion: "Consta en el trasporte y desalojo de material sobrante o desechos en obra, utilizando mano de obra, equipo, herramientas y operaciones conexas, necesarias para la ejecución de trabajos descritos en dicha sección .",
      riesgos: [
        ["Golpes y corte por herramienta menor (Pala, pico, carretilla)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Lesiones asociadas al manejo manual de cargas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
        ["Inhalación de partículas por movimiento del material", "Químico", "Dañino", "Baja", "Riesgo Tolerable"],
        ["Golpes y corte por movimiento del material", "Mecánico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"]
      ]
    }
  ],
"Muros de Contención y Cimentación" : [
  {
    nombre: "Trazado de ejes y comprobación de escuadras",
    descripcion: "Consta del trazado de referencias y distancias que se encuentran en el plano como deslindes del terreno, ejes y vértices, y demás detalles como posicionamiento de la cimentación. Para este proceso se suelen usar estacas, piola, tiza y spray de color para delimitar ciertas zonas de implantación y dibujar líneas de fronteras, además se comprueban vértices con escuadras realizadas a mano mediante distancias conocidas.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, estacas, piola, alicate, estilete)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Inhalación de gases por sustancias químicas (Espray)", "Químico", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Mezcla de hormigón en concretera",
    descripcion: "La mezcla de materia prima para la obtención de concreto puede realizarse a pequeña escala mediante el uso de betoneras o mezcladoras, que son muy usadas en el área de la construcción, pudiendo haber betoneras fijas o móviles, y de distinta capacidad.",
    riesgos: [
      ["Atrapamiento en partes de la concretera", "Mecánico", "Extremadamente Dañino", "Media", "Riesgo Importante"],
      ["Inhalación de polvo de cemento", "Físico", "Dañino", "Media", "Riesgo Moderado"],
      ["Contacto con cemento húmedo", "Químico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados de cargas pesadas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Caída por mezcla derramada en superficie", "Locativo", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Replantillo para base de estructuras",
    descripcion: "También conocido como emplantillado, se trata de la aplicación de una capa de concreto pobre de 5 a 8 centímetros de espesor que tiene varias funciones, entre ellas nivelar el fondo de una superficie antes de armar con acero el elemento estructural que se levantará sobre ella, además de eso, deja una base sólida y limpia, evitando el contacto directo con el suelo y sus imperfecciones.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Pala, carretilla)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Preparación de acero de refuerzo",
    descripcion: "Conjunto de actividades iniciales que involucran al manejo de las barras de acero corrugado y rollos de alambre usados para reforzar las estructuras. El proceso comienza con el acarreo y transporte de las varillas y rollos de alambre hacia los lugares de trabajo, para después estirar los rollos de barras y dejar las varillas en el mejor estado posible, para finalmente limpiar y quitar cualquier capa de óxido que puedan perjudicar su adherencia con el hormigón al momento del fundido.",
    riesgos: [
      ["Cortes con acero en extremos filosos", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados de cargas pesadas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Afecciones musculares derivados al trabajo en el suelo", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Tropiezos por barras mal ubicada", "Locativo", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Corte de las barras de acero",
    descripcion: "Es una actividad de sumo cuidado debido a las herramientas usadas, que va a depender a su vez del diámetro de las barras a cortar. Para barras de bajo grosor, entre 5 y 15mm, se puede usar un cortabarras especial o también el uso de cizallas, sin embargo, para varillas de diámetros mayores, es necesaria maquinaria como guillotinas o también amoladoras con disco de hierro diamantado.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Cizalla o cortadora)", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Cortes por manejo de moladora o herramienta afilada", "Mecánico", "Extremadamente Dañino", "Media", "Riesgo Importante"],
      ["Contacto eléctrico en herramientas defectuosas", "Eléctrico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Doblado y ensamblado de las barras de acero",
    descripcion: "Son las etapas de armado de varillas en las que, en base a un plano estructural que detalle dimensiones y posicionamiento, las varillas son dobladas para generar los ángulos requeridos, siempre y cuando no afecte la integridad de la barra ni se agriete. Para este paso pueden ser usadas herramientas como grifas, dobladoras mecánicas o incluso suelen usarse tubos de doblado y trampas para procesos un poco más conservadores. Por otro lado, el ensamblado de las barras de acero es una actividad en la cual los obreros colocan las piezas a la medida y ya cortadas en las posiciones estipuladas en los planos para dar forma a la estructura.",
    riesgos: [
      ["Golpes por manipulación de las barras", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados al doblado manual de las barras", "Ergonómico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados al trabajo prolongado", "Ergonómico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Golpes y corte por herramienta de doblado", "Mecánico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Armado de estribos y amarres de alambre",
    descripcion: "Los amarres en las estructuras se realizan por lo general con alambre negro número 18, y consisten en amarres en los nudos de las varillas y estribos, que sirven para darle un posicionamiento fijo a las barras, evitar que se desplacen en el proceso del vaciado de hormigón, y que exista mayor rigidez. Además, se debe colocar también estribos y emplames, los primeros son barras de acero dobladas transversales al elemento, que cumplen con confinar el conjunto de varillas longitudinales, darle resistencia a corte al elemento y ayuda en la ductilidad de la estructura; por otro lado, los emplames son ganchos, dobleces o traslapes que anclan correctamente el acero de refuerzo.",
    riesgos: [
      ["Cortes o pinchazos por manipulación del alambre", "Mecánico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Golpes provocados por la manipulación de los estribos", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Mecánico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Impermeabilización de la cimentación",
    descripcion: "La impermeabilización de los cimientos a través de láminas plásticas implica la instalación de una barrera física, en la superficie de los cimientos para prevenir la infiltración de agua y humedad. Este procedimiento resulta particularmente beneficioso en áreas con agua subterránea o donde se necesita una defensa extra contra la humedad. El proceso de instalación debe asegurar la continuidad de la lámina y su adecuada conexión en los solapes para garantizar la estanqueidad del sistema.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Tijeras, estilete, combo)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Afecciones musculares derivados de movimientos bruscos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Encofrado en madera",
    descripcion: "Colocación de moldes de madera con las dimensiones del elemento estructural que se va a fundir, donde se va a colocar el armado y se va a verter el concreto. El encofrado debe tener la capacidad de soportar el peso mismo del concreto, el empuje que este genera en el vaciado y las vibraciones posteriores.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, sierra, clavos, llaves)", "Mecánico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Golpe por manipulación de material pesado", "Mecánico", "Extremadamente Dañino", "Media", "Riesgo Importante"],
      ["Quemaduras en piel por exposición directa a sustancia química (Diesel)", "Químico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Corte o amputación por mal uso de la moladora", "Mecánico", "Extremadamente Dañino", "Media", "Riesgo Importante"],
      ["Inhalación de gases por sustancias químicas (Diesel)", "Químico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Incendio por mal uso del Diesel", "Físico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Apuntalamiento de encofrados",
    descripcion: "Actividad que trata sobre la instalación de todos los elementos de refuerzo externo provisional que tengan la capacidad de soportar las cargas de empuje en el vertido de concreto sin generar deformaciones o movimientos considerables y que ayuden a mantener la forma del elemento.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, clavos, llaves, gata hidráulica, espadas)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Afecciones musculares derivados de cargas pesadas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Vaciado de concreto a nivel",
    descripcion: "Trata de la colocación del concreto que proviene de camiones hormigoneros y todos los procesos intermedios de menor escala, generalmente usando tubería, canales y cintas con el fin de que el concreto llegue a su lugar de destino en la obra evitando la separación de los agregados. Se incluye también el transporte del material, el armado de tubería, que debe ser de metal o tener revestimiento de ese material, con paredes curvas para evitar la adherencia ni segregación.",
    riesgos: [
      ["Afecciones musculares derivados al trasporte de tubería para concreto", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a nivel", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Golpes y corte por herramienta menor (Pala)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Vibrado de concreto a nivel",
    descripcion: "Actividad fundamental complementaria al vaciado de concreto, que se realiza mediante el uso de vibradores con el fin de darle una correcta compactación y distribución al concreto, eliminando la mayor parte de burbujas que tenga en el aire, además de evitar la segregación y la aparición de cangrejeras.",
    riesgos: [
      ["Caídas de personas a nivel", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Afecciones musculares por movimientos vibratorios", "Físico/Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Desencofrado en madera",
    descripcion: "Proceso para retirar los encofrados o tableros cuando la estructura de concreto haya adquirido la resistencia pertinente para soportar las solicitaciones. Se lo debe hacer de manera cuidadosa y sin golpes, comenzando por las partes más distantes a los apoyos. El orden del desencofrado debe ser: columnas, laterales de vigas, muros, fondos de vigas, losas y escaleras, donde el tiempo desde el vertido hasta el desencofrado puede tardar entre 3 y 21 días dependiendo el elemento y las condiciones generales.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, llaves, barra)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Caídas de personas a nivel", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Afecciones musculares derivados de cargas pesadas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Curado de hormigón",
    descripcion: "Proceso durante el endurecimiento del concreto en el que se protege al material de los agentes atmosféricos como el viento y el sol para que no ocurra una evaporación rápida de agua de la mezcla y evitar la formación de grietas de retracción y también poder aumentar su resistencia. Este proceso se lo hace generalmente humedeciendo el concreto ya formado durante 3 a 7 días, aunque también se podría usar costales, plásticos, aserrín o arena húmeda para este fin.",
    riesgos: [
      ["Golpes por caída por superficie resbaladiza", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  }
],
"Estructura por Pisos" : [
  {
    nombre: "Encofrado metálico",
    descripcion: "Es la colocación, ensamblado y ajuste de moldajes metálicos provisionales que sirvan para darle forma y sostener la estructura en el proceso de vaciado del concreto, soportando el empuje del mismo sin generar desplazamientos, hasta que el material alcance una resistencia adecuada. Los encofrados metálicos están conformados por paneles que deben ajustarse con bastidores o espadas metálicas para conservar sus juntas. Este tipo de moldes son muy usados debido a su recuperabilidad y reutilización, además de poder darle formas más variadas y con acabados más limpios.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, llaves)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Golpe por manipulación de material pesado", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Quemaduras en piel por exposición directa a sustancia química (Aceite quemado)", "Químico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Inhalación de gases por sustancias químicas (Aceite quemado)", "Químico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Incendio por mal uso del aceite quemado", "Físico", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Vaciado de concreto en altura",
    descripcion: "Conjunto de actividades que conllevan al transporte, manejo, manipulación y vaciado del concreto en elementos estructurales que se encuentran en niveles más altos al de la superficie de trabajo. En este caso es indispensable el uso de tuberías y bombas para alcanzar mayor potencia y proyección desde los camiones hormigoneros. También es común el uso de tolvas, cucharones, cubetas receptoras o instrumentos relacionados para que el hormigón caiga de manera vertical en el encofrado, esto con el fin de evitar la segregación del material y que el material grueso no ocupe solamente los extremos del espacio.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Pala, baldes)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Fatiga por levantamiento de baldes de concreto", "Ergonómico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Afecciones musculares derivados al trasporte de tubería para concreto", "Ergonómico", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Vibrado de concreto en altura",
    descripcion: "Proceso para, mediante un aparato de vibración eléctrico o neumático, distribuir el concreto y eliminar los vacíos que se encuentren dentro del mismo tras el vaciado. Se enfoca especialmente en elementos estructurales que se encuentren en un nivel superior al de la superficie de trabajo, por lo que se pueden usar vibradores externos que se encuentren en conjunto con el encofrado mediante abrazaderas.",
    riesgos: [
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares por movimientos vibratorios", "Físico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Desencofrado metálico",
    descripcion: "Actividad de desmolde de elementos de concreto después de haber obtenido una resistencia tal que pueda soportar su peso sin generar deformaciones considerables. En el caso del encofrado metálico, es mucho más sencillo su desprendimiento ya que solamente se debe quitar los bastidores que se encuentran en las juntas y desarticular uno a uno las paneles.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, llaves)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Afecciones musculares derivados de cargas pesadas", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Chicoteado de columnas",
    descripcion: "Refuerzo horizontal tipo anclaje que conecta el elemento estructural con la mampostería y se lo realiza con acero de refuerzo como pasadores que cumplen una longitud de desarrollo.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, puntal)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Exposición ocular a fragmentos del concreto", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Apuntalamiento de encofrado de losas",
    descripcion: "Proceso mediante se procede a la instalación de soportes temporales bajo los encofrados de losas, con le objetivo de soportar las cargas de vaciado y fraguado del hormigón, así garantizando la estabilidad y la forma previamente establecida de la losa.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, clavos, llaves, gata hidráulica)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Caída de herramientas y materiales desde altura", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados de cargas pesadas", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Colocación de tuberías para instalaciones hidrosanitarias y eléctricas en losa",
    descripcion: "En el proceso de armado de una los alivianada, es indispensable tomar en cuenta el paso de tuberías para instalaciones hidrosanitarias y los ductos para cableado eléctrico, por lo que se procede a cortar, unir y colocar la tubería correspondiente a través de la losa, evitando cruzar por armado de vigas para no quitarle resistencia.",
    riesgos: [
      ["Corte por manipulación del acero de refuerzo", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Corte por mal uso de la sierra", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Golpes y corte por herramienta menor (Estilete, playo)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Corte por mal uso de la cortadora de tubos", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Colocación de bloques de alivianamiento",
    descripcion: "Proceso en el cual se coloca manualmente unidades de bloques alivianados sobre losas de entrepiso o cubiertas con el propósito de disminuir las cargas muertas sin afectar la resistencia de la estructura. Dichos bloques por lo general son huecos y se incorporan al sistema de entrepisos como relleno estructural.",
    riesgos: [
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Afecciones musculares derivados de cargas pesadas", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Golpe por movimiento de bloques", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Colocación de malla electrosoldada",
    descripcion: "Es el transporte y colocación de malla electrosoldada, muy usada en losas y muros, que están hechas de acero de ala resistencia, con diámetros entre 4-12 mm.",
    riesgos: [
      ["Corte por manipulación de la malla electrosoldada", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Corte o amputación por mal uso de la moladora", "Mecánico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Golpes y corte por herramienta menor (Playo)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Despuntalamiento de losas",
    descripcion: "Es la eliminación o remoción de los soportes temporales empleados en los encofrados de losas, este se realiza después de que el concreto ha adquirido la resistencia necesaria para resistir las cargas de servicio.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, llaves, gata hidráulica)", "Mecánico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Caída de herramientas y materiales desde altura", "Mecánico", "Dañino", "Alta", "Riesgo Importante"],
      ["Aplastamiento por falla del elemento estructural", "Mecánico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"]
    ]
  }
],
"Instalaciones Hidrosanitarias y Eléctricas" : [
  {
    nombre: "Corte de tuberías de PVC y PP-R",
    descripcion: "El corte de tuberías de PVC y PP-R se realiza utilizando herramientas específicas como sierras manuales o eléctricas, así asegurando cortes precisos y limpios para garantizar un apropiado ensamblaje. En especial para la tubería de termofusión ya que los cortes deben ser perfectamente perpendiculares al eje de la tubería asegurando su correcta unión.",
    riesgos: [
      ["Cortes con herramienta manual o eléctrica", "Mecánico", "Dañino", "Alta", "Riesgo Importante"],
      ["Proyección de partículas al cortar", "Físico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Inhalación de polvo al cortar tubería de PVC", "Químico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Ensamblaje de tuberías PVC",
    descripcion: "Proceso en el cual se lleva a cabo la unión mecánica de la tubería de PVC con uniones del mismo materia empleando adhesivos solventes que aseguren una conexión firme y duradera.",
    riesgos: [
      ["Contacto con adhesivos (vapores tóxicos)", "Químico", "Dañino", "Media", "Riesgo Moderado"],
      ["Irritación de piel u ojos por productos químicos", "Químico", "Dañino", "Media", "Riesgo Moderado"],
      ["Contacto dérmico con adhesivos", "Químico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Ensamblaje de tuberías PP-R",
    descripcion: "Proceso por el cual se realiza el montaje de las tuberías de PP-R por termofusión, esté consiste en calentar al mismo tiempo los extremos de la tubería y del accesorio o unión a emplearse a una temperatura cera de los 260° C, teniendo así una conexión monolítica.",
    riesgos: [
      ["Quemaduras por usos de maquina de termofusión", "Mecánico", "Dañino", "Alta", "Riesgo Importante"],
      ["Descarga eléctrica accidental por cercanía a conductores sin aislamiento", "Eléctrico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"],
      ["Inhalación de vapores por fusión de tuberías", "Químico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Instalación de tuberías en pisos superiores",
    descripcion: "La instalación del sistema requiere la implementación de soportes y abrazaderas adecuadas para sujetar la tubería, así previniendo movimientos innecesarios garantizando que el sistema de PVC como de PP-R actúe de manera adecuada y sin complicación alguna por la vibración provocada por la circulación del agua.",
    riesgos: [
      ["Caídas de personas a distinto nivel", "Mecánico", "Extremadamente Dañino", "Media", "Riesgo Importante"],
      ["Golpes al manipular herramientas en altura", "Mecánico", "Dañino", "Alta", "Riesgo Importante"],
      ["Afecciones musculares derivados al sobreesfuerzo al subir materiales", "Ergonómico", "Dañino", "Media", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Pruebas hidráulicas",
    descripcion: "Consiste en someter al sistema tanto de PVC como de PP-R de una presión superior a la que normalmente el sistema va a trabajar así verificando que todo sea hermético y resistente para su durabilidad. Este se realiza sellando el sistema y aplicando agua a presión durante un mínimo de dos horas, siendo este obligatorio antes de cubrir las tuberías.",
    riesgos: [
      ["Fugas de agua a presión", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Golpes por desprendimiento de conexiones", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Caída por superficie mojada o escombros", "Locativo", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Montaje de la caja o cuadro general de protección",
    descripcion: "Es la instalación de la caja como principal elemento de enlace hacia la vivienda, a la cual llega la acometida, y sirve como la primera barrera de protección y distribución eléctrica.",
    riesgos: [
      ["Descarga eléctrica accidental", "Eléctrico", "Extremadamente Dañino", "Media", "Riesgo Importante"],
      ["Golpes con bordes metálicos de la caja", "Mecánico", "Dañino", "Alta", "Riesgo Importante"],
      ["Cortes al manipular cables o conectores", "Eléctrico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Quemaduras por contacto con conductores energizados", "Eléctrico", "Extremadamente Dañino", "Media", "Riesgo Importante"]
    ]
  },
  {
    nombre: "Picado de pared para paso de tubería",
    descripcion: "Consiste en la señalización y derrocamiento de tramos de pared con el fin de permitir la ubicación y salida de tubería guía para el cableado eléctrico.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Pico, pala)", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Inhalación de polvo (bloque, concreto)", "Físico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Caídas por escombros o terreno irregular", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Baja", "Riesgo Trivial"]
    ]
  },
  {
    nombre: "Tendido de alambre y conexión de accesorios",
    descripcion: "Trata del paso de alambre por medio de la tubería de guía y protección para posteriormente realizar la instalación y conexión de los accesorios a la fuente de electricidad.",
    riesgos: [
      ["Contacto con conductores energizados", "Eléctrico", "Extremadamente Dañino", "Alta", "Riesgo Intolerable"],
      ["Cortes con herramientas o cables", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados a malas posturas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Pruebas y energización",
    descripcion: "Las pruebas de energización implican la comprobación y confirmación de que los dispositivos y componentes eléctricos bien sean transformadores, tableros de distribución y sistema de control operen de la mejor manera antes de su puesta en marcha. Este proceso comprende de la revisión visual, prueba de aislamiento, comprobación de conexión y medidas de parámetros eléctricos.",
    riesgos: [
      ["Explosiones o chispas por mal conexionado", "Eléctrico", "Extremadamente Dañino", "Alta", "Riesgo Intolerable"],
      ["Quemaduras por arco eléctrico", "Eléctrico", "Extremadamente Dañino", "Media", "Riesgo Importante"],
      ["Incendio en caso de sobrecarga", "Eléctrico", "Extremadamente Dañino", "Baja", "Riesgo Moderado"]
    ]
  }
],
"Mampostería y Acabados" : [
  {
    nombre: "Mezcla manual de mortero",
    descripcion: "Trata un trabajo de albañilería que compete la mezcla de cemento, arena y agua para crear un mortero que sirva como adherente en la mampostería, además de darle un buen sellado a las uniones, además se lo usa para la actividad de estucado de las paredes.",
    riesgos: [
      ["Afecciones musculares derivados a los sobreesfuerzos", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Inhalación de polvo de cemento", "Físico", "Dañino", "Alta", "Riesgo Importante"],
      ["Contacto con cemento húmedo", "Químico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Golpes y corte por herramienta menor (Pala)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Caída por mezcla derramada en superficie", "Locativo", "Dañino", "Alta", "Riesgo Importante"]
    ]
  },
  {
    nombre: "Colocación y pegado de mampostería",
    descripcion: "Es una actividad conjunta de albañilería que desarrolla el traslado de mampostería como ladrillo o bloque, su colocación y pegado con mortero, con el fin de dividir espacios y ambientes en un mismo piso. En este ámbito también puede haber una clasificación importante debido a la estructura de las paredes, pudiendo haber albañilería simple, albañilería armada y albañilería reforzada o confinada.",
    riesgos: [
      ["Golpes y corte por herramienta menor (Martillo, pala)", "Mecánico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Golpes por manipulación del material", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Caída por superficie mojada o escombros", "Locativo", "Extremadamente Dañino", "Baja", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Estucado y enlucido de paredes",
    descripcion: "El estucado es un proceso de revestimiento de paredes y elementos de hormigón con mortero para darles un mejor terminado, protegerlos de agentes climáticos, darles texturas deseadas a las superficies y adecuarlos para la colocación de otras capas de revestimientos. Se compone de dos etapas: el revoque, que consiste en la primera capa (1.5 a 2 cm) que arregla las imperfecciones, y la segunda es la capa de terminación, que es una cubierta (menor a 1 cm) que deja un acabado liso.",
    riesgos: [
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados de movimientos repetitivos", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"],
      ["Golpes y corte por herramienta menor (Espátula)", "Mecánico", "Dañino", "Baja", "Riesgo Tolerable"],
      ["Inhalación de polvo al lijar las paredes", "Físico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"]
    ]
  },
  {
    nombre: "Colocación de cerámico",
    descripcion: "Es el pegado de cerámica o baldosa en el piso, paredes o lugares afectados por la humedad o con fines decorativos. Para este procedimiento primero se tiene que limpiar la superficie, para después revocarla para tener una textura rugosa que permita la adherencia, y finalmente colocar la cerámica, fijándola con mortero o pasta especial para este tipo de obra.",
    riesgos: [
      ["Corte por manipulación de piezas de porcelanato", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Lesiones relacionadas al uso de cortadoras manuales", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Afecciones musculares derivados a posiciones incomodas", "Ergonómico", "Ligeramente Dañino", "Media", "Riesgo Tolerable"]
    ]
  },
  {
    nombre: "Revestimiento con pintura",
    descripcion: "Consiste en el revestimiento protector y decorativo de las estructuras y fachadas tanto internas como externas. La pintura puede tener ciertas propiedades impermeables, anticorrosivas o adherentes de acuerdo con el tipo y necesidad.",
    riesgos: [
      ["Inhalación de vapores de pintura", "Químico", "Dañino", "Media", "Riesgo Moderado"],
      ["Contacto dérmico con solventes", "Químico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"],
      ["Caídas de personas a distinto nivel", "Mecánico", "Dañino", "Media", "Riesgo Moderado"],
      ["Golpes y corte por herramienta menor (Rodillos, extensiones)", "Mecánico", "Ligeramente Dañino", "Alta", "Riesgo Moderado"]
    ]
  }
],
};


const procesosSelect = document.getElementById('procesos');
const actividadesSelect = document.getElementById('actividades');
const tablaDiv = document.getElementById('tabla-riesgos');

// Cargar procesos
for (const proceso in datos) {
  const option = document.createElement('option');
  option.value = proceso;
  option.textContent = proceso;
  procesosSelect.appendChild(option);
}

procesosSelect.addEventListener('change', () => {
  actividadesSelect.innerHTML = '<option value="">-- Selecciona --</option>';
  tablaDiv.innerHTML = "";

  const actividades = datos[procesosSelect.value] || [];
  actividades.forEach((actividad, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = actividad.nombre;
    actividadesSelect.appendChild(option);
  });
});

actividadesSelect.addEventListener('change', () => {
  const proceso = procesosSelect.value;
  const actividadIndex = actividadesSelect.value;
  const actividad = datos[proceso]?.[actividadIndex];

  if (actividad) {
    let html = `<h3>${actividad.nombre}</h3>`;
    html += `<p class="descripcion">${actividad.descripcion}</p>`;
    html += `<table class="tabla-riesgos">
      <thead>
        <tr>
          <th>Riesgo</th>
          <th>Tipo de Riesgo (Decreto 255)</th>
          <th>Severidad</th>
          <th>Probabilidad</th>
          <th>Evaluación de Riesgo</th>
        </tr>
      </thead>
      <tbody>`;

    actividad.riesgos.forEach(r => {
      html += `<tr>
        <td>${r[0]}</td>
        <td>${r[1]}</td>
        <td>${r[2]}</td>
        <td>${r[3]}</td>
        <td>${r[4]}</td>
      </tr>`;
    });

    html += `</tbody></table>`;
    tablaDiv.innerHTML = html;
  }
});
