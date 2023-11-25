import Image from "next/image";
import "./rodape.modules.css";

export default function Rodape() {
  return (
    <>
    <footer className="rodape">
        <div className="integrantes-main">
          <h1 className="subtitulo">Integrantes</h1>
          <div>
            <figure>
                <Image
                    src="/nicolas.jpg"
                    alt="Nicolas"
                    width={200}
                    height={200}
                />
                <figcaption>
                    rm-551060 / 1TDSPG / Nicolas Rodrigues Lucas/ Desenvolvedor de
                    Frontend
                </figcaption>
                </figure>
                <figure>
                <Image src="/pedro.jpg" alt="Pedro" width={200} height={200} />
                <figcaption>
                    rm-551409 / 1TDSPG/ Pedro Antunes Ferreira / Desenvolvedor de
                    Backend
                </figcaption>
                </figure>
                <figure>
                <Image src="/luis.jpg" alt="Luis" width={200} height={200} />
                <figcaption>
                    rm-99433 / 1TDSPG / Luis Augusto de Petta Didonato / Scrum
                    Master{" "}
                </figcaption>
                </figure>
                <figure>
                <Image src="/denner.jpg" alt="Denner" width={200} height={200} />
                <figcaption>
                    rm-551938 / 1TDSR / Denner de Oliveira Duarte / Analista de
                    Dados
                </figcaption>
                </figure>
                <figure>
                <Image
                    src="/diciotech.jpg"
                    alt="Gabriell"
                    width={200}
                    height={200}
                />
                <figcaption>
                    rm-98361 / 1TDSPG / Gabriel Dassi / Desenvolvedor FullStack
                </figcaption>
                </figure>
          </div>
        </div>
      </footer>
    </>
  )
}