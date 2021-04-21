// Prefix Verb   URI Pattern                                                                              Controller#Action
//                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
//                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
//               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
//                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
//       api_listing_reviews POST   /api/listings/:listing_id/reviews(.:format)                                              api/reviews#create {:format=>:json}
//        api_listing_review PATCH  /api/listings/:listing_id/reviews/:id(.:format)                                          api/reviews#update {:format=>:json}
//                           PUT    /api/listings/:listing_id/reviews/:id(.:format)                                          api/reviews#update {:format=>:json}
//              api_listings GET    /api/listings(.:format)                                                                  api/listings#index {:format=>:json}
//               api_listing GET    /api/listings/:id(.:format)                                                              api/listings#show {:format=>:json}
//               api_reviews GET    /api/reviews(.:format)                                                                   api/reviews#index {:format=>:json}
//                api_review GET    /api/reviews/:id(.:format)                                                               api/reviews#show {:format=>:json}
//                           DELETE /api/reviews/:id(.:format)                                                               api/reviews#destroy {:format=>:json}
//          api_search_index GET    /api/search(.:format)                                                                    api/search#index {:format=>:json}
//                 api_carts GET    /api/carts(.:format)                                                                     api/carts#index {:format=>:json}
//                           POST   /api/carts(.:format)                                                                     api/carts#create {:format=>:json}
//                  api_cart DELETE /api/carts/:id(.:format)                                                                 api/carts#destroy {:format=>:json}
//                      root GET    /                                                                                        static_pages#root
//        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
// rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
//        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
// update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
//      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create


export const fetchCart = () => {
  return $.ajax({
    method: "GET",
    url: `/api/carts`,
  });
};

export const post_cart = (cart) => {
  return $.ajax({
    method: "POST",
    url: `/api/carts`,
    data: { cart },
  });
};

export const delete_cart = (cart) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/carts/${cart.id}`,
    data: { cart }
  });
};
