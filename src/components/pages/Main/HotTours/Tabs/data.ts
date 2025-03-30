export const tabsData: TabsData = {
    'all': [{ image: 'photo1', geolocation: 'Turkey',hotelName:'Lera', starsCount: 1, date: { from: new Date('2011-10-10'), to: new Date('2011-10-11')}, personCount: 2, priceFrom: 100000}],
    'astana': [{ image: 'photo2', geolocation: 'Spain', hotelName: 'Lera', starsCount: 1, date: { from: new Date('2011-10-10'), to: new Date('2011-10-11') }, personCount: 2, priceFrom: 100000 }],
    'almata': [{ image: 'photo3', geolocation: 'Italy', hotelName: 'Lera', starsCount: 1, date: { from: new Date('2011-10-10'), to: new Date('2011-10-11') }, personCount: 2, priceFrom: 100000 }],
    'shymkent': [{ image: 'photo4', geolocation: 'Turkey', hotelName: 'Lera', starsCount: 1, date: { from: new Date('2011-10-10'), to: new Date('2011-10-11') }, personCount: 2, priceFrom: 100000 }],
    'actay': [{ image: 'photo5', geolocation: 'Turkey',hotelName:'Lera', starsCount: 1, date: { from: new Date('2011-10-10'), to: new Date('2011-10-11')}, personCount: 2, priceFrom: 100000}],
    'karaganda': [{ image: 'photo6', geolocation: 'Turkey',hotelName:'Lera', starsCount: 1, date: { from: new Date('2011-10-10'), to: new Date('2011-10-11')}, personCount: 2, priceFrom: 100000}],
} 

export type CitiesKey = 'all' | 'astana' | 'almata' | 'shymkent' | 'actay' | 'karaganda'
type CityCards = {
    image: string
    geolocation: string;
    hotelName: string;
    starsCount: 1 | 2 | 3 | 4 | 5;
    date: {
        from: Date
        to: Date
    };
    personCount: number;
    priceFrom: number
}
type TabsData = Record<CitiesKey, CityCards[]>