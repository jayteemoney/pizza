import React from "react";

const desserts = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: "$5.99",
    flavor: "Chocolate",
    image: "https://source.unsplash.com/100x100/?chocolate-cake",
  },
  {
    id: 2,
    name: "Strawberry Cheesecake",
    price: "$6.50",
    flavor: "Strawberry",
    image: "https://source.unsplash.com/100x100/?strawberry-cheesecake",
  },
  {
    id: 3,
    name: "Vanilla Ice Cream",
    price: "$3.99",
    flavor: "Vanilla",
    image: "https://source.unsplash.com/100x100/?vanilla-icecream",
  },
  {
    id: 4,
    name: "Macarons",
    price: "$7.25",
    flavor: "Mixed",
    image: "https://source.unsplash.com/100x100/?macarons",
  },
];

function DessertList() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Dessert Menu 🍰</h2>
      <ul className="space-y-4">
        {desserts.map((dessert) => (
          <li key={dessert.id} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg shadow">
            <img src={dessert.image} alt={dessert.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{dessert.name}</h3>
              <p className="text-sm text-gray-400">Flavor: {dessert.flavor}</p>
              <p className="text-yellow-400 font-semibold">{dessert.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DessertList;
