import PropertyDetail from "@/components/PropertyDetail/PropertyDetail";
import SimilarListings from "./SimilarListings";

const page = () => {

  const property = {
    id: 1,
    location: {
      country: "USA",
      region: "California",
      city: "San Francisco",
      address: "123 Main St",
      postal_code: "94105"
    },
    amenities: [
      "Swimming pool, gym"
    ],
    description: "Beautiful property with amazing views",
    category: "Residential",
    images: [
      "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?w=1380&t=st=1697029644~exp=1697030244~hmac=6a515cd407f7f099d8e84c82c7040c2463e88e388410aa76243b749a132c52bf",
      "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.jpg?w=1380&t=st=1697029761~exp=1697030361~hmac=81e59d81329423b31cd5361deb4f8d32867b8183c579de47c474e328b81d6f8c",
      "https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150767.jpg?w=1380&t=st=1697029796~exp=1697030396~hmac=8a8bbd630e314c73ee2bf8b43c6019eba3c01b7e68617b1f330d629cbc8f496e",
      "https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150769.jpg?w=1380&t=st=1697029842~exp=1697030442~hmac=528606be38677c9d9ec9c88d9d435336ccb09ab57ed7e8739a556bfee51fc277",
      "https://img.freepik.com/free-photo/high-angle-shot-pier-seashore-with-cloudy-blue-sky_181624-20001.jpg?w=1380&t=st=1697029850~exp=1697030450~hmac=a892a6b8fdf9032266460307f6338c3ece76aa4884ce3f4bf9470b00de1bfa00"
    ],
    owner_id: 1,
    contract_address: "smart_contract_address",
    property_creation_time: "2024-03-07T00:00:00.000Z",
    total_shares: 1000,
    total_valuation: "1000000",
    annual_yield: "5.2",
    token_duration_months: 12,
    listing_duration_months: 6,
    savedBy: null,
    features:"feat",
    total_tokens: 1200,
    tokens_sold: 652,
  };

  return(
    <div className="relative w-full">
    <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]" style={{ height: '24.5rem', zIndex: '-1' }} />
    <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]" style={{ height: '100vh', zIndex: '-1' }} />
    <PropertyDetail property={property} />
    <SimilarListings />

  </div>
  )
};

export default page;