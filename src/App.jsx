import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 1,
    description: "Di si por favor",
    img: "https://media.tenor.com/-2wfkYNfRtwAAAAj/heart.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo NOJODA.",
    img: "https://i.ibb.co/LdNrztrf/Niomara.png"
  }
    ,
  {
    id: 2,
    description: "Enserio??????",
    img: "https://media.tenor.com/Wa8ncYRb5BQAAAAi/arreglemos-esto-con-dialogo.gif"
  },
  {
    id: 3,
    description: "Solo presiona el boton de SIIII COÑOO.",
    img: "https://media.tenor.com/FWNI_0Kvz-kAAAAi/peep-knife-peep.gif"
  },
  {
    id: 4,
    description: "Confía en mí, será divertido.",
    img: " https://media1.tenor.com/m/MyeRzkzyZtcAAAAC/gato.gif"
  },
  {
    id: 5,
    description: "Me tas jodiendo? ",
    img: "https://media.tenor.com/8InTyX-fzM8AAAAi/safelyendangered-safely-endangered.gif"
  },
  {
    id: 6,
    description: "Creo que te equivocaste de BOTON",
    img: "https://media1.tenor.com/m/xxGwVgDk4OMAAAAC/ojo-perro.gif"
  },
  {
    id: 7,
    description: "No te resistas, yo se que si quieres.",
    img: "https://media.tenor.com/Sl0eZzsbjQUAAAAi/cat-cute-cat.gif"
  },
  {
    id: 8,
    description: "EFRAINSITO NO ESTARIA FELIZ.",
    img: "https://media1.tenor.com/m/jLSQskeoWMMAAAAC/wtf-confused.gif"
  },
  {
    id: 9,
    description: "Yo se que si quieres pajua.",
    img: "https://media.tenor.com/OoZ8EJH3bNkAAAAi/licking-mirror-the-pet-collective.gif"
  },
  {
    id: 10,
    description: "No te arrepentirás.",
    img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center overflow-y-auto p-8 ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">¿Lesly quieres ser mi Novia?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://media.tenor.com/qT2BYFdeY0oAAAAi/cute-cat.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10 p-8" >
            <h1 className="text-5xl text-white font-bold pt-16">Sabia que dirias que si ❤️. <br />
              Pronto vendra un Efrainsito!
            </h1>
            <div className="flex justify-center items-center space-x-5 flex-wrap">
              <img src="https://media1.tenor.com/m/0Sh7u1lRsyEAAAAd/wedding-crasher-hro.gif" alt="" className="mx-auto w-80 h-80" />
              <img src="https://media1.tenor.com/m/kqNHgt2ulKIAAAAd/maduro.gif" alt="" className="mx-auto w-80 h-80" />
              <img src="https://media.tenor.com/5V7zXdWo4UEAAAAi/happy-el-diablo.gif" alt="" className="mx-auto w-80" />
              <img src="https://media1.tenor.com/m/EmZ0N3llkAkAAAAC/cat-cats.gif" alt="" className="mx-auto w-80" />
              <img src="https://media.tenor.com/3CFDk07jFSsAAAAi/cattime-dance.gif" alt="" className="mx-auto w-80 h-80" />
              <img src="https://media1.tenor.com/m/PuwBIZUZ8QAAAAAd/gorilla.gif" alt="" className="mx-auto w-80 h-80" />
            </div>

          </div>
        )
      }
    </main>
  )
}

export default App
