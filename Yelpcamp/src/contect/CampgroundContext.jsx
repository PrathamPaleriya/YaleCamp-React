import React, {createContext, useState} from "react";
import { BuloySpringSM, CalaguasIslandSM, LatikRiversideSM, MountUlapSM, SevenSistersWaterfallSM } from "../Data/Images";

export const CampgroundContext = createContext();

const initialCampgrounds = [
    {
      title: 'Mount Ulap',
      description: 'Oneof the most famous hikes in Benguet is Mt Ulap in Itogon.',
      coverImage: MountUlapSM,
      key: '1',
    },
    {
      title: 'Calanguas Island',
      description: 'A paradise of islands that can rival the white sand beauty of Boracay.',
      coverImage: CalaguasIslandSM,
      key: '2',
    },
    {
      title: 'Latik Riverside',
      description: 'Philippines is one of the most dazzling countries in all Asia.',
      coverImage: LatikRiversideSM,
      key: '3',
    },
    {
      title: 'Onay Beach',
      description: 'This is one of the best beach camping sites, beautifull and  pristine.',
      coverImage: MountUlapSM,
      key: '4',
    },
    {
      title: 'Seven Sisters Waterfall',
      description: 'The Seven Sisters is the 39th tallest waterfall in Norway.',
      coverImage: SevenSistersWaterfallSM,
      key: '5',
    },
    {
      title: 'Buloy Springs',
      description: 'This is one of the best beach in camping sites, beautiful and pristine.',
      coverImage: BuloySpringSM,
      key: '6',
    },
  ];

export const CampgroundProvider = ({children}) => {
    const [campground, setCampground] = useState(initialCampgrounds);

    const addCampground = (newCampground) => {
        setCampground([...campground, newCampground]);
    };

    return(
        <CampgroundContext.Provider value={{campground, addCampground}}>
            {children}
        </CampgroundContext.Provider>
    );
};