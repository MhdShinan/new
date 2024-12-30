import React from 'react';
import { Card } from 'react-bootstrap';
import Unv1 from '../assets/images/unv1.png';
import Unv2 from '../assets/images/unv2.jpg';
import Unv3 from '../assets/images/unv3.jpg';
import Unv4 from '../assets/images/unv4.png';
import Unv5 from '../assets/images/unv5.png';
import Unv6 from '../assets/images/unv6.png';

export default function ProductsGrid() {
  const products = [
{
      title: "NVR Camera's",
      image: Unv1,
      description: "Lorem ipsum"
    },
    {
      title: "DVR Camera's",
      image: Unv2,
      description: "Lorem ipsum"
    },
    {
      title: "Analog Camera's",
      image: Unv3,
      description: "Lorem ipsum"
    },
    {
      title: "IP Camera's",
      image: Unv4,
      description: "Lorem ipsum"
    },
    {
      title: "Wifi Camera's",
      image: Unv5,
      description: "Lorem ipsum"
    },
    {
      title: "Switches",
      image: Unv6,
      description: "Lorem ipsum"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-8 "
            />
            <Card.Body className="bg-[#005880] text-white py-2 px-4">
              <Card.Title className="text-lg font-medium">{product.title}</Card.Title>
              <Card.Text className="text-gray-600">{product.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
