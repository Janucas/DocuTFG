// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Asistente de Equipaje Inteligente',
			description: 'Documentación oficial del TFG - Generador inteligente de equipaje según clima y destino.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
			],
			sidebar: [
				{
					label: 'Documentación',
					items: [
						{ label: 'Inicio', slug: 'index' },
						{ label: 'Introducción', slug: 'introduccion' },
						{ label: 'Arquitectura', slug: 'arquitectura' },
						{ label: 'Base de Datos', slug: 'estructura-bd' },
						{ label: 'Casos de Uso', slug: 'casos-uso' },
						{ label: 'Casos de Prueba', slug: 'pruebas' },
						{
							label: 'Diagramas UML',
							items: [
								{ label: 'Clases', slug: 'diagramas/clases' },
								{ label: 'Casos de Uso', slug: 'diagramas/casos-uso' },
								{ label: 'Entidad-Relacion', slug: 'diagramas/er' },
								{ label: 'Componentes', slug: 'diagramas/componentes' },
								{ label: 'Actividades', slug: 'diagramas/actividades' }, 
								{ label: 'Secuencia', slug: 'diagramas/secuencia' },
								{ label: 'Despliegue', slug: 'diagramas/despliegue' }, 
								{ label: 'Casos de Prueba', slug: 'diagramas/casos-prueba' }, 
							]
						},
						{ label: 'Manual de Usuario', slug: 'manual-usuario' },
						{ label: 'Manual de Instalación', slug: 'manual-instalacion' },
						{ label: 'Conclusiones', slug: 'conclusiones' },
						{ label: 'Agradecimientos', slug: 'agradecimientos' }
					],
				}
			]
		})
	]
});
