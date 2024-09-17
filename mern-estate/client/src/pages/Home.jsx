import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-extrabold text-4xl lg:text-7xl leading-tight">
          Find your next{' '}
          <span className="text-slate-500 underline">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-500 text-sm sm:text-base">
          Discover a variety of beautiful homes and properties that match your lifestyle.
        </div>
        <Link
          to={'/search'}
          className="text-sm sm:text-base text-blue-700 font-semibold hover:underline transition"
        >
          Start your search now...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className="h-[500px] flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <h2 className="text-3xl font-bold">{listing.name}</h2>
                  <p className="text-lg">Starting at ${listing.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-12 my-12">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center my-3">
              <h2 className="text-2xl font-semibold text-slate-700">Recent offers</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={'/search?offer=true'}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center my-3">
              <h2 className="text-2xl font-semibold text-slate-700">Recent places for rent</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={'/search?type=rent'}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center my-3">
              <h2 className="text-2xl font-semibold text-slate-700">Recent places for sale</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={'/search?type=sale'}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
