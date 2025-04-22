import { useState } from 'react';
import Swal from 'sweetalert2';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const casas = ['Tipo de Casa', 'Hipotecada', 'Con o sin adeudo', 'Vandalizada', 'Abandonada', 'Invadida'];

    const showAlert = (title, message, icon, color) => {
        Swal.fire({
            title,
            html: `<div class="light-text"><p>${message}</p></div>`,
            icon,
            confirmButtonColor: color,
            scrollbarPadding: false,
            customClass: {
                title: 'bold-text',
            },
            willOpen: () => {
                document.body.style.overflow = 'auto';
            },
            willClose: () => {
                document.body.style.overflow = 'auto';
            },
        });
    };

    const validateFile = (file) => {
        const validFormats = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxSize = 2 * 1024 * 1024;

        if (!validFormats.includes(file.type)) {
            return 'Formato de archivo no permitido. Usa PDF o imágenes (JPEG/PNG).';
        }

        if (file.size > maxSize) {
            return 'El archivo es demasiado grande. Máximo 2 MB.';
        }

        return '';
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const error = validateFile(file);

            if (error) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    homeFile: error,
                }));
                setFormData((prevState) => ({ ...prevState, homeFile: null }));
                event.target.value = '';
                return;
            }

            setErrors((prevErrors) => ({ ...prevErrors, homeFile: '' }));
            setFormData((prevState) => ({ ...prevState, homeFile: file }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            const cleanValue = value.replace(/\D/g, '');
            const formattedValue = cleanValue.startsWith('52') ? '+' + cleanValue : '+52' + cleanValue;
            setFormData((prev) => ({ ...prev, telefono: formattedValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        validateNombre(newErrors);

        validateTelefono(newErrors);

        validateEmail(newErrors);

        validateCasa(newErrors);

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateNombre = (newErrors) => {
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Completa este campo.';
        }
    };

    const validateTelefono = (newErrors) => {
        if (!formData.telefono.match(/^\+52\d{10}$/)) {
            newErrors.telefono = 'Ingresa un número de teléfono válido.';
        }
    };

    const validateEmail = (newErrors) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido.';
        }
    };

    const validateCasa = (newErrors) => {
        if (!formData.casa.trim() || formData.casa === 'Tipo de Casa') {
            newErrors.casa = 'Selecciona un tipo de casa válido.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('nombre', formData.nombre);
            formDataToSend.append('telefono', formData.telefono);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('casa', formData.casa);

            if (formData.homeFile) {
                formDataToSend.append('homeFile', formData.homeFile);
            }

            // Agregar utm_campaign al FormData (si está presente en la URL)
            const queryParams = new URLSearchParams(window.location.search);
            const utmCampaign = queryParams.get('utm_campaign');
            if (utmCampaign) {
                formDataToSend.append('utm_campaign', utmCampaign);
            }

            const response = await fetch('/miniflip/backend/submit.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                submitCallback(true, data);
                resetForm();
            } else {
                submitCallback(false, data);
            }
        } catch (error) {
            submitCallback(false, error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({ ...initialState, homeFile: null });

        const fileInput = document.getElementById('homeFile');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    return { formData, errors, loading, handleChange, handleSubmit, casas, handleFileChange, showAlert };
};
