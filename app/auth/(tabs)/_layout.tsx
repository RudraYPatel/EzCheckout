import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Offers',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
}

// import { View, Text, StyleSheet, Image, Pressable } from "react-native";
// import React, { useEffect } from "react";
// import { Drawer } from "expo-router/drawer";
 
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import { Feather, AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
// import { useRouter, usePathname } from "expo-router";
 
// const CustomDrawerContent = (props: any) => {
//   const pathname = usePathname();
//   const router = useRouter();
 
//   useEffect(() => {
//     console.log(pathname);
//   }, [pathname]);
 
//   const handleSignOut = () => {
//     console.log("User signed out");
 
//     router.replace('/');
//   };
 
//   return (
//     <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
//       <View style={styles.userInfoWrapper}>
//         <Image
//           source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
//           width={80}
//           height={80}
//           style={styles.userImg}
//         />
//         <View style={styles.userDetailsWrapper}>
//           <Text style={styles.userName}>Smit</Text>
//           <Text style={styles.userEmail}>JohnDoe54@gmail.com</Text>
//         </View>
//       </View>
//       <DrawerItem
//         icon={({ color, size }) => (
//           <Feather
//             name="list"
//             size={size}
//             color={pathname == "/Lab3" ? "#fff" : "#000"}
//           />
//         )}
//         label={"APP"}
//         labelStyle={[
//           styles.navItemLabel,
//           { color: pathname == "/Lab3" ? "#fff" : "#000" },
//         ]}
//         style={{ backgroundColor: pathname == "/Lab3" ? "#333" : "#fff" }}
//         onPress={() => {
//           router.push('/auth/Lab3');
//         }}
//       />
//       <DrawerItem
//         icon={({ color, size }) => (
//           <AntDesign
//             name="user"
//             size={size}
//             color={pathname == "/profile" ? "#fff" : "#000"}
//           />
//         )}
//         label={"Profile"}
//         labelStyle={[
//           styles.navItemLabel,
//           { color: pathname == "/profile" ? "#fff" : "#000" },
//         ]}
//         style={{ backgroundColor: pathname == "/profile" ? "#333" : "#fff" }}
//         onPress={() => {
//           router.push('/auth/profile');
//         }}
//       />
//       <DrawerItem
//         icon={({ color, size }) => (
//           <MaterialIcons
//             name="favorite-outline"
//             size={size}
//             color={pathname == "/favourites" ? "#fff" : "#000"}
//           />
//         )}
//         label={"Favourites"}
//         labelStyle={[
//           styles.navItemLabel,
//           { color: pathname == "/favourites" ? "#fff" : "#000" },
//         ]}
//         style={{ backgroundColor: pathname == "/favourites" ? "#333" : "#fff" }}
//         onPress={() => {
//           router.push('/auth/contact');
//         }}
//       />
//       <DrawerItem
//         icon={({ color, size }) => (
//           <Ionicons
//             name="settings-outline"
//             size={size}
//             color={pathname == "/settings" ? "#fff" : "#000"}
//           />
//         )}
//         label={"Settings"}
//         labelStyle={[
//           styles.navItemLabel,
//           { color: pathname == "app/auth/settings" ? "#fff" : "#000" },
//         ]}
//         style={{ backgroundColor: pathname == "app/auth/settings"? "#333" : "#fff" }}
//         onPress={() => {
//           router.push('/auth/contact');
//         }}
//       />
//       <View style={styles.bottomLogout}>
//         <Pressable onPress={handleSignOut} style={styles.logoutButton}>
//           <Ionicons name="log-out-outline" size={24} color="#000" />
//           <Text style={styles.navItemLabel}>Sign Out</Text>
//         </Pressable>
//       </View>
//     </DrawerContentScrollView>
//   );
// };
 
// export default function Layout() {
//   return (
//     <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ title: '' }}>
//       <Drawer.Screen name="(tabs)" options={{ title: "" }} />
//       {/* <Drawer.Screen name="feed" options={{ headerShown: true }} /> */}
//       {/* <Drawer.Screen name="profile" options={{ headerShown: true }} /> */}
//       {/* <Drawer.Screen name="favourites" options={{ headerShown: true }} /> */}
//       {/* <Drawer.Screen name="settings" options={{ headerShown: true }} /> */}
//       {/* <Drawer.Screen name="login" options={{ headerShown: false }} /> */}
//     </Drawer>
//   );
// }
 
// const styles = StyleSheet.create({
//   navItemLabel: {
//     marginLeft: 15,
//     fontSize: 18,
//   },
//   userInfoWrapper: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//     marginBottom: 10,
//   },
//   userImg: {
//     borderRadius: 40,
//   },
//   userDetailsWrapper: {
//     marginTop: 25,
//     marginLeft: 10,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   userEmail: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     textDecorationLine: 'underline',
//   },
//   bottomLogout: {
//     marginTop: 'auto',
//     marginBottom: 20,
//     marginLeft: 10,
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });