import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { addToFavorites, fetchFavorites, removeFromFavorites } from '../controllers/favoritesController';
import { toast } from 'sonner';
import { getWeather } from '../controllers/weather';

const FavoriteCitiesDropdown = ({ favorites, setFavorites, setCurrentCity, unit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onRemoveCity = async (id) => {
    try {
      await removeFromFavorites(id);
      const data = await fetchFavorites();
      setFavorites(data);
      toast.warning('City removed successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const clickHandle = async (name, unit) => {
    try {
      const data = await getWeather(name, unit);
      setCurrentCity(data);
      toast.success('Got the weather !!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative w-full md:w-[500px]">
      <button
        onClick={toggleDropdown}
        className="w-full bg-gradient-to-l from-purple-900 to-purple-200 text-white py-2 px-4 rounded-md text-left flex justify-between items-center"
      >
        Favorite Cities
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
          {favorites.map(({ name, id }) => (
            <li
              key={id}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                clickHandle(name, unit);
                setIsOpen(false);
              }}
            >
              <span>{name}</span>
              <FaTrash
                className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent click handler
                  onRemoveCity(id);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteCitiesDropdown;
