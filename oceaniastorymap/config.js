var config = {
    style: 'mapbox://styles/brittanyyee/ck1goz6tl5d021cki0jl15r65',
    accessToken: 'pk.eyJ1IjoiYnJpdHRhbnl5ZWUiLCJhIjoiY2sxczhzMWhrMDJwazNtcWd4b204Zno2cSJ9.vQDXWGzRH8W2ys-VlQi9bg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Australian Adventure',
    subtitle: '16 Day Voyage from Bali to Australia',
    byline: 'The Regatta',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'bali',
            title: 'Day 1: Bali(Benoa), Indonesia',
            image: 'https://www.oceaniacruises.com/Images/Ports/Medium/8372/BAJ.jpg',
            description: 'Experience this exquisite island and its gentle people as you explore the lush countryside of terraced rice fields and mountains dotted with temples. Visit a royal palace, watch an entrancing dance performance, or see carvers at work. Enjoy villages filled with beautiful arts and crafts and the daily festivals with villagers parading in their finery to local temples.',
            location: {
                center: [115.210605, -8.745098],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                
               {
                   layer: 'start port',
                   opacity: 1
               }
            ],
            onChapterExit: [
                {
                    layer: 'start port',
                    opacity: 0
                }
            ]
        },
        {
            id: 'exmouth',
            title: 'Day 4: Exmouth, Australia',
            image: 'https://www.oceaniacruises.com/Images/Ports/Medium/61285/EXM.jpg',
            description: 'This scenic coastal town on the eastern edge of Western Australia is just a stone’s throw from Ningaloo, the largest fringing reef in Australia. Snorkel among 250 species of coral and 500 species of colorful fish in Ningaloo Marine Park or soak up the sunshine and turquoise waters from the white sand beaches. Just west of Exmouth, Cape Range National Park features a spectacular backdrop of rugged gorges and limestone canyons carved by ancient rivers. It also offers many hiking trails and ample opportunities to spot emus, wallabies and red kangaroos.',
            location: {
                center: [114.129366, -21.933330],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'ports',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        },
        {
        id: 'geraldton',
            title: 'Day 6: Geraldton, Australia',
            image: 'https://www.oceaniacruises.com/Images/Ports/Medium/81604380037/GET.jpg',
            description: 'The hub of Australia’s Coral Coast, Geraldton features stunning beaches, a burgeoning culinary scene and a rich history. Step back in time with the city’s array of historical monuments and museums, including Point Moore Lighthouse, Birdwood Military Museum and St. Francis Xavier Cathedral. Visit Ellendale Pool, a natural pool surrounded by giant gum trees and a stunning rocky cliff. Perhaps spend a leisurely afternoon on one of the many sun-drenched beaches and watch the abundant kitesurfers in action – Geraldton is one of the top three kitesurfing locations in the world. Immerse yourself in the local cuisine at an eclectic café or serene seaside restaurant as you sample lobster fresh from the sea and typical regional dishes.',
            location: {
                center: [114.614845, -28.769272],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
           onChapterEnter: [
                 {
                    layer: 'anchor port',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        },
        {
    id: 'perth',
            title: 'Day 7: Perth (Freemantle Port), Australia',
            image: 'https://www.oceaniacruises.com/Images/Ports/Medium/61286/FRE.jpg',
            description: 'A stunning setting along Swan River and the Indian Ocean welcomes you into the laid-back city of Perth. At Kings Park, one of the few urban parks that dwarf Central Park, take in breathtaking views of downtown Perth and plan your day. Explore the city’s range of eclectic neighborhoods, immerse yourself in indigenous art at the Art Gallery of Western Australia, or discover Australia’s native wildlife at the Perth Zoo. Travel to nearby Swan Valley, Western Australia’s oldest wine region, to visit one of the many historic vineyards for a tasting of excellent local wines. Meanwhile, discover Fremantle’s distinct character through its 19th century port streetscape. Dive into its seafaring history at the Western Australia Maritime Museum and Shipwreck Galleries, visit Fremantle Prison or explore the Manjaree Heritage Trail for a glimpse of life before European settlement.',
            location: {
                center: [115.747710, -32.052836],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                 {
                    layer: 'ports',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        },
        {
    id: 'albany',
            title: 'Day 8: Albany, Australia',
            image: "https://www.oceaniacruises.com/Images/Ports/Medium/81604476841/ALH.jpg",
            description: 'Western Australia’s oldest colonial settlement, Albany holds not only great historical significance but also immense natural beauty. Founded in 1826 as a British military outpost, the town evolved into a provisioning port for ships, a departure point for Australian troops bound for World War I, and eventually a base for the whaling industry. History buffs will be intrigued by sites such as the Anglican church, town hall, restored gaol and a one-of-a-kind whaling station museum, while the dramatic scenery of the rugged coastline will astound anyone fortunate enough to sail into Princess Royal Harbour. Known as Ataturk Entrance, the channel accessing the harbor from King George Sound is quite narrow, with forested peaks rising on either side from the rocky shores and sweeping white beaches. The view from your ship’s deck provides the perfect introduction to the natural wonders embracing this historic town.',
            location: {
                center: [117.886152, -35.031425],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                 {
                    layer: 'ports',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        },
        {
    id: 'adelaide',
            title: 'Day 11 - 12: Adelaide, Australia',
            image: "https://www.oceaniacruises.com/Images/Ports/Medium/81604380036/ADL.jpg",
            description: 'South Australia’s coastal capital, Adelaide combines the charm of a picturesque country town with lively cosmopolitan offerings. Discover the region’s history at the South Australian Art Museum or browse local delicacies such as Adelaide Hills cheeses at the impressive Central Market. Visit Adelaide Oval, celebrated as the world’s prettiest cricket ground, for a behind-the-scenes look at the iconic stadium’s history. For a taste of the local wine culture, venture into the countryside to explore Barossa Valley, Clare Valley or McLaren Vale, three excellent nearby wine regions.',
            location: {
                center: [138.615234, -34.894724],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'ports',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        },
        {
    id: 'melbourne',
            title: 'Day 13: Melbourne, Australia',
            image: "https://www.oceaniacruises.com/Images/Ports/Medium/8607/MEB.jpg",
            description: 'Head into the scenic Dandenong Mountains and ride the Puffing Billy steam train through the forest. Meet the koalas, wallabies and more at a wildlife park or explore local wineries. Take a walk and discover the citys marvelous architecture, chic galleries and boutiques.',
            location: {
                center: [144.916374, -37.848449],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
           onChapterEnter: [
                 {
                    layer: 'ports',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        },
    {
    id: 'burnie',
            title: 'Day 14: Burnie (Tasmania), Australia',
            image: "https://www.oceaniacruises.com/Images/Ports/Medium/61283/BWT.jpg",
            description: 'Nestled in the northwest corner of Tasmania, this energetic and creative seaside town offers a unique perspective on the world of industry. Once dependent on paper manufacturing, the inventive community has transformed its industry into a compelling art culture. Visit Makers’ Workshop, part museum and part arts center, for an introduction to the inspired spirit of Burnie, along with a tour of the process of papermaking and a glimpse of local artisans at work on their handicrafts. Discover Burnie’s natural gems on the many trails at Fern Glade Reserve or the picturesque Emu Valley Rhododendron Garden.',
            location: {
                center: [145.91162, -41.058940],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
           onChapterEnter: [
                 {
                    layer: 'ports',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        },
            {
    id: 'phillip',
            title: 'Day 15: Phillip Island, Australia',
            image: "https://www.oceaniacruises.com/Images/Ports/Medium/81604476847/PHP.jpg",
            description: 'Phillip Island boasts wide sandy beaches, spectacular coastal scenery, excellent surfing and a world-famous Grand Prix circuit. However, its biggest attraction measures about one foot tall and weighs just two or three pounds. The island is home to thousands of little penguins, endearing not only as the smallest penguins on the planet but also for their unique blue coloring. Each day as the sun sets, the tiny birds return from a long day of fishing at sea and waddle up the beaches to the safety of their burrows. Affectionately known as the Penguin Parade, this magical scene has enchanted visitors since 1920. An array of wildlife beyond the penguins also can be observed here, including whales, koalas and Australia’s largest fur seal colony. Those not fond of furry friends might visit the National Vietnam Veterans Museum, take a stroll on the seaside boardwalk, or check out a local brewery or winery.',
            location: {
                center: [145.238177, -38.448267],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
           onChapterEnter: [
                 {
                    layer: 'anchor port',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'anchor port',
                   opacity: 0
                }
            ]
        },
        {
     id: 'sydney',
            title: 'Day 17: Sydney, Australia',
            image: "https://www.oceaniacruises.com/Images/Ports/Medium/8785/SYD.jpg",
            description: 'Visit the famous Opera House, stroll along the harbor, or cruise around it. Climb the Harbor Bridge, take a walk through the Rocks where Sydney began, or enjoy celebrated Bondi Beach. Head into the beautiful Blue Mountains for a taste of the country or visit a wildlife park and enjoy Australia’s fabulously unique creatures.',
        
            location: {
                center: [151.235148, -33.851759],
                zoom: 4.5,
                pitch: 60,
                bearing: 0
            },
           onChapterEnter: [
                 {
                    layer: 'ports',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'ports',
                   opacity: 0
                }
            ]
        }
       ]  
}

