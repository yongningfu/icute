/**
 * 官方提供的导航条一般够用, 但是开发总是会遇到各种需求
 * 
 * 自定义导航条 在ScrollableTabView 组件中用renderTabBar属性(function)
 * 返回一个我们自定义的tabbar组件即可
 * 
 * 自定义导航条的demo
 * 首先这里必须知道，scroll-tab-bar是用 数字数组进行tab标识的
 * 比如 一个有tabbarz组成为 '首页' '阅读' '我的' 那么它们对应的tabs数组为 [0, 1, 2]
 * 即 '首页' 在 scroll-tab-bar中的tab标识为0
 * 
 * 自定义的tabbar会被自动注入4个属性
 * 
 * goToPage   函数 用于实现tab跳转 参数为 数字 比如跳转到 '阅读' 就调用 goToPage(1)
 * tabs       即 数组 值为 tabLabel 所有本实验中它等于 ["Tab #1", "Tab #2", "Tab #3"]
 * activeTab  当前选中的tab 也是数字 0 1 2中的一个 
 * ref        scroll-tab-view的引用
 * 
 * 当然 当一个tab被选中的时候，那么会显示它对应的page
 * 默认的情况下 Scrolltabbar的第一个激活的是 activiTab === 0  
 */


// 为了更加简单的说明 这里没用到 传递过来的tabs 在模拟qqtabbar里面用的了
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';


export default class CustomScrollTabBar extends Component {

  _getTabStyle = (index) => {
    return this.props.activeTab == index ? Styles.activeTab : Styles.normalTab;
  }

  render() {
    return (
      <View style={Styles.tabbar}>
        <TouchableOpacity>
          <Image source={require('../img/search.png')} style={[Styles.icon, {marginLeft: 5}]}/>
        </TouchableOpacity>
        <View style={Styles.tabContain}>
          {/*从下面 可以清楚的看到 0 1 2的作用*/}
            <TouchableOpacity onPress={() => {this.props.goToPage(0)}}>
              <Text style={this._getTabStyle(0)}>首页</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.goToPage(1)}}>
              <Text style={[this._getTabStyle(1), {marginHorizontal: 10}]}>阅读</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.goToPage(2)}}>
              <Text style={this._getTabStyle(2)}>关于</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity source={require('../img/shoppingcar.png')}>
          <Image source={require('../img/shoppingcar.png')} style={[Styles.icon, {marginRight: 5}]} />
        </TouchableOpacity>
      </View>
    )
  }
}


const Styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Navigator.NavigationBar.Styles.General.NavBarHeight,
    backgroundColor: 'pink',
  },
  tabContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch'
  },
  activeTab: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 18,
    borderWidth: StyleSheet.hairlineWidth,
  },
  normalTab: {
    fontSize: 18,
    color: 'white',
  }
});














