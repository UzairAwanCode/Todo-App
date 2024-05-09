# Setting up our project
We begin with absolute imports its convention these days:
1. npm add babel-plugin-module-resolver
2. update tsconfig file and babel.config
3. npm add @shopify/restyle
4. create utils/theme/colors.ts, index.ts, text-variants.ts
5. write style in text-variant.ts, colors.ts
6. define theme in index.ts

# React Navigations
1. npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack react-native-screens react-native-safe-area-context
2. define types in navigation>types.tsx and setup navigation for Home, today, completed, category
3. we will now setup global store for that we use zustand: npm add zustand @react-native-async-storage/async-storage
4. Design Register, Login Screen Ui
5. For setting up user authentaction in frontend we install two packages: 
npm add axios swr 
npm install expo-secure-store(to secure token)
6. In services>config.ts we define global axios instance
7. Write apis in services> api.ts
8.
9.
10.
11.
12.
13.
14.
15.
16.
