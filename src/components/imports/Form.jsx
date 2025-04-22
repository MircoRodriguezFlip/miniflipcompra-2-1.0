import styles from '../../styles/modules/form.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useForm } from '../../hooks/UseForm';

export const Form = () => {
    const { formData, errors, loading, handleChange, handleSubmit, casas, handleFileChange, showAlert } = useForm(
        {
            nombre: '',
            telefono: '+52',
            email: '',
            casa: '',
            homeFile: null,
        },
        (success, data) => {
            if (success) {
                showAlert('Excelente', 'Datos enviados correctamente.<br>Un agente se pondrá en contacto contigo.', 'success', '#9fc750');
            } else {
                showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#1497ee');
            }
        }
    );

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.camposObligatorios}>
                <p className="light-text">(*) Campos obligatorios</p>
            </div>

            {/* NOMBRE */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="nombre" className="light-text" aria-label="Nombre del usuario">
                    *Nombre Completo:
                </label>
                <input type="text" className={styles.formControl} id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.nombre}
                    </small>
                )}
            </div>

            {/* TELEFONO */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="telefono" className="light-text" aria-label="Telefono del usuario">
                    *Teléfono:
                </label>
                <input
                    type="text"
                    className={styles.formControl}
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength="13"
                />
                {errors.telefono && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.telefono}
                    </small>
                )}
            </div>

            {/* EMAIL */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="email" className="light-text" aria-label="email del usuario">
                    *Correo Electrónico :
                </label>
                <input type="text" className={styles.formControl} id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.email}
                    </small>
                )}
            </div>

            {/* TIPOS DE CASA */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="casa" className="light-text" aria-label="Tipo de casa que quiere vender">
                    *Tipo de casa:
                </label>
                <select className={styles.formControl} id="casa" name="casa" value={formData.casa} onChange={handleChange}>
                    {casas.map((casa) => (
                        <option key={casa} value={casa}>
                            {casa}
                        </option>
                    ))}
                </select>
                {errors.casa && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.casa}
                    </small>
                )}
            </div>

            {/* FOTO CASA */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="homeFile" className="light-text" aria-label="Carga una foto de tu casa">
                    Foto de tu casa:
                </label>
                <input
                    type="file"
                    className={styles.formControl}
                    id="homeFile"
                    name="homeFile"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                />
                {errors.homeFile && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.homeFile}
                    </small>
                )}
            </div>

            {/* Contenedor para el botón y spinner */}
            <div className={styles.contentEnvio}>
                <button type="submit" className="boton-1 bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    ENVIAR
                </button>

                {loading && (
                    <div className={styles.spinnerContainer} aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
            </div>
        </form>
    );
};
