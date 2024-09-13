
import GreekSalad from '../../../icons_assets/greek salad.jpg'
import Bruschetta from '../../../icons_assets/bruchetta.svg'
import LemonDessert from '../../../icons_assets/lemon dessert.jpg'
import SpecialCard from './card-info/SpecialCard'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';




export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}