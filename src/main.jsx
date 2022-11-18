////////////////////////////////////////////////////////////////////////////
//  Nhân quả không nợ chúng ta thứ gì, cho nên xin đừng oán giận   ////////
//                                   _
//                                _oo0oo_
//                               o8888888o
//                               88” . “88
//                               (| -_- |)
//                               O\  =  /O
//                            ____/'---'\____
//                          .'  \\|     |//  '.
//                         /  \\|||  :  |||//  \
//                        /  _||||| -:- |||||_  \
//                        |   | \\\  -  /'| |   |
//                        | \_|  `\`---'//  |_/ |
//                        \  .-\__ `-. -'__/-.  /
//                      ___`. .'  /--.--\  `. . '___
//                   ."" '<  `.___\_<|>_/___.'  _> \"".
//                  | | :  `- \`. ;`. _/; .'/  /  .' ; |
//                  \  \ `-.   \_\_`. _.' _/_/  -' _.' /
//===================`-.`___`-.__\ \___   /__.-'_.'_.-'===================//
//                                `=--=-'

// Đức Phật nơi đây phù hộ code con chạy không Bugs. Nam Mô A Di Đà Phật.

//
//                      _.-/`)
//                     // / / )
//                  .=// / / / )
//                 //`/ / / / /
//                // /    `  /
//               ||         /
//              ||         /
//               \\       /
//                ))    .'
//               //     /
//                     /

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store, persistor } from "./app/redux/store";

import setupInterceptors from "./app/services/axios/setupInterceptors";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import app from "./app/services/firebase/firebaseConfig";
import "./main.css";
import { PersistGate } from "redux-persist/integration/react";

// import '/assets/theme_assets/sass/style.scss';
// import '/assets/vendor_assets/css/bootstrap/bootstrap.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
);

setupInterceptors(store);
