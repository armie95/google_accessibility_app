import React from 'react'
import Screen from './../Screen';
import Clock from './../Clock';
import TakeMeHomeCard from './../TakeMeHomeCard';

const TakeMeHomePage = () => {
    return (
        <Screen>
            <Clock />
            <TakeMeHomeCard />
            <p>Emergency Contact</p>
        </Screen>
    )
}

export default TakeMeHomePage