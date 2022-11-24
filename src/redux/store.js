import { configureStore } from "@reduxjs/toolkit";
import { addBannerReducer, allBannersReducer, deleteBannerReducer } from "./reducers/bannerReducer";
import { allCategoriesReducer, newCategoryReducer } from "./reducers/categoryReducer";
import { chartReducer, chartSalesReducer, ordersPerDayReducer, salePerDayReducer } from "./reducers/chartReducer";
import { allNurseriesReducer } from "./reducers/nurseryReducer";
import { allOrdersReducer, orderDetailsReducer, orderReducer,  usersOrdersReducer} from "./reducers/orderReducer";
import { newProductReducer, productDetailsReducer, productReducer, productsReducer } from "./reducers/productReducers";
import { ordersTicketReducer } from "./reducers/ticketsReducer";
import { allUsersReducer, userReducer, verifyUserReducer, userDetailsReducer } from "./reducers/userReducer";

const Store = configureStore({
  reducer: {
    products: productsReducer,
     productDetails: productDetailsReducer,
     user: userReducer,
     product : productReducer,
     newProduct : newProductReducer,
     verifyUser : verifyUserReducer,
     addBanner : addBannerReducer,
     banners : allBannersReducer,
     deleteBanner: deleteBannerReducer,
     allOrders : allOrdersReducer,
     allNurseries : allNurseriesReducer,
     orderDetails : orderDetailsReducer,
     ordersTicket : ordersTicketReducer,
     allCategories : allCategoriesReducer,
     newCategory : newCategoryReducer,
    // categoryDetails : categoryDetailsReducer,
    // category : categoryReducer,
     allUsers : allUsersReducer,
     order : orderReducer,
     chart:chartReducer,
     chartSales:chartSalesReducer,
     ordersPerDay:ordersPerDayReducer,
     salePerDay:salePerDayReducer,
    userDetails : userDetailsReducer,
    usersOrders : usersOrdersReducer,
    // forgotPassword : forgotPasswordReducer,
    // deleteCart : deleteCartItemReducer,
    // shippingInfo : saveShippingReducer,
    // shippingDetails : shippingDetails,
    // newOrder : newOrderReducer,
    // myOrders : myOrdersReducer,
    // orderDetails : orderDetailsReducer,
    // newReview : newReviewReducer,
    // productReviews : productReviewsReducer,
    // reviews : reviewReducer,
    
    
    // newWishlist :newWishlistReducer,
    // myWishlist : myWishlistReducer,
    // deleteWishlist : deleteWishlistItemReducer,


    
    
  },

  
  
});

export default Store;