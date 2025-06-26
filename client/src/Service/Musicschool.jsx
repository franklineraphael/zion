import React from "react";
import { TbPointFilled } from "react-icons/tb";
import BackButton from "../Page/BackButton";

const Musicschool = () => {
  return (
    <div className=" font-serif">
      <BackButton />
      <div className="bg-green-50 p-20 md:p-40 font-bold">
        <p className="text-center text-4xl font-bold font-serif">
          Music School
        </p>
      </div>
      <h1 className="text-2xl font-bold mt-3 text-green-800 p-8">
        ZIONLIGHT MUSIC ACADEMY
      </h1>
      <div className="p-8">
        <p className="gap-3 text-2xl mt-3 font-bold">
          We offer the following intensive music courses
        </p>

        <p className="mt-15 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          PIANOFORTE KEYBOARD
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled />
          VOCAL STUDIES {"ART OF SINGING"}
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          <TbPointFilled /> RUDIMENTS AND THEORY OF MUSIC
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          {" "}
          <TbPointFilled />
          MUSCIANSHIP
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          {" "}
          <TbPointFilled />
          SIGHT READING
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          {" "}
          <TbPointFilled />
          SIGHT SINGING
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          {" "}
          <TbPointFilled />
          SIGHT PLAYING
        </p>
        <p className="mt-3 flex items-center gap-3 text-2xl">
          {" "}
          <TbPointFilled />
          PRACTICAL LESSONS ON MUSICAL INSTRUMENTS
        </p>
        <p className=" md:text-2xl mt-20">
          Zionlight Music Academy; a prestigious part of the institution.
          Children are given the liberty to express their creativity through
          singing, dancing, mastering the piano and other incredible musical
          instruments. The musical world is so broad with a long history of
          development from the times of Wolfgang Amadeus Mozart, Johan Sebastian
          Bach and so many other who contributed nothing little to the world of
          music. Zionlight has an aim to develop children into world-class
          gospel musicians who will change the music industry just like Mozart
          did.
        </p>
        <p className=" md:text-2xl mt-10">
          Music is one of the powerful tools that we employ in Zionlight to
          ignite all areas of child development: intellectual, social and
          emotional, motor, language, and overall literacy. It helps the body
          and the mind work together. Exposing children to music during early
          development years helps them learn the sounds and meanings of words.
          Dancing to music helps children build motor skills while allowing them
          to practice self-expression. For children and adults, music helps
          strengthen memory skills.
        </p>
        <p className=" md:text-2xl mt-10">
          ZionLight also uses Music to foster the children’s social life. Since
          they are playing with other children in the music area. We ensure to
          have enough stuff so the children won’t fight over instruments as they
          play together. Also, sometimes we train them to learn to take turns by
          releasing few instruments per time. It contributes to social and
          emotional growth, especially language. How many kids do you know who
          can rarely talk, but they can sing the entire nursery rhymes?
        </p>
      </div>
    </div>
  );
};

export default Musicschool;
