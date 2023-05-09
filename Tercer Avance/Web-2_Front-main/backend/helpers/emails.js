import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const {email,nombre,token} = datos;

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "09ba411b322cdb",
          pass: "8a79ed6d781318"
        }
      });

    const info = await transport.sendMail({
        from: '"MyAxolotlVideo - Stream de Peliculas y Series" <cuentas@myaxolotlvideo.com>',
        to: email,
        subject: "MyAxolotlVideo - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en MyAxolotlVideo",
        html: `<p>Hola! ${nombre}</p> 
        <p>Comprueba tu cuenta en MyAxolotlVideo</p>
        <p>Tu cuenta ya esta casi lista,solo debes comprobarla en el siguiente enlace:            </p>

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        
        
        <p>Si tu no creaste esta cuenta,puedes ignorar el mensaje</p>
        
        `
    })
};

export const emailOlvidePassword = async (datos) => {
  const {email,nombre,token} = datos;

  const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "09ba411b322cdb",
        pass: "8a79ed6d781318"
      }
    });

  const info = await transport.sendMail({
      from: '"MyAxolotlVideo - Stream de Peliculas y Series" <cuentas@myaxolotlvideo.com>',
      to: email,
      subject: "MyAxolotlVideo - Restablece tu contraseña",
      text: "Comprueba tu cuenta en MyAxolotlVideo",
      html: `<p>Hola! ${nombre}</p> 
      <p>Has solicitado reestablecer tu contraseña</p>
      <p>Sigue el siguiente enlace para generar una nueva contraseña:     </p>

      <a href="${process.env.FRONTEND_URL}/Olvide-password/${token}">Restablecer Contraseña</a>
      
      
      <p>Si tu no solicitaste este email,puedes ignorar el mensaje</p>
      
      `
  })
}

