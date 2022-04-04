import { defineAnimation } from "react-native-reanimated"

export const imams = [
    {
      id: 1,
      name: "Ja'afar Mahmud Adam",
      image: images.jaafar,
      biography: "Ja'afar Mahmud Adam was a Nigerian Salafist Islamic scholar and member of Nigeria's Jama’at Izalat al Bid’a Wa Iqamat as Sunna, a religio-political organisation based primarily in Kano with Maiduguri as a place for his Ramadan Tafsir.",
      categories: [ {
          name: "Ramadan Tafseer",
          year: [
            {
              name: "Ramadan Tafseer 2000",
              tracks: [
                {
                  name: "Day 1",
                },
                {
                  name: "Day 2",
                },
                {
                  name: "Day 2",
                }
              ]
            },
            {
              name: " Ramadan Tafseer 2001",
              tracks: [
                {
                  name: "Day 1",
                },
                {
                  name: "Day 2",
                },
                {
                  name: "Day 3",
                }
              ]
            }
          ] 
        },
        {
          name: "Hisnul Muslim",
          tracks: [
            {
              name: "Day 1",
              
            },
            {
              name: "Day 2", 
            },
            {
              name: "Day 3", 
            }
          ] 
        },
        {
          name: "Sahihul Bukhari",
          tracks: [
            {
              name: "Day 1",
              
            },
            {
              name: "Day 2", 
            },
            {
              name: "Day 3", 
            }
          ] 
        },
      ]
      },
  
    {
      id: 2,
      name: "Muhammad Albani Zaria",
      image: images.albani
    },
    {
      id: 3,
      name: "Umar Sani Rijiyar-Lemo",
      image: images.rijiyarlemo
    },
    {
      id: 4,
      name: "Isa Ali Ibrahim Pantami",
      image: images.pantami
    },
    {
      id: 5,
      name: "Mansur Ibrahim Sokoto",
      image: images.mansursokoto
    },
    {
      id: 6,
      name: "Abdallah Usman Gadon-Kaya",
      image: images.gadonkaya
    },
    {
      id: 7,
      name: "Mansur Isa Yelwa",
      image: images.mansuryelwa
    },
    {
      id: 9,
      name: "Tijjani Yusuf Guruntum",
      image: images.guruntum
    },
    {
      id: 8,
      name: "Bashir Aliyu Faruk",
      image: images.bashiraliyu
    }
    
  ]
  
  const dummyData = {imams}

  export default dummyData;