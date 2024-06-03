import React, { useState, useEffect } from "react";
import { Carousel, Spinner } from "@material-tailwind/react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const CarouselComponent = () => {

    //configurar hooks
    const [banners, setBanners] = useState([]);

    //Referencia a DB Firestore
    const bannersCollection = collection(db, "banners");

    //Funcion para Mostrar Todos los documentos con query
    const getBanners = async () => {
        const q = query(bannersCollection, where("active", "==", true));
        const data = await getDocs(q);
        const gotBanners = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setBanners(gotBanners.sort((a, b) => a.position - b.position));
    };

    //useEffect
    useEffect(() => {
        getBanners();
    }, []);

    return (
        <>
            {banners.length === 0 ?
            
            <div className="w-full h-[750px] flex justify-center items-center">
                <Spinner
                    className="h-16 w-16"
                    color="orange"
                />
            </div>

            :

            <Carousel
            className="rounded-b-xl"
            loop={true}
            autoplay={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-orange-700" : "w-4 bg-orange-700/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {banners.map((banner) => (
                <img
                    key={banner.id}
                    src={banner.img}
                    alt={banner.alt}
                    className="w-full rounded-b-xl object-cover h-[750px]"
                />
            ))}
        </Carousel>
        }
        </>
        
    );
};

export default CarouselComponent;
