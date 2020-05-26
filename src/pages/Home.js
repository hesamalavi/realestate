import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="properties" subtitle="properties with a ...">
                    <Link to="/properties" className="btn-primary">
                        Our Properties
                    </Link>
                </Banner>
            </Hero>
            <Services />
        </>
    );
}
