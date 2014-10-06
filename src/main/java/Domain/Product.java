
package Domain;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.validation.constraints.NotNull;

@Entity
@NamedQuery(name = "Product.getAllProducts", query = "SELECT pro FROM Product pro")
public class Product implements Serializable 
{
    @Id
    @GeneratedValue
    private int id;
    
    @NotNull
    private String name;
    @NotNull
    private double price;
    private String description;
    @NotNull
    private boolean instock;
   
    @ManyToOne
    private User addBy;

    public Product() {
    }

    public Product(int id, String name, double price, String description, boolean instock, User addBy) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.instock = instock;
        this.addBy = addBy;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isInstock() {
        return instock;
    }

    public void setInstock(boolean instock) {
        this.instock = instock;
    }

    public User getAddBy() {
        return addBy;
    }

    public void setAddBy(User addBy) {
        this.addBy = addBy;
    }

    
    
    
    
}
