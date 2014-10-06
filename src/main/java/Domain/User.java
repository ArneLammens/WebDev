package Domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@NamedQuery(name = "user.getUser", query = "SELECT us FROM User us WHERE us.email =:email AND us.password =:password")
@Table(name="person")
public class User implements Serializable 
{
    @Id
    @GeneratedValue
    private int id;
//    person inf
    private String name;
    private String lastname;
    
//    login data
    @NotNull
    @Column(unique=true)
    private String email;
    @NotNull
    private String password;
    
//    address
    private int zipcode;
    private int homeNumber;
    private String street;
    private String municipality;

    public User() {
    }

    public User( String name, String lastname, String email, String password, int zipcode, int homeNumber, String street, String municipality) {
        
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.zipcode = zipcode;
        this.homeNumber = homeNumber;
        this.street = street;
        this.municipality = municipality;
    }

    
    
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getZipcode() {
        return zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
    }

    public int getHomeNumber() {
        return homeNumber;
    }

    public void setHomeNumber(int homeNumber) {
        this.homeNumber = homeNumber;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getMunicipality() {
        return municipality;
    }

    public void setMunicipality(String municipality) {
        this.municipality = municipality;
    }
    
    
}
