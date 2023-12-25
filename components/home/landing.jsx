
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";
import { BookmarkSquareIcon, LightBulbIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Landing() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full ">
        <Image
          src={'/doodles.png'}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div id="landing" className="xl:mt-20 flex justify-center items-center  flex-col xl:flex-row z-20 mx-10 md:mx-32 xl:mx-48 ">
        <div className="bg-mainyellow rounded-full overflow-hidden mt-10 mb-5 xl:mx-10  xl:w-2/5">
          <Image
            src={'/family.png'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />

        </div>
        <div className="xl:w-3/5">
          <p className=" text-center font-title mb-5 text-2xl md:text-5xl xl:text-left">Дорогая семья!</p>
          <p className="text-center md:text-2xl xl:text-left">Мы все знаем, что наш любимый Папа обожает писать, и у него есть множество захватывающих историй. Одним из его давних желаний было оставить свой след в будущем, написав собственные мемуары. А что, если мы начнем воплощать это желание прямо сейчас?</p>
        </div>
      </div>
      <hr className="h-px my-10 bg-mainyellow border-0 z-30 w-4/6 xl:invisible" />
      <div id="info" className=" flex justify-center items-center  flex-col xl:flex-row z-20 mx-10 md:mx-32 xl:mx-48 ">
        <div className="xl:w-2/6">
          <p className=" text-center font-title mb-5 text-2xl md:text-5xl xl:text-left">Что это такое?</p>
          <p className="text-center md:text-xl xl:text-left w-full">этот сайт – ваш персональный литературный уголок, где воспоминания становятся живыми историями</p>
        </div>
        <div className="bg-mainyellow rounded-xl w-[200px] h-[300px] overflow-hidden mt-10 mb-5 xl:mx-10  xl:w-1/6" />
        <div className="xl:w-3/6 ">
          <p className="text-center font-title mb-5 text-2xl md:text-5xl xl:text-left">Как это работает?</p>

          <div className="flex items-center w-full my-2">
            <LightBulbIcon className="text-mainyellow w-1/12 h-8 mr-2" />
            <p className="md:text-xl text-justify md:text-left w-11/12">просто выберите одну из готовых тем и начните творить</p>
          </div>

          <div className="flex items-center w-full my-2">
            <BookmarkSquareIcon className="text-mainyellow w-1/12 h-8 mr-2" />
            <p className="md:text-xl text-justify md:text-left w-11/12">вам не обязательно следовать линейной последовательности – начинайте с той главы, которая вас вдохновляет</p>
          </div>

          <div className="flex items-center w-full my-2">
            <SparklesIcon className="text-mainyellow w-1/12 h-8 mr-2" />
            <p className="md:text-xl text-justify md:text-left w-11/12">с этого момента ваши воспоминания преобразуются в захватывающие главы вашей собственной книги</p>
          </div>
        </div>
      </div>
      <hr className="h-px my-10 bg-mainyellow border-0 z-30 w-4/6 xl:invisible" />
      <div className="flex justify-center items-center flex-col mx-10 md:mx-32 xl:mx-48 mb-20">
        <p className="text-center md:text-2xl">Для вас это место, где каждый момент вашей жизни превращается в несказанно ценные слова. Для ваших гостей – возможность заглянуть в ваш мир и оценить каждую главу, созданную вами. Делитесь своими историями с миром, и пусть ваши воспоминания станут вдохновением для других.</p>
        <button className="my-5 rounded-2xl text-2xl py-2 px-3 border-white border-2 hover:border-white/0 hover:bg-mainyellow hover:text-black transition-all delay-100">Начать!</button>
      </div>
    </>
  )
}