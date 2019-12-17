import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "empire state building",
    description: "One of the most famous sky scrapers in the world",
    imageURL:
      "https://aws-tiqets-cdn.imgix.net/images/content/1e74453a4d2c45f9becb39add27f2dff.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=b720cbf5ab86e1786ee7bd2a6b4f26be&w=400&h=320&dpr=2.625",
    address: " 20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484995,
      long: -73.9882267
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "empire state building",
    description: "One of the most famous sky scrapers in the world",
    imageURL:
      "https://aws-tiqets-cdn.imgix.net/images/content/1e74453a4d2c45f9becb39add27f2dff.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=b720cbf5ab86e1786ee7bd2a6b4f26be&w=400&h=320&dpr=2.625",
    address: " 20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484995,
      long: -73.9882267
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;