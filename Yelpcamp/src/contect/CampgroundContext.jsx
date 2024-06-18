import React, {createContext, useState} from "react";
import { BSL, BuloySpringSM, CIL, CalaguasIslandSM, LRL, LatikRiversideSM, MUL, MountUlapSM, SevenSistersWaterfallSM, SSWL} from "../Data/Images";

export const CampgroundContext = createContext();

const initialCampgrounds = [
    {
      title: 'Mount Ulap',
      description: 'Oneof the most famous hikes in Benguet is Mt Ulap in Itogon.',
      coverImage: MountUlapSM,
      image: MUL,
      rate: "104.99",
      key: '1',
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores dolore eius repellat libero? Rerum tenetur numquam doloribus ipsum reiciendis saepe consequuntur officia perferendis ratione iusto at neque, incidunt nobis temporibus animi, molestias nihil?",
      location: { lat: 16.3498, lng: 120.6919 },
    },
    {
      title: 'Calanguas Island',
      description: 'A paradise of islands that can rival the white sand beauty of Boracay.',
      coverImage: CalaguasIslandSM,
      image: CIL,
      rate: "104.99",
      key: '2',
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores dolore eius repellat libero? Rerum tenetur numquam doloribus ipsum reiciendis saepe consequuntur officia perferendis ratione iusto at neque, incidunt nobis temporibus animi, molestias nihil?",
      location: { lat: 14.2971, lng: 122.9288 },
    },
    {
      title: 'Latik Riverside',
      description: 'Philippines is one of the most dazzling countries in all Asia.',
      coverImage: LatikRiversideSM,
      rate: "104.99",
      image: LRL,
      key: '3',
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores dolore eius repellat libero? Rerum tenetur numquam doloribus ipsum reiciendis saepe consequuntur officia perferendis ratione iusto at neque, incidunt nobis temporibus animi, molestias nihil?",
      location: { lat: 12.0797, lng: 121.5058 },
    },
    {
      title: 'Onay Beach',
      description: 'This is one of the best beach camping sites, beautifull and  pristine.',
      coverImage: MountUlapSM,
      rate: "104.99",
      image: MUL,
      key: '4',
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores dolore eius repellat libero? Rerum tenetur numquam doloribus ipsum reiciendis saepe consequuntur officia perferendis ratione iusto at neque, incidunt nobis temporibus animi, molestias nihil?",
      location: { lat: 10.5152, lng: 119.9655 },
    },
    {
      title: 'Seven Sisters Waterfall',
      description: 'The Seven Sisters is the 39th tallest waterfall in Norway.',
      coverImage: SevenSistersWaterfallSM,
      rate: "104.99",
      image: SSWL,
      key: '5',
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores dolore eius repellat libero? Rerum tenetur numquam doloribus ipsum reiciendis saepe consequuntur officia perferendis ratione iusto at neque, incidunt nobis temporibus animi, molestias nihil?",
      location: { lat: 4.7047, lng: 9.4194 },
    },
    {
      title: 'Buloy Springs',
      description: 'This is one of the best beach in camping sites, beautiful and pristine.',
      coverImage: BuloySpringSM,
      rate: "104.99",
      image: BSL,
      key: '6',
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores dolore eius repellat libero? Rerum tenetur numquam doloribus ipsum reiciendis saepe consequuntur officia perferendis ratione iusto at neque, incidunt nobis temporibus animi, molestias nihil?",
      location: { lat: 10.2047, lng: 119.3567 },
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