# README



# Harmonic

Harmonic is a e-commerce website, allowing users to navigate through and find almost any musical gear that they want. 

___

[Live Site](https://harmonic-aa.herokuapp.com/#/) • [Key Features](https://github.com/jmejia247/Harmonic/blob/main/README.md#key-features) • [Software Used](https://github.com/jmejia247/Harmonic/blob/main/README.md#software-used)

___

# Key Features
  
  ### Demo User 
   Accessed through a modal, users can sign in with a demo user to navigate the site and access log in only features.
    
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

# Software Used

  * Ruby
  * Ruby on Rails
  * Node.js
  * PostgresQl
  * React
  * redux
  * AWS

___
