export default (input) => {
  const errors = {};
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  /// EMAIL
  if (!input.email) {
    errors.e1 = "Debe ingresar un email.";
  }
  if (!regexEmail.test(input.email)) {
    errors.e2 = "Debe ingresar un email válido.";
  }

  /// PASSWORD
  if (!input.password) {
    errors.p0 = "Debe ingresar una contraseña.";
  }

  if (!/(?=.*\d)/.test(input.password)) {
    errors.p1 = "La contraseña debe contener al menos un numero.";
  }

  if (!/(?=.*[a-z])/.test(input.password)) {
    errors.p2 = "La contraseña debe contener al menos una letra minúscula.";
  }

  if (!/(?=.*[A-Z])/.test(input.password)) {
    errors.p3 = "La contraseña debe contener al menos una letra mayúscula.";
  }

  if (!/(?=.*[a-zA-Z])/.test(input.password)) {
    errors.p4 = "La contraseña debe contener al menos una letra.";
  }

  if (!/.{8,}/.test(input.password)) {
    errors.p5 = "La contraseña debe tener al menos 8 caracteres.";
  }
  return errors;
};
