========================1-CREATE PROJECT==========================
>> react-native init react_native_basic --version 0.50.4

========================2-CHECK VERSIONS==========================
D:\Testing\react_native_basic>react-native info
Scanning folders for symlinks in D:\Testing\react_native_basic\node_modules (33ms)

Environment:
  OS: Windows 8.1
  Node: 5.0.0
  Yarn: 1.3.2
  npm: 4.6.1
  Watchman: Not Found
  Xcode: N/A
  Android Studio: Version  2.1.0.0 AI-143.2821654

Packages: (wanted => installed)
  react: 16.0.0 => 16.0.0
  react-native: 0.50.4 => 0.50.4

========================3-GITHUB==========================
>> git init
>> git status
>> git commit -m "ReactNative - Initial commit"
>> git log
>> git branch
>> git remote add origin https://github.com/Naveen7892/react_native_basic.git
>> git push -u origin master

========================4-INSTALL NATIVE BASE (UI COMPONENTS FOR REACT NATIVE)==========================
>> npm install native-base --save

>> react-native link

========================5-(RE)INSTALL REACT-NAVIGATION (AFTER I GET ERROR)==========================
>> npm uninstall --save react-navigation
>> npm install --save react-navigation@v1.0.0-beta.21

========================6-RELOAD APP ON REAL DEVICE FOR DEBUGGING==========================
>> adb shell input keyevent 82
(Opens options list in mobile)

========================7-INSTALL ICONS==========================
>>npm install react-native-vector-icons --save
>>react-native link react-native-vector-icons

to use in code:
import FontAwesome from 'react-native-vector-icons/FontAwesome';
<Icon name="user-o" />
========================8-==========================