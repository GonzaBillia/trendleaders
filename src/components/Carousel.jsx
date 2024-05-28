import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
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
        setBanners(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    //useEffect
    useEffect(() => {
        getBanners();
    }, []);

    return (
        <Carousel
            className="rounded-b-xl mb-10"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
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
                    className="w-full rounded-b-xl object-cover banner-h"
                />
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
