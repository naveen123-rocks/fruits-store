import React from "react";
import Fruits1 from '../../assets/fruits/fruits1.webp';
import Fruits2 from '../../assets/fruits/fruits2.png';
import Fruits3 from '../../assets/fruits/fruits3.png';

const Data = [
  {
    id:1,
    image:Fruits1,
    title: "Fresh Fruits",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, non.",
    aosDelay:'300'

  },
  {
    id:2,
    image:Fruits2,
    title: "Fruit Salad",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, non.",
    aosDelay:'500'

  },
  {
    id:3,
    image:Fruits3,
    title: "Apple juice",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, non.",
    aosDelay:'600'

  }
]

const Services = () => {
  return <div className=" container my-16 space-y-4">
    {/* header section */}
    <div className=" text-center max-w-lg mx-auto space-y-2">
      <h1 className=" text-3xl font-bold text-dark"> Fresh and <span className=" text-primary">Tasty Fruits</span></h1>
      <p data-aos="fade-up" data-aos-delay="300" className=" text-sm opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi voluptatum, rem ad quas sapiente.
      </p>
    </div>
    {/* card section  */}
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-8">
      {Data.map(({id, image, title, subtitle,aosDelay})=>(
         <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className=" p-4 text-center space-y-4">
          <img  src={image} alt="" className=" max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2" />
          <div className=" space-y-2">
            <h1 className=" text-2xl font-bold text-primary ">{title}</h1>
            <p className=" text-dark">{subtitle}</p>
          </div>
         </div>
      ))}
    </div>
  </div>;
};

export default Services;
