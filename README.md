# README

<p align="center">  <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-01-29%20at%209.50.37%20AM.png"> </p>

# <div align="center">Harmonic</div>

<div align="center"><p>Harmonic is a e-commerce website, allowing users to navigate through and find almost any musical gear that they want.</p></div>

___

[Live Site](https://harmonic-aa.herokuapp.com/#/) • [Key Features](https://github.com/jmejia247/Harmonic/blob/main/README.md#key-features) • [Software Used](https://github.com/jmejia247/Harmonic/blob/main/README.md#software-used)

___

# Key Features
  
  ### Demo User 
   Accessed through a modal, users can sign in with a demo user to navigate the site and access log in only features.
   
   <p align="center">  <img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-01-29%20at%2010.33.46%20AM.png"> </p>
    
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
