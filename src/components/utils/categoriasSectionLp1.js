import icono1 from '../../assets/images/icono-section-1-lp-1.webp';
import icono2 from '../../assets/images/icono-section-1-lp-2.webp';
import icono3 from '../../assets/images/icono-section-1-lp-3.webp';
import icono4 from '../../assets/images/icono-section-1-lp-4.webp';
import icono5 from '../../assets/images/icono-section-1-lp-5.webp';

export const categorias = [
    {
        id: 'invadida',
        titulo: 'Invadida',
        descripcion: 'Una casa invadida es aquella que ha sido ocupada ilegalmente por terceros, sin el consentimiento del propietario.',
        imagen: icono3,
    },
    {
        id: 'hipotecada',
        titulo: 'Hipotecada',
        descripcion: 'Una casa hipotecada es aquella que tiene una deuda pendiente con el banco y/o en alguna institución financiera.',
        imagen: icono2,
    },
    {
        id: 'vandalizada',
        titulo: 'Vandalizada',
        descripcion: 'Una casa vandalizada es aquella que ha sido dañada por actos de vandalismo, como pintura en las paredes, ventanas rotas, etc.',
        imagen: icono1,
    },
    {
        id: 'abandonada',
        titulo: 'Abandonada',
        descripcion: 'Una casa abandonada es aquella que ha sido deshabitada un largo periodo, lo que puede ocasionar deterioro y problemas legales.',
        imagen: icono5,
    },
    {
        id: 'adeudo',
        titulo: 'Con o sin adeudo',
        descripcion:
            'Una casa con o sin adeudo es aquella que puede estar sin deudas o contar con pagos pendientes, lo que influye en su proceso de venta.',
        imagen: icono4,
    },
];
