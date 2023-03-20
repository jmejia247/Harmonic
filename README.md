# README

<p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-01-29%20at%209.50.37%20AM.png"></p>

# <div align="center">Harmonic</div>

<div align="center"><p>Harmonic is a e-commerce website, allowing users to navigate through and find almost any musical gear that they want.</p></div>

___

[Live Site](https://harmonic-aa.herokuapp.com/#/) • [Key Features](https://github.com/jmejia247/Harmonic/blob/main/README.md#key-features) • [Software Used](https://github.com/jmejia247/Harmonic/blob/main/README.md#software-used)

___

# Key Features
  
  ### Demo User 
   Accessed through a modal, users can sign in with a demo user to navigate the site and access log in only features.
   
   <p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-01-29%20at%2010.33.46%20AM.png"></p>
    
```javascript 
        return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          <section className="modal-heading">
            <h1
              className={
                modal === "signup" ? "selected-form" : "nonselected-form"
              }
              onClick={() => openModal("signup")}
            >
              Sign Up
            </h1>
            <h1
              className={
                modal === "login" ? "selected-form" : "nonselected-form"
              }
              onClick={() => openModal("login")}
            >
              Log In
            </h1>
          </section>
          {component}
        </div>
      </div>
    );
```



___

  ### Search feature
  Search for the websites inventory of used gear to find that dream gear!

<p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-04-26%20at%207.23.14%20PM.png"></p>

```javascript
      return (
          <div
            className={
              this.props.modal === "searchResults"
                ? "search-modal-background"
                : "empty"
            }
            onClick={this.props.closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={
                this.props.modal === "searchResults"
                  ? "search-modal-background-child"
                  : "empty"
              }
            >
              <div className="search">
                <div className="search-bar-components">
                  <input
                    type="search"
                    className="search-bar1"
                    onChange={this.update}
                    onClick={() => this.modal()}
                  />
                  <i
                    className="fas fa-search fa-rotate-90"
                    id="search-button"
                  ></i>
                </div>
                <SearchModal />
              </div>
            </div>
          </div>
        );
    }
```

___

  ### Listings and Reviews
  users can view listings and their reviews, as well as create, delete, update the reviews.

<p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-04-26%20at%207.25.30%20PM.png"></p>

<p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-04-26%20at%207.25.05%20PM.png"></p>

<p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-04-26%20at%207.25.39%20PM.png"></p>

```javascript
      return (
          <div className="reviews">
            <ReviewModal listing={this.props.listing} user={this.props.userId} review={this.state.rev}/>
            <h3>Reviews of the {`${this.props.brand} ${this.props.model}`}</h3>

            <button className='create-review' onClick={this.logic}>Write a product review</button>
            <div className='review-content'>
                {rv.length === 0 ? <p className='no-reviews'>There are no reviews for this product :(</p> : rv}
            </div>
          </div>
        );

```

___

  ### Shopping Cart
  Users can add that dream gear to their shopping cart and view them or remove them if they decide its not that dream gear they have been looking for :(

<p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-04-26%20at%207.28.03%20PM.png"></p>

```ruby
    def destroy
        @cart = Cart.where(user_id: current_user.id).where(listing_id: cart_params[:listing_id])
        if @cart
            @cart[0].destroy
            @carts = Cart.where(user_id: current_user.id)
            render :index
        else
            render json: {error: 'item could not be found'}
        end
    end

```

___

  ### Listings
  a quick view of some listings on the site as well as some gear that deserves more attention
  
<p align="center"> <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-04-26%20at%207.28.58%20PM.png"></p>

```javascript
    <div className="listing">
        <img src={this.props.listing.photoUrl} alt="Gibson" className="listing-img" />
        <div className='listing-content'>  
          <h3>{this.props.listing.brand}</h3>
          <h3>{this.props.listing.model}</h3>
          <p>${this.props.listing.price}</p>
        </div>
      </div>
```

___


# Software Used

  * Ruby
  * Ruby on Rails
  * Node.js
  * PostgresQl
  * React
  * redux
  * AWS

___
