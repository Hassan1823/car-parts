"use client";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

// local imports
import {
  toyotaCars,
  suzukiCars,
  subaruCars,
  nissanCars,
  mitsubishiCars,
  mazdaCars,
  lexusCars,
  infinitiCars,
  hondaCars,
} from "@/utils/cars";

import {
  hondaCarChassisTags,
  infinitiCarChassisTags,
  lexusCarChassisTags,
  mazdaCarChassisTags,
  mitsubishiCarChassisTags,
  nissanCarChassisTags,
  subaruCarChassisTags,
  suzukiCarChassisTags,
  toyotaCarChassisTags,
} from "@/utils/carChassisTags";
import LoadingSpinner from "@/components/LoadingSpinner";

const ExploreSlug = ({ params }) => {
  const router = useRouter();
  const pathname = usePathname();
  const root = params.exploreSlug.split("%20");
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const mainCategory = root[0];
  const restOfElements = root.slice(1);
  const subCategory = restOfElements.join(" ");
  // console.log("main category is : ", mainCateg);
  // console.log("sub category is : ", subCateg);

  const categ = " " + mainCategory + " " + subCategory + " ";
  const tagsCateg = mainCategory + " " + subCategory;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setImageLoading(false);
    }, 4000);
  }, []);

  // const exploreSlug = decodeURIComponent(params.exploreSlug).replace(
  //   /%20/g,
  //   " "
  // );

  const filteredCarArray = useMemo(() => {
    // Select the appropriate car array based on mainCategory
    let carArray;
    switch (mainCategory) {
      case "Toyota":
        carArray = toyotaCars;
        break;
      case "Suzuki":
        carArray = suzukiCars;
        break;
      case "Lexus":
        carArray = lexusCars;
        break;
      case "Mitsubishi":
        carArray = mitsubishiCars;
        break;
      case "Honda":
        carArray = hondaCars;
        break;
      case "Mazda":
        carArray = mazdaCars;
        break;
      case "Nissan":
        carArray = nissanCars;
        break;
      case "Subaru":
        carArray = subaruCars;
        break;
      case "Infiniti":
        carArray = infinitiCars;
        break;
      // Add cases for other categories as needed
      default:
        carArray = [];
    }

    // Filter the selected car array based on categ
    return carArray.filter((data) => data.parentTitle === categ);
  }, [mainCategory, categ]);

  const filteredCarTags = useMemo(() => {
    let carTags;
    switch (mainCategory) {
      case "Toyota":
        carTags = toyotaCarChassisTags;
        break;
      case "Suzuki":
        carTags = suzukiCarChassisTags;
        break;
      case "Lexus":
        carTags = lexusCarChassisTags;
        break;
      case "Mitsubishi":
        carTags = mitsubishiCarChassisTags;
        break;
      case "Honda":
        carTags = hondaCarChassisTags;
        break;
      case "Mazda":
        carTags = mazdaCarChassisTags;
        break;
      case "Nissan":
        carTags = nissanCarChassisTags;
        break;
      case "Subaru":
        carTags = subaruCarChassisTags;
        break;
      case "Infiniti":
        carTags = infinitiCarChassisTags;
        break;
      // Add cases for other categories as needed
      default:
        console.log("No tags Found or match");
        carTags = [];
    }
    const filteredArray = carTags
      .filter((data) => data.title === tagsCateg)
      .map((data) => data.markets);
    console.log("Main Tagsssss are :", carTags);
    return filteredArray;
  }, [mainCategory, tagsCateg]);

  useEffect(() => {
    filteredCarTags;
    console.table("Tags are :", filteredCarTags);
  }, [filteredCarTags]);

  return (
    <div className="w-full min-h-screen h-auto">
      Main Category : {mainCategory} & Sub Category : {categ}
    </div>
  );
};

export default ExploreSlug;
