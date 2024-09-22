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
    <div>
      {/* Swiper carousel that covers the full screen */}
      <Swiper navigation className="min-h-screen">
        {/* Slide 1 */}
        <SwiperSlide>
  <div
    style={{
      background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1721069275326-5fd80e01ce8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center no-repeat`,
      backgroundSize: 'cover',
    }}
    className="h-screen flex items-center justify-center relative"
  >
    <div className="absolute inset-0 flex items-center justify-center text-white text-left pr-10">
      <div className="px-4 lg:px-10">
        <h2 className="text-5xl lg:text-7xl font-bold text-teal-700">
          RENT<span className="text-sky-400">NEST</span>
        </h2>
        <p className="text-2xl lg:text-4xl mt-4 text-yellow-200">Your Dream Home at Your Fingertips</p>
        <div className="mt-6 text-gray-300">
          <p className="text-lg lg:text-xl">
            <span className="text-blue-300">RENTNEST</span> helps you find your 
            <span className="text-yellow-200"> Dream Home</span> or 
            <span className="text-yellow-200"> Commercial Space</span> effortlessly.
          </p>
          <Link
            to={'/search'}
            className="text-sm sm:text-base text-blue-500 font-semibold hover:underline transition mt-4 block"
          >
            Start your search now...
          </Link>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>


  
        {/* Slide 2 */}
        <SwiperSlide>
          <div
            style={{
              background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('https://example.com/image2.jpg') center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="h-screen flex items-center justify-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
              <div className="px-4">
                <h2 className="text-5xl font-bold">Property 2</h2>
                <p className="text-2xl mt-4">Starting at $1200</p>
                <div className="mt-6">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Discover a variety of beautiful homes and properties that match your lifestyle.
                  </p>
                  <Link
                    to={'/search'}
                    className="text-sm sm:text-base text-blue-400 font-semibold hover:underline transition"
                  >
                    Start your search now...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
  
        {/* Slide 3 */}
        <SwiperSlide>
          <div
            style={{
              background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1521239365713-1e26965c69ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="h-screen flex items-center justify-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
              <div className="px-4">
                <h2 className="text-5xl font-bold">Local Expertise, Global Reach</h2>
              {/*  <p className="text-2xl mt-4">Starting at $1500</p> */}
                <div className="mt-6">
                  <p className="text-gray-300 text-sm sm:text-base">
                  Listings are available for various budgets, ensuring inclusivity for all users.
                  </p>
                  <Link
                    to={'/search'}
                    className="text-sm sm:text-base text-blue-400 font-semibold hover:underline transition"
                  >
                    Start your search now...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
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