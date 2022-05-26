import "../styles/pages/About.scss";

function About() {
  return (
    <div className="container__about">
      <h1>Anderson Uribe</h1>
      <h2>Ing. Eléctrico</h2>
      <h2> Futuro Full Stack Developer</h2>
      <img
        src="https://lh3.googleusercontent.com/a-/AOh14GioqIxHD_MUWs_1dZdG8JjWpuPKsAulK2bWIoEdkw=s288-p-no"
        alt="Perfil of Image "
      />
      <h3>Cosas que he aprendido en Make It Real</h3>
      <p> Manejo de rutas, componentes y varias cosas entorno a React </p>
      <p> Manejo de estilos con CSS y SCSS </p>
      <p>
        Varias Librerias aplicables a React, como redux, eslint, pretier entre
        otras
      </p>
      <h4>andeersonr@hotmail.com</h4>
      <a href="https://github.com/45061">Link a mi Github</a>
    </div>
  );
}

export default About;
