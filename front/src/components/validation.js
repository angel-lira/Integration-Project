export default (input) => {
  const errors = { allConditions: true };
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  /// EMAIL
  if (!input.email) {
    errors.email = "Debe ingresar un email.";
    errors.allConditions = false;
  }
  if (!regexEmail.test(input.email)) {
    errors.email = "Debe ingresar un email válido.";
    errors.allConditions = false;
  } else {
    /// PASSWORD
    if (!input.password) {
      errors.password = "Debe ingresar una contraseña.";
      errors.allConditions = false;
    }

    if (!/(?=.*\d)/.test(input.password)) {
      errors.password = "La contraseña debe contener al menos un numero.";
      errors.allConditions = false;
    }

    if (!/(?=.*[a-z])/.test(input.password)) {
      errors.password =
        "La contraseña debe contener al menos una letra minúscula.";
      errors.allConditions = false;
    }

    if (!/.{8,}/.test(input.password)) {
      errors.password = "La contraseña debe tener al menos 8 caracteres.";
      errors.allConditions = false;
    }
  }

  return errors;
};
