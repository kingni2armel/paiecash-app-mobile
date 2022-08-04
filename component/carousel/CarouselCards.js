import React from 'react'
import { View,TouchableOpacity,Text } from "react-native"

import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from '../../data'

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View  >
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
            width: 10,
            height: 10,
            top:0,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#25965C'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
      />
      <Carousel
        sliderHeight={20}
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
     
    </View>
  )
}


export default CarouselCards