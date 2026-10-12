export interface DomesticTour {
  id: string;
  title: string;
  description: string;
  highlights: string;
  cta: string;
  image: string; // TODO: replace with own photos
  alt: string;
  tag: string;
}

export interface InternationalDestination {
  name: string;
  image: string; // TODO: replace with own photos
  subtitle: string;
}

export interface ReviewCard {
  id: string;
  title: string;
  source: string;
  type: 'article' | 'video' | 'review' | 'recognition';
  placeholderNote: string;
  linkText: string;
  href: string;
  image: string;
  author?: string;
  location?: string;
  rating?: number;
  date?: string;
  fullStory?: string;
  highlights?: string[];
  videoUrl?: string;
}

export interface OfficeLocation {
  id: string;
  title: string;
  city: string;
  address: string;
  mapQuery: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface UpcomingTour {
  id: string;
  month: 'NOVEMBER' | 'DECEMBER';
  monthLabel: string;
  date: string;
  fullDate: string;
  year: string;
  destination: string;
  duration: string;
  price: string;
  priceNum: number;
  priceSuffix: string;
  image: string;
  tag: string;
  highlight: string;
  badge?: string;
  seatsStatus?: string;
}

export const siteContent = {
  agency: {
    name: "Easy Trip Tour & Travels",
    shortName: "Easy Trip",
    tagline: "Easy Trip – Travel Made Easy",
    website: "www.easytriptourandtravels.com",
    email: "easytripdgpasn@gmail.com",
    phones: [
      { raw: "9233300333", formatted: "92333 00333", isPrimary: true, tel: "+919233300333" },
      { raw: "8900761848", formatted: "89007 61848", isPrimary: false, tel: "+918900761848" },
      { raw: "8617398804", formatted: "86173 98804", isPrimary: false, tel: "+918617398804" },
    ],
    whatsappNumber: "919233300333",
  },

  nav: {
    links: [
      { label: "Home", href: "#hero" },
      { label: "Upcoming Tours", href: "#upcoming-tours" },
      { label: "About Us", href: "#about" },
      { label: "Domestic Tours", href: "#domestic-tours" },
      { label: "International Tours", href: "#international-tours" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact Us", href: "#contact" },
    ],
    cta: "Plan Your Trip",
  },

  hero: {
    eyebrow: "YOUR NEXT ADVENTURE STARTS HERE",
    h1: "Discover India & The World with Easy Trip Tour & Travels",
    body: "Turn your travel dreams into unforgettable memories with thoughtfully planned holidays from Easy Trip Tour & Travels. From the breathtaking Himalayas and peaceful beaches to exciting international destinations, we help you plan journeys that match your interests, travel style and budget.",
    body2: "Explore customized holiday packages, family vacations, honeymoon trips, group tours and international getaways with your trusted travel partner in Durgapur and Asansol.",
    cta1: "Plan Your Trip",
    cta2: "Explore Tour Packages",
    tagline: "Easy Trip – Travel Made Easy",
    // Hero background video & high-res cinematic poster
    // TODO: replace with own photos/videos
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-beach-41724-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    stats: [
      { value: "3+", label: "Hub Offices", desc: "Durgapur & Asansol" },
      { value: "50+", label: "Destinations", desc: "India & Overseas" },
      { value: "100%", label: "Customizable", desc: "Tailored to your budget" },
      { value: "24/7", label: "Local Support", desc: "Pre & on-trip care" },
    ],
  },

  bookingForm: {
    heading: "Plan Your Dream Holiday",
    subheading: "Tell us about your travel plans, and let us help you find the right holiday package.",
    cta: "Get My Travel Quote",
    tourTypes: [
      "Domestic",
      "International",
      "Honeymoon",
      "Family",
      "Group",
      "Customized",
    ],
    budgetRanges: [
      "₹10,000 – ₹25,000",
      "₹25,000 – ₹50,000",
      "₹50,000 – ₹1,00,000",
      "₹1,00,000+",
      "Flexible",
    ],
  },

  about: {
    eyebrow: "About Easy Trip Tour & Travels",
    subtitle: "Your Trusted Travel Partner for Memorable Journeys",
    p1: "At Easy Trip Tour & Travels, we believe every journey should be more than just a holiday. It should be an opportunity to explore new places, experience different cultures and create memories that last a lifetime.",
    p2: "Based in Durgapur and serving travellers from Asansol and nearby areas, we help customers plan domestic and international holidays according to their preferences, travel goals and budgets.",
    p3: "From the snow-covered mountains of Kashmir and Shimla-Manali to the beaches of Goa, the natural beauty of Northeast India and exciting international destinations, we offer travel options for different interests and occasions.",
    p4: "Whether you are travelling with family, planning your honeymoon, organizing a group trip or looking for a customized holiday, our goal is to make your travel planning easier and your journey more enjoyable.",
    whyChooseTitle: "Why Choose Easy Trip?",
    whyChoosePoints: [
      {
        title: "Personalized travel planning",
        description: "Itineraries curated for your specific timeline, pace, and interests.",
      },
      {
        title: "Domestic and international destinations",
        description: "From serene Indian hill retreats to world-class international marvels.",
      },
      {
        title: "Family and group holiday options",
        description: "Well-paced programs with comfort for all age groups.",
      },
      {
        title: "Customized travel itineraries",
        description: "Flexibility in hotels, routes, experiences, and meal preferences.",
      },
      {
        title: "Convenient enquiry and booking assistance",
        description: "Immediate WhatsApp, phone consultation, and transparent coordination.",
      },
      {
        title: "Local support in Durgapur and Asansol",
        description: "Dedicated walk-in branch offices in Newton Market, City Centre, and Asansol.",
      },
    ],
    cta: "Plan Your Next Holiday",
    // Collage images
    // TODO: replace with own photos
    collageImages: [
      {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        alt: "Snow-covered peaks of the Himalayas",
        caption: "Himalayan Horizons",
      },
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        alt: "Traditional houseboat in Kerala backwaters",
        caption: "Kerala Backwaters",
      },
      {
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        alt: "Golden hour sunset over Goa beach",
        caption: "Sunset at Goa",
      },
    ],
  },

  upcomingTours: {
    eyebrow: "FIXED DEPARTURE CALENDAR 2026",
    title: "2026 Tour Calendar",
    subtitle: "November • December | Plan Your Escape",
    sloganTop1: "New Destinations, New Stories",
    sloganTop2: "Travel • Explore • Create Memories",
    sloganBottom: "Good Trips, Brighter Days!",
    tagline: "Explore our fixed departure tour batches with confirmed itineraries & best group prices.",
    disclaimer: "PP = Per Person (Twin / Triple Sharing). Fixed departures from Durgapur & Asansol.",
    bannerCta: "Book Your Next Journey",
    tours: [
      {
        id: "nov-shimla-17",
        month: "NOVEMBER",
        monthLabel: "November 2026",
        date: "17 NOV",
        fullDate: "17 November 2026",
        year: "2026",
        destination: "SHIMLA",
        duration: "5N/6D",
        price: "₹11,000",
        priceNum: 11000,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
        tag: "Himachal Hills",
        highlight: "Mall Road, Kufri snow views, Jakhoo temple & Himalayan pine forests.",
        badge: "Fast Filling",
        seatsStatus: "Few Seats Left",
      },
      {
        id: "nov-goa-18",
        month: "NOVEMBER",
        monthLabel: "November 2026",
        date: "18 NOV",
        fullDate: "18 November 2026",
        year: "2026",
        destination: "GOA",
        duration: "4N/5D",
        price: "₹10,000",
        priceNum: 10000,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        tag: "Coastal Escape",
        highlight: "Baga & Calangute beaches, sunset Mandovi cruise, water sports & shacks.",
        badge: "Best Seller",
        seatsStatus: "Filling Fast",
      },
      {
        id: "nov-kerala-20",
        month: "NOVEMBER",
        monthLabel: "November 2026",
        date: "20 NOV",
        fullDate: "20 November 2026",
        year: "2026",
        destination: "KERALA",
        duration: "5N/6D",
        price: "₹18,500",
        priceNum: 18500,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        tag: "God's Own Country",
        highlight: "Alleppey backwater houseboat cruise, Munnar tea hills & Mattupetty Dam.",
        badge: "Scenic Special",
        seatsStatus: "Limited Seats",
      },
      {
        id: "dec-silk-route-10",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "10 DEC",
        fullDate: "10 December 2026",
        year: "2026",
        destination: "SILK ROUTE",
        duration: "3N/4D",
        price: "₹5,999",
        priceNum: 5999,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        tag: "Old Silk Route",
        highlight: "Zuluk 32 loops, Thambi viewpoint sunrise, Kupup Lake & Nathang Valley.",
        badge: "Super Value • ₹5,999",
        seatsStatus: "High Demand",
      },
      {
        id: "dec-shimla-manali-10",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "10 DEC",
        fullDate: "10 December 2026",
        year: "2026",
        destination: "SHIMLA MANALI",
        duration: "5N/6D",
        price: "₹10,000",
        priceNum: 10000,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        tag: "Snow Wonderland",
        highlight: "Solang Valley snow adventures, Atal Tunnel, Hadimba temple & Kufri.",
        badge: "Winter Special",
        seatsStatus: "Fast Filling",
      },
      {
        id: "dec-kashmir-10",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "10 DEC",
        fullDate: "10 December 2026",
        year: "2026",
        destination: "KASHMIR",
        duration: "5N/6D",
        price: "₹10,000",
        priceNum: 10000,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80",
        tag: "Paradise on Earth",
        highlight: "Dal Lake Shikara ride, Gulmarg snow gondola & scenic Pahalgam pine valleys.",
        badge: "Dream Destination",
        seatsStatus: "Filling Fast",
      },
      {
        id: "dec-goa-10",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "10 DEC",
        fullDate: "10 December 2026",
        year: "2026",
        destination: "GOA",
        duration: "4N/5D",
        price: "₹10,000",
        priceNum: 10000,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        tag: "Sunny Coastline",
        highlight: "Golden sands, Fort Aguada, Panaji old latin quarter & vibrant nightlife.",
        badge: "Value Deal",
        seatsStatus: "Few Seats Left",
      },
      {
        id: "dec-andaman-18",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "18 DEC",
        fullDate: "18 December 2026",
        year: "2026",
        destination: "ANDAMAN",
        duration: "6N/7D",
        price: "₹40,000",
        priceNum: 40000,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
        tag: "Tropical Islands",
        highlight: "Havelock Island, Radhanagar turquoise beach, Cellular Jail & coral diving.",
        badge: "Luxury Island Escape",
        seatsStatus: "Limited Batch",
      },
      {
        id: "dec-rajasthan-22",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "22 DEC",
        fullDate: "22 December 2026",
        year: "2026",
        destination: "RAJASTHAN",
        duration: "8N/9D",
        price: "₹23,500",
        priceNum: 23500,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        tag: "Royal Heritage",
        highlight: "Jaipur Amer Fort, Udaipur Pichola Lake palace, Jodhpur fort & desert dunes.",
        badge: "Grand 8N/9D Tour",
        seatsStatus: "Filling Fast",
      },
      {
        id: "dec-kerala-24",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "24 DEC",
        fullDate: "24 December 2026",
        year: "2026",
        destination: "KERALA",
        duration: "5N/6D",
        price: "₹18,500",
        priceNum: 18500,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        tag: "Christmas Getaway",
        highlight: "Christmas Eve backwater cruise, Munnar mist, spice gardens & Kochi harbor.",
        badge: "Christmas Special",
        seatsStatus: "Limited Seats",
      },
      {
        id: "dec-goa-24",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "24 DEC",
        fullDate: "24 December 2026",
        year: "2026",
        destination: "GOA",
        duration: "4N/5D",
        price: "₹15,000",
        priceNum: 15000,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        tag: "Festive Carnival",
        highlight: "Christmas in Goa, beach parties, illuminated heritage churches & celebrations.",
        badge: "Christmas in Goa",
        seatsStatus: "High Demand",
      },
      {
        id: "dec-meghalaya-24",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "24 DEC",
        fullDate: "24 December 2026",
        year: "2026",
        destination: "MEGHALAYA",
        duration: "5N/6D",
        price: "₹17,500",
        priceNum: 17500,
        priceSuffix: "PP",
        image: "/images/meghalaya.jpg",
        tag: "Abode of Clouds",
        highlight: "Living Root Bridges, crystal Dawki Umngot river, Cherrapunji falls & caves.",
        badge: "Northeast Magic",
        seatsStatus: "Filling Fast",
      },
      {
        id: "dec-shimla-manali-26",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "26 DEC",
        fullDate: "26 December 2026",
        year: "2026",
        destination: "SHIMLA MANALI",
        duration: "5N/6D",
        price: "₹13,500",
        priceNum: 13500,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
        tag: "Year-End Snow",
        highlight: "Pre-New Year snowfall, Solang snow sports, Old Manali cafes & Mall Road.",
        badge: "Year-End Special",
        seatsStatus: "High Demand",
      },
      {
        id: "dec-kashmir-27",
        month: "DECEMBER",
        monthLabel: "December 2026",
        date: "27 DEC",
        fullDate: "27 December 2026",
        year: "2026",
        destination: "KASHMIR",
        duration: "5N/6D",
        price: "₹13,500",
        priceNum: 13500,
        priceSuffix: "PP",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
        tag: "New Year Celebration",
        highlight: "Celebrate New Year in snow-covered Gulmarg & Srinagar Dal Lake houseboat.",
        badge: "New Year in Kashmir",
        seatsStatus: "Last Few Seats",
      },
    ] as UpcomingTour[],
  },

  domesticTours: {
    eyebrow: "Explore India with Easy Trip Tour & Travels",
    title: "Discover the Best of India, One Journey at a Time",
    intro: "From snow-capped mountains and lush green valleys to tropical beaches, spiritual destinations and cultural experiences, India has something for every traveller. Explore domestic tour packages from Durgapur and Asansol with Easy Trip Tour & Travels. Choose your favourite destination or enquire about a customized holiday itinerary.",
    cta: "Find Your Perfect Destination",
    destinations: [
      {
        id: "shimla-manali",
        title: "Shimla-Manali Tour Packages",
        description: "Discover the scenic hill stations of Himachal Pradesh, surrounded by majestic mountains, pine forests and beautiful valleys. Perfect for couples, families and adventure lovers.",
        highlights: "Himalayan views, mountain valleys, local sightseeing and seasonal snow experiences.",
        cta: "Explore Shimla-Manali",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
        alt: "Shimla and Manali snow-covered pine forests and Himalayan mountain valleys",
        tag: "Himachal Pradesh",
      },
      {
        id: "kashmir",
        title: "Kashmir Tour Packages",
        description: "Experience the beauty of Kashmir, with peaceful lakes, stunning mountain landscapes and unforgettable valley views.",
        highlights: "Srinagar, Dal Lake, Pahalgam, gardens and mountain scenery.",
        cta: "Explore Kashmir",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1200&q=80",
        alt: "Traditional Shikara floating on Dal Lake against Kashmir mountains",
        tag: "Paradise on Earth",
      },
      {
        id: "goa",
        title: "Goa Tour Packages",
        description: "Enjoy beautiful beaches, colourful sunsets, coastal cuisine and the vibrant atmosphere of Goa.",
        highlights: "Beach visits, sightseeing, sunsets and leisure experiences.",
        cta: "Explore Goa",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        alt: "Sunny tropical palm tree beach and calm waves in Goa",
        tag: "Coastal Escape",
      },
      {
        id: "kerala",
        title: "Kerala Tour Packages",
        description: "Discover Kerala's tranquil backwaters, lush tea gardens, green landscapes and relaxing hill stations.",
        highlights: "Munnar, backwater experiences, nature and local culture.",
        cta: "Explore Kerala",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        alt: "Tranquil houseboat cruising through Kerala palm-fringed backwaters",
        tag: "God's Own Country",
      },
      {
        id: "darjeeling-sikkim",
        title: "Darjeeling & Sikkim Tour Packages",
        description: "Experience Himalayan beauty, tea gardens, peaceful monasteries and charming mountain towns.",
        highlights: "Darjeeling, Gangtok, scenic viewpoints and local sightseeing.",
        cta: "Explore Darjeeling & Sikkim",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        alt: "Lush green rolling tea gardens overlooking Himalayan peaks in Darjeeling",
        tag: "Eastern Himalayas",
      },
      {
        id: "meghalaya-northeast",
        title: "Meghalaya & Northeast India Tours",
        description: "Explore dramatic waterfalls, green valleys, caves, forests and the unique culture of Northeast India.",
        highlights: "Meghalaya, living root bridges, waterfalls and scenic landscapes.",
        cta: "Explore Northeast India",
        // TODO: replace with own photos
        image: "/images/meghalaya.jpg",
        alt: "Iconic living root bridge surrounded by lush rainforest waterfalls in Meghalaya",
        tag: "Abode of Clouds",
      },
      {
        id: "andaman",
        title: "Andaman Tour Packages",
        description: "Escape to tropical islands featuring clear blue waters, sandy beaches and memorable island experiences.",
        highlights: "Island sightseeing, beaches, marine scenery and optional water activities.",
        cta: "Explore Andaman",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
        alt: "Crystal turquoise waters and pristine white sands of Havelock Island in Andaman",
        tag: "Island Sanctuary",
      },
      {
        id: "rajasthan",
        title: "Rajasthan Tour Packages",
        description: "Discover India's royal heritage through historic forts, grand palaces, colourful markets and vibrant traditions.",
        highlights: "Jaipur, Udaipur, Jodhpur and heritage experiences.",
        cta: "Explore Rajasthan",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        alt: "Grand historic fort overlooking the vibrant city in Rajasthan during sunset",
        tag: "Land of Kings",
      },
      {
        id: "leh-ladakh",
        title: "Leh-Ladakh Tour Packages",
        description: "Experience spectacular high-altitude landscapes, dramatic mountain roads, lakes and historic monasteries.",
        highlights: "Pangong Lake, mountain passes, monasteries and scenic drives.",
        cta: "Explore Leh-Ladakh",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
        alt: "Deep blue Pangong Tso Lake nestled between rugged Ladakh mountains",
        tag: "High Mountain Desert",
      },
      {
        id: "varanasi-ayodhya",
        title: "Varanasi & Ayodhya Tour Packages",
        description: "Discover important spiritual destinations, historic temples and India's rich cultural traditions.",
        highlights: "Spiritual landmarks, temple visits and cultural experiences.",
        cta: "Explore Spiritual Tours",
        // TODO: replace with own photos
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
        alt: "Evening Ganga Aarti ceremony with floating lamps on ancient Varanasi ghats",
        tag: "Sacred Heritage",
      },
    ] as DomesticTour[],

    moreDestinations: [
      "Shimla-Manali", "Kalpa-Kinnaur", "Spiti Valley", "Dalhousie", "Dharamsala",
      "Amritsar", "Kashmir", "Leh-Ladakh", "Char Dham", "Nainital", "Jim Corbett",
      "Dehradun", "Mussoorie", "Ooty", "Varanasi", "Ayodhya", "Haridwar",
      "Rishikesh", "Mathura", "Vrindavan", "Agra", "Assam", "Meghalaya",
      "Arunachal Pradesh", "Rajasthan", "Gujarat", "Andaman", "Lakshadweep",
      "Kerala", "Rameshwaram", "Madurai", "North Bengal", "Sikkim",
      "Uttarakhand", "Vizag", "Kanyakumari"
    ],
  },

  internationalTours: {
    title: "International Tour Packages",
    subtitle: "The World Is Waiting for You",
    body: "Discover extraordinary destinations, experience new cultures and turn your international travel dreams into reality with Easy Trip Tour & Travels. From romantic island escapes to iconic European cities and exciting Asian holidays, find inspiration for your next overseas adventure.",
    cta: "Plan My International Trip",
    destinationsList: [
      "Dubai", "Bali", "Maldives", "Malaysia", "Singapore", "Thailand",
      "Vietnam", "Japan", "China", "Switzerland", "France", "Italy",
      "Portugal", "Iceland", "Europe", "Mauritius", "Sri Lanka", "Nepal",
      "Bhutan", "Africa"
    ],
    // Featured international visual tiles
    // TODO: replace with own photos
    cards: [
      {
        name: "Dubai",
        subtitle: "Futuristic skyline & desert adventures",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Bali",
        subtitle: "Tropical retreats & sacred temples",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maldives",
        subtitle: "Overwater villas & azure lagoons",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Switzerland",
        subtitle: "Alpine wonders & scenic railways",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Singapore & Malaysia",
        subtitle: "Modern gardens & cultural heritage",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Thailand & Vietnam",
        subtitle: "Emerald bays, islands & night markets",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      },
    ] as InternationalDestination[],
  },

  reviews: {
    eyebrow: "Happy Travellers, Beautiful Memories",
    title: "Real Experiences. Genuine Feedback. Memorable Journeys.",
    body: "At Easy Trip Tour & Travels, our greatest reward is seeing our customers return with wonderful memories. Discover what travellers and our valued partners have to say about their experiences with us. From memorable domestic holidays to exciting travel experiences, we are grateful to everyone who trusts Easy Trip with their journey.",
    cta1: "Watch Reviews",
    cta2: "Read More Reviews",
    cards: [
      {
        id: "rev-1",
        title: "Darjeeling & Mirik Himalayan Holiday",
        source: "DurgapurCity.co.in",
        type: "article",
        placeholderNote: "Featured spotlight and local press review",
        linkText: "Read Article",
        href: "#",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        author: "Debasish Mukherjee & Family",
        location: "City Centre, Durgapur",
        rating: 5,
        date: "Verified Trip • February 2026",
        highlights: ["Tiger Hill Sunrise", "Toy Train Joy Ride", "Tea Estate Resort", "Dedicated Cabs"],
        fullStory: "Our family of 5 planned a 5-day tour to Darjeeling and Mirik through Easy Trip Tour & Travels. From the moment we visited their City Centre office, the team guided us patiently. They arranged punctual pick-up from NJP railway station, booked a stunning heritage resort with Kanchanjunga views, and secured toy train joy ride tickets in advance. Having a dedicated 24/7 coordinator on WhatsApp gave us complete peace of mind with elderly parents. Everything promised was delivered without any hidden charges.",
      },
      {
        id: "rev-2",
        title: "Family Travel Journey & Feedback",
        source: "Customer Video Testimonial",
        type: "video",
        placeholderNote: "Video record of customer journey & feedback",
        linkText: "Watch Video",
        href: "#",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
        author: "Dr. Alok Ray & Friends (8 Pax)",
        location: "Asansol & Durgapur",
        rating: 5,
        date: "Verified Trip • January 2026",
        highlights: ["8 Members Group", "Kerala Houseboat", "Munnar Tea Hills", "Pure Veg Meals"],
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-on-the-beach-41727-large.mp4",
        fullStory: "Dr. Alok Ray and his group of 8 travellers from Asansol share their feedback on their 6-day Kerala holiday arranged by Easy Trip. They highlight the spotless private AC houseboat in Alleppey, comfortable Tempo Traveller vehicle, and thoughtful arrangements for elder members of the group.",
      },
      {
        id: "rev-3",
        title: "Kashmir Paradise Group Experience",
        source: "Verified Customer Review",
        type: "review",
        placeholderNote: "Group travel diary & itinerary feedback",
        linkText: "View Feedback",
        href: "#",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80",
        author: "Subrata Sen & Colleagues (14 Pax)",
        location: "Newton Sector Market, Durgapur",
        rating: 5,
        date: "Verified Trip • March 2026",
        highlights: ["Srinagar Dal Lake", "Gulmarg Gondola Phase 2", "Pahalgam Valley", "24/7 Local Escort"],
        fullStory: "Organizing a corporate group tour for 14 colleagues from Durgapur seemed overwhelming until we visited Easy Trip at their Newton Market branch. They handled everything from flight connections to deluxe Shikara rides in Dal Lake, heated rooms in Gulmarg, and Gondola Phase 2 passes. Every single day was scheduled with zero rush and maximum comfort.",
      },
      {
        id: "rev-4",
        title: "Excellence in Regional Tourism",
        source: "Bengal Dot Com Feature",
        type: "recognition",
        placeholderNote: "Regional tourism excellence & acknowledgement",
        linkText: "Read Coverage",
        href: "#",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
        author: "West Bengal Tourism Media",
        location: "Durgapur & Asansol Hub",
        rating: 5,
        date: "Media Feature • 2026",
        highlights: ["3 Local Hub Offices", "Transparent Pricing", "50+ Global Routes", "Top Rated Agency"],
        fullStory: "In an editorial feature on Western Bengal's rising travel operators, Bengal Dot Com highlighted Easy Trip Tour & Travels for their high customer satisfaction and personalized travel consultations. With physical walk-in branches across Durgapur Newton Market, City Centre Cinema Hall, and Asansol Bus Stand, Easy Trip bridges the gap between digital ease and personalized local trust.",
      },
    ] as ReviewCard[],
    additionalReviews: [
      {
        id: "add-1",
        name: "Rohit & Priya Paul",
        location: "Durgapur (A-Zone)",
        tour: "Goa Beach & Sunset Cruise",
        rating: 5,
        comment: "Booked our 4-day Goa vacation through Easy Trip. The North Goa beach resort was fantastic with private pool access, and the sunset Mandovi river cruise was memorable. Highly recommended for couples!",
        date: "December 2025",
      },
      {
        id: "add-2",
        name: "Souvik & Riya Banerjee",
        location: "Asansol",
        tour: "Shimla-Manali Honeymoon Package",
        rating: 5,
        comment: "Unforgettable snow experience in Solang Valley and Rohtang. The cab driver was very polite and skilled on mountain roads. The hotel room in Manali had breathtaking mountain views.",
        date: "January 2026",
      },
      {
        id: "add-3",
        name: "Kaushik Mondal & Family",
        location: "Raniganj",
        tour: "Dubai International Gateway",
        rating: 5,
        comment: "Our first international trip with kids. Visas arrived in 3 days, Desert Safari with BBQ dinner was thrilling, and tickets to Burj Khalifa 124th floor were arranged without waiting in queues.",
        date: "February 2026",
      },
      {
        id: "add-4",
        name: "Tanmoy Dutta & Friends",
        location: "Durgapur (City Centre)",
        tour: "Andaman Havelock Scuba Adventure",
        rating: 5,
        comment: "Havelock and Neil Island package was top notch. Crystal clear turquoise water, ferry tickets on Makruzz were pre-booked smoothly. Thank you Easy Trip team!",
        date: "March 2026",
      },
    ],
  },

  contact: {
    title: "Contact Easy Trip Tour & Travels",
    subtitle: "Let's Plan Your Next Adventure",
    body: "Ready to explore your dream destination? Our team is here to help you enquire about domestic tour packages, international holidays, honeymoon trips, family vacations and customized travel plans. Get in touch with Easy Trip Tour & Travels and take the first step towards your next memorable journey.",
    ctas: {
      call: "Call Now",
      whatsapp: "WhatsApp Us",
      quote: "Get a Travel Quote",
    },
    offices: [
      {
        id: "dgp-1",
        title: "Office 1 — Durgapur",
        city: "Durgapur",
        address: "Newton Sector Market, B-Zone, Durgapur – 05",
        mapQuery: "Newton Sector Market, B-Zone, Durgapur",
      },
      {
        id: "dgp-2",
        title: "Office 2 — Durgapur",
        city: "Durgapur",
        address: "Durgapur Cinema Hall, City Centre, Durgapur – 16",
        mapQuery: "Durgapur Cinema Hall, City Centre, Durgapur",
      },
      {
        id: "asn-1",
        title: "Office 3 — Asansol",
        city: "Asansol",
        address: "Opposite Asansol Bus Stand, ADDA Block D, Asansol – 713301",
        mapQuery: "Opposite Asansol Bus Stand, ADDA Block D, Asansol",
      },
    ] as OfficeLocation[],
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about planning your holiday with Easy Trip",
    items: [
      {
        id: "faq-1",
        question: "Which destinations does Easy Trip Tour & Travels offer?",
        answer: "We help travellers explore destinations across India and internationally, including Shimla-Manali, Kashmir, Goa, Kerala, Darjeeling, Sikkim and more.",
      },
      {
        id: "faq-2",
        question: "Can I book a tour package from Durgapur or Asansol?",
        answer: "Yes. Contact us by phone, WhatsApp or email to enquire about packages from Durgapur, Asansol and nearby areas.",
      },
      {
        id: "faq-3",
        question: "Do you offer customized holiday packages?",
        answer: "You can enquire about customized itineraries based on your preferred destination, travel dates, group size and budget.",
      },
      {
        id: "faq-4",
        question: "Can I plan a honeymoon or family holiday?",
        answer: "Yes. Contact our team to explore suitable travel options for couples, families, friends and groups.",
      },
      {
        id: "faq-5",
        question: "How can I get tour package prices?",
        answer: "Share your destination, travel dates and number of travellers through our enquiry form or contact our team directly.",
      },
      {
        id: "faq-6",
        question: "How do I confirm my booking?",
        answer: "Contact our team, review the itinerary, inclusions, price and payment terms, and confirm your booking after all details are agreed upon.",
      },
    ] as FAQItem[],
  },

  footer: {
    brand: "EASY TRIP TOUR & TRAVELS",
    tagline: "Travel Made Easy",
    about: "Discover memorable domestic holidays and international travel experiences with Easy Trip Tour & Travels. Plan your next family vacation, honeymoon, group tour or customized getaway with our team in Durgapur and Asansol, West Bengal.",
    quickLinks: [
      { label: "Home", href: "#hero" },
      { label: "Upcoming Tours 2026", href: "#upcoming-tours" },
      { label: "About Us", href: "#about" },
      { label: "Domestic Tours", href: "#domestic-tours" },
      { label: "International Tours", href: "#international-tours" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact Us", href: "#contact" },
    ],
    popularDestinations: [
      "Shimla-Manali", "Kashmir", "Goa", "Kerala", "Darjeeling",
      "Sikkim", "Meghalaya", "Andaman", "Dubai", "Bali", "Maldives", "Europe"
    ],
    copyright: "© 2026 Easy Trip Tour & Travels. All rights reserved.",
  },
};
