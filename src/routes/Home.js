import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Navigator
} from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = require('Dimensions').get('window');
import ImageCover from '../components/ImageCover';
import TextIcon from '../components/TextIcon'

export default class  Home extends Component {
  //自定义导航栏
  static renderNavigationBar(props) {
    return (
      <View style={[styles.navbarStyle, 
                    {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'pink'}]}>
        <TouchableOpacity onPress={()=>{}}>
          <Image source={require('../img/search.png')} style={styles.icon}></Image>
        </TouchableOpacity>
        <Image source={require('../img/girlonly.png')} style={[styles.icon, {width: 80}]}></Image>
        <TouchableOpacity onPress={()=>{}}>
          <Image source={require("../img/shoppingcar.png")} style={styles.icon}></Image>
        </TouchableOpacity>
      </View>
    );
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Swiper autoplay={true} height={height / 4 + 10}>
          <ImageCover />
          <ImageCover />
          <ImageCover />
          <ImageCover />
        </Swiper>
        <Image source={require("../img/card_border.png")} style={styles.recommendedShopBackground}>
          <TextIcon></TextIcon>
          <TextIcon></TextIcon>   
          <TextIcon></TextIcon>   
          <TextIcon></TextIcon>      
        </Image>
        <Image source={require("../img/new_goods_top_border.png")} style={styles.imageTitle}></Image>
        <ImageCover />
        <ImageCover />
        <ImageCover />  
      </ScrollView>
    )
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbarStyle: {
    position: 'absolute',
    top: 0,
    height: Navigator.NavigationBar.Styles.General.TotalNavHeight, 
    width: width, 
    backgroundColor:'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  recommendedShopBackground: {
    flexDirection: 'row', 
    width:width, 
    height: height / 4.5,
    justifyContent: 'space-around',
    resizeMode: 'stretch',
    paddingTop: 40,
  },
  imageTitle: {
    width: width,
    resizeMode: 'contain'
  },
  icon: {
    width: 23,
    height: 23,
    marginHorizontal: 5,
    resizeMode: 'stretch'
  }

});

