import './about.scss';
import image from './../../../assets/imgs/Bodelé-1.webp'

export default function About({refAbout}) {
  return (
    <div id="Quem-Somos" ref={refAbout}>
        <h1 id="About-Title">Quem Somos</h1>
        <div className="About-Content">
            <img src={image} alt="Bodelé" className="About-Image"/>
            <p className="About-Text">Somos uma produtora digital focada em realizar sonhos. Desde a elaboração do briefing até a estratégia de marketing, a D’Vargas pode lhe atender! Nossa equipe composta por 27 profissionais dentre roteiristas, desenvolvedores das mais diversas tecnologias, gestores de tráfego e videomakers acompanhará sua ideia desde a gênese ao sucesso com louvor!  </p>
        </div>
    </div>
  )
}
