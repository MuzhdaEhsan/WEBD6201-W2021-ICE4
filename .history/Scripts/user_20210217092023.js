"use strict";
// user Class

((core)=>{
  class User {
    // getters and setters
    get DisplayName() 
    {
      return this.m_displayName;
    }
  
    set DisplayName(value) 
    {
      this.m_displayName = value;
    }
  
    get EmailAddress() 
    {
      return this.m_emailAddress;
    }
  
    set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }
  
    get Username() 
    {
      return this.m_username;
    }
  
    set Username(value) 
    {
      this.m_username = value;
    }

    get Password() 
    {
      return this.m_password;
    }
  
    set Password(value) 
    {
      this.m_password = value;
    }
  
    // constructor

    /**
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    constructor(DisplayName = "", emailAddress = "", username = "", password="") 
    {
      this.DisplayName = fullName;
      this.EmailAddress = contactNumber;
      this.Username = emailAddress;
      this.Password = password;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @returns {string}
     */
    toString() 
    {
      return `Display Name     : ${this.DisplayName} \nEmail Address: ${this.EmailAddress}\nPassword : ${this.Password}`;
    }

    /**
     * This method returns a JSON object made up of the properties of the user class
     *
     * @returns {Object}
     */
    toJSON()
    {
      return {
        "DisplayName": this.DisplayName,
        "emailAddress": this.EmailAddress,
        "Username": this.Username
      }
    }

    /**
     *  This method takes a comma-separated data string and assigns the values to the Contact class properties
     * @param {object} data 
     */
    fromJSON(data)
    {
      this.DisplayName = data.DisplayName;
      this.EmailAddress = data.EmailAddress;
      this.Username = data.Username;
      this.Password = data.Password;
    }

    /**
     * This method converts the Contact into a comma-separated value string
     *
     * @returns {string}
     */
    serialize()
    {
      if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
      {
        return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
      }
      else 
      {
        console.error("One or more properties of the User is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the Contact class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data)
    {
      let propertyArray = data.split(",");
      this.FullName = propertyArray[0];
      this.ContactNumber = propertyArray[1];
      this.EmailAddress = propertyArray[2];
    }
  }

  core.Contact = Contact;

})(core || (core={}));


