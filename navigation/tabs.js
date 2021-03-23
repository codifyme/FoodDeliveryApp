import React from 'react';
import {
    View, Image, TouchableOpacity
} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"
import {Home} from "../screens";
import {COLORS, icons}from "../constants"

const Tab=createBottomTabNavigator();
const TabBarCustomButton=({accessibilitiyState , children, onPress})=>{
    var isSelected=accessibilitiyState.isSelected
    If(isSelected){
        return(

        )
    } else{
        return(
            
        )
    }

}

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    backgroundColor:"transparent",
                    elevation:0
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ 
                    tabBarIcons:({focused})=>(
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width:25,
                                heigth:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}

                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{ 
                    tabBarIcons:({focused})=>(
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width:25,
                                heigth:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}

                        />
                    ),
                    tabBarButton:(props)=>(
                        <TabBarCustomButton{...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Like"
                component={Home}
                options={{ 
                    tabBarIcons:({focused})=>(
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width:25,
                                heigth:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}

                        />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={Home}
                options={{ 
                    tabBarIcons:({focused})=>(
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width:25,
                                heigth:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}

                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs;